/**
 * 统一音频管理器：
 * 1. 优先使用 fetch + Web Audio API 下载并解码音频，点击时直接播放内存中的 AudioBuffer；
 * 2. 为了兼容未配置 CORS 的媒体域名、iOS Safari 和微信浏览器，自动回退到 HTMLAudioElement；
 * 3. AudioContext 只在用户手势或预加载时惰性创建，页面卸载前不重复创建；
 * 4. 限制并发下载与缓存数量，避免占用过多内存。
 */
export interface AudioPlaybackHandlers {
  onProgress?: (percent: number) => void;
  onEnded?: () => void;
  onError?: () => void;
}

type AudioContextConstructor = typeof AudioContext;

const getAudioContextConstructor = (): AudioContextConstructor | null => {
  if (typeof window === 'undefined') return null;
  const legacyWindow = window as typeof window & {
    webkitAudioContext?: AudioContextConstructor;
  };
  return window.AudioContext ?? legacyWindow.webkitAudioContext ?? null;
};

const decodeAudioBuffer = (
  context: AudioContext,
  data: ArrayBuffer
): Promise<AudioBuffer> =>
  new Promise<AudioBuffer>((resolve, reject) => {
    const result = context.decodeAudioData(data, resolve, reject);
    // 新版浏览器同时支持 Promise 返回值，避免回调未触发时一直等待
    if (result && typeof result.then === 'function') {
      result.then(resolve, reject);
    }
  });

class AudioManager {
  private context: AudioContext | null = null;

  private decodedBuffers = new Map<string, AudioBuffer>();
  private pendingBuffers = new Map<string, Promise<AudioBuffer | null>>();

  private htmlAudios = new Map<string, HTMLAudioElement>();
  private pendingHtml = new Map<string, Promise<HTMLAudioElement | null>>();

  private source: AudioBufferSourceNode | null = null;
  private htmlAudio: HTMLAudioElement | null = null;
  private progressTimer: ReturnType<typeof setInterval> | null = null;
  private playToken = 0;

  /** 首次 fetch 失败（通常是未配置 CORS）后，本次会话统一走 HTMLAudio */
  private fetchDisabled = false;

  private activeDownloads = 0;
  private downloadQueue: Array<() => void> = [];

  private readonly maxConcurrentDownloads = 3;
  private readonly maxDecodedBuffers = 48;
  private readonly maxHtmlAudios = 24;

  private getContext(): AudioContext | null {
    if (this.context) return this.context;

    const Constructor = getAudioContextConstructor();
    if (!Constructor) return null;

    try {
      this.context = new Constructor();
    } catch {
      return null;
    }

    return this.context;
  }

  private async acquireDownloadSlot(): Promise<void> {
    if (this.activeDownloads < this.maxConcurrentDownloads) {
      this.activeDownloads += 1;
      return;
    }

    await new Promise<void>(resolve => {
      this.downloadQueue.push(resolve);
    });
  }

  private releaseDownloadSlot(): void {
    const next = this.downloadQueue.shift();
    if (next) {
      next();
      return;
    }
    this.activeDownloads = Math.max(0, this.activeDownloads - 1);
  }

  private cacheDecodedBuffer(url: string, buffer: AudioBuffer): void {
    this.decodedBuffers.set(url, buffer);

    while (this.decodedBuffers.size > this.maxDecodedBuffers) {
      const oldest = this.decodedBuffers.keys().next().value;
      if (!oldest || oldest === url) break;
      this.decodedBuffers.delete(oldest);
    }
  }

  private cacheHtmlAudio(url: string, audio: HTMLAudioElement): void {
    this.htmlAudios.set(url, audio);

    while (this.htmlAudios.size > this.maxHtmlAudios) {
      const oldest = this.htmlAudios.keys().next().value;
      if (!oldest || oldest === url) break;

      const element = this.htmlAudios.get(oldest);
      if (element && element !== this.htmlAudio) {
        element.pause();
        element.removeAttribute('src');
        element.load();
        this.htmlAudios.delete(oldest);
      } else {
        break;
      }
    }
  }

  /** 在用户手势中调用，解锁移动端 AudioContext */
  unlock = async (): Promise<void> => {
    const context = this.getContext();
    if (!context) return;

    if (context.state === 'suspended') {
      try {
        await context.resume();
      } catch {
        // 某些浏览器需要更明确的用户手势，交由 HTMLAudio 兜底
      }
    }
  };

  /** 预加载并解码单个音频；失败时自动准备 HTMLAudio 兜底 */
  preload = async (url: string): Promise<AudioBuffer | null> => {
    const decoded = this.decodedBuffers.get(url);
    if (decoded) return decoded;

    const pending = this.pendingBuffers.get(url);
    if (pending) return pending;

    const task = (async (): Promise<AudioBuffer | null> => {
      if (this.fetchDisabled) {
        await this.prepareHtmlAudio(url);
        return null;
      }

      await this.acquireDownloadSlot();

      try {
        // 排队期间可能已有其他请求确认 CORS 不可用，直接走 HTMLAudio
        if (this.fetchDisabled) {
          await this.prepareHtmlAudio(url);
          return null;
        }

        const context = this.getContext();
        if (!context) throw new Error('AudioContext unavailable');

        const response = await fetch(url, {
          mode: 'cors',
          credentials: 'omit',
        });

        if (!response.ok) {
          throw new Error(`Audio request failed: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const buffer = await decodeAudioBuffer(context, arrayBuffer);
        this.cacheDecodedBuffer(url, buffer);
        return buffer;
      } catch {
        // 典型原因：媒体域名未配置 Access-Control-Allow-Origin
        this.fetchDisabled = true;
        await this.prepareHtmlAudio(url);
        return null;
      } finally {
        this.releaseDownloadSlot();
      }
    })();

    this.pendingBuffers.set(url, task);

    try {
      return await task;
    } finally {
      this.pendingBuffers.delete(url);
    }
  };

  private prepareHtmlAudio(url: string): Promise<HTMLAudioElement | null> {
    const cached = this.htmlAudios.get(url);
    if (cached) return Promise.resolve(cached);

    const pending = this.pendingHtml.get(url);
    if (pending) return pending;

    const task = new Promise<HTMLAudioElement | null>(resolve => {
      if (typeof Audio === 'undefined') {
        resolve(null);
        return;
      }

      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = url;

      let settled = false;
      let timer: ReturnType<typeof setTimeout> | null = null;

      const cleanup = () => {
        audio.oncanplaythrough = null;
        audio.onloadeddata = null;
        audio.onerror = null;
        if (timer) clearTimeout(timer);
      };

      const finish = (ok: boolean) => {
        if (settled) return;
        settled = true;
        cleanup();

        if (ok) {
          this.cacheHtmlAudio(url, audio);
          resolve(audio);
        } else {
          resolve(null);
        }
      };

      audio.oncanplaythrough = () => finish(true);
      audio.onloadeddata = () => finish(true);
      audio.onerror = () => finish(false);
      // 移动端网络较慢时不无限等待，保留元素，真正播放时再继续加载
      timer = setTimeout(() => finish(true), 6000);
      audio.load();
    });

    this.pendingHtml.set(url, task);
    void task.finally(() => this.pendingHtml.delete(url));
    return task;
  }

  private clearProgressTimer(): void {
    if (this.progressTimer) {
      clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
  }

  private startProgressTimer(
    startedAt: number,
    duration: number,
    onProgress?: (percent: number) => void
  ): void {
    this.clearProgressTimer();
    if (!onProgress) return;

    this.progressTimer = setInterval(() => {
      if (!this.context) return;
      const elapsed = this.context.currentTime - startedAt;
      const percent = Math.min(99.5, Math.max(0, (elapsed / duration) * 100));
      onProgress(percent);
    }, 100);
  }

  private stopPlayback(): void {
    this.clearProgressTimer();

    if (this.source) {
      try {
        this.source.onended = null;
        this.source.stop();
      } catch {
        // 已经停止时忽略
      }
      try {
        this.source.disconnect();
      } catch {
        // 忽略断开连接异常
      }
      this.source = null;
    }

    if (this.htmlAudio) {
      const audio = this.htmlAudio;
      audio.onended = null;
      audio.onerror = null;
      audio.ontimeupdate = null;
      audio.pause();
      audio.currentTime = 0;
      this.htmlAudio = null;
    }
  }

  stop = (): void => {
    this.playToken += 1;
    this.stopPlayback();
  };

  play = async (
    url: string,
    handlers: AudioPlaybackHandlers = {}
  ): Promise<void> => {
    const token = ++this.playToken;
    this.stopPlayback();

    await this.unlock();
    const buffer = await this.preload(url);

    if (token !== this.playToken) return;

    const context = this.context;

    if (buffer && context) {
      try {
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.onended = () => {
          if (token !== this.playToken) return;
          this.clearProgressTimer();
          this.source = null;
          handlers.onEnded?.();
        };

        const startedAt = context.currentTime;
        const duration = buffer.duration || 0.001;

        this.source = source;
        source.start(0);
        this.startProgressTimer(startedAt, duration, handlers.onProgress);
        return;
      } catch {
        // Web Audio 播放失败时继续走 HTMLAudio
      }
    }

    const audio = this.htmlAudios.get(url) ?? (await this.prepareHtmlAudio(url));
    if (token !== this.playToken) return;

    if (!audio) {
      handlers.onError?.();
      return;
    }

    this.htmlAudio = audio;
    audio.currentTime = 0;

    const cleanup = () => {
      audio.onended = null;
      audio.onerror = null;
      audio.ontimeupdate = null;
    };

    audio.onended = () => {
      if (token !== this.playToken) return;
      cleanup();
      this.htmlAudio = null;
      handlers.onEnded?.();
    };

    audio.onerror = () => {
      if (token !== this.playToken) return;
      cleanup();
      this.htmlAudio = null;
      handlers.onError?.();
    };

    audio.ontimeupdate = () => {
      if (token !== this.playToken || !audio.duration) return;
      handlers.onProgress?.((audio.currentTime / audio.duration) * 100);
    };

    try {
      await audio.play();
    } catch {
      if (token !== this.playToken) return;
      cleanup();
      this.htmlAudio = null;
      handlers.onError?.();
    }
  };
}

export const audioManager = new AudioManager();
