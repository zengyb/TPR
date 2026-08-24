import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Square } from 'lucide-react';

interface AudioButtonProps {
  text: string;
  lang?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AudioButton: React.FC<AudioButtonProps & { audioUrl?: string }> = ({ text, lang = 'en-US', className = '', style, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping
    
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsPlaying(false);
      setProgress(0);
      return;
    }

    setIsPlaying(true);
    setProgress(0);

    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.ontimeupdate = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      
      audio.onended = () => {
        setIsPlaying(false);
        setProgress(0);
      };

      audio.onerror = () => {
        setIsPlaying(false);
        setProgress(0);
      };

      audio.play().catch(err => {
        console.error("Audio play failed:", err);
        setIsPlaying(false);
      });
    } else if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      
      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(0);
      };
      
      utterance.onerror = () => {
        setIsPlaying(false);
        setProgress(0);
      };
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const circleRadius = 15;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button 
      onClick={playAudio}
      className={`relative w-8 h-8 shrink-0 rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-all ${className}`}
      style={style}
      aria-label="Play audio"
    >
      {isPlaying && (
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 32 32">
          <circle
            cx="16" cy="16" r={circleRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={audioUrl ? strokeDashoffset : 0}
            className={`opacity-30 ${!audioUrl && isPlaying ? 'animate-pulse' : 'transition-all duration-100 ease-linear'}`}
          />
        </svg>
      )}
      {isPlaying ? <Square className="w-3 h-3 fill-current" /> : <Volume2 className="w-4 h-4" />}
    </button>
  );
};
