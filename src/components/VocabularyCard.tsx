import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight, Square, Volume2 } from 'lucide-react';
import { Sentence, VocabularyItem } from '../types';
import { mediaMap } from '../data/mediaMap';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

interface VocabularyCardProps {
  item: VocabularyItem;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  uiLang: 'zh' | 'en';
}

const RING_RADIUS = 15;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

interface AudioAreaProps {
  isPlaying: boolean;
  progress: number;
  onToggle: () => void;
  color: string;
  label: string;
  className?: string;
  iconClassName?: string;
  children: React.ReactNode;
}

/** 一个可点击播放音频的区域，右上角显示喇叭 / 停止图标与播放进度 */
const AudioArea: React.FC<AudioAreaProps> = ({
  isPlaying,
  progress,
  onToggle,
  color,
  label,
  className = '',
  iconClassName = '',
  children,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      onToggle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={isPlaying ? { backgroundColor: 'rgba(233, 196, 106, 0.16)' } : undefined}
      className={`relative cursor-pointer rounded-3xl transition-colors ${className}`}
    >
      <span
        aria-hidden="true"
        style={{ backgroundColor: color }}
        className={`absolute top-2 right-2 z-10 w-6 h-6 rounded-full flex items-center justify-center text-white shadow-sm ${iconClassName}`}
      >
        {isPlaying && (
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r={RING_RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={RING_CIRCUMFERENCE - (progress / 100) * RING_CIRCUMFERENCE}
              className="opacity-40 transition-all duration-100 ease-linear"
            />
          </svg>
        )}
        {isPlaying ? <Square className="w-2.5 h-2.5 fill-current" /> : <Volume2 className="w-3 h-3" />}
      </span>
      {children}
    </div>
  );
};

export const VocabularyCard: React.FC<VocabularyCardProps> = ({ item, onSwipeLeft, onSwipeRight, uiLang }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { activeId, progress, toggle, stop } = useAudioPlayer();

  // Lookup external media resources based on the word key
  const media = mediaMap[item.word.toLowerCase()];
  const audioUrls = media?.audioUrls ?? [];

  // Reset flip state and stop playback when item changes
  useEffect(() => {
    setIsFlipped(false);
    stop();
  }, [item.id]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      onSwipeLeft();
    } else if (info.offset.x > swipeThreshold) {
      onSwipeRight();
    }
  };

  const flipButton = (toFlipped: boolean) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsFlipped(toFlipped);
      }}
      className="p-1.5 rounded-full bg-[#F2F0E9] text-[#8C8A81] hover:bg-[#EAE7DF] transition-colors"
      aria-label={toFlipped ? 'Show more examples' : 'Back to word'}
    >
      <ArrowLeftRight className="w-3.5 h-3.5" />
    </button>
  );

  const sentenceArea = (id: string, sentence: Sentence, audioUrl: string | undefined, index: number) => (
    <AudioArea
      key={id}
      isPlaying={activeId === id}
      progress={progress}
      onToggle={() => toggle(id, audioUrl, sentence.en)}
      color={item.scene.color}
      label={`Play: ${sentence.en}`}
      className={`bg-white/60 hover:bg-white py-2 pl-3 pr-10 text-left ${
        index > 0 ? 'mt-2' : ''
      }`}
    >
      <p className="text-sm font-bold text-[#5C6350] leading-snug">{sentence.en}</p>
      <p className="text-xs text-[#8C8A81] mt-0.5">{sentence.zh}</p>
    </AudioArea>
  );

  return (
    <div className="w-full max-w-sm h-[70vh] min-h-[480px] max-h-[650px] mx-auto perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of Card */}
        <div className={`absolute w-full h-full backface-hidden rounded-[40px] p-5 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#EAE7DF] bg-white`}>
          {/* Header */}
          <div className="flex justify-between items-start shrink-0">
            <div className="leading-tight">
              <span 
                className="px-3 py-1.5 rounded-full font-bold text-white flex items-center gap-1.5 w-fit shadow-sm"
                style={{ backgroundColor: item.scene.color }}
              >
                <span className="text-xs">{item.scene.zh}</span>
                <span className="text-[10px] opacity-60 font-normal">|</span>
                <span className="text-[10px] uppercase tracking-wider">{item.scene.en}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`bg-[#F2F0E9] text-[#5C6350] px-3 py-1 rounded-full text-[10px] font-bold`}>
                {item.level}
              </span>
              {flipButton(true)}
            </div>
          </div>

          {/* 点击区域 1：图片 + 单词（音频 word.mp3） */}
          <AudioArea
            isPlaying={activeId === 'word'}
            progress={progress}
            onToggle={() => toggle('word', audioUrls[0], item.word)}
            color={item.scene.color}
            label={`Play: ${item.word}`}
            className="flex flex-col flex-grow min-h-0 mt-2 pt-2 hover:bg-[#F9F8F4]"
          >
            <div className="text-center shrink-0 pr-6 pl-2">
              <h2 className="text-4xl font-black text-[#5C6350] mb-2 leading-none">{item.word}</h2>
              <p className="text-lg font-medium text-[#8C8A81]">{item.meaning}</p>
            </div>

            {/* Image Area - 3:4 aspect ratio optimized */}
            <div className="w-full flex-1 flex flex-col items-center justify-center group relative my-3 overflow-hidden min-h-[200px]">
              {media?.imageUrl ? (
                <img src={media.imageUrl} alt={item.word} className="w-full h-full object-contain mix-blend-multiply" />
              ) : (
                <>
                  <span className="text-4xl opacity-50 mb-2">🖼️</span>
                  <p className="text-[10px] text-[#8C8A81] opacity-0 group-hover:opacity-100 transition-opacity px-4 text-center">
                    {uiLang === 'zh' ? '在此处显示图片' : 'Upload a 3:4 image to R2 and map in mediaMap.ts'}
                  </p>
                </>
              )}
            </div>
          </AudioArea>

          {/* 点击区域 2：例句（音频 word1.mp3） */}
          <AudioArea
            isPlaying={activeId === 'l2'}
            progress={progress}
            onToggle={() => toggle('l2', audioUrls[1], item.l2.en)}
            color={item.scene.color}
            label={`Play: ${item.l2.en}`}
            className="w-full shrink-0 text-center pt-3 pb-4 px-3 hover:bg-[#F9F8F4]"
          >
            <div className="flex items-center justify-center mb-1">
              <p className="text-[10px] font-bold text-[#8C8A81] uppercase tracking-widest">
                {uiLang === 'zh' ? '例句' : 'L2 Phrase'}
              </p>
            </div>
            <span className="text-base font-bold text-[#5C6350] leading-snug pr-6">{item.l2.en}</span>
            <p className="text-sm text-[#8C8A81]">{item.l2.zh}</p>
          </AudioArea>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-[40px] p-5 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#EAE7DF] bg-white"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="flex justify-between items-center mb-4 shrink-0">
            <h3 className="text-3xl font-black text-[#5C6350] pr-4">{item.word}</h3>
            <div className="flex items-center gap-2">
              <span 
                className="text-white px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap"
                style={{ backgroundColor: item.scene.color }}
              >
                {uiLang === 'zh' ? '更多例句' : 'Examples'}
              </span>
              {flipButton(false)}
            </div>
          </div>

          <div className="flex-grow flex flex-col gap-4 overflow-y-auto pb-4 custom-scrollbar">
            <div className="bg-[#FDFCF0] rounded-3xl p-3 border border-[#F2F0E9]">
              <h4 className="text-sm font-bold text-[#5C6350] mb-2">
                {uiLang === 'zh' ? '扩展句式' : 'Extended Sentences'}
              </h4>
              {item.l3.map((sentence, idx) =>
                sentenceArea(`l3-${idx}`, sentence, audioUrls[2 + idx], idx)
              )}
            </div>

            <div className="bg-[#F9F8F4] rounded-3xl p-3 border border-[#EAE7DF]">
              <h4 className="text-sm font-bold text-[#5C6350] mb-2">
                {uiLang === 'zh' ? '进阶句式' : 'Advanced Sentences'}
              </h4>
              {item.l4.map((sentence, idx) =>
                sentenceArea(`l4-${idx}`, sentence, audioUrls[5 + idx], idx)
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
