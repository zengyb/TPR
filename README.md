# 词汇卡片应用 (Vocabulary Flashcards)

## ⚠️ 为什么直接打开 index.html 没反应？
这是一个基于 React 和 Vite 构建的现代前端项目。由于浏览器的安全限制（CORS）以及模块化 JavaScript (ES Module) 的要求，**直接双击打开下载后的 `index.html` 是无法运行的**，你会看到一片空白或者报错。必须通过本地服务器运行。

## 🚀 本地运行指南

1. **安装 Node.js**: 确保你的电脑上安装了 [Node.js](https://nodejs.org/)（包含 npm）。
2. **安装依赖**: 在项目根目录下，打开终端（命令行），运行以下命令下载依赖：
   ```bash
   npm install
   ```
3. **启动开发服务器**:
   ```bash
   npm run dev
   ```
4. **访问预览**: 终端会输出一个本地链接（通常是 `http://localhost:5173` 或 `http://localhost:3000`），将这个链接复制到浏览器中打开即可看到应用。

## 🌐 部署到 GitHub Pages

如果你想将项目托管在 GitHub Pages 上供他人在线访问：

1. **路径适配**：在 `vite.config.ts` 中，我已经为你添加了 `base: './'`。这确保了编译后的资源路径是相对路径，完美适配 GitHub Pages 的子目录环境。
2. **本地打包测试**：
   运行打包命令：
   ```bash
   npm run build
   ```
   这会生成一个 `dist` 文件夹，里面包含了最终可部署的静态网页文件。
3. **上传 GitHub**：将整个项目（注意过滤掉 `node_modules`）推送到你的 GitHub 仓库。
4. **配置 GitHub Actions（推荐）**：
   在仓库页面的 `Settings` -> `Pages` 中，将 `Source` 选择为 `GitHub Actions`。GitHub 会提示你选择一个静态站点部署流，选择或搜索 "Vite" 相关的 workflow 即可自动完成构建和部署。
   *(或者，你也可以只把 `dist` 文件夹里的内容推送到一个叫 `gh-pages` 的分支来静态托管)*

## 📝 如何替换词汇、音频和图片资源

### 1. 修改词汇与文本数据
词汇和分类等核心数据都存放在 `src/data/vocabulary.ts` 文件中。
- 打开 `src/data/vocabulary.ts`。
- 你会看到一个 `vocabularyData` 数组，里面的每一个对象对应一张卡片。
- 你可以直接在此处修改：单词 (`word`)、中文含义 (`meaning`)、例句 (`l2`, `l3`, `l4`) 以及所属的难度与分类 (`scene`)。

### 2. 替换图片和音频资源
多媒体资源的映射统一在 `src/data/mediaMap.ts` 文件中进行管理。
> 💡 **最佳实践**：不要把几百兆的图片和音频直接放进代码文件夹里，这样会导致 Git 仓库过大、GitHub Pages 部署缓慢。强烈建议将你的图片、MP3 等上传到免费的云存储对象桶（如 Cloudflare R2, 阿里云 OSS, 或者专门的图床/音频托管服务），获取到以 `https://` 开头的公共网络链接。

- 打开 `src/data/mediaMap.ts`。
- 文件中是以每个单词（小写）作为字典的 Key（键）。
- 每个单词对应 **8 个音频文件**（`audioUrls` 数组），按卡片上各点击区域的顺序排列：

| 数组下标 | 文件名 | 对应点击区域 |
| --- | --- | --- |
| 0 | `word.mp3` | 正面 · 图片 + 单词区域 |
| 1 | `word1.mp3` | 正面 · 例句区域 |
| 2 ~ 4 | `word2.mp3` ~ `word4.mp3` | 背面 · 三级句式 1 ~ 3 |
| 5 ~ 7 | `word5.mp3` ~ `word7.mp3` | 背面 · 四级句式 1 ~ 3 |

- 默认地址规则为 `https://tpr.fastpage.top/audio/{word}.mp3`、`{word}1.mp3` … `{word}7.mp3`；词组单词保留空格（如 `pull up.mp3`）。若某个单词的音频文件名与单词不同，直接在 `wordAudio(...)` 里传入实际文件名即可。
- 图片地址规则为 `https://tpr.fastpage.top/images/{word}.jpg`，同样以 Excel 中的词汇名生成（词组保留空格，如 `pull up.jpg`）。

```typescript
export const mediaMap: Record<string, MediaEntry> = {
  'brush': { imageUrl: wordImage('brush'), audioUrls: wordAudio('brush') },  // brush.jpg + brush.mp3 ~ brush7.mp3
  'tuck': { imageUrl: wordImage('tuck'), audioUrls: wordAudio('tuck in') },  // 音频文件名与单词不同：tuck in.mp3 ...
  // 按同样的格式继续添加其它词汇
};
```
**说明**：
- 图片文件名与单词一致即可，上传到 `images/` 目录后卡片会自动显示；暂未上传时卡片中间显示占位提示。
- 如果没有配置对应的音频地址，点击该区域时会退回浏览器自带的英文语音朗读。

### 3. 定制主题颜色
在 `src/data/vocabulary.ts` 顶部的 `SCENES` 对象中，你可以修改这四个场景分类的主题色（`color` 属性）。支持任何 HEX 颜色代码（如 `#D4A373`）。这里修改后，该分类下所有词汇卡片的背景色和文字点缀色会自动同步变更。
