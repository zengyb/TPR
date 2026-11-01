const AUDIO_BASE = 'https://tpr.fastpage.top/audio';
const IMAGE_BASE = 'https://tpr.fastpage.top/images';

/** 图片地址按 Excel 中的词汇名生成，词组保留空格（如 pull up.jpg） */
const wordImage = (word: string): string => `${IMAGE_BASE}/${word}.jpg`;

/**
 * 每个单词对应 8 个音频文件，顺序固定如下（文件名依次为 word、word1 ... word7）：
 *   0  word    正面 · 图片与单词区域
 *   1  word1   正面 · 例句区域
 *   2-4 word2-4 背面 · 三级句式 1-3
 *   5-7 word5-7 背面 · 四级句式 1-3
 */
const wordAudio = (file: string): string[] => [
  `${AUDIO_BASE}/${file}.mp3`,
  `${AUDIO_BASE}/${file}1.mp3`,
  `${AUDIO_BASE}/${file}2.mp3`,
  `${AUDIO_BASE}/${file}3.mp3`,
  `${AUDIO_BASE}/${file}4.mp3`,
  `${AUDIO_BASE}/${file}5.mp3`,
  `${AUDIO_BASE}/${file}6.mp3`,
  `${AUDIO_BASE}/${file}7.mp3`
];

export interface MediaEntry {
  imageUrl?: string;
  audioUrls?: string[];
}

export const mediaMap: Record<string, MediaEntry> = {
  'brush': { imageUrl: wordImage('brush'), audioUrls: wordAudio('brush') },
  'comb': { imageUrl: wordImage('comb'), audioUrls: wordAudio('comb') },
  'pack': { imageUrl: wordImage('pack'), audioUrls: wordAudio('pack') },
  'peel': { imageUrl: wordImage('peel'), audioUrls: wordAudio('peel') },
  'pour': { imageUrl: wordImage('pour'), audioUrls: wordAudio('pour') },
  'pull up': { imageUrl: wordImage('pull up'), audioUrls: wordAudio('pull up') },
  'pump': { imageUrl: wordImage('pump'), audioUrls: wordAudio('pump') },
  'put on': { imageUrl: wordImage('put on'), audioUrls: wordAudio('put on') },
  'wipe': { imageUrl: wordImage('wipe'), audioUrls: wordAudio('wipe') },
  'scoop': { imageUrl: wordImage('scoop'), audioUrls: wordAudio('scoop') },
  'snap': { imageUrl: wordImage('snap'), audioUrls: wordAudio('snap') },
  'spit': { imageUrl: wordImage('spit'), audioUrls: wordAudio('spit') },
  'squeeze': { imageUrl: wordImage('squeeze'), audioUrls: wordAudio('squeeze') },
  'stir': { imageUrl: wordImage('stir'), audioUrls: wordAudio('stir') },
  'take off': { imageUrl: wordImage('take off'), audioUrls: wordAudio('take off') },
  'take out': { imageUrl: wordImage('take out'), audioUrls: wordAudio('take out') },
  'tie': { imageUrl: wordImage('tie'), audioUrls: wordAudio('tie') },
  'tuck': { imageUrl: wordImage('tuck'), audioUrls: wordAudio('tuck in') },  // 音频文件名为 'tuck in'
  'wrap': { imageUrl: wordImage('wrap'), audioUrls: wordAudio('wrap') },
  'zip': { imageUrl: wordImage('zip'), audioUrls: wordAudio('zip') },
  'bend': { imageUrl: wordImage('bend'), audioUrls: wordAudio('bend') },
  'clap': { imageUrl: wordImage('clap'), audioUrls: wordAudio('clap') },
  'crawl': { imageUrl: wordImage('crawl'), audioUrls: wordAudio('crawl') },
  'hop': { imageUrl: wordImage('hop'), audioUrls: wordAudio('hop') },
  'knock': { imageUrl: wordImage('knock'), audioUrls: wordAudio('knock') },
  'lift': { imageUrl: wordImage('lift'), audioUrls: wordAudio('lift') },
  'nod': { imageUrl: wordImage('nod'), audioUrls: wordAudio('nod') },
  'pass': { imageUrl: wordImage('pass'), audioUrls: wordAudio('pass') },
  'peek': { imageUrl: wordImage('peek'), audioUrls: wordAudio('peek') },
  'point': { imageUrl: wordImage('point'), audioUrls: wordAudio('point') },
  'shake': { imageUrl: wordImage('shake'), audioUrls: wordAudio('shake') },
  'sit': { imageUrl: wordImage('sit'), audioUrls: wordAudio('sit') },
  'squat': { imageUrl: wordImage('squat'), audioUrls: wordAudio('squat') },
  'stand': { imageUrl: wordImage('stand'), audioUrls: wordAudio('stand') },
  'stomp': { imageUrl: wordImage('stomp'), audioUrls: wordAudio('stomp') },
  'stretch': { imageUrl: wordImage('stretch'), audioUrls: wordAudio('stretch') },
  'tiptoe': { imageUrl: wordImage('tiptoe'), audioUrls: wordAudio('tiptoe') },
  'touch': { imageUrl: wordImage('touch'), audioUrls: wordAudio('touch') },
  'walk': { imageUrl: wordImage('walk'), audioUrls: wordAudio('walk') },
  'wave': { imageUrl: wordImage('wave'), audioUrls: wordAudio('wave') },
  'bite': { imageUrl: wordImage('bite'), audioUrls: wordAudio('bite') },
  'blow': { imageUrl: wordImage('blow'), audioUrls: wordAudio('blow') },
  'chew': { imageUrl: wordImage('chew'), audioUrls: wordAudio('chew') },
  'close': { imageUrl: wordImage('close'), audioUrls: wordAudio('close') },
  'drink': { imageUrl: wordImage('drink'), audioUrls: wordAudio('drink') },
  'hold': { imageUrl: wordImage('hold'), audioUrls: wordAudio('hold') },
  'hug': { imageUrl: wordImage('hug'), audioUrls: wordAudio('hug') },
  'kiss': { imageUrl: wordImage('kiss'), audioUrls: wordAudio('kiss') },
  'lie down': { imageUrl: wordImage('lie down'), audioUrls: wordAudio('lie down') },
  'listen': { imageUrl: wordImage('listen'), audioUrls: wordAudio('listen') },
  'open': { imageUrl: wordImage('open'), audioUrls: wordAudio('open') },
  'read': { imageUrl: wordImage('read'), audioUrls: wordAudio('read') },
  'rub': { imageUrl: wordImage('rub'), audioUrls: wordAudio('rub') },
  'smile': { imageUrl: wordImage('smile'), audioUrls: wordAudio('smile') },
  'smell': { imageUrl: wordImage('smell'), audioUrls: wordAudio('smell') },
  'turn off': { imageUrl: wordImage('turn off'), audioUrls: wordAudio('turn off') },
  'turn on': { imageUrl: wordImage('turn on'), audioUrls: wordAudio('turn on') },
  'wake': { imageUrl: wordImage('wake'), audioUrls: wordAudio('wake') },
  'screw': { imageUrl: wordImage('screw'), audioUrls: wordAudio('screw') },
  'yawn': { imageUrl: wordImage('yawn'), audioUrls: wordAudio('yawn') },
  'balance': { imageUrl: wordImage('balance'), audioUrls: wordAudio('balance') },
  'build': { imageUrl: wordImage('build'), audioUrls: wordAudio('build') },
  'catch': { imageUrl: wordImage('catch'), audioUrls: wordAudio('catch') },
  'climb': { imageUrl: wordImage('climb'), audioUrls: wordAudio('climb') },
  'dance': { imageUrl: wordImage('dance'), audioUrls: wordAudio('dance') },
  'dig': { imageUrl: wordImage('dig'), audioUrls: wordAudio('dig') },
  'hide': { imageUrl: wordImage('hide'), audioUrls: wordAudio('hide') },
  'jump': { imageUrl: wordImage('jump'), audioUrls: wordAudio('jump') },
  'kick': { imageUrl: wordImage('kick'), audioUrls: wordAudio('kick') },
  'pedal': { imageUrl: wordImage('pedal'), audioUrls: wordAudio('pedal') },
  'press': { imageUrl: wordImage('press'), audioUrls: wordAudio('press') },
  'push': { imageUrl: wordImage('push'), audioUrls: wordAudio('push') },
  'roll': { imageUrl: wordImage('roll'), audioUrls: wordAudio('roll') },
  'run': { imageUrl: wordImage('run'), audioUrls: wordAudio('run') },
  'slide': { imageUrl: wordImage('slide'), audioUrls: wordAudio('slide') },
  'spin': { imageUrl: wordImage('spin'), audioUrls: wordAudio('spin') },
  'splash': { imageUrl: wordImage('splash'), audioUrls: wordAudio('splash') },
  'swing': { imageUrl: wordImage('swing'), audioUrls: wordAudio('swing') },
  'throw': { imageUrl: wordImage('throw'), audioUrls: wordAudio('throw') },
  'tickle': { imageUrl: wordImage('tickle'), audioUrls: wordAudio('tickle') },
  'clean': { imageUrl: wordImage('clean'), audioUrls: wordAudio('clean') },
  'dry': { imageUrl: wordImage('dry'), audioUrls: wordAudio('dry') },
  'dust': { imageUrl: wordImage('dust'), audioUrls: wordAudio('dust') },
  'fold': { imageUrl: wordImage('fold'), audioUrls: wordAudio('fold') },
  'hang': { imageUrl: wordImage('hang'), audioUrls: wordAudio('hang') },
  'line up': { imageUrl: wordImage('line up'), audioUrls: wordAudio('line up') },
  'mop': { imageUrl: wordImage('mop'), audioUrls: wordAudio('mop') },
  'organize': { imageUrl: wordImage('organize'), audioUrls: wordAudio('organize') },
  'pick up': { imageUrl: wordImage('pick up'), audioUrls: wordAudio('pick up') },
  'put away': { imageUrl: wordImage('put away'), audioUrls: wordAudio('put away') },
  'wash': { imageUrl: wordImage('wash'), audioUrls: wordAudio('wash') },
  'scrub': { imageUrl: wordImage('scrub'), audioUrls: wordAudio('scrub') },
  'sort': { imageUrl: wordImage('sort'), audioUrls: wordAudio('sort') },
  'stack': { imageUrl: wordImage('stack'), audioUrls: wordAudio('stack') },
  'spray': { imageUrl: wordImage('spray'), audioUrls: wordAudio('spray') },
  'sweep': { imageUrl: wordImage('sweep'), audioUrls: wordAudio('sweep') },
  'throw away': { imageUrl: wordImage('throw away'), audioUrls: wordAudio('throw away') },
  'vacuum': { imageUrl: wordImage('vacuum'), audioUrls: wordAudio('vacuum') },
  'water': { imageUrl: wordImage('water'), audioUrls: wordAudio('water') },
  'rinse': { imageUrl: wordImage('rinse'), audioUrls: wordAudio('rinse') }
};
