---
name: design-taiwan-temple
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Taiwan Temple Carnival (台灣廟會 / 夜市) style. Triggers on 台灣廟會、夜市、酬神、北港、霓虹招牌、農民曆、流水席、辦桌、紅黃對比、舞台車.
user-invocable: true
---

# 台灣廟會 Taiwan Temple Carnival — 島嶼共鳴 2026

## Style Philosophy

台灣廟會是這座島嶼最濃烈的視覺文化載體——**霓虹招牌、紅黃強對比、廟柱對聯、辦桌粉紅塑膠桌布、流水席圓桌、舞台車金邊邊框、農民曆排版**。它毫不收斂、不講究品味、但飽含生命力。在音樂節網頁中，這風格把「島嶼共鳴」做成 **酬神音樂會 + 流水席 + 走唱舞台車的綜合體**：紅金主色、霓虹發光招牌、滿版圖騰、龍鳳元素混搭電子琴花車。

三個視覺辨識特徵：
1. **大紅大金 + 螢光黃綠藍輔助色**，俗艷飽和
2. **粗黑體標題 + 楷書 / 圓體輔助、霓虹發光招牌排版**
3. **金邊框、龍紋、鞭炮、香爐、燈籠** 等廟會符號

## Design Tokens

```css
:root {
  --tw-red: #d92e2e;             /* 廟會紅 */
  --tw-red-dark: #a01b1b;
  --tw-gold: #e9b73d;            /* 金 */
  --tw-gold-dark: #b48823;
  --tw-yellow: #ffd941;          /* 黃 */
  --tw-cream: #fff6e1;
  --tw-black: #1c1a16;
  --tw-neon-green: #2dff7e;      /* 招牌綠 */
  --tw-neon-blue: #1ebbff;       /* 招牌藍 */
  --tw-pink: #ff8aa3;            /* 辦桌粉 */

  --color-bg: var(--tw-red);
  --color-fg: var(--tw-cream);
  --color-accent: var(--tw-gold);

  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-circle: 50%;

  --shadow-neon-yellow: 0 0 8px var(--tw-yellow), 0 0 24px rgba(255, 217, 65, 0.6);
  --shadow-neon-blue: 0 0 8px var(--tw-neon-blue), 0 0 18px rgba(30, 187, 255, 0.5);
  --shadow-neon-green: 0 0 8px var(--tw-neon-green), 0 0 18px rgba(45, 255, 126, 0.5);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'STHeiti', 'Arial Black', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'STHeiti', sans-serif;
  --font-kai: 'STKaiti', 'KaiTi', 'PingFang TC', serif;
  --font-numeric: 'STKaiti', 'PingFang TC', sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 120px) / 0.95 / 900 / 0.06em | Hero 大字 |
| h1 | clamp(36px, 5vw, 60px) / 1.05 / 800 | 區塊大標 |
| h2 | 22px / 1.25 / 700 | 子標 |
| body | 15px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 700 / 0.16em | label |
| kai | 18px / 1.5 / 500 / 楷書 | 對聯 / 古意感 |

## Layout Rules

- 背景：紅色為主 + 金邊框 + 局部黃色發光區塊
- 容器寬度：max-width 1240px
- 元素邊框：粗金邊（4-6px solid gold），常見圓角 + 雙層邊框
- 廟會符號裝飾：對聯、燈籠、鞭炮（用 unicode 符號 / 純 CSS）

各區塊構圖：
- **hero**：滿版紅底 + 中央大金字「島嶼共鳴 2026」+ 上下對聯式副標（紅紙金字）+ 中央發光霓虹「立即購票」招牌按鈕
- **about**：金邊紅底卡 + 4 個圓形「香爐」風格數字（金邊圓 + 紅內 + 黃數字）
- **lineup**：12 個「演員牌」金邊框卡，背景輪換紅黃；headliner 配「壓軸」紅色印章
- **schedule**：3 day 像「農民曆」風格表格、紅底白字、宜忌欄位風格
- **venues**：3 張「舞台車」式金邊卡，仿廟口戲台
- **tickets**：3 張「香油錢」式券卡，VIP 中央配發光黃霓虹招牌
- **travel**：3 段，配紅色燈籠 SVG / unicode 符號
- **sponsors**：仿酬神匾額排版，title 用金底紅字大區塊「壹級贊助」
- **footer-faq**：仿「香條」對聯排版，Q 紅 A 金

## Do / Don't

| Do | Don't |
| --- | --- |
| 大紅大金 + 輔助螢光色 | 用低彩度配色 |
| 金邊框、雙層邊框、霓虹發光招牌 | 完全無邊框 |
| 加入廟會符號（燈籠 🏮、鞭炮、對聯） | 完全去除文化符號 |
| 文字保持高對比（金字紅底 / 紅字金底 / 白字紅底） | 紅字粉底等低對比災難 |
| 至少 1 處「對聯」式上下並列文字 | 完全西式排版 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

對聯（上下並列直書）：
```html
<div class="couplet">
  <div class="couplet-left">島嶼之聲共此夜</div>
  <div class="couplet-right">山海回響映三朝</div>
</div>
```
```css
.couplet {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-kai);
  font-size: 20px;
  color: var(--tw-gold);
  letter-spacing: 0.18em;
}
.couplet-left, .couplet-right {
  writing-mode: vertical-rl;
  background: linear-gradient(180deg, var(--tw-red-dark), var(--tw-red));
  border: 2px solid var(--tw-gold);
  padding: 16px 10px;
  line-height: 1.8;
}
```

霓虹招牌按鈕：
```css
.btn-neon-shop {
  background: var(--tw-red);
  color: var(--tw-yellow);
  border: 4px solid var(--tw-yellow);
  padding: 16px 36px;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.18em;
  box-shadow: var(--shadow-neon-yellow), inset 0 0 24px rgba(255,217,65,0.25);
  text-shadow: 0 0 6px var(--tw-yellow);
}
```

金邊框卡：
```css
.gold-frame {
  background: var(--tw-cream);
  color: var(--tw-black);
  border: 4px solid var(--tw-gold);
  outline: 2px solid var(--tw-red);
  outline-offset: 4px;
  padding: 20px;
}
```

香爐式圓形數字：
```css
.incense-num {
  width: 130px; height: 130px;
  background: var(--tw-red);
  border-radius: 50%;
  border: 4px solid var(--tw-gold);
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 42px;
  font-weight: 900;
  color: var(--tw-yellow);
  text-shadow: 0 0 8px rgba(255,217,65,0.5);
}
```

廟會印章：
```css
.stamp-zh {
  display: inline-block;
  width: 80px; height: 80px;
  background: var(--tw-red);
  color: var(--tw-cream);
  border: 3px solid var(--tw-cream);
  outline: 3px solid var(--tw-red);
  text-align: center;
  font-family: var(--font-kai);
  font-size: 28px;
  font-weight: 700;
  line-height: 74px;
  transform: rotate(-6deg);
}
```
