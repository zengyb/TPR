import { useEffect, useRef, useState } from 'react';

/**
 * 卡片内的音频播放器：同一时间只播放一个音频，
 * 再次点击正在播放的区域会停止播放。
 */
export const useAudioPlayer = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setActiveId(null);
    setProgress(0);
  };

  const toggle = (id: string, audioUrl?: string, fallbackText?: string) => {
    if (activeId === id) {
      stop();
      return;
    }

    stop();

    if (audioUrl) {
      setActiveId(id);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.ontimeupdate = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      audio.onended = () => {
        setActiveId(null);
        setProgress(0);
      };
      audio.onerror = () => {
        setActiveId(null);
        setProgress(0);
      };

      audio.play().catch(() => {
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
        setActiveId(null);
        setProgress(0);
      };
      utterance.onerror = () => {
        setActiveId(null);
        setProgress(0);
      };
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { activeId, progress, toggle, stop };
};
