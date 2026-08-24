import React, { useState, useMemo } from 'react';
import { vocabularyData, SCENES } from './data/vocabulary';
import { VocabularyCard } from './components/VocabularyCard';
import { Level, VocabularyItem } from './types';
import { List, Play, Search, Languages } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

function App() {
  const [selectedScene, setSelectedScene] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<Level | 'ALL'>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIndex, setShowIndex] = useState(false);
  const [uiLang, setUiLang] = useState<'zh' | 'en'>('zh');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    let data = vocabularyData;
    if (selectedScene !== 'ALL') {
      data = data.filter(item => item.scene.en === selectedScene);
    }
    if (selectedLevel !== 'ALL') {
      data = data.filter(item => item.level === selectedLevel);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      data = data.filter(item => 
        item.word.toLowerCase().includes(q) || 
        item.meaning.includes(q) ||
        item.scene.en.toLowerCase().includes(q) ||
        item.scene.zh.includes(q)
      );
    }
    return data;
  }, [selectedScene, selectedLevel, searchQuery]);

  const handleSwipeLeft = () => {
    if (currentIndex < filteredData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [selectedScene, selectedLevel, searchQuery]);

  const currentItem = filteredData[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F8F4] to-[#F2F0E9] flex flex-col font-sans text-[#4A4A4A] overflow-hidden">
      {/* Header / Filter Bar */}
      <header className="bg-white/80 backdrop-blur-md px-4 py-4 shadow-sm z-10 flex flex-col gap-4 sticky top-0 border-b border-[#EAE7DF]">
        <div className="flex justify-between items-center max-w-sm mx-auto w-full">
          <h1 className="text-xl font-bold tracking-tight text-[#5C6350]">TPR<span className="text-[#8C8A81] font-medium">Vocab</span></h1>
          <div className="flex gap-2">
            <button 
              onClick={() => setUiLang(prev => prev === 'zh' ? 'en' : 'zh')}
              className="p-2 bg-[#F2F0E9] text-[#8C8A81] rounded-full hover:bg-[#EAE7DF] transition-colors flex items-center justify-center w-9 h-9"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setShowIndex(!showIndex)}
              className="p-2 bg-[#F2F0E9] text-[#8C8A81] rounded-full hover:bg-[#EAE7DF] transition-colors w-9 h-9 flex items-center justify-center"
              aria-label="Toggle Index"
            >
              {showIndex ? <Play className="w-5 h-5" /> : <List className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 max-w-sm mx-auto w-full">
          {/* Scene Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar hide-scrollbar">
            <button
              onClick={() => setSelectedScene('ALL')}
              className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold whitespace-nowrap transition-colors border ${
                selectedScene === 'ALL' ? 'bg-[#5C6350] text-white border-[#5C6350]' : 'bg-white text-[#8C8A81] border-[#EAE7DF] hover:bg-[#F2F0E9]'
              }`}
            >
              {uiLang === 'zh' ? '全部场景' : 'All Scenes'}
            </button>
            {Object.values(SCENES).map((scene) => (
              <button
                key={scene.en}
                onClick={() => setSelectedScene(scene.en)}
                className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold whitespace-nowrap transition-colors border`}
                style={{ 
                  backgroundColor: selectedScene === scene.en ? scene.color : 'white',
                  color: selectedScene === scene.en ? 'white' : '#8C8A81',
                  borderColor: selectedScene === scene.en ? scene.color : '#EAE7DF'
                }}
              >
                {uiLang === 'zh' ? scene.zh : scene.en}
              </button>
            ))}
          </div>

          {/* Level Filter */}
          <div className="flex gap-2">
            {['ALL', 'L1', 'L2', 'L3'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level as Level | 'ALL')}
                className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-colors ${
                  selectedLevel === level ? 'bg-[#5C6350] text-white shadow-sm' : 'bg-[#F2F0E9] text-[#8C8A81] hover:bg-[#EAE7DF]'
                }`}
              >
                {level === 'ALL' ? (uiLang === 'zh' ? '全部' : 'ALL') : level}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 relative">
        <AnimatePresence mode="wait">
          {showIndex ? (
            <motion.div 
              key="index"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-sm h-[70vh] min-h-[480px] max-h-[650px] bg-[#FDFCF0] rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#EAE7DF] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-[#EAE7DF] bg-white flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-lg text-[#5C6350]">{uiLang === 'zh' ? '词汇目录' : 'Vocabulary List'}</h2>
                  <p className="text-sm text-[#8C8A81]">{filteredData.length} {uiLang === 'zh' ? '个词汇' : 'words'}</p>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={uiLang === 'zh' ? '搜索中英文...' : 'Search English / 中文...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#F9F8F4] border border-[#EAE7DF] rounded-2xl text-sm focus:outline-none focus:border-[#A7B899] text-[#5C6350] placeholder-[#8C8A81]"
                  />
                  <Search className="w-4 h-4 text-[#8C8A81] absolute left-4 top-3.5" />
                </div>
              </div>
              <div className="overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
                {filteredData.map((item, index) => {
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentIndex(index);
                        setShowIndex(false);
                      }}
                      className={`flex items-center justify-between p-4 rounded-3xl border border-[#EAE7DF] transition-colors hover:bg-white bg-[#F9F8F4] text-left shadow-sm`}
                    >
                      <div>
                        <p className={`font-bold text-lg text-[#5C6350]`}>{item.word}</p>
                        <p className={`text-sm text-[#8C8A81] font-medium`}>{item.meaning}</p>
                      </div>
                      <span 
                        className={`px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest`}
                        style={{ backgroundColor: item.scene.color }}
                      >
                        {item.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            filteredData.length > 0 ? (
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <VocabularyCard 
                  item={currentItem} 
                  onSwipeLeft={handleSwipeLeft} 
                  onSwipeRight={handleSwipeRight} 
                  uiLang={uiLang}
                />
                
                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-6 max-w-sm mx-auto flex-wrap px-4">
                  {filteredData.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-4 bg-[#A7B899]' : 'w-1.5 bg-[#EAE7DF]'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-[#8C8A81]"
              >
                <p className="text-xl font-bold mb-2 text-[#5C6350]">{uiLang === 'zh' ? '未找到相关词汇' : 'No words found'}</p>
                <p className="text-sm">{uiLang === 'zh' ? '请尝试更改搜索或筛选条件。' : 'Try changing your filters or search query.'}</p>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
