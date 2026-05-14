---
name: design-gradient-mesh
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Gradient Mesh / Aurora (漸層 Mesh / 極光) style. Triggers on gradient mesh、aurora、漸層美學、流動色彩、stripe gradient、Linear-style backgrounds、blob.
user-invocable: true
---

# 漸層 Mesh Gradient Aurora — 島嶼共鳴 2026

## Style Philosophy

漸層 mesh 是 2020 年代的主流網頁視覺語彙——以多色 radial-gradient 組合製造「**液態色彩流動**」的背景，靈感來自極光、油彩擴散、CCD 感光鏡頭。Linear、Vercel、Stripe、Apple 大量使用。它的核心精神是：**色彩本身就是訊息**，網頁不需要更多裝飾。在音樂節網頁中，這風格讓「島嶼共鳴」變成 **一場色彩會呼吸的演唱會**：每滾動一段，背景的色塊就微微移動，像極光在天空中漂浮。

三個視覺辨識特徵：
1. **多色 radial-gradient blob** 組合成流動 mesh 背景
2. **半透明白霧 / 玻璃元素** 浮在彩色背景上
3. **無襯線 + 大字體 + 極簡內容元件**

## Design Tokens

```css
:root {
  --gr-blob-1: #ff6ec7;            /* pink */
  --gr-blob-2: #6d76ff;            /* periwinkle */
  --gr-blob-3: #00d9c0;            /* mint */
  --gr-blob-4: #ffb84a;            /* peach */
  --gr-blob-5: #b372ff;            /* lavender */
  --gr-base: #0d0b22;              /* 深紫底 */
  --gr-base-2: #1a1638;

  --gr-fg: #ffffff;
  --gr-fg-soft: rgba(255, 255, 255, 0.78);
  --gr-fg-mute: rgba(255, 255, 255, 0.58);
  --gr-card-bg: rgba(255, 255, 255, 0.08);
  --gr-card-bg-strong: rgba(255, 255, 255, 0.14);
  --gr-border: rgba(255, 255, 255, 0.18);
  --gr-accent: #fff48a;             /* 暖光黃 */
  --gr-accent-fg: #1a1638;

  --color-bg: var(--gr-base);
  --color-fg: var(--gr-fg);
  --color-accent: var(--gr-accent);

  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;
  --radius-blob: 50% 40% 60% 35% / 45% 55% 35% 65%;

  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.25);
  --blur-glass: 24px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 1.0 / 700 / -0.03em | Hero |
| h1 | clamp(32px, 5vw, 56px) / 1.15 / 600 | 區塊 |
| h2 | 22px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 500 / 0.12em / uppercase | label |

## Layout Rules

- 全頁背景：深紫底 + 4-5 個大 radial-gradient blob（不同位置、size）+ 微 noise 紋理
- 容器寬度：max-width 1200px
- 卡片：半透明白底 + backdrop-filter blur + 細邊框（類似 glassmorphism 但 mesh 背景更流動）
- 元素圓角偏大（18-28px），偶爾用 blob 形狀

各區塊構圖：
- **hero**：滿版 mesh 背景 + 中央 / 偏左大字標題 + 副標 + chip 群（日期 / 場地）+ 暖黃 CTA pill
- **about**：左 blob 形狀圖片 + 右玻璃卡段落 + 4 個發光小球（每球漸層不同）
- **lineup**：12 玻璃卡 grid；headliner 卡用更大、邊框更亮、卡內有 mini blob 裝飾
- **schedule**：3 day 縱列玻璃卡，內部時段為輕透小條
- **venues**：3 張玻璃卡，圖片用 blob 形狀 mask
- **tickets**：3 張玻璃卡，VIP 中央用「會發光的」漸層邊框 + 黃 accent
- **travel**：3 步驟，編號為漸層發光球
- **sponsors**：純文字加少量發光裝飾；title 用漸層字
- **footer-faq**：玻璃面板 with `<details>` 展開

## Do / Don't

| Do | Don't |
| --- | --- |
| 多色 radial-gradient blob 是視覺主角 | 用單色或 linear gradient |
| 玻璃卡背後必須有彩色背景才有意義 | 玻璃卡放純色 |
| 文字保持高對比白色 | 用半透明文字導致對比差 |
| blob 形狀至少 1-2 處 | 全部方形矩形 |
| 漸層柔和、無 hard edge | 用 90% color stop 做硬邊 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

Mesh 背景：
```css
body {
  background: var(--gr-base);
  position: relative;
  overflow-x: hidden;
}
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(800px circle at 12% 18%, var(--gr-blob-1) 0%, transparent 55%),
    radial-gradient(900px circle at 88% 25%, var(--gr-blob-2) 0%, transparent 55%),
    radial-gradient(700px circle at 25% 78%, var(--gr-blob-3) 0%, transparent 55%),
    radial-gradient(800px circle at 78% 85%, var(--gr-blob-4) 0%, transparent 55%),
    radial-gradient(600px circle at 50% 50%, var(--gr-blob-5) 0%, transparent 45%);
  filter: blur(60px);
  opacity: 0.85;
  z-index: -1;
  pointer-events: none;
}
```

玻璃卡：
```css
.mesh-card {
  background: var(--gr-card-bg);
  backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  -webkit-backdrop-filter: blur(var(--blur-glass)) saturate(140%);
  border: 1px solid var(--gr-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-glass);
  color: var(--gr-fg);
  padding: 24px;
}
.mesh-card.headliner {
  background: var(--gr-card-bg-strong);
  border: 1px solid rgba(255, 255, 255, 0.4);
  position: relative;
  overflow: hidden;
}
.mesh-card.headliner::before {
  content: '';
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle, var(--gr-blob-1) 0%, transparent 60%);
  filter: blur(40px);
  opacity: 0.5;
  z-index: -1;
}
```

漸層發光球：
```css
.glow-orb {
  width: 90px; height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, white 0%, var(--gr-blob-1) 50%, #c12c89 100%);
  box-shadow: 0 0 40px var(--gr-blob-1), 0 4px 16px rgba(0,0,0,0.3);
}
.glow-orb.mint { background: radial-gradient(circle at 30% 25%, white 0%, var(--gr-blob-3) 50%, #00867a 100%); box-shadow: 0 0 40px var(--gr-blob-3); }
.glow-orb.peri { background: radial-gradient(circle at 30% 25%, white 0%, var(--gr-blob-2) 50%, #353cb5 100%); box-shadow: 0 0 40px var(--gr-blob-2); }
.glow-orb.peach { background: radial-gradient(circle at 30% 25%, white 0%, var(--gr-blob-4) 50%, #b87014 100%); box-shadow: 0 0 40px var(--gr-blob-4); }
```

漸層大字標題：
```css
.mesh-title {
  font-family: var(--font-display);
  font-size: clamp(56px, 9vw, 120px);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #ffeac6 35%, #ffafd6 70%, #b8b5ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

CTA pill：
```css
.btn-mesh {
  background: var(--gr-accent);
  color: var(--gr-accent-fg);
  border: none;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: 0 12px 32px rgba(255, 244, 138, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.18);
}
```

Blob 形狀（圖片 mask）：
```css
.blob-mask {
  border-radius: var(--radius-blob);
  overflow: hidden;
}
```
