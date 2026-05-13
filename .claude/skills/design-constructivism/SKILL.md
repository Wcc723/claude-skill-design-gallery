---
name: design-constructivism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Russian Constructivism (構成主義) style. Triggers on Constructivism、構成主義、Rodchenko、El Lissitzky、革命海報、紅黑斜切、propaganda poster.
user-invocable: true
---

# 構成主義 Constructivism — 島嶼共鳴 2026

## Style Philosophy

俄羅斯構成主義（Constructivism, 1915–1934）由 Alexander Rodchenko、El Lissitzky、Varvara Stepanova 等人發起，是革命年代的視覺主張：**設計是工具，不是裝飾**。視覺語彙：紅與黑為主、強烈斜切構圖、粗條 sans-serif、攝影蒙太奇、幾何方塊、戲劇性的對角線。在音樂節網頁中，這風格把「島嶼共鳴」變成 **1925 年莫斯科獨立音樂工人聯盟的宣傳海報**——熱血、直白、行動主義。

三個視覺辨識特徵：
1. **紅黑（+ 米白）** 三色主導
2. **30°-45° 斜切構圖、強對角線**作為敘事節奏
3. **粗體 condensed sans、攝影蒙太奇**（黑白照片切剪疊壓）

## Design Tokens

```css
:root {
  --co-paper: #f3ecdf;          /* 革命傳單米色 */
  --co-paper-2: #ece1cb;
  --co-red: #c41e3a;            /* 革命紅 */
  --co-red-dark: #8b0000;
  --co-black: #0d0d0d;
  --co-grey: #45413a;

  --color-bg: var(--co-paper);
  --color-fg: var(--co-black);
  --color-accent: var(--co-red);

  --radius-none: 0;

  --shadow-print: 4px 4px 0 var(--co-red);

  --font-display: 'Impact', 'Arial Narrow Bold', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-display-cond: 'Impact', 'Arial Narrow Bold', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', sans-serif;
  --font-mono: 'Courier New', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(64px, 11vw, 168px) / 0.85 / 900 / -0.04em / uppercase | Hero |
| h1 | clamp(40px, 6vw, 64px) / 0.92 / 800 / -0.02em / uppercase | 區塊 |
| h2 | 22px / 1.15 / 700 / 0.04em / uppercase | 子標 |
| body | 15px / 1.55 / 400 | 段落 |
| caption | 11px / 1.3 / 700 / 0.2em / uppercase | label |

## Layout Rules

- 背景：米白紙色 + 革命紅色梯形 / 三角作為頁面結構分區
- 容器寬度：max-width 1200px
- 大量使用 `transform: rotate(-12deg)` 之類的傾斜
- 攝影蒙太奇感：黑白圖片 + 紅色色塊 + 白色印字
- 斜切色塊穿越頁面（用 clip-path 或 transform）

各區塊構圖：
- **hero**：左側斜切紅塊 + 右側巨大粗體黑字標題傾斜 -8° + 下方黑色色塊 CTA
- **about**：1/3 紅色斜切色塊 + 2/3 黑字段落 + 4 個方塊數字、邊角覆蓋紅色三角
- **lineup**：12 樂團名以斜切排版、編號為大紅斜體；headliner 樂團名最大、覆蓋紅色斜塊
- **schedule**：3 個 day 用 `<table>` 樣式、表頭為紅底白字斜切
- **venues**：3 個矩形圖片（黑白濾鏡）+ 紅色斜邊配文字
- **tickets**：3 張票卡，方角實心邊框、VIP 為紅底白字、其餘為紙底黑字
- **travel**：3 步驟，序號用巨大粗紅字斜放
- **sponsors**：純文字三組、Title 用斜切紅色色塊背景
- **footer-faq**：純黑字 + Q 為紅色斜線開頭、A 為段落

## Do / Don't

| Do | Don't |
| --- | --- |
| 紅黑米三色配色嚴守 | 用多種色彩 |
| 斜切構圖、強對角線 | 水平垂直整齊排版 |
| 粗體 condensed sans / Impact 風 | 用 thin / serif 字體 |
| 攝影黑白濾鏡 + 紅色色塊 | 用彩色寫實照片 |
| 文字常用 uppercase 與緊密 letter-spacing | 全用 lowercase |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。**所有照片應以黑白風格生成**，網頁端可再加 CSS filter。

## Reference Snippet

斜切色塊：
```css
.diagonal-block {
  background: var(--co-red);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  padding: 40px 60px 60px 40px;
  color: var(--co-paper);
}
```

斜放標題：
```css
.tilted-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(64px, 11vw, 168px);
  line-height: 0.85;
  letter-spacing: -0.04em;
  color: var(--co-black);
  transform: rotate(-6deg);
  transform-origin: left bottom;
  text-transform: uppercase;
}
.tilted-title em {
  font-style: normal;
  color: var(--co-red);
}
```

攝影蒙太奇：
```css
.photo-montage {
  position: relative;
}
.photo-montage img {
  filter: grayscale(1) contrast(1.1);
  display: block;
  width: 100%;
}
.photo-montage::before {
  content: '';
  position: absolute;
  top: 10%; left: 60%;
  width: 40%; height: 60%;
  background: var(--co-red);
  mix-blend-mode: multiply;
  clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%);
}
```

CTA：
```css
.btn-revolution {
  display: inline-block;
  background: var(--co-black);
  color: var(--co-paper);
  padding: 14px 32px;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transform: skewX(-8deg);
}
.btn-revolution span { display: inline-block; transform: skewX(8deg); }
.btn-revolution.red { background: var(--co-red); }
```

斜切色塊區隔：
```css
.diagonal-divider {
  background: var(--co-red);
  height: 24px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 5% 100%);
  margin: 0;
}
```
