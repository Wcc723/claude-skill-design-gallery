---
name: motion-magnetic-cta
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival where CTA buttons magnetically pull towards the cursor. Triggers on magnetic button、磁吸按鈕、cursor attraction、Awwwards-style CTA.
user-invocable: true
---

# 磁吸按鈕 Magnetic CTA — 島嶼共鳴 2026

## Style Philosophy

主要 CTA 按鈕（立即購票、查看陣容、訂閱通知）在滑鼠靠近時**被輕輕吸過去**——按鈕成了有重力的物件，給互動加入物理感。靈感來自 Awwwards、Stripe Sigma 頁、Apple 產品頁。視覺風格清爽、極簡，唯一裝飾的就是這些大型 pill 按鈕。

三個視覺辨識特徵：
1. **CTA 按鈕在滑鼠 ~100px 範圍內被磁吸位移**
2. **按鈕內部文字也微微跟著動**（更強的物理感）
3. **整頁極簡** + 大型彩色 pill CTA（主軸視覺）

## Design Tokens

```css
:root {
  --m-bg: #fafafa;
  --m-card: #ffffff;
  --m-fg: #0f172a;
  --m-fg-soft: #475569;
  --m-fg-mute: #94a3b8;
  --m-accent: #2563eb;        /* 主磁吸藍 */
  --m-accent-2: #7c3aed;       /* 副紫 */
  --m-accent-3: #ec4899;       /* 三粉 */
  --m-line: #e2e8f0;

  --color-bg: var(--m-bg);
  --color-fg: var(--m-fg);
  --color-accent: var(--m-accent);

  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --font-display: 'PingFang TC', 'Noto Sans TC', 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', 'Inter', system-ui, sans-serif;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 96px) / 1.05 / 700 / -0.025em | Hero |
| h1 | clamp(28px, 4vw, 44px) / 1.25 / 600 | 區塊 |
| h2 | 20px / 1.35 / 600 | 子標 |
| body | 16px / 1.7 / 400 | 段落 |
| caption | 11px / 1.4 / 600 / 0.14em / uppercase | label |
| cta | clamp(18px, 2.5vw, 22px) / 1.2 / 600 | 大型 pill |

## Layout Rules

- 白底深色文字、大量留白
- 至少 3-4 個 `.magnetic` CTA 散布全頁（hero、tickets 區、訂閱、聯絡）
- CTA 按鈕**最少 64px 高**，足夠的磁吸視覺
- 磁吸位移最大 ±12px、按鈕內 span 跟著位移 ±6px

各區塊構圖：
- **hero**：display 標題 + 2 個大磁吸 CTA
- **about**：標準
- **lineup**：12 卡（不磁吸，僅 hover 高亮）
- **schedule**：標準
- **venues**：3 卡，每卡有「了解更多」磁吸 CTA
- **tickets**：3 票價卡，每卡有「立即購票」磁吸 CTA（VIP 中央卡用更大尺寸）
- **travel**：3 步驟
- **sponsors**：分級 list
- **footer-faq**：FAQ + 訂閱通知磁吸 CTA

## Motion Specification

- **動態效果類別**：pointer
- **觸發機制**：mousemove on each `.magnetic` element + rAF
- **性能要求**：transform 3D
- **觸發頻率**：rAF 節流；計算 cursor 與按鈕中心距離決定吸力

## Accessibility (Reduced Motion)

- reduced 模式：磁吸效果關閉，按鈕仍可正常 hover / focus

## Required Output Contract

通用契約 + 8 條動態要求。`<body data-motion-type="pointer">`。

## Required Images

無圖。

## Reference Snippet

```html
<button class="magnetic" data-magnetic>
  <span class="magnetic-inner">立即購票</span>
</button>
```

```css
.magnetic {
  background: var(--m-accent);
  color: white;
  border: none;
  padding: 20px 36px;
  border-radius: var(--radius-pill);
  font-size: clamp(18px, 2.5vw, 22px);
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: transform 0.15s ease-out, background 0.2s;
  will-change: transform;
}
.magnetic-inner {
  display: inline-block;
  transition: transform 0.15s ease-out;
  will-change: transform;
}
.magnetic:hover { background: var(--m-accent-2); }
@media (prefers-reduced-motion: reduce) {
  .magnetic, .magnetic-inner { transform: none !important; }
}
```

```javascript
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const btns = document.querySelectorAll('[data-magnetic]');
  const STRENGTH = 0.3;   // 0-1
  const RADIUS = 100;     // px
  btns.forEach((btn) => {
    const inner = btn.querySelector('.magnetic-inner');
    function handle(e) {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > RADIUS) {
        btn.style.transform = '';
        if (inner) inner.style.transform = '';
        return;
      }
      const f = (1 - dist / RADIUS) * STRENGTH;
      const tx = dx * f * 2;
      const ty = dy * f * 2;
      btn.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      if (inner) inner.style.transform = `translate3d(${tx * 0.5}px, ${ty * 0.5}px, 0)`;
    }
    window.addEventListener('mousemove', handle, { passive: true });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      if (inner) inner.style.transform = '';
    });
  });
})();
```
