export type Level = 'L1' | 'L2' | 'L3';

export interface Scene {
  en: string;
  zh: string;
  theme: string;
  color: string;
}

export interface Sentence {
  en: string;
  zh: string;
}

export interface VocabularyItem {
  id: string;
  scene: Scene;
  word: string;
  meaning: string;
  level: Level;
  l2: Sentence;
  l3: Sentence[];
  l4: Sentence[];
  imageUrl?: string;
}
