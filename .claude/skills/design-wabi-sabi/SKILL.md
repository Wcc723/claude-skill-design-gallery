---
name: design-wabi-sabi
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Japanese Wabi-Sabi (日式禪意 / 侘寂) style. Triggers on wabi-sabi、侘寂、日式禪意、和風、Zen、ink wash、sumi-e、tea ceremony minimalism、紙質感、Muji aesthetic.
user-invocable: true
---

# 日式禪意 Wabi-Sabi — 島嶼共鳴 2026

## Style Philosophy

侘寂（wabi-sabi）是日本美學的核心：**接受不完美、無常、不完整**。它與西方的「完美無瑕」是對立的——一只破碎再用金繼修補的茶碗、一片掉了角的和紙、苔蘚從石縫中長出。視覺核心是 **米色紙質、墨色筆觸、大量留白、自然瑕疵**。在音樂節網頁中，這風格把「島嶼共鳴」做成**京都茶室裡的一場靜默音樂會**——沒有喧鬧，只有對自然與當下的尊敬。

三個視覺辨識特徵：
1. **米色紙質背景**（slight grain texture）+ **墨黑文字** + **單一暖灰 accent**
2. **明朝體標題 + 細楷書體（中文用粗黑體 fallback）+ 細直書元素**
3. **大量留白、極少裝飾、自然不對稱、墨色筆觸圓圈點綴**

## Design Tokens

```css
:root {
  --wb-paper: #f0ead7;          /* 和紙米色 */
  --wb-paper-2: #e8e0c8;
  --wb-ink: #1c1815;            /* 墨黑 */
  --wb-ink-soft: #4a443d;
  --wb-ink-mute: #8c8475;
  --wb-stone: #6b6358;          /* 石灰 */
  --wb-stamp: #b8362f;          /* 朱印 */
  --wb-tea: #a47e3b;            /* 茶色 */

  --color-bg: var(--wb-paper);
  --color-fg: var(--wb-ink);
  --color-accent: var(--wb-stamp);

  --radius-none: 0;
  --radius-sm: 2px;
  --radius-circle: 50%;

  --font-display: 'Hiragino Mincho ProN', 'YuMincho', 'PingFang TC', 'Noto Serif TC', serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Hiragino Sans', 'Yu Gothic', sans-serif;
  --font-numeric: 'Hiragino Mincho ProN', 'Times', serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(40px, 6vw, 80px) / 1.15 / 400 / Mincho / 0.04em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 500 / Mincho | 區塊 |
| h2 | 20px / 1.45 / 500 | 子標 |
| body | 15px / 1.95 / 400 | 段落 — leading 極寬 |
| caption | 11px / 1.5 / 400 / 0.18em | label |
| vertical | direct vertical writing 直書 | 章節序號 / 引文 |

中文字符要**寬鬆**：letter-spacing 0.03-0.06em。

## Layout Rules

- 背景：和紙米色 + 微 noise + 偶爾出現的「墨點」（小黑圓圈裝飾）
- 容器寬度：**窄**（max-width 880px），讓留白極多
- section 間距：120-180px
- **不對稱**：標題與內容不必置中、可偏左偏右
- 直書元素：用 CSS `writing-mode: vertical-rl` 製作章節編號或引言

各區塊構圖：
- **hero**：右側直書日期 + 場地、中央偏左明朝大字「島嶼共鳴」、左下小段落、底部朱印
- **about**：左 1/3 一段直書引文 + 右 2/3 段落、4 個極簡數字配漢字單位
- **lineup**：12 樂團名以**直書 / 橫書並列**呈現，hairline 細線分隔；headliner 配朱印 `頭`
- **schedule**：3 day 像茶室桌牌一樣垂直排列、時段表簡素
- **venues**：3 段配水墨小圈（純 CSS）為標記
- **tickets**：3 段純文字，價格用明朝大字
- **travel**：直書編號 + 橫書文案
- **sponsors**：純文字列表、title 配朱印圈
- **footer-faq**：問答用 hairline 分隔、 Q 配朱色圓點、A 縮排

## Do / Don't

| Do | Don't |
| --- | --- |
| 米色紙底 + 墨黑文字 + 朱紅小印 | 用鮮豔多彩配色 |
| 大量留白、不對稱、自然瑕疵感 | 整齊對稱、塞滿 |
| 明朝 / 楷書字體 | 用無襯線粗黑體 |
| 直書元素至少 1 處 | 全橫書、失去日式氛圍 |
| 配少量水墨圓點 / 線條（純 CSS） | 用 emoji 或鮮明圖示 |

## Required Output Contract

通用契約。寬鬆 line-height、大量留白為核心。

## Required Images

依 `assets-manifest.json`。鼓勵水墨風格圖片（黑白、抽象、墨韻）。

## Reference Snippet

和紙紋理：
```css
body {
  background:
    radial-gradient(circle at 20% 15%, rgba(28,24,21,0.025) 0 1px, transparent 1px),
    radial-gradient(circle at 70% 60%, rgba(28,24,21,0.02) 0 1px, transparent 1px),
    var(--wb-paper);
  background-size: 280px 280px;
}
```

直書元素：
```css
.tategaki {
  writing-mode: vertical-rl;
  font-family: var(--font-display);
  font-size: 14px;
  letter-spacing: 0.18em;
  color: var(--wb-ink-soft);
  line-height: 2;
  white-space: nowrap;
}
```

朱印：
```css
.stamp {
  display: inline-block;
  width: 56px; height: 56px;
  border: 2px solid var(--wb-stamp);
  color: var(--wb-stamp);
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  line-height: 52px;
  transform: rotate(-4deg);
  letter-spacing: 0;
}
```

水墨圓點裝飾：
```css
.ink-dot {
  width: 14px; height: 14px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 30% 30%,
      var(--wb-ink) 0%,
      var(--wb-ink) 60%,
      rgba(28,24,21,0.4) 80%,
      transparent 100%);
  display: inline-block;
  margin-right: 12px;
  filter: blur(0.4px);
}
```

明朝大標：
```css
.mincho-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: 0.04em;
  color: var(--wb-ink);
}
```

Hairline 區隔：
```css
.zen-divider {
  border: none;
  border-top: 1px solid var(--wb-ink-mute);
  margin: 0;
  opacity: 0.45;
}
```
