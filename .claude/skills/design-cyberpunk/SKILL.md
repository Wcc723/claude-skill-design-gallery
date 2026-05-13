---
name: design-cyberpunk
description: Use when generating a single-file HTML page for the 「島嶼共鳴 2026」music festival in Cyberpunk (賽博龐克) style. Triggers on Cyberpunk、賽博龐克、tech-noir、Blade Runner、Akira、neon Tokyo、夜城、katakana neon signs.
user-invocable: true
---

# 賽博龐克 Cyberpunk — 島嶼共鳴 2026

## Style Philosophy

賽博龐克視覺源於 1980 年代的 Blade Runner、Akira、Neuromancer——**高科技 + 低生活**的反烏托邦：在夜城下，霓虹招牌密集排列、滂沱大雨打在污水上、片假名與英文並列、企業 logo 主宰天際線。在音樂節網頁中，賽博龐克讓「島嶼共鳴」變成 **2087 年某個地下音樂組織舉辦的非法演出**——終端機介面、警示色塊、霓虹粉藍綠的污染光。

三個視覺辨識特徵：
1. **黑底配霓虹粉 / 青 / 黃 / 綠** 的高飽和度發光色
2. **片假名 + 英文 + 中文三語混排**、終端機 UI 元素（HUD 圓圈、警示框）
3. **企業 logo 風的硬邊角、bracket [ ] < > 符號裝飾、grid 細線網**

## Design Tokens

```css
:root {
  --cp-bg: #050111;             /* 深紫黑 */
  --cp-bg-2: #0c0822;
  --cp-bg-3: #1a1140;
  --cp-fg: #e0e0ff;
  --cp-fg-soft: #9090b0;
  --cp-fg-mute: #5a5a78;
  --cp-pink: #ff2a87;
  --cp-cyan: #00fff5;
  --cp-yellow: #ffeb00;
  --cp-green: #00ff85;
  --cp-red: #ff003c;
  --cp-grid: rgba(0, 255, 245, 0.12);

  --color-bg: var(--cp-bg);
  --color-fg: var(--cp-fg);
  --color-accent: var(--cp-pink);

  --radius-none: 0;
  --radius-sm: 2px;

  --shadow-neon-pink: 0 0 12px var(--cp-pink), 0 0 24px rgba(255, 42, 135, 0.5);
  --shadow-neon-cyan: 0 0 12px var(--cp-cyan), 0 0 24px rgba(0, 255, 245, 0.5);
  --shadow-neon-yellow: 0 0 8px var(--cp-yellow), 0 0 18px rgba(255, 235, 0, 0.4);

  --font-display: 'Impact', 'Arial Black', 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', sans-serif;
  --font-mono: 'Courier New', 'Menlo', monospace;
}
```

## Typography Scale

| 級距 | 大小 | 用途 |
| --- | --- | --- |
| display | clamp(48px, 8vw, 100px) / 0.95 / 900 / 0.04em / uppercase | Hero |
| h1 | clamp(28px, 4vw, 48px) / 1.1 / 800 / 0.04em / uppercase | 區塊 |
| h2 | 20px / 1.2 / 700 / 0.08em / uppercase | 子標 |
| body | 14px / 1.65 / 400 | 段落 |
| caption | 11px / 1.3 / 700 / 0.2em / mono / uppercase | label |
| katakana | 14px / 1.4 / 500 / 0.08em | 片假名輔助 |

## Layout Rules

- 背景：深紫黑 + cyan 細網格（CSS gradient repeating）+ 角落霓虹光暈
- 容器寬度：max-width 1280px
- 元素邊框：1-2px 霓虹色銳邊；常用 `clip-path` 切角（如右下角缺口）
- HUD 風格：每個 section 上方一行 [ MODULE_03 / LINEUP ] 之類的系統標籤

各區塊構圖：
- **hero**：滿版背景含 cyan 網格 + 中央 chrome / 霓虹大字標題 + 片假名副標 + 圓形 HUD CTA 按鈕（hover 旋轉發光）
- **about**：左 4 個 HUD 風格圓形數字 + 右系統說明文字（mono 風）
- **lineup**：12 張 hex / clip-path 切角卡，每張卡有國別代碼 [TW] [JP] [HK]；headliner 卡用 cyan 粗邊 + glow
- **schedule**：3 day 並列，每 day 配霓虹邊框、時段表用 mono 字 + dot leader
- **venues**：3 張卡，每張卡角落貼 [ZONE_A] [ZONE_B] [ZONE_C] 標籤、有 HUD 環裝飾
- **tickets**：3 個切角卡，VIP 中央卡用粉色霓虹大邊
- **travel**：3 步驟 with HUD 數字 + 終端機 prompt style 文字
- **sponsors**：暗網格 + 霓虹小框、title 用最強霓虹粉、其他粉 / cyan / yellow 變化
- **footer-faq**：每條 FAQ 用 mono terminal 風格、行首有 `>` prompt

## Do / Don't

| Do | Don't |
| --- | --- |
| 至少 3 種霓虹色搭配（pink / cyan / yellow） | 用柔和粉嫩色 |
| 大量使用 [ ] < > // 等 ASCII 符號裝飾 | 完全乾淨無符號 |
| 添加片假名輔助文字（如「アイランド」） | 完全只用英中文 |
| 銳利切角、HUD 圓形元素 | 用大圓角 |
| 文字必須 ≥ 4.5:1 對比 | 用霓虹色當主要 body 文字 — 太刺眼 |

## Required Output Contract

通用契約。

## Required Images

依 `assets-manifest.json`。

## Reference Snippet

切角卡（clip-path）：
```css
.cp-card {
  background: var(--cp-bg-2);
  border: 1px solid var(--cp-cyan);
  padding: 24px;
  color: var(--cp-fg);
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
}
.cp-card.headliner {
  border-color: var(--cp-pink);
  box-shadow: var(--shadow-neon-pink);
}
```

HUD 標籤：
```css
.hud-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--cp-cyan);
  border: 1px solid var(--cp-cyan);
  padding: 3px 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  position: relative;
}
.hud-tag::before { content: '['; margin-right: 6px; color: var(--cp-cyan); }
.hud-tag::after  { content: ']'; margin-left: 6px;  color: var(--cp-cyan); }
```

霓虹發光標題：
```css
.cp-title {
  font-family: var(--font-display);
  font-weight: 900;
  color: var(--cp-fg);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-shadow:
    0 0 6px var(--cp-pink),
    0 0 18px rgba(255, 42, 135, 0.4),
    0 0 32px rgba(0, 255, 245, 0.2);
}
```

網格背景：
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at 20% 20%, rgba(255, 42, 135, 0.15) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 80%, rgba(0, 255, 245, 0.12) 0%, transparent 40%),
    repeating-linear-gradient(0deg, var(--cp-grid) 0 1px, transparent 1px 80px),
    repeating-linear-gradient(90deg, var(--cp-grid) 0 1px, transparent 1px 80px);
  z-index: 0;
}
```

CTA：
```css
.btn-cp {
  background: transparent;
  border: 2px solid var(--cp-pink);
  color: var(--cp-pink);
  padding: 14px 32px;
  font-family: var(--font-mono);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  box-shadow: var(--shadow-neon-pink);
  transition: background 0.2s ease;
}
.btn-cp:hover { background: var(--cp-pink); color: var(--cp-bg); }
```
