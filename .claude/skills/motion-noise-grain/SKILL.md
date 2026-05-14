---
name: motion-noise-grain
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with animated film grain noise and slow hue rotation. Triggers on noise grain、film grain、雜訊、hue rotate、analog texture.
user-invocable: true
---

# 動態噪點 Noise Grain — 島嶼共鳴 2026

## Style Philosophy

電影膠卷的顆粒感是觀眾不會意識到、卻提供「真實感」的關鍵。把這個質感搬到網頁——**頂層覆一層動態 SVG noise**（用 turbulence filter），同時整頁背景做緩慢 `hue-rotate`，讓整體有「老膠片在投影機裡持續轉動」的呼吸感。視覺風格偏電影 / 攝影集 / 暗房美學。

三個視覺辨識特徵：
1. **頂層覆蓋層 SVG noise**（用 base64 inline turbulence），mix-blend-mode overlay
2. **整頁背景 hue-rotate 緩動**（@keyframes 30s+）
3. **沉穩暗色 + 一個明亮 accent**

## Design Tokens

```css
:root {
  --n-bg: #1a1410;
  --n-bg-2: #2c2218;
  --n-fg: #f5f0e8;
  --n-fg-soft: #c8bfb0;
  --n-fg-mute: #87807a;
  --n-accent: #fbbf24;
  --n-accent-2: #f43f5e;
  --n-line: rgba(245, 240, 232, 0.1);

  --color-bg: var(--n-bg);
  --color-fg: var(--n-fg);
  --color-accent: var(--n-accent);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Serif TC', 'Georgia', 'Times New Roman', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 112px) / 1.05 / 700 / -0.025em / serif | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 / serif | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.75 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |

## Layout Rules

- `<body>` 加 fixed 全屏 `.noise-overlay` 覆蓋層
- noise 用 SVG filter 寫 inline data URI
- 容器 max-width 1180px
- 暗背景配米白文字，accent 用琥珀黃

各區塊構圖：
- 標準布局（hero / about / lineup / schedule / venues / tickets / travel / sponsors / footer-faq），加入暗膠卷氛圍
- hero 大字標題 + 副標
- 每個 section 加微妙底色變化，襯托 noise 質感

## Motion Specification

- **動態效果類別**：loop
- **觸發機制**：CSS `@keyframes` （noise animate + hue rotate）
- **性能要求**：noise overlay 用 background-position 動，不重繪
- **觸發頻率**：純 CSS

## Accessibility (Reduced Motion)

- reduced 模式：取消 noise 動畫（仍保留靜態 noise 紋理）；hue-rotate 動畫關閉

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="loop">`。

## Required Images

無圖。SVG noise filter inline。

## Reference Snippet

SVG noise inline 覆蓋層：
```html
<div class="noise-overlay" aria-hidden="true"></div>
```

```css
.noise-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.12;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='5'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>");
  animation: noise-shift 1.5s steps(8) infinite;
}
@keyframes noise-shift {
  0%   { background-position: 0 0; }
  20%  { background-position: -20px 10px; }
  40%  { background-position: 30px -15px; }
  60%  { background-position: -10px 25px; }
  80%  { background-position: 20px -20px; }
  100% { background-position: 0 0; }
}

body {
  background: var(--n-bg);
  color: var(--n-fg);
  animation: hue-shift 45s linear infinite;
}
@keyframes hue-shift {
  0%   { filter: hue-rotate(0deg); }
  50%  { filter: hue-rotate(8deg); }
  100% { filter: hue-rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .noise-overlay { animation: none; }
  body { animation: none; }
}
```
