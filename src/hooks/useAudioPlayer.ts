import { useCallback, useEffect, useRef, useState } from 'react';
import { audioManager } from '../lib/audioManager';

/**
 * 卡片内的音频播放器：同一时间只播放一个音频，
 * 再次点击正在播放的区域会停止播放。
 *
 * 对外 API 保持不变，内部改为使用统一的 AudioManager：
 * 预加载过的音频直接播放内存中的 AudioBuffer；
 * 不支持 Web Audio 或跨域受限时自动回退到 HTMLAudioElement。
 */
export const useAudioPlayer = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const tokenRef = useRef(0);

  const stop = useCallback(() => {
    tokenRef.current += 1;
    audioManager.stop();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setActiveId(null);
    setProgress(0);
  }, []);

  const toggle = useCallback(
    (id: string, audioUrl?: string, fallbackText?: string) => {
      if (activeId === id) {
        stop();
        return;
      }

      stop();

      const token = tokenRef.current + 1;
      tokenRef.current = token;

      if (audioUrl) {
        setActiveId(id);
        void audioManager
          .play(audioUrl, {
            onProgress: percent => {
              if (tokenRef.current === token) setProgress(percent);
            },
            onEnded: () => {
              if (tokenRef.current !== token) return;
              setActiveId(null);
              setProgress(0);
            },
            onError: () => {
              if (tokenRef.current !== token) return;
              setActiveId(null);
              setProgress(0);
            },
          })
          .catch(() => {
            if (tokenRef.current !== token) return;
            setActiveId(null);
            setProgress(0);
          });
        return;
      }

      // 没有音频文件时，退回系统语音朗读
      if (fallbackText && 'speechSynthesis' in window) {
        setActiveId(id);
        const utterance = new SpeechSynthesisUtterance(fallbackText);
        utterance.lang = 'en-US';
        utterance.onend = () => {
          if (tokenRef.current !== token) return;
          setActiveId(null);
          setProgress(0);
        };
        utterance.onerror = () => {
          if (tokenRef.current !== token) return;
          setActiveId(null);
          setProgress(0);
        };
        window.speechSynthesis.speak(utterance);
      }
    },
    [activeId, stop]
  );

  useEffect(() => {
    return () => {
      tokenRef.current += 1;
      audioManager.stop();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { activeId, progress, toggle, stop };
};
