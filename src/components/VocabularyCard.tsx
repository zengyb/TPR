import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { VocabularyItem } from '../types';
import { AudioButton } from './AudioButton';
import { mediaMap } from '../data/mediaMap';

interface VocabularyCardProps {
  item: VocabularyItem;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  uiLang: 'zh' | 'en';
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({ item, onSwipeLeft, onSwipeRight, uiLang }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Lookup external media resources based on the word key
  const media = mediaMap[item.word.toLowerCase()];

  // Reset flip state when item changes
  useEffect(() => {
    setIsFlipped(false);
  }, [item.id]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      onSwipeLeft();
    } else if (info.offset.x > swipeThreshold) {
      onSwipeRight();
    }
  };

  return (
    <div className="w-full max-w-sm h-[70vh] min-h-[480px] max-h-[650px] mx-auto perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsFlipped(!isFlipped)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of Card */}
        <div className={`absolute w-full h-full backface-hidden rounded-[40px] p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#EAE7DF] bg-white`}>
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
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
              <AudioButton 
                text={`${item.word}. ${item.l2.en}`} 
                audioUrl={media?.audioUrl}
                className="text-white hover:opacity-90"
                style={{ backgroundColor: item.scene.color }}
              />
            </div>
          </div>

          {/* Word & L2 */}
          <div className="flex flex-col flex-grow min-h-0 pt-4">
            <div className="text-center shrink-0">
              <h2 className="text-4xl font-black text-[#5C6350] mb-2 leading-none">{item.word}</h2>
              <p className="text-lg font-medium text-[#8C8A81]">{item.meaning}</p>
            </div>
            
            {/* Image Area - 3:4 aspect ratio optimized */}
            <div className="w-full flex-1 flex flex-col items-center justify-center group relative my-4 overflow-hidden min-h-[240px]">
               {media?.imageUrl ? (
                 <img src={media.imageUrl} alt={item.word} className="w-full h-full object-contain mix-blend-multiply" />
               ) : (
                 <>
                   <span className="text-4xl opacity-50 mb-2">🖼️</span>
                   <p className="text-[10px] text-[#8C8A81] opacity-0 group-hover:opacity-100 transition-opacity px-4 text-center">{uiLang === 'zh' ? '在此处显示图片' : 'Upload a 3:4 image to R2 and map in mediaMap.ts'}</p>
                 </>
               )}
            </div>

            <div className="w-full text-center shrink-0">
               <div className="flex items-center justify-center mb-1">
                 <div className="flex items-center gap-2">
                    <p className="text-[10px] font-bold text-[#8C8A81] uppercase tracking-widest">{uiLang === 'zh' ? '例句' : 'L2 Phrase'}</p>
                 </div>
               </div>
               <div className="flex flex-col">
                 <span className="text-base font-bold text-[#5C6350] leading-snug">{item.l2.en}</span>
                 <span className="text-sm text-[#8C8A81]">{item.l2.zh}</span>
               </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-[40px] p-6 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#EAE7DF] bg-white"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-black text-[#5C6350]">{item.word}</h3>
            <span 
              className="text-white px-3 py-1 rounded-full text-[10px] font-bold"
              style={{ backgroundColor: item.scene.color }}
            >
               {uiLang === 'zh' ? '更多例句' : 'Examples'}
            </span>
          </div>

          <div className="flex-grow flex flex-col gap-5 overflow-y-auto pb-4 custom-scrollbar">
            <div className="bg-[#FDFCF0] rounded-3xl p-4 border border-[#F2F0E9]">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-sm font-bold text-[#5C6350]">{uiLang === 'zh' ? '扩展句式' : 'Extended Sentences'}</h4>
              </div>
              <ul className="space-y-2">
                {item.l3.map((sentence, idx) => (
                  <li key={idx} className="bg-white/60 p-2 rounded-xl text-sm font-bold text-[#5C6350]">
                    {sentence}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F9F8F4] rounded-3xl p-4 border border-[#EAE7DF]">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-sm font-bold text-[#5C6350]">{uiLang === 'zh' ? '进阶句式' : 'Advanced Sentences'}</h4>
              </div>
              <ul className="space-y-2">
                {item.l4.map((sentence, idx) => (
                  <li key={idx} className="bg-white/60 p-2 rounded-xl text-xs font-medium text-[#5C6350]">
                    {sentence}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
