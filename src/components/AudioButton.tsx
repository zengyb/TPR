import React from 'react';
import { Volume2 } from 'lucide-react';

interface AudioButtonProps {
  text: string;
  lang?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AudioButton: React.FC<AudioButtonProps & { audioUrl?: string }> = ({ text, lang = 'en-US', className = '', style, audioUrl }) => {
  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(err => console.error("Audio play failed:", err));
    } else if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button 
      onClick={playAudio}
      className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-all ${className}`}
      style={style}
      aria-label="Play audio"
    >
      <Volume2 className="w-4 h-4" />
    </button>
  );
};
