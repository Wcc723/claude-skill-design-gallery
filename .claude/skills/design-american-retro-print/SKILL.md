---
name: design-american-retro-print
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in American Retro Print / Mid-century screen-print style. Triggers on 美式復古印刷、screen print、woodstock poster、70s rock poster、retro印刷、Saul Bass、Aaron Draplin.
user-invocable: true
---

# 美式復古印刷 American Retro Print — 島嶼共鳴 2026

## Style Philosophy

借鑑 1950–1970 年代美國印刷年代——Saul Bass 的電影海報、Woodstock 1969 的搖滾海報、Hatch Show Print 的木刻活字、現代設計師 Aaron Draplin 的 logo 哲學。核心是 **限定 4-5 色印刷 + 粗體 slab-serif + 網點質感**，所有設計痕跡來自「機械印刷的不完美」：油墨偏色、套色錯位、紙張紋理。在音樂節網頁裡，這風格把獨立音樂節打扮成 **1971 年某個夏天舉辦的傳奇戶外搖滾節**——粗獷、紙質、世代感。

三個視覺辨識特徵：
1. **限制調色盤**（4-5 色）：奶油白、油墨黑、磚紅、芥末黃、海軍藍
2. **粗體 slab-serif 標題、letterpress 凸感、scratchy texture**
3. **網點 halftone、套色偏移、紙質背景**（用 SVG noise filter / CSS gradient）

## Design Tokens

```css
:root {
  --rp-paper: #f4e9d3;          /* cream paper */
  --rp-ink: #232020;            /* off-black ink */
  --rp-red: #c83a30;            /* brick red */
  --rp-mustard: #e3a82e;        /* mustard yellow */
  --rp-navy: #1e3a5f;           /* deep navy */
  --rp-teal: #2e7d7d;

  --color-bg: var(--rp-paper);
  --color-fg: var(--rp-ink);
  --color-accent: var(--rp-red);

  --radius-none: 0;
  --radius-sm: 2px;

  --shadow-print: 2px 2px 0 var(--rp-red);
  --shadow-misprint: 3px 3px 0 var(--rp-mustard);

  --font-display: 'Georgia', 'Bodoni MT', 'PingFang TC', 'Noto Sans TC', serif;
  --font-display-bold: 'Georgia', 'Times New Roman', 'PingFang TC', serif;
  --font-body: 'Georgia', 'PingFang TC', 'Noto Sans TC', serif;
  --font-condensed: 'Impact', 'PingFang TC', sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 0.9 / 900 / -0.02em / uppercase | Hero |
| h1 | clamp(36px, 5vw, 56px) / 1.0 / 800 / uppercase | 區塊大標 |
| h2 | 22px / 1.25 / 700 / uppercase / 0.04em | 子標 |
| body | 16px / 1.65 / 400 / Georgia | 段落 |
| caption | 11px / 1.3 / 700 / 0.2em / uppercase | label |

## Layout Rules

- 背景：奶油紙底 + 細微 noise texture（用 SVG filter 或 CSS gradient）
- 容器寬度：max-width 1100px
- 區塊邊框：常見粗黑橫線（border-top 6-8px）作為區塊分隔
- 印刷風格 typography：頂端套色印字、letterpress 字體做 deep shadow

各區塊構圖：
- **hero**：仿 Woodstock 海報，巨大粗體 condensed 大字「島嶼共鳴」放上方、中央放音樂家剪影插圖、下方手繪風日期 + 場地、最下方紅色橫條 CTA
- **about**：粗體年代序章「EST. 2021 · VOL. VI」+ 段落，網點紋理底
- **lineup**：12 樂團名以 condensed 大字列表式呈現（像 Hatch Show Print 海報），headliner 用大號 + red color
- **schedule**：3 個 day 海報並排，每個 day 仿單張小傳單樣式
- **venues**：3 段，每段配復古鋼筆插畫風格圖示
- **tickets**：仿復古票根（perforated edge + ticket number + 紅色 admit one stamp）
- **travel**：圖文混排，左邊 vintage 圖示、右邊 Georgia 段落
- **sponsors**：仿賽事節目本贊助名單頁，title 用 60pt slab 字、其他依規模遞減
- **footer-faq**：FAQ 用 Q. A. 印刷格式排版、邊角加 Print mark

## Do / Don't

| Do | Don't |
| --- | --- |
| 顏色嚴守 4-5 色調色盤 | 用 8 色以上全光譜 |
| 粗體 slab-serif 標題、letterpress 風格 | 用 thin 字重或現代 sans-serif |
| 加 noise texture 模擬紙質 | 用平滑漸層 |
| 套色偏移效果（shadow-print） | 用模糊陰影 |
| 用全大寫拼寫英文，中文用方正粗黑或粗 Georgia | 全用 lowercase 風格 |

## Required Output Contract

通用契約。鼓勵用 SVG noise filter 製作紙質背景。

## Required Images

依 `assets-manifest.json`，建議插畫風格圖（不要相片）。

## Reference Snippet

紙質紋理背景：
```css
body {
  background-color: var(--rp-paper);
  background-image:
    radial-gradient(circle at 15% 20%, rgba(35,32,32,0.04) 0 1px, transparent 1px),
    radial-gradient(circle at 70% 50%, rgba(35,32,32,0.03) 0 1px, transparent 1px),
    radial-gradient(circle at 35% 85%, rgba(35,32,32,0.04) 0 1px, transparent 1px);
  background-size: 200px 200px;
}
```

套色偏移標題：
```css
.misprint-title {
  font-family: var(--font-display);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--rp-ink);
  text-shadow: 3px 3px 0 var(--rp-red), 5px 5px 0 var(--rp-mustard);
  letter-spacing: -0.02em;
}
```

復古票根：
```css
.ticket-stub {
  background: var(--rp-paper);
  border: 2px solid var(--rp-ink);
  padding: 24px;
  position: relative;
  font-family: var(--font-body);
}
.ticket-stub::before,
.ticket-stub::after {
  content: '';
  position: absolute;
  top: 50%; transform: translateY(-50%);
  width: 24px; height: 24px;
  border-radius: 50%;
  background: var(--rp-paper);
  border: 2px solid var(--rp-ink);
}
.ticket-stub::before { left: -14px; }
.ticket-stub::after  { right: -14px; }
.ticket-stub .stamp {
  display: inline-block;
  border: 2px solid var(--rp-red);
  color: var(--rp-red);
  padding: 4px 12px;
  font-weight: 900;
  letter-spacing: 0.1em;
  transform: rotate(-6deg);
}
```

Section divider（粗黑橫線 + 標籤）：
```css
.print-divider {
  border-top: 8px solid var(--rp-ink);
  padding-top: 32px;
  margin-top: 80px;
}
.print-label {
  display: inline-block;
  background: var(--rp-ink);
  color: var(--rp-paper);
  padding: 4px 14px;
  font-family: var(--font-condensed);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
}
```
