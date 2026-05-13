---
name: design-neumorphism
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in the Neumorphism (新擬物化 / Soft UI) visual style. Triggers on terms like 新擬物化、Neumorphism、Soft UI、雕塑感介面、Claymorphism (mild variant).
user-invocable: true
---

# 新擬物化 Neumorphism — 島嶼共鳴 2026

## Style Philosophy

新擬物化是「**從背景中浮起或凹陷**」的雕塑哲學，2019 年由 Alexander Plyuto 發表後成為短暫席捲的 UI 風潮。核心是：所有元件與背景幾乎同色，但靠**雙向陰影**（左上偏白光、右下偏深陰影）製造立體感。在音樂節網頁脈絡，這風格讓界面**像一塊柔軟的米色橡膠**，極富觸感、暗示「按下去會回彈」。要呼應的不是激情，而是清晨陽光照在毯子上的安靜。

三個視覺辨識特徵：
1. **背景與元件同色**（淡灰、米色或暖白），透過陰影區分層次
2. **雙向陰影**：左上 `inset` 或外凸柔光、右下 `inset` 或外凸深影
3. **大圓角 + 厚重感**，不用實心邊框

## Design Tokens

```css
:root {
  --color-bg: #e6e7ee;             /* 系統底色：所有元件同此色 */
  --color-bg-tinted: #ecedf3;
  --color-shadow-dark: #b5b9c5;    /* 陰影色（要比 bg 深 12-18%） */
  --color-shadow-light: #ffffff;   /* 高光色 */

  --color-fg: #2d3142;             /* 深藍灰，與 bg 對比 ≥ 7:1 */
  --color-fg-soft: #4f5470;
  --color-fg-mute: #6b7280;
  --color-accent: #d97706;         /* 暖橙色 — 唯一彩色 */
  --color-accent-fg: #ffffff;
  --color-headliner: #b91c1c;      /* 紅磚色，僅用於 headliner 標示 */

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;

  --shadow-out: 9px 9px 18px var(--color-shadow-dark), -9px -9px 18px var(--color-shadow-light);
  --shadow-out-lg: 14px 14px 30px var(--color-shadow-dark), -14px -14px 30px var(--color-shadow-light);
  --shadow-in: inset 6px 6px 12px var(--color-shadow-dark), inset -6px -6px 12px var(--color-shadow-light);
  --shadow-in-sm: inset 4px 4px 8px var(--color-shadow-dark), inset -4px -4px 8px var(--color-shadow-light);

  --font-display: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(40px, 6vw, 72px) / 1.1 / 700 / -0.02em | Hero 主標 |
| h1 | clamp(28px, 4vw, 40px) / 1.25 / 600 | 區塊標題 |
| h2 | 22px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.5 / 500 / 0.1em / uppercase | 標籤 |

字色用 `--color-fg`（深藍灰），對比度 ≥ 7:1。

## Layout Rules

- 全頁背景：`var(--color-bg)`，**單一色彩**，不可漸層
- 容器寬度：max-width 1080px，section padding 80-100px
- 元件節奏：每個區塊主體用 `--shadow-out` 凸起、內部小區塊用 `--shadow-in` 凹陷
- 兩種狀態構成節奏感：**凸起卡片**承載資訊、**凹陷區塊**強調分隔或輸入區

各區塊構圖：
- **hero**：主標題下用大圓角凸起 chip 標示日期，CTA 是凸起 pill button
- **about**：4 個圓形凸起數字卡橫排
- **lineup**：12 張凸起樂團卡（圓角 32px），headliner 在卡片內額外用「凹陷徽章」標示
- **schedule**：每天一張大凸起卡、內部時段為凹陷小條
- **venues**：3 個大圓角卡片，3D 感雕塑
- **tickets**：3 張票卡、VIP 中央放大、加上 accent 橙色凸起 ribbon
- **travel**：3 步驟，每步驟為凸起圓圖示 + 文字
- **sponsors**：圓形凸起 logo 框，title 最大、gold 中、silver 小
- **footer-faq**：每條 FAQ 為凸起手風琴面板

## Do / Don't

| Do | Don't |
| --- | --- |
| 所有元件與背景**同色** | 給卡片不同的底色 — 立刻失去新擬物化精神 |
| 用雙向陰影製造立體感 | 只用單向陰影 — 變成扁平卡片 |
| 大圓角（≥ 16px），暗示「軟」 | 用尖角或小圓角 |
| 主要文字必須足夠深以維持對比 | 用淺灰色文字 — 對比度災難 |
| 凸起與凹陷交替使用、製造節奏 | 全頁都凸起，失去層次 |

## Required Output Contract

- 單檔 `index.html`，inline CSS / JS、≤ 200 KB
- 9 個 section data-block 齊全
- 12 樂團、3 票價、9 贊助商名一字不差
- 不可外連 CDN
- 圖片相對路徑 `assets/<filename>.webp`
- WCAG AA：所有文字 ≥ 4.5:1（搭配 `--color-fg` 與 `--color-bg` 可達 ~10:1）
- 響應式三斷點

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

凸起元件：
```css
.raised {
  background: var(--color-bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-out);
}
.raised-lg {
  box-shadow: var(--shadow-out-lg);
}
```

凹陷區塊：
```css
.inset {
  background: var(--color-bg);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-in);
}
```

凸起 CTA：
```css
.btn {
  background: var(--color-bg);
  color: var(--color-fg);
  border: none;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-out);
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}
.btn:hover { box-shadow: var(--shadow-out-lg); }
.btn:active { box-shadow: var(--shadow-in); }
.btn-accent {
  background: var(--color-accent);
  color: var(--color-accent-fg);
}
```

數字大字：
```css
.stat-bubble {
  width: 140px; height: 140px;
  border-radius: 50%;
  background: var(--color-bg);
  box-shadow: var(--shadow-out-lg);
  display: grid;
  place-items: center;
  font-size: 36px;
  font-weight: 700;
  color: var(--color-fg);
}
```
