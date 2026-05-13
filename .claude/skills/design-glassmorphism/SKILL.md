---
name: design-glassmorphism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in the Glassmorphism (玻璃擬態) visual style. Triggers on terms like 玻璃擬態、Glassmorphism、磨砂玻璃、frosted glass UI.
user-invocable: true
---

# 玻璃擬態 Glassmorphism — 島嶼共鳴 2026

## Style Philosophy

玻璃擬態誕生於 2020 年 macOS Big Sur 與 Windows 11 Mica 的同步演化，核心是「**透明感層次**」——元素彷彿是漂浮在背景上的霧面玻璃片。它讓資訊有了「深度」，又不至於像扁平風格那樣冷感。在這份音樂節網頁裡，玻璃擬態要呼應**夜晚海邊舞台**的氛圍：燈光透過水霧、半透氣息、漸層光暈穿過層層介面。

三個視覺辨識特徵：
1. **backdrop-filter: blur()** 配半透明白底，讓背景發光色穿透
2. **彩色漸層底圖**（紫藍粉橘），玻璃片之間的縫隙必須露出色彩
3. **白色細邊框與微光陰影**，給玻璃片明確的物理邊界

## Design Tokens

```css
:root {
  /* 色彩系統：底圖必須有強烈漸層才能襯托玻璃感 */
  --color-bg-grad-1: #1e1b4b;       /* indigo-950 */
  --color-bg-grad-2: #7e22ce;       /* purple-700 */
  --color-bg-grad-3: #f97316;       /* orange-500 */
  --color-bg-grad-4: #db2777;       /* pink-600 */

  --color-glass-bg: rgba(255, 255, 255, 0.12);
  --color-glass-bg-strong: rgba(255, 255, 255, 0.18);
  --color-glass-border: rgba(255, 255, 255, 0.28);
  --color-glass-border-strong: rgba(255, 255, 255, 0.42);

  --color-fg: #f8fafc;              /* slate-50 — 確保 AA */
  --color-fg-soft: rgba(248, 250, 252, 0.78);
  --color-fg-mute: rgba(248, 250, 252, 0.58);
  --color-accent: #fbbf24;          /* amber-400 — CTA */
  --color-accent-fg: #1e1b4b;

  --blur-glass: 18px;
  --blur-glass-strong: 32px;

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-pill: 999px;

  --shadow-glass: 0 8px 32px rgba(15, 23, 42, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.25);
  --shadow-lift: 0 20px 60px rgba(15, 23, 42, 0.35);

  --font-display: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.05 / 700 / -0.03em | Hero 主標 |
| h1 | clamp(32px, 4.5vw, 48px) / 1.2 / 700 / -0.02em | 區塊標題 |
| h2 | 24px / 1.3 / 600 / -0.01em | 子標 |
| body | 16px / 1.7 / 400 / 0.01em | 段落 |
| caption | 12px / 1.5 / 500 / 0.08em / uppercase | 標籤、kicker |

文字色一律用 `--color-fg`（接近白）以保證對比；輔助說明用 `--color-fg-soft`，避免低於 4.5:1。

## Layout Rules

- 全頁背景：固定 `position: fixed` 的 4 角漸層球（hero 區另外覆蓋一張 hero.webp 70% 透明度）
- 容器寬度：max-width 1180px，padding 28-40px
- 區塊節奏：每個 `<section>` 用一張大玻璃卡承載，section 之間留 96-120px 間距
- 玻璃卡：`backdrop-filter: blur(var(--blur-glass))`、`background: var(--color-glass-bg)`、`border: 1px solid var(--color-glass-border)`、`border-radius: var(--radius-lg)`

各區塊構圖：
- **hero**：60vh 以上、置中、display 標題下方放 chip 群（日期、地點、人次）、再下方 CTA 按鈕
- **about**：左文右數（grid 2 欄），4 個數字大字玻璃卡
- **lineup**：12 張樂團卡 grid（桌機 3 欄、平板 2 欄、手機 1 欄）；前 3 張用 `--color-glass-bg-strong` 與較強邊框標示 headliner
- **schedule**：3 個 day 縱列、每列為一張長玻璃卡、內含小時段卡片
- **venues**：3 張等寬玻璃卡橫排
- **tickets**：3 張票卡 grid、VIP 中央卡用 `--color-accent` 邊框加強
- **travel**：左文右玻璃步驟卡
- **sponsors**：4 + 5 兩欄排版，title sponsor 單卡放大
- **footer-faq**：accordion 樣式的 FAQ 玻璃條目

## Do / Don't

| Do | Don't |
| --- | --- |
| 玻璃卡背後必須有彩色漸層或圖片，否則「玻璃」失去意義 | 把玻璃卡放在純色背景上 — 失去半透意義 |
| 邊框使用淺色細邊（rgba 白 0.25-0.4） | 用實心邊框或暗色邊框 |
| 文字保持白色或近白色以維持對比 | 用半透明文字導致對比度低於 4.5:1 |
| 至少留 1px inset white shadow 強化「光從上方來」的物理感 | 亂用陰影方向造成燈光錯亂 |
| backdrop-filter 用 12-20px 範圍 | blur 過大（>40px）會讓底層完全模糊、玻璃感消失 |

## Required Output Contract

- 單檔 `index.html`，inline CSS、inline JS，檔案大小 ≤ 200 KB
- 9 個 `<section data-block="...">` 必須齊全：`hero / about / lineup / schedule / venues / tickets / travel / sponsors / footer-faq`
- 12 組樂團名一字不差、3 種票價（NT$ 2,200 / NT$ 5,400 / NT$ 12,800）齊備、9 個贊助商名出現
- 不引用任何外部 CDN（包含 Google Fonts、Tailwind CDN、icon library 等）
- 圖片用相對路徑 `assets/<filename>.webp`
- WCAG AA 對比度：所有玻璃卡上的主要文字必須 ≥ 4.5:1
- 響應式：1180 / 768 / 420 三斷點

## Required Images

依 `assets-manifest.json` 產出。引用範例：
```html
<img src="assets/hero-bg.webp" alt="夜晚都蘭灣海邊舞台燈光" />
```

## Reference Snippet

玻璃卡關鍵 CSS：
```css
.glass {
  background: var(--color-glass-bg);
  backdrop-filter: blur(var(--blur-glass)) saturate(160%);
  -webkit-backdrop-filter: blur(var(--blur-glass)) saturate(160%);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-glass);
}
```

全域漸層底圖：
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, var(--color-bg-grad-2) 0%, transparent 45%),
    radial-gradient(circle at 85% 30%, var(--color-bg-grad-3) 0%, transparent 50%),
    radial-gradient(circle at 50% 90%, var(--color-bg-grad-4) 0%, transparent 55%),
    var(--color-bg-grad-1);
  z-index: -1;
}
```

CTA 按鈕：
```css
.cta {
  background: var(--color-accent);
  color: var(--color-accent-fg);
  border: none;
  padding: 16px 28px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  letter-spacing: 0.05em;
  box-shadow: 0 8px 24px rgba(251, 191, 36, 0.35);
}
```
