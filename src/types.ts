export type Level = 'L1' | 'L2' | 'L3';

export interface Scene {
  en: string;
  zh: string;
  theme: string;
  color: string;
}

export interface VocabularyItem {
  id: string;
  scene: Scene;
  word: string;
  meaning: string;
  level: Level;
  l2: {
    en: string;
    zh: string;
  };
  l3: string[];
  l4: string[];
  imageUrl?: string;
}
