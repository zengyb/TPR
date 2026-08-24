export interface AssetMapping {
  audioUrl?: string;
  imageUrl?: string;
}

// Maps vocabulary ID (or word) to its assets
export const vocabularyAssets: Record<string, AssetMapping> = {
  // Example:
  // '1': {
  //   audioUrl: 'https://example.com/audio/wake.mp3',
  //   imageUrl: 'https://example.com/image/wake.jpg'
  // },
};

export const getAssetsForWord = (id: string, word: string): AssetMapping => {
  return vocabularyAssets[id] || {
    // Fallback: assume some predictable URL structure in the R2 bucket
    audioUrl: `https://example.com/audio/${word.replace(/ /g, '_')}.mp3`,
    imageUrl: `https://example.com/images/${word.replace(/ /g, '_')}.jpg`
  };
};
