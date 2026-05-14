---
name: design-bauhaus
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Bauhaus (包浩斯) style. Triggers on Bauhaus、包浩斯、Herbert Bayer、Kandinsky、幾何構成、primary colors red blue yellow、circle square triangle.
user-invocable: true
---

# 包浩斯 Bauhaus — 島嶼共鳴 2026

## Style Philosophy

包浩斯（1919–1933）是德國工藝美術學院運動的縮影：**形隨機能**、**幾何即美**、**三原色與基本形狀就足夠表達一切**。康定斯基把三原色與三幾何（圓圓圓對應紅黃藍 / 三角方圓）固定下來，這套美學至今仍是現代設計的母語。在音樂節網頁中，包浩斯讓「島嶼共鳴」回到 100 年前的德國設計學院——一切都是大圓、大三角、大方塊與粗體 sans-serif，紅藍黃的對位構成。

三個視覺辨識特徵：
1. **三原色（紅 / 黃 / 藍）+ 黑白**為絕對主色
2. **大尺寸幾何形狀**（圓、三角、方）作為構圖元素而非裝飾
3. **粗體 grotesque sans-serif、極大字體、緊密 leading**

## Design Tokens

```css
:root {
  --bh-white: #f7f3ea;          /* 米白紙 */
  --bh-black: #111111;
  --bh-red: #d33023;            /* Bauhaus red */
  --bh-blue: #2253a8;           /* Bauhaus blue */
  --bh-yellow: #f4c027;         /* Bauhaus yellow */

  --color-bg: var(--bh-white);
  --color-fg: var(--bh-black);
  --color-accent: var(--bh-red);

  --radius-none: 0;
  --radius-circle: 50%;

  --font-display: 'Futura', 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', sans-serif;
  --font-body: 'Futura', 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', sans-serif;
  --font-condensed: 'Impact', sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(72px, 12vw, 180px) / 0.85 / 900 / -0.02em | Hero / 大型標題 |
| h1 | clamp(40px, 6vw, 72px) / 0.95 / 800 / -0.01em | 區塊大標 |
| h2 | 22px / 1.1 / 700 / 0.02em | 子標 |
| body | 15px / 1.55 / 400 | 段落 |
| caption | 11px / 1.3 / 700 / 0.18em / uppercase | label / kicker |

包浩斯字體偏好：geometric sans-serif（Futura / Avenir / Geometric Sans），中文用粗黑體。

## Layout Rules

- 背景：米白色 + 巨大幾何形狀（一個紅圓、一個藍三角、一個黃方塊）固定於頁面背景
- 容器寬度：max-width 1200px
- 幾何形狀互相疊壓、形成構成主義式的張力（部分穿越文字、用 mix-blend-mode）
- 排版常採大膽不對稱布局（左下角小、右上角超大）

各區塊構圖：
- **hero**：左下角小 caption + 中央一個巨大紅圓 + 巨大標題壓在圓上 + 右上角黃方塊內 CTA
- **about**：左藍三角 + 右文字 + 4 個圓形數字（紅 / 黃 / 藍 / 黑各一）
- **lineup**：12 個方格構成 grid、每格是樂團卡，背景輪換紅 / 藍 / 黃 / 白；headliner 卡用實心紅 / 藍底白字
- **schedule**：3 個 day 用三角 / 方 / 圓圖示標誌，時段表格用 hairline 黑線
- **venues**：3 個大幾何圖示（圓三角方）對應 3 舞台、各佔 1/3 + 文字
- **tickets**：3 張票卡分別配紅 / 黃 / 藍背景、白字大價格
- **travel**：3 步驟，序號 01 02 03 設計成紅 / 黃 / 藍粗體大字
- **sponsors**：純文字三組，title 用粗體 60px、配紅圓 icon
- **footer-faq**：每條 FAQ 為 hairline 黑分隔，問題用粗體

## Do / Don't

| Do | Don't |
| --- | --- |
| 顏色嚴守三原色 + 黑白 | 用粉色 / 紫色 / 漸層 |
| 大尺寸幾何形狀作為主要構圖元素 | 用裝飾性小圖案 |
| 粗體 sans-serif、緊密 leading | 用襯線字體或細字 |
| 非對稱、緊張的布局 | 完全置中對稱 |
| 形狀直接觸碰甚至壓到文字 | 形狀與文字完全分離 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。包浩斯本身就是「幾何即圖案」，圖片可以少用，多用 CSS 純色幾何。

## Reference Snippet

幾何背景：
```css
.shape-circle {
  position: absolute;
  width: 400px; height: 400px;
  background: var(--bh-red);
  border-radius: 50%;
}
.shape-triangle {
  position: absolute;
  width: 0; height: 0;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 360px solid var(--bh-blue);
}
.shape-square {
  position: absolute;
  width: 320px; height: 320px;
  background: var(--bh-yellow);
}
```

數字大字：
```css
.numeral {
  font-family: var(--font-display);
  font-size: clamp(80px, 12vw, 200px);
  font-weight: 900;
  line-height: 0.85;
  color: var(--bh-black);
  letter-spacing: -0.04em;
}
.numeral.red { color: var(--bh-red); }
.numeral.blue { color: var(--bh-blue); }
.numeral.yellow { color: var(--bh-yellow); }
```

色塊卡：
```css
.bauhaus-card {
  background: var(--bh-red);
  color: var(--bh-white);
  padding: 32px 28px;
  font-family: var(--font-display);
  position: relative;
}
.bauhaus-card.blue { background: var(--bh-blue); }
.bauhaus-card.yellow { background: var(--bh-yellow); color: var(--bh-black); }
.bauhaus-card.white {
  background: var(--bh-white);
  color: var(--bh-black);
  border: 2px solid var(--bh-black);
}
```

包浩斯式 hero composition：
```css
.bauhaus-hero {
  position: relative;
  height: 80vh;
  background: var(--bh-white);
  overflow: hidden;
}
.bauhaus-hero .shape-circle {
  top: 50%; left: 30%;
  transform: translate(-50%, -50%);
}
.bauhaus-hero .shape-triangle {
  right: 5%; top: 60%;
}
.bauhaus-hero .title {
  position: absolute;
  bottom: 20%;
  left: 8%;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(72px, 12vw, 180px);
  line-height: 0.85;
  color: var(--bh-black);
  mix-blend-mode: multiply;
  z-index: 2;
}
```
