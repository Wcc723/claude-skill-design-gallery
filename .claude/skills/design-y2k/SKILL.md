---
name: design-y2k
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Y2K (千禧年) aesthetic. Triggers on Y2K、千禧、2000s、cyber-cute、chrome、frutiger aero、半透塑膠、Lisa Frank.
user-invocable: true
---

# Y2K 千禧 — 島嶼共鳴 2026

## Style Philosophy

Y2K 是 1999–2003 年那場關於「電腦會不會把世界搞壞」的集體焦慮，孕育出的視覺則完全相反——**樂觀、塑膠感、未來感**。代表元素：銀色金屬、藍色玻璃、星形閃光、3D 球體、低多邊形怪物、Internet Explorer 6 的小圖示。在音樂節網頁中，這風格讓「島嶼共鳴」變成 **2002 年某個少女雜誌的青春期幻想**：又閃又閃又閃，每個按鈕都能 hover 變大。

三個視覺辨識特徵：
1. **金屬銀漸層 + 電光藍** 為主色
2. **3D 球體、星型 sticker、Lens flare 高光、心型 / 蝴蝶結 icon**
3. **過度可愛的小圖示 + 中世紀體 / pixel 字混搭**

## Design Tokens

```css
:root {
  --y2k-bg-1: #cfe9ff;          /* baby blue */
  --y2k-bg-2: #ffd9f0;          /* baby pink */
  --y2k-bg-3: #e0f7ff;          /* ice blue */
  --y2k-silver-1: #f0f4f8;
  --y2k-silver-2: #c4d1de;
  --y2k-silver-3: #8da4bd;
  --y2k-chrome: linear-gradient(180deg, #f8fbff 0%, #c4d8ee 35%, #6f92b7 60%, #c4d8ee 75%, #f8fbff 100%);

  --y2k-fg: #1a1a3e;            /* deep navy */
  --y2k-fg-soft: #4a4a7a;
  --y2k-pink: #ff4f99;
  --y2k-blue: #4fa3ff;
  --y2k-accent: #ff4f99;
  --y2k-yellow: #ffe55c;

  --color-bg: var(--y2k-bg-1);
  --color-fg: var(--y2k-fg);
  --color-accent: var(--y2k-accent);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --shadow-button: inset 0 1px 0 rgba(255,255,255,0.7), 0 4px 8px rgba(31, 65, 110, 0.25);
  --shadow-card: 0 6px 16px rgba(64, 109, 175, 0.18);
  --shadow-glow: 0 0 12px var(--y2k-pink);

  --font-display: 'Trebuchet MS', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'Verdana', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-pixel: 'Courier New', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 7vw, 88px) / 1.05 / 800 / -0.01em | Hero |
| h1 | clamp(28px, 4vw, 42px) / 1.2 / 700 | 區塊大標 |
| h2 | 20px / 1.3 / 700 | 子標 |
| body | 14px / 1.65 / 400 | 段落 |
| caption | 11px / 1.4 / 700 / 0.06em / uppercase | label |

文字常用 navy（#1a1a3e）配粉色 / 藍色高亮，營造卡通對話框感。

## Layout Rules

- 主背景：淡藍 + 淡粉漸層 + 散布閃光星星 SVG / pseudo-element
- 容器寬度：max-width 1100px
- 卡片：銀色金屬漸層邊框 + 圓角 + 高光 inset shadow
- 元素互動：按鈕、卡片邊角常見 ⋆ 星型小裝飾

各區塊構圖：
- **hero**：3D 銀色徽章中央 + 大標 + 副標 + 蝴蝶結圖示 + 「立即購票 ✦」按鈕
- **about**：4 個圓形閃亮 sticker（每個一個數字，邊框金屬感）
- **lineup**：12 張卡，每張卡上方 3D 唱片圖示、下方資訊；headliner 卡用 hot pink 邊框 + 心型角標
- **schedule**：3 日時間表為「IM messenger 對話框」風格
- **venues**：3 張卡，金屬邊框圓角，內含 stage 圖
- **tickets**：3 張票卡，VIP 票用 chrome silver 漸層卡 + 星型角標
- **travel**：步驟卡像 iPod 列表
- **sponsors**：銀色徽章列、title sponsor 用最大徽章
- **footer-faq**：用 Microsoft Messenger 風格氣泡 + 點擊展開

## Do / Don't

| Do | Don't |
| --- | --- |
| 大量使用銀色金屬漸層 + 高光 | 用純色 flat 背景 |
| 添加星型、愛心、蝴蝶結等小裝飾 | 完全冷感無裝飾 |
| 按鈕一律 pill 樣式 + chrome 漸層 + inset highlight | 用純色方按鈕 |
| 文字保持深色（navy）以確保對比 | 深底配淺字 — y2k 是淺底深字風格 |
| 卡片角落可加 ✦ ✧ 等 unicode 符號 | 把元素放得太擁擠到失序 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

Chrome 按鈕：
```css
.chrome-btn {
  background: var(--y2k-chrome);
  color: var(--y2k-fg);
  border: 1px solid #6f92b7;
  border-radius: var(--radius-pill);
  padding: 12px 28px;
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  box-shadow: var(--shadow-button);
  cursor: pointer;
  transition: transform 0.15s ease;
}
.chrome-btn:hover { transform: translateY(-1px) scale(1.02); }
```

3D 球體（用 radial-gradient）：
```css
.orb {
  width: 80px; height: 80px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 20%, #ffffff 0%, var(--y2k-pink) 40%, #b21f64 100%);
  box-shadow: 0 8px 18px rgba(178, 31, 100, 0.4), inset 0 -8px 16px rgba(0,0,0,0.2);
}
```

閃光星型 background：
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 10%, rgba(255,255,255,0.8) 0 1px, transparent 2px),
    radial-gradient(circle at 80% 30%, rgba(255,255,255,0.6) 0 1px, transparent 2px),
    radial-gradient(circle at 50% 70%, rgba(255,255,255,0.7) 0 1px, transparent 2px),
    radial-gradient(circle at 30% 90%, rgba(255,255,255,0.5) 0 1px, transparent 2px);
  background-size: 600px 600px, 800px 800px, 400px 400px, 700px 700px;
  opacity: 0.6;
}
```

Sticker card：
```css
.sticker-card {
  background: white;
  border: 3px solid var(--y2k-silver-2);
  border-image: linear-gradient(135deg, #f8fbff, #6f92b7, #f8fbff) 1;
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-card);
  position: relative;
}
.sticker-card::after {
  content: '✦';
  position: absolute;
  top: -10px; right: -10px;
  color: var(--y2k-pink);
  font-size: 24px;
  text-shadow: var(--shadow-glow);
}
```
