---
name: design-chinoiserie
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Chinese Chinoiserie / Guochao (中國風國潮) style. Triggers on 中國風、國潮、Chinoiserie、Guochao、東方美學、水墨、宋體、傳統與現代融合、紅黑金、傳統花紋.
user-invocable: true
---

# 中國風國潮 Chinoiserie / Guochao — 島嶼共鳴 2026

## Style Philosophy

「國潮」是 2010 年代後中國新興的視覺潮流——把傳統文化（宋體字、水墨、傳統紋樣、紅黑金配色）以**當代設計語言重新組裝**。不是復古博物館，而是潮牌 T-shirt 上的故宮 ——年輕、自信、自帶圖騰。在音樂節網頁中，這風格讓「島嶼共鳴」變成**一場將獨立音樂節置於傳統文化容器中的潮流活動**：朱砂紅與墨黑為主色、宋體標題與現代無襯線並排、傳統雲紋飄帶為點綴。

三個視覺辨識特徵：
1. **朱砂紅 + 墨黑 + 金（鎏金、燙金）** 三色為主
2. **粗體宋體字 + 現代無襯線**對位、用毛筆筆觸點綴
3. **傳統花紋 / 雲紋 / 印章** 作為裝飾元素

## Design Tokens

```css
:root {
  --cn-paper: #f5ecd9;          /* 宣紙米 */
  --cn-paper-2: #ece1c5;
  --cn-ink: #1a1714;            /* 墨黑 */
  --cn-red: #c92a2a;            /* 朱砂紅 */
  --cn-red-dark: #8a0e0e;
  --cn-gold: #c89860;           /* 鎏金 */
  --cn-gold-dark: #8a6638;
  --cn-jade: #2c6048;           /* 翠玉 */

  --color-bg: var(--cn-paper);
  --color-fg: var(--cn-ink);
  --color-accent: var(--cn-red);

  --radius-none: 0;
  --radius-sm: 4px;

  --font-display: 'PingFang TC', 'Noto Serif TC', 'STKaiti', 'Songti TC', serif;
  --font-display-song: 'STSong', 'Songti TC', 'Noto Serif TC', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'STKaiti', sans-serif;
  --font-numeric: 'Noto Serif TC', 'STSong', serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 1.05 / 800 / 宋體 / 0.04em | Hero |
| h1 | clamp(32px, 5vw, 56px) / 1.15 / 700 / 宋體 | 區塊 |
| h2 | 22px / 1.3 / 600 / 宋體 | 子標 |
| body | 15px / 1.85 / 400 / 黑體 | 段落 |
| caption | 11px / 1.5 / 500 / 0.18em | label |
| number | clamp(72px, 12vw, 160px) / 0.9 / 700 / 宋體 | 大字數字 |

中文配色以墨黑為主、紅金為強調。

## Layout Rules

- 背景：宣紙米色 + 細微 noise + 邊角小金色雲紋 SVG
- 容器寬度：max-width 1180px
- 排版兼有古典直書（小段引言）與現代橫書（主要內容）
- 段落間用「卷軸」分隔（粗紅色長線 + 兩端小裝飾）
- 章節編號用大圈紅印（中文一二三四五六）

各區塊構圖：
- **hero**：左偏右大字「島嶼共鳴」宋體大字 + 右上角朱印 + 左下方副標 + 中央/底部一道金色雲紋 + 紅色 CTA 按鈕
- **about**：左 1/3 直書引文 + 右 2/3 段落，配 4 個中文數字（六/三/十二/二萬五千）大字
- **lineup**：12 樂團名以**對聯感**呈現，每行樂團名宋體大字 + 國別 + 曲風 + 上場資訊；headliner 配朱印「首演」
- **schedule**：3 day 用「卷軸」表呈現，時段用宋體大字
- **venues**：3 段，配傳統園林意象，標題 prefix 一二三 + 卷軸線分隔
- **tickets**：3 張票卡仿「拜帖」樣式，外圍金色細邊、內含宋體大字票價
- **travel**：3 步驟，序號用毛筆書法風大字
- **sponsors**：純文字三組分級，title 配朱紅大圓「壹」
- **footer-faq**：仿「典籍問答」，Q 配「問」紅圓字、A 配「答」墨字

## Do / Don't

| Do | Don't |
| --- | --- |
| 朱砂紅 + 墨黑 + 金為核心 | 用粉色 / 螢光色 |
| 宋體標題 + 現代無襯線內文對位 | 全用黑體 |
| 加金色雲紋 / 朱印 / 對聯感裝飾 | 完全無傳統元素 |
| 章節用一二三 / 壹貳參 編號 | 用阿拉伯數字 |
| 直書引文至少 1 處 | 全橫書、失去東方語感 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。鼓勵 ink wash + 傳統紋樣風。

## Reference Snippet

朱印：
```css
.seal {
  display: inline-block;
  width: 64px; height: 64px;
  background: var(--cn-red);
  color: var(--cn-paper);
  text-align: center;
  line-height: 64px;
  font-family: var(--font-display-song);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;
  border: 3px solid var(--cn-red-dark);
  transform: rotate(-4deg);
  position: relative;
}
```

雲紋卷軸線分隔：
```css
.scroll-divider {
  height: 36px;
  background:
    linear-gradient(90deg,
      transparent 0, transparent 8%,
      var(--cn-red) 8%, var(--cn-red) 92%,
      transparent 92%, transparent 100%);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: 0 50%;
  position: relative;
}
.scroll-divider::before,
.scroll-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 18px; height: 18px;
  background: var(--cn-gold);
  border-radius: 50%;
  transform: translateY(-50%);
  border: 2px solid var(--cn-red);
}
.scroll-divider::before { left: 6%; }
.scroll-divider::after  { right: 6%; }
```

大字數字：
```css
.song-numeral {
  font-family: var(--font-display-song);
  font-size: clamp(72px, 12vw, 160px);
  font-weight: 700;
  line-height: 0.9;
  color: var(--cn-red);
  letter-spacing: -0.02em;
}
```

CTA：
```css
.btn-cn {
  display: inline-block;
  background: var(--cn-red);
  color: var(--cn-paper);
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  padding: 14px 36px;
  border: 2px solid var(--cn-gold);
  letter-spacing: 0.12em;
  position: relative;
}
.btn-cn::before,
.btn-cn::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 10px; height: 10px;
  background: var(--cn-gold);
  transform: translateY(-50%) rotate(45deg);
}
.btn-cn::before { left: -5px; }
.btn-cn::after  { right: -5px; }
```

直書引文：
```css
.tategaki-quote {
  writing-mode: vertical-rl;
  font-family: var(--font-display-song);
  font-size: 18px;
  letter-spacing: 0.25em;
  color: var(--cn-ink);
  line-height: 2.2;
  border-right: 2px solid var(--cn-red);
  padding: 0 16px 0 0;
}
```
