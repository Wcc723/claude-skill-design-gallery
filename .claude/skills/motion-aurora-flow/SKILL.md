---
name: motion-aurora-flow
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival with continuously flowing aurora gradient background. Triggers on aurora gradient、極光流動、looping gradient、ambient color flow.
user-invocable: true
---

# 極光漸層流動 Aurora Flow — 島嶼共鳴 2026

## Style Philosophy

延續第一輪 gradient-mesh 的視覺語彙，但**讓背景持續流動**——多層 radial-gradient blob 以 `@keyframes` 緩慢移動位置與 size，像極光在夜空裡漂浮。沒有滾動或互動觸發，是純 CSS keyframes 循環。整個頁面像呼吸的液態。

三個視覺辨識特徵：
1. **多層 radial-gradient blob 持續循環動畫**
2. **玻璃半透卡片**漂浮在流動背景之上
3. **柔光發亮文字** + 暖色 accent

## Design Tokens

```css
:root {
  --au-base: #0a0a1f;
  --au-base-2: #1a1238;
  --au-blob-1: #ff6ec7;
  --au-blob-2: #6d76ff;
  --au-blob-3: #00d9c0;
  --au-blob-4: #ffb84a;
  --au-blob-5: #b372ff;

  --au-fg: #ffffff;
  --au-fg-soft: rgba(255, 255, 255, 0.78);
  --au-fg-mute: rgba(255, 255, 255, 0.58);
  --au-card: rgba(255, 255, 255, 0.08);
  --au-card-strong: rgba(255, 255, 255, 0.14);
  --au-border: rgba(255, 255, 255, 0.18);
  --au-accent: #fff48a;

  --color-bg: var(--au-base);
  --color-fg: var(--au-fg);
  --color-accent: var(--au-accent);

  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --blur-glass: 24px;
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.25);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 1.0 / 700 / -0.03em | Hero |
| h1 | clamp(28px, 4vw, 48px) / 1.2 / 600 | 區塊 |
| h2 | 20px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.12em / uppercase | label |

## Layout Rules

- `<body>` 包一層 `body::before` 含 5 個 radial-gradient blob + 60px filter blur，整個 fixed inset 0
- 每個 blob 用獨立 @keyframes `aurora-blob-N` 跑 25-40s 不同 timing，translate + scale 變化
- 卡片用 backdrop-filter blur + 半透白底
- 整頁可被 reduced motion 關掉動畫（變靜態 mesh）

各區塊構圖：
- 同 gradient-mesh 第一輪設計：hero 大字 + glass cards 排版
- 每個 section 用半透 glass card 承載
- 區塊間距 80-120px

## Motion Specification

- **動態效果類別**：loop
- **觸發機制**：CSS `@keyframes`（不依賴 JS）
- **性能要求**：transform + filter blur GPU 加速；用 `will-change: transform`
- **觸發頻率**：純 CSS 30-60fps 自動

## Accessibility (Reduced Motion)

- reduced 模式：`@keyframes` 動畫設 `animation: none !important`，保留靜態 mesh 視覺
- 確保 mesh 背景與卡片在無動畫下仍美觀（背景固定一個 frame 即可）

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="loop">`。極簡 inline `<script>`（可只有空檢查或完全省略 JS，純 CSS 動畫即可，但仍需有 IntersectionObserver 或 keyframes 等動態存在 — 此處用 `@keyframes` 已滿足）。

## Required Images

無圖，純 CSS 漸層。

## Reference Snippet

```css
body {
  background: var(--au-base);
  position: relative;
  overflow-x: hidden;
}
body::before {
  content: '';
  position: fixed;
  inset: -10%;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(700px circle at 12% 20%, var(--au-blob-1) 0%, transparent 55%),
    radial-gradient(800px circle at 88% 25%, var(--au-blob-2) 0%, transparent 55%),
    radial-gradient(600px circle at 25% 78%, var(--au-blob-3) 0%, transparent 55%),
    radial-gradient(700px circle at 78% 85%, var(--au-blob-4) 0%, transparent 55%),
    radial-gradient(550px circle at 50% 50%, var(--au-blob-5) 0%, transparent 45%);
  filter: blur(60px);
  opacity: 0.85;
  animation: aurora-flow 28s ease-in-out infinite alternate;
  will-change: transform, background-position;
}
@keyframes aurora-flow {
  0%   { transform: translate3d(0, 0, 0) scale(1); filter: blur(60px) hue-rotate(0deg); }
  50%  { transform: translate3d(40px, -30px, 0) scale(1.1); filter: blur(70px) hue-rotate(15deg); }
  100% { transform: translate3d(-30px, 40px, 0) scale(1.05); filter: blur(65px) hue-rotate(-10deg); }
}
@media (prefers-reduced-motion: reduce) {
  body::before { animation: none !important; }
}
```

玻璃卡片：
```css
.glass {
  background: var(--au-card);
  backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  -webkit-backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  border: 1px solid var(--au-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-glass);
  color: var(--au-fg);
}
```
