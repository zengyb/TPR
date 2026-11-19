/**
 * 图片预加载管理器：
 * - 同一个 URL 只发起一次请求（Promise 去重）
 * - 记录已加载状态，避免重复预加载
 * - 失败后从缓存中移除，便于重试
 * - 限制缓存数量，避免长期占用内存
 */
const MAX_CACHED_IMAGES = 24;

const imageCache = new Map<string, Promise<HTMLImageElement>>();
const loadedImages = new Set<string>();

const trimCache = () => {
  while (loadedImages.size > MAX_CACHED_IMAGES) {
    const oldest = loadedImages.values().next().value;
    if (!oldest) break;
    loadedImages.delete(oldest);
    imageCache.delete(oldest);
  }
};

export const isImageLoaded = (url: string): boolean => loadedImages.has(url);

export const preloadImage = (url: string): Promise<HTMLImageElement> => {
  const cached = imageCache.get(url);
  if (cached) return cached;

  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.fetchPriority = 'high';

    img.onload = () => {
      loadedImages.add(url);
      trimCache();
      resolve(img);
    };

    img.onerror = () => {
      // 失败后清除缓存，下一次调用可以重新请求
      imageCache.delete(url);
      reject(new Error(`Image load failed: ${url}`));
    };

    img.src = url;
  });

  imageCache.set(url, promise);
  return promise;
};

/** 失败自动重试，最多 retries 次，每次退避 300ms */
export const preloadImageWithRetry = async (
  url: string,
  retries = 2
): Promise<HTMLImageElement> => {
  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await preloadImage(url);
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, 300 * (attempt + 1)));
      }
    }
  }

  throw lastError;
};

/** 图片加载失败后调用，清除记录以便用户手动重试 */
export const invalidateImage = (url: string): void => {
  imageCache.delete(url);
  loadedImages.delete(url);
};
