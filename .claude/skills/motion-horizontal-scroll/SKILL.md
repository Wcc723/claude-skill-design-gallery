---
name: motion-horizontal-scroll
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival where vertical scrolling converts into horizontal pan in the lineup / schedule sections. Triggers on horizontal scroll、橫向滾動、scroll translate、vertical to horizontal.
user-invocable: true
---

# 橫向滾動陣容 Horizontal Scroll — 島嶼共鳴 2026

## Style Philosophy

把「垂直滾動」轉換成「橫向位移」是 Awwwards 級展示常見手法——常用在作品集走廊、產品 lineup、時間軸。它打破網頁慣常的垂直閱讀，給訪客一種「滑進另一個世界」的儀式感。在音樂節網頁中，**lineup 區段**作為主橫向走廊，12 組樂團一字排開、用滾輪 / 觸控板拖動瀏覽。schedule 則用次要橫向滾動展示三日時程。

三個視覺辨識特徵：
1. **lineup 區設 `position: sticky` + 容器內部 `transform: translateX`** 隨滾動位移
2. **明確視覺提示橫向滾動**（左右箭頭、進度條、滑動光標）
3. **暗色高對比**配色（黑底 / 米黃強調），讓走廊感更電影化

## Design Tokens

```css
:root {
  --h-bg: #0a0a0f;
  --h-bg-card: #14141c;
  --h-fg: #f5f5dc;
  --h-fg-soft: #b8b8a8;
  --h-accent: #fbbf24;          /* 暖琥珀 */
  --h-accent-2: #ec4899;        /* 粉紅副 */
  --h-border: rgba(255,255,255,0.1);

  --color-bg: var(--h-bg);
  --color-fg: var(--h-fg);
  --color-accent: var(--h-accent);

  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Menlo', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(56px, 9vw, 112px) / 1.0 / 800 / -0.025em | Hero |
| h1 | clamp(36px, 5vw, 64px) / 1.1 / 700 | 區塊 |
| h2 | 22px / 1.3 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.16em / mono / uppercase | 編號 |

## Layout Rules

- 大部分區塊垂直流；**lineup** 與 **schedule** 是橫向走廊
- 橫向走廊技巧：包外層 `position: sticky` + `height: 100vh`，內層 `display: flex; width: <12 * card-width>`，配合 scrollY 算 translateX
- 給每個橫向走廊一個明確「外層高度 = 內層寬度 - 視窗寬度」公式
- 走廊頂部加左右箭頭與滑動進度 bar

各區塊構圖：
- **hero**：垂直全屏，大字標題置中，下方有「↓ 滾動開始旅程」提示
- **about**：4 個 stat tile 橫排
- **lineup**：橫向走廊 — 12 張樂團卡 1100px 寬一張、headliner 卡 1300px、卡片之間 32px 間距
- **schedule**：橫向走廊 — 3 day timetable
- **venues**：垂直、3 大區塊
- **tickets**：3 張票卡橫排（非滾動驅動）
- **travel**：垂直 list
- **sponsors**：垂直分級
- **footer-faq**：垂直 `<details>`

## Motion Specification

- **動態效果類別**：parallax / scroll-driven
- **觸發機制**：scroll event + IntersectionObserver（控制走廊區段是否啟用）+ rAF
- **性能要求**：僅動 `transform: translateX()` 在內層 flex 容器，避免 reflow
- **觸發頻率**：scroll handler passive + rAF 節流

公式：
```
inner_translateX = -(scrollY - section_start) * (inner_width - viewport_width) / (section_height - viewport_height)
```
其中 `section_height` 通常設為 `(card_count * card_width)`，使走廊滾完整段才結束。

## Accessibility (Reduced Motion)

- reduced 模式：取消橫向走廊邏輯、改用普通垂直 grid 顯示 12 樂團；CSS class 加 `.no-motion` 切換 layout
- 走廊外層高度在 reduced 模式設 `auto`、內層 `flex-wrap: wrap`

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="parallax">`。

## Required Images

可選 1 張 hero 圖。樂團卡用 CSS 純色 + 大字即可。

## Reference Snippet

橫向走廊基礎：
```html
<section data-block="lineup" class="h-rail" data-rail>
  <div class="h-rail-outer" style="height: 800vh;"> <!-- 算出來的高度 -->
    <div class="h-rail-sticky">
      <div class="h-rail-inner">
        <!-- 12 個樂團卡 -->
      </div>
    </div>
  </div>
</section>
```

```css
.h-rail-outer { position: relative; }
.h-rail-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.h-rail-inner {
  display: flex;
  gap: 32px;
  padding: 0 80px;
  will-change: transform;
}
.h-rail-inner > .band-card {
  flex: 0 0 1100px;
  height: 70vh;
}
@media (prefers-reduced-motion: reduce) {
  .h-rail-outer { height: auto !important; }
  .h-rail-sticky { position: static; height: auto; }
  .h-rail-inner { flex-wrap: wrap; transform: none !important; }
  .h-rail-inner > .band-card { flex: 1 1 360px; }
}
```

```javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rails = document.querySelectorAll('[data-rail]');
  rails.forEach((rail) => {
    const inner = rail.querySelector('.h-rail-inner');
    if (!inner) return;
    const outer = rail.querySelector('.h-rail-outer');
    let ticking = false;
    function update() {
      const rect = outer.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const maxX = inner.scrollWidth - window.innerWidth;
      inner.style.transform = `translate3d(${-maxX * progress}px, 0, 0)`;
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  });
})();
```
