---
name: design-material-3
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in the Material You / Material Design 3 style. Triggers on Material 3、Material You、Google Material、Android design.
user-invocable: true
---

# Material You / Material 3 — 島嶼共鳴 2026

## Style Philosophy

Material You 是 Google 在 2021 年 Android 12 發表的設計系統，繼承 2014 年 Material Design 的「擬紙、有層階」哲學，再加上「**動態色彩**」——從一張關鍵圖片提取 5 色 tonal palette 並套用全頁面。Material 3 強調 **expressive shape**（極大圓角、有機形狀）、**elevation tokens**（系統化陰影）、**state layers**（互動時的半透色覆蓋）。在音樂節網頁中，這風格表現出「**親民、易讀、產品級**」——像把音樂節做進 Google 自家 app 裡。

三個視覺辨識特徵：
1. **動態 tonal color palette**：從 hero 圖提取主色 → primary / secondary / tertiary 5 階
2. **系統化的 elevation 0-5**，每階對應特定 shadow + tint
3. **超大圓角 28px+**、藥丸按鈕、icon-text 並列的 chip

## Design Tokens

```css
:root {
  /* Primary palette — 主色從海邊夕陽提取 */
  --md-primary-0: #000000;
  --md-primary-10: #2e1500;
  --md-primary-30: #6b3e00;
  --md-primary-40: #8a5400;
  --md-primary-50: #ad6c00;
  --md-primary-80: #ffb86f;
  --md-primary-90: #ffddb9;
  --md-primary-95: #ffeede;

  /* Secondary — 海洋藍 */
  --md-secondary-40: #4a6160;
  --md-secondary-90: #cce8e7;

  /* Tertiary — 紫紅夕陽 */
  --md-tertiary-40: #7a5167;
  --md-tertiary-90: #ffd8ec;

  /* Neutral */
  --md-bg: #fffbf6;             /* 偏暖白 surface */
  --md-surface: #fffbf6;
  --md-surface-variant: #f4ded3;
  --md-on-surface: #1f1b16;
  --md-on-surface-variant: #4f4539;
  --md-outline: #82756a;

  /* 兼容 token */
  --color-bg: var(--md-bg);
  --color-fg: var(--md-on-surface);
  --color-fg-soft: var(--md-on-surface-variant);
  --color-accent: var(--md-primary-40);
  --color-on-accent: #ffffff;

  --radius-xs: 8px;
  --radius-sm: 16px;
  --radius-md: 28px;
  --radius-lg: 36px;
  --radius-pill: 999px;
  --radius-extra: 50% 50% 50% 50% / 60% 60% 40% 40%;  /* organic shape */

  --elevation-1: 0 1px 2px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06);
  --elevation-2: 0 1px 2px rgba(0,0,0,0.08), 0 3px 8px rgba(0,0,0,0.10);
  --elevation-3: 0 4px 8px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.12);

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Google Sans', 'Roboto', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Roboto', system-ui, sans-serif;
}
```

## Typography Scale（Material 3 type scale 簡化版）

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display-large | clamp(40px, 6vw, 57px) / 1.12 / 400 | Hero 主標 |
| display-small | 36px / 1.22 / 400 | 區塊大標 |
| headline-large | 28px / 1.25 / 600 | 子區塊標題 |
| title-large | 20px / 1.27 / 500 | 卡片標題 |
| body-large | 16px / 1.5 / 400 | 段落 |
| label-large | 14px / 1.43 / 500 / 0.04em | 按鈕、標籤 |

## Layout Rules

- 容器寬度：max-width 1200px
- 卡片元件全部用 `--radius-md`（28px）或更大
- 元件間距用 8px 倍數系統（8 / 16 / 24 / 32 / 48 / 64）
- 採用 surface-tint：卡片背景為 `--md-surface`，elevated 卡 + 微妙 primary tint

各區塊構圖：
- **hero**：左對齊大字、右側放半徑 50% 的有機形狀 hero 圖、下方 FAB（懸浮按鈕）+ extended FAB
- **about**：4 個 elevated card 並排，每張含 icon + 數字 + 標籤
- **lineup**：12 張 list-style card；headliner 卡較大、放在最上；用 chip 標示曲風
- **schedule**：3 個 segmented button day-tab（純 CSS 切換），下方 timeline list with leading time
- **venues**：3 張大圓角圖文卡（image 在頂、文字在下）
- **tickets**：3 張票價卡，VIP 為 filled tonal card（背景 primary-90），其餘為 elevated white card
- **travel**：3 個 list-item with leading icon（用 unicode 或 inline SVG）
- **sponsors**：title 用 large filled card、gold 用 elevated card、silver 用 outlined card 構成 elevation 層次
- **footer-faq**：expand/collapse list（CSS only `<details>`）

## Do / Don't

| Do | Don't |
| --- | --- |
| 使用系統化 elevation tokens、不要隨便寫 box-shadow | 自創不規則陰影 |
| 圓角 ≥ 16px、藥丸按鈕一律 999px | 用方角或小圓角 |
| 動態色彩有 tonal 階梯關係（10 / 40 / 80 / 90 等） | 隨意撿色 |
| state layer：hover 用 8%、pressed 用 12% 同色覆蓋 | 用整個改變背景色的方式做 hover |
| icon 與文字並列時用 chip / button 的標準 padding（horizontal 16px） | icon 太小或太遠 |

## Required Output Contract

（與通用契約相同）

## Reference Snippet

Elevated card：
```css
.card {
  background: var(--md-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-1);
  padding: 24px;
  transition: box-shadow 0.2s ease;
}
.card:hover { box-shadow: var(--elevation-2); }
```

Filled tonal card（用在 VIP 票）：
```css
.card-tonal {
  background: var(--md-primary-90);
  color: var(--md-primary-10);
  border-radius: var(--radius-md);
  padding: 24px;
}
```

Filled button（CTA）：
```css
.btn-filled {
  background: var(--md-primary-40);
  color: #ffffff;
  border: none;
  padding: 14px 24px;
  border-radius: var(--radius-pill);
  font-weight: 500;
  letter-spacing: 0.04em;
  box-shadow: var(--elevation-1);
}
.btn-tonal {
  background: var(--md-primary-90);
  color: var(--md-primary-10);
}
```

Chip：
```css
.chip {
  display: inline-flex;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  background: var(--md-surface-variant);
  color: var(--md-on-surface-variant);
  font-size: 13px;
  border: 1px solid var(--md-outline);
}
```

有機形狀 hero 圖：
```css
.hero-blob {
  width: 100%; aspect-ratio: 1;
  background-image: url('assets/hero.webp');
  background-size: cover;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```
