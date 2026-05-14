---
name: design-dark-mode
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in an Immersive Dark / cinematic low-light style. Triggers on 暗黑、Dark Mode、低光、cinematic dark、Netflix-like dark UI、 OLED dark.
user-invocable: true
---

# 沉浸暗黑 Immersive Dark — 島嶼共鳴 2026

## Style Philosophy

不是「把白色 UI 反色」，而是「**為深夜閱讀與電影感觀看而設計**」。優秀的暗黑模式來自 Netflix、Spotify、Linear 這類產品：背景不是純黑而是接近黑的中性灰、文字不是純白而是 85-92% 灰、強調色是高飽和度的單色發光。在音樂節網頁裡，這風格讓你**像在開幕前的後台漫遊**——燈光熄了一半、預告片在螢幕上滾動、stage lighting 只在重點處綻放。

三個視覺辨識特徵：
1. **多層次的深色背景**（#0b0b0f / #15151b / #1f1f27），絕不純黑
2. **單一發光 accent**（霓虹品紅或電光綠），用作 spotlight
3. **電影感的圖片處理**：低彩度、高對比、邊緣 vignette

## Design Tokens

```css
:root {
  --color-bg-0: #0a0a0f;        /* 最深底色 */
  --color-bg-1: #15151c;        /* 中層卡片 */
  --color-bg-2: #1f1f29;        /* 高層 elevated */
  --color-bg-3: #2a2a36;        /* 互動 hover */

  --color-fg: #f5f5f7;          /* 92% 白，不是純白 */
  --color-fg-soft: #b8b8c2;     /* 73% 白 */
  --color-fg-mute: #6e6e7a;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.16);

  --color-accent: #ff2e88;      /* 霓虹品紅 */
  --color-accent-glow: rgba(255, 46, 136, 0.45);
  --color-accent-2: #06d6a0;    /* 電光綠 — 副 accent */

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --shadow-glow: 0 0 32px var(--color-accent-glow);
  --shadow-card: 0 16px 48px rgba(0, 0, 0, 0.5);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, -apple-system, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Menlo', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 88px) / 1.05 / 700 / -0.03em | Hero |
| h1 | clamp(28px, 4vw, 40px) / 1.2 / 600 | 區塊標題 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 15px / 1.7 / 400 | 段落 |
| caption | 12px / 1.5 / 500 / 0.1em / uppercase | label |
| mono | 13px / 1.5 / 500 | 時段、數字 |

## Layout Rules

- 多層背景：底層 `--color-bg-0`，卡片 `--color-bg-1`，elevated 卡 `--color-bg-2`
- 容器寬度：max-width 1200px、section padding 80-120px
- 邊框輕薄但可見（`--color-border`），不要無邊框

各區塊構圖：
- **hero**：全幅暗色背景 + 上方 SVG / 圖片 hero 圖（70% opacity + vignette mask），主標題置於下半部，accent 色發光底線
- **about**：左文右 4 個數字 tile（暗卡 + 發光數字）
- **lineup**：12 張暗卡 grid，headliner 卡用 `--color-accent` 細邊 + 卡角發光
- **schedule**：3 個 day 縱列，timeline 樣式（左側時段 mono + 右側樂團名），用 `--color-accent` 標 headliner
- **venues**：3 張卡橫排，每張卡上方 image + 下方文字、image 有 dark gradient overlay
- **tickets**：3 張票卡，VIP 卡 accent 邊框 + glow shadow
- **travel**：3 段，圖示用 accent 色發光小圓點
- **sponsors**：暗灰背景配淺色 logo 字、title sponsor 大、其餘小
- **footer-faq**：每條 FAQ 用 `<details>` 展開、border-bottom 細線

## Do / Don't

| Do | Don't |
| --- | --- |
| 多層背景色製造深度（至少 3 層） | 整頁同一個黑底 — 平淡無聊 |
| 文字最多用 92% 白（#f5f5f7） | 用純白（#fff），會在暗背景上太刺眼 |
| accent 色節制使用（每個區塊不超過 3 處） | 整頁 neon 滿天飛 — 干擾資訊層次 |
| 圖片上加 dark overlay 確保文字可讀 | 直接把文字壓在亮圖上 |
| 邊框極輕但可見，靠 rgba 白 0.08-0.16 | 用實心暗灰邊框 |

## Required Output Contract

- 對比度：92% 白 (#f5f5f7) 在 #15151c 上 ≈ 13.5:1，遠超 AA
- 9 section 齊全、12 樂團、3 票價、9 贊助商
- 不外連 CDN，相對路徑圖片
- 響應式三斷點

## Required Images

依 `assets-manifest.json`，所有圖片建議拍攝風格為「低光夜景、高對比、單色光源」。

## Reference Snippet

暗卡基底：
```css
.card {
  background: var(--color-bg-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 24px;
}
.card-elevated {
  background: var(--color-bg-2);
  box-shadow: var(--shadow-card);
}
.card-headliner {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 1px var(--color-accent),
              0 0 32px var(--color-accent-glow);
}
```

Accent 發光文字（Hero 副標）：
```css
.glow-text {
  color: var(--color-accent);
  text-shadow:
    0 0 12px var(--color-accent-glow),
    0 0 32px var(--color-accent-glow);
}
```

Hero image overlay：
```css
.hero {
  position: relative;
  overflow: hidden;
}
.hero img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.55;
  filter: saturate(0.85) contrast(1.05);
}
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, var(--color-bg-0) 75%);
}
```

CTA：
```css
.btn-primary {
  background: var(--color-accent);
  color: var(--color-bg-0);
  border: none;
  padding: 14px 28px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  letter-spacing: 0.04em;
  box-shadow: 0 0 0 1px var(--color-accent), 0 0 24px var(--color-accent-glow);
}
```
