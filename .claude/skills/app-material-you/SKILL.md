---
name: app-material-you
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Material You / Material 3 style. Triggers on Material You、Material 3、M3、Android design、dynamic color、tonal palette、Roboto、FAB、藥丸導覽列、動態色彩、Android 質感.
user-invocable: true
---

# Material You — 迴聲 Resona

## Style Philosophy

Material You（Material Design 3）是 Google 自 Android 12 起的設計語言，核心是「**動態 tonal palette**」——從一顆 seed 色推導出整套 10/40/80/90 階色票，再以 surface / surface-tint 疊出柔和層階。它的視覺主張是「**親民、有秩序、產品級**」：超大圓角、filled tonal 按鈕、藥丸狀的 active indicator、漂浮的 FAB，搭配 Roboto / Noto 的工整字面，讓整個音樂串流 App 看起來像 Google 自家 app 的延伸。

本風格把這套語言搬進 390×844 的手機殼裡：狀態列極簡、底部導覽列用 M3 的藥丸 active pill，內容卡片一律 28px 大圓角，互動回饋靠 state layer（半透明同色覆蓋）而非整塊換色。整個 App 要有「真實產品」的內容密度——home 不是一張卡就結束，而是多區段堆疊；每個可點元件都有 hover / active 回饋；底部 tab-bar 上方常駐一條迷你播放列。

三個視覺辨識特徵：
1. **動態 tonal palette（紫＋青 seed）**：primary 紫色與 tertiary 青色各推 10/40/80/90 四階，surface 帶極淡 primary tint。卡片底用 `--m3-surface-3`，不可用純白。
2. **超大圓角 28px + filled tonal 按鈕 + FAB**：所有卡片 ≥ 28px 圓角；主要動作用 filled tonal（primary-90 底 + primary-10 字）；player 屏右下漂浮一顆 FAB。
3. **M3 底部導覽列藥丸 active indicator**：active tab 的 icon 外包一顆 64×32 的藥丸（secondary-container 色），文字在藥丸下方；state layer hover 8% / pressed 12%。

> **本版精修重點（務必落實）**：上一版 review 發現「首頁推薦卡的藝人副標在左緣被裁切」（夜行列車→飞行列車、何遠→可遠、Echo Lab→cho Lab）。根因是卡內文字缺左右 padding、或父層 `overflow:hidden` 把超出的字硬切掉、或誤用負 margin。**修法見「無跑版鐵則」第 6 條與 Reference Snippet 的 `.media-card__sub`**：卡內文字一律左右 padding ≥ 12px、禁負 margin、單行省略用 `text-overflow: ellipsis` 而非裸 `overflow:hidden` 硬切、副標永遠完整露出首字。

## Design Tokens (CSS variables)

```css
:root {
  /* ── 手機殼專用 token ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 80px;             /* M3 navigation bar 標準高 */
  --miniplayer-h: 64px;        /* 迷你播放列高度 */
  --safe-bottom: 24px;        /* 底部安全區 */
  --device-radius: 44px;      /* 圓角螢幕外框 */

  /* ── Primary tonal palette（seed: 紫 #6750A4）── */
  --m3-primary-10: #21005d;
  --m3-primary-40: #6750a4;
  --m3-primary-80: #d0bcff;
  --m3-primary-90: #eaddff;
  --m3-on-primary: #ffffff;

  /* ── Secondary（柔紫，用於 tab 藥丸 container）── */
  --m3-secondary-40: #625b71;
  --m3-secondary-90: #e8def8;   /* secondary-container */
  --m3-on-secondary-10: #1d192b;

  /* ── Tertiary tonal palette（seed: 青 #006a6a）── */
  --m3-tertiary-10: #002020;
  --m3-tertiary-40: #006a6a;
  --m3-tertiary-80: #4fd8d8;
  --m3-tertiary-90: #6ff7f7;

  /* ── Neutral surfaces（帶 primary tint）── */
  --m3-bg: #fef7ff;             /* surface，極淡紫 tint */
  --m3-surface-1: #f7f2fa;     /* elevation 1：+5% tint */
  --m3-surface-2: #f3edf7;     /* elevation 2 */
  --m3-surface-3: #eee8f4;     /* elevation 3：卡片 */
  --m3-surface-variant: #e7e0ec;
  --m3-on-surface: #1d1b20;
  --m3-on-surface-variant: #49454f;
  --m3-outline: #79747e;
  --m3-outline-variant: #cac4d0;

  /* ── 8pt 間距尺度（唯一來源，禁臨時湊數值）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --screen-pad: 16px;          /* 各屏左右安全內距，文字不貼邊 */

  /* ── 圓角 ── */
  --r-xs: 8px;
  --r-sm: 12px;
  --r-md: 16px;
  --r-lg: 28px;                /* M3 large，卡片預設 */
  --r-xl: 28px;
  --r-pill: 999px;

  /* ── elevation（M3 tonal + shadow）── */
  --elev-1: 0 1px 2px rgba(0,0,0,.30), 0 1px 3px 1px rgba(0,0,0,.15);
  --elev-2: 0 1px 2px rgba(0,0,0,.30), 0 2px 6px 2px rgba(0,0,0,.15);
  --elev-3: 0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.30);

  /* ── state layer 不透明度 ── */
  --state-hover: 0.08;
  --state-press: 0.12;

  /* ── 字體 ── */
  --font-display: 'Google Sans', 'Roboto', 'Noto Sans TC', 'PingFang TC', system-ui, sans-serif;
  --font-body: 'Roboto', 'Noto Sans TC', 'PingFang TC', system-ui, sans-serif;
}
```

> 動態色彩說明：紫（primary）與青（tertiary）為兩顆 seed；卡片底色用 `--m3-surface-3`（surface + primary tint），不要用純白。所有強調色從 tonal 階梯取（10/40/80/90），不可臨時撿色。**所有間距一律取 `--sp-*` token**，不可寫 5px / 10px / 15px / 18px 這類非尺度數值。

## Typography Scale

M3 type scale，對應手機字級（px / line-height / weight / letter-spacing）：

| M3 角色 | size / line-height | weight | letter-spacing | 用途 |
| --- | --- | --- | --- | --- |
| display-small | 28px / 36px | 400 | 0 | player 大標題、home 品牌字 |
| headline-small | 22px / 28px | 400 | 0 | 各屏大標題（每日迴聲 / 搜尋 / 專輯名） |
| title-large | 17px / 22px | 500 | 0 | 卡片標題、歌單名、區段標題 |
| title-medium | 15px / 20px | 500 | 0.01em | list-item 主文、訂閱方案名 |
| body-large | 15px / 22px | 400 | 0 | 段落、歌名 |
| body-medium | 13px / 19px | 400 | 0.015em | 副標、藝人名、說明 |
| label-large | 13px / 18px | 500 | 0.01em | 按鈕文字 |
| label-medium | 11px / 16px | 500 | 0.05em | tab 文字、chip 標籤、徽章、查看全部 |

字距：label 類加 `letter-spacing: 0.05em`；標題類 0。一律 Roboto / Noto，不襯線。**副標（藝人名）固定 body-medium，color 用 `--m3-on-surface-variant`，且永遠完整顯示首字**（見無跑版鐵則）。

## Component & Layout

整體外框：固定 390×844 裝置殼（`.device`），圓角 `--device-radius`，`overflow:hidden`。垂直三段：

```
┌─────────────────────────┐
│ status-bar（固定頂，9:41）│  ← 永遠在頂，高 --statusbar-h
├─────────────────────────┤
│                         │
│   .screens 可捲動內容區   │  ← 當前畫面，唯一捲動區
│   (home/search/detail/   │     底部 padding 避開 mini-player+tabbar
│    player/library/profile)│
│                         │
├─────────────────────────┤
│ mini-player（迷你播放列） │  ← 常駐於 tab-bar 上方，player 屏隱藏
├─────────────────────────┤
│ tab-bar（固定底，4 tab）  │  ← 永遠在底，高 --tabbar-h
└─────────────────────────┘
```

`.screens` 底部 padding = `calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom))`，確保最後一塊內容不被迷你播放列與 tab-bar 遮住。每屏左右用 `--screen-pad`（16px）內距，文字不貼螢幕邊。

逐屏與元件規範：

### status-bar（固定，永不省略）
高 `--statusbar-h`，padding 左右 `--sp-6`。左側時間 `9:41`（title-medium 字重 500）；右側依序訊號條、Wi-Fi、電量符號（unicode 或 inline SVG）。底色 = `--m3-bg`，貼齊內容無分隔線。

### home（內容密度：3 區段以上）
1. **頂部 app-bar**：品牌「迴聲 Resona」（headline-small 或 display-small）＋右側 40px 圓形頭像（可點，state layer）。padding `--sp-4`。
2. **區段一「每日迴聲」**：個人化每日推薦 banner，做成一張 filled tonal 大卡（primary-90 底，圓角 --r-lg）。卡內：小標籤「每日迴聲」（label-medium）＋主打曲名（title-large）＋藝人副標（body-medium）＋一顆 filled tonal「立即播放」藥丸按鈕。**banner 內文字一律左右 padding ≥ `--sp-4`，副標首字完整。**
3. **區段二「為你精選歌單」**：區段標題列（title-large 標題 + 右側「查看全部」label-medium，可點）。下方 7 張歌單卡——可橫向捲動的 media-card 卡牆或 2 欄網格，每卡：封面（`assets/cover-N.webp`，N 循環 1–6，第 7 張回 cover-1）+ 歌單名（title-medium，單行 ellipsis）+ 藝人/描述副標（body-medium，single line，**左右 padding，首字完整**）。7 個歌單名一字不差列出。
4. **區段三「最近播放」或「熱門排行」**：區段標題 + 編號清單（list-item：leading 小縮圖 / 歌名 body-large / 藝人 body-medium / trailing 更多 icon）。點任一列 → 跳 player。
5. 在區段間或底部，露出至少一條核心功能介紹（如「無損音質串流」），維持 6 功能名出現。

home 上方一排可橫向捲動的 4 分類 chip（華語 / 獨立 / 電子 / 放鬆，outlined chip）置於區段二之上或 app-bar 下方皆可。

### search（搜尋框 + chip + 編號熱門 + 藝人）
1. **M3 search bar**：藥丸 pill、surface-variant 底、leading search icon、≥ 56px 高、placeholder「搜尋歌曲、藝人、歌單」。padding `--sp-4`。
2. **4 分類 chip**：華語 / 獨立 / 電子 / 放鬆，橫向捲動 outlined chip 列。
3. **「熱門歌曲」編號清單**：區段標題 + ≥ 5 列 song-row（編號 / 歌名 body-large / 藝人 body-medium / 時長），歌名取自 9 歌名，含時長（如 03:42）。點列 → player。
4. **「熱門藝人」**：區段標題 + 橫向圓形頭像列或 list，列出 5 藝人名。

### detail（大封面 + 完整 metadata + 9 曲目）
1. **頂部返回鍵**（leading arrow，可點回上一屏，state layer）。
2. **大封面**：主打專輯 `島嶼晨光` 正方封面（cover-1.webp，圓角 --r-lg）。
3. **metadata 區**：專輯名 `島嶼晨光`（headline-small）＋藝人 `林知夏`（body-medium）＋一行「2026 · 9 首 · 38 分鐘」（年份/曲目數/總時長，body-medium，on-surface-variant）。
4. **動作列**：filled tonal「播放全部」藥丸 + outlined「隨機播放」藥丸（皆 ▶ icon）。
5. **9 首曲目清單**：每列 `.song-row`——曲序（24px）/ 歌名（body-large，9 首歌名全列）/ 藝人（body-medium，可省略同藝人）/ 時長 + trailing 播放鍵或更多 icon。**全部 9 首歌名一字不差。** 點列 → player。

### player（大封面 + 完整控制 + 歌詞 + mini-player 隱藏）
1. **頂部列**：返回/收合鍵（向下箭頭，回上一屏）+ 居中「正在播放」+ trailing 更多 icon。
2. **滿版大封面**：cover-1.webp 正方 --r-lg。
3. **now-playing 資訊**：歌名〈`晚風練習曲`〉（display-small / headline）＋藝人 `林知夏`＋專輯 `島嶼晨光`（body-medium）。
4. **進度條**：M3 slider（細軌 + 圓 thumb），左 `00:00` 右 `02:47`（目前/總長）。
5. **控制列**：隨機 / 上一首 / **大圓播放暫停鈕（filled primary，▶/⏸ 兩態）** / 下一首 / 循環。
6. **底部列**：音量或「無損音質」徽章（tertiary-container 藥丸）+ 歌詞同步入口。
7. **歌詞同步**：一行逐字高亮歌詞（當前行用 primary 色加粗，其餘 on-surface-variant）。
8. **FAB**：右下漂浮一顆（加入歌單 / 更多），不被 tab-bar 遮。
9. **player 屏本身不顯示 mini-player**（它就是展開後的全屏）。

### library（分頁 + 歌單清單 + 下載 + 共享）
1. 標題「我的音樂庫」（headline-small）。
2. **分頁 tab**（藥丸 segmented 或 M3 tabs）：歌單 / 專輯 / 已下載。
3. **收藏歌單清單**：取自 7 歌單名，每列 leading cover 縮圖 + 歌單名（title-medium）+ 曲數副標（body-medium，如「12 首」，**左右 padding，首字完整**）。
4. **功能入口**：「離線下載」與「共享音樂庫」兩個 list-item（leading icon + 文字 + trailing arrow）。

### profile（使用者卡 + 偏好 + 三訂閱方案）
1. **使用者身份卡**：頭像 + 暱稱 + 等級/狀態副標，filled tonal 或 surface-3 卡。
2. **播放偏好**：list，含「跨裝置接續播放」開關（M3 switch 樣式，on 態 primary）、「無損音質串流」等。
3. **三訂閱方案卡**（堆疊）：免費（NT$ 0 ／月）/ Plus（NT$ 149 ／月）/ Family（NT$ 249 ／月）。Plus 為主推，用 filled tonal card（primary-90 底）+「推薦」徽章；免費標「目前方案」徽章；Family outlined card。三方案名與三價格必在同屏。

### mini-player（迷你播放列，常駐）
- 位於 tab-bar **上方**，高 `--miniplayer-h`，貼齊 tab-bar，背景 surface-2 + state layer。
- 內容：leading 40px 封面縮圖 + 歌名（title-medium，單行 ellipsis）+ 藝人（body-medium，單行 ellipsis，**左右 padding，首字完整**）+ trailing 播放暫停鍵（▶/⏸ 兩態）。
- **顯示於 home / search / library / profile**；點整條（封面/文字）展開到 player 畫面。
- **player 與 detail 屏隱藏 mini-player**（player 是展開態；detail 可顯示亦可隱藏，建議隱藏避免與曲目列衝突）。

### tab-bar（固定底，4 tab）
高 `--tabbar-h`。4 tab 等寬：首頁 / 搜尋 / 音樂庫 / 我的，各「icon + label-medium 文字」直排。active tab 的 icon 外包 64×32 secondary-container 藥丸（M3 active indicator），label 用 on-surface；非 active 用 on-surface-variant。預設「首頁」active。每 tab cursor:pointer + state layer。

互動回饋一律用 **state layer**：可點元件 `:hover` 疊 8% 同色半透層、`:active` 疊 12%，不可整塊換背景色。所有可點元件 `cursor:pointer`。

## Micro-interactions（微互動）

- **可點即有回饋**：每個可點元件（卡片 / chip / song-row / list-item / tab / mini-player / 按鈕 / FAB）皆 `cursor:pointer`，並有明確 `:hover`（state layer 8%）與 `:active`（state layer 12% 或輕微 `transform: scale(.98)`）。
- **播放鍵兩態**：所有播放鍵（player 主鈕、mini-player、song-row、banner）用 ▶ / ⏸ 兩態切換，按下有壓感。
- **active 視覺**：tab 有藥丸 indicator；library 分頁 tab、search chip 的選中態用 secondary-container 底 + on-surface 字。
- **transition 守則**：若用 transition / @keyframes，只動 `transform` / `opacity`，並一律附 `@media (prefers-reduced-motion: reduce)` 關閉。

## 無跑版鐵則（必須全部滿足）

1. **裝置容器鎖 390×844**：`.device` 固定 `--screen-w` × `--screen-h`，置中、`--device-radius` 圓角、`overflow:hidden`。
2. **status-bar 永遠在頂**、**tab-bar（含其上方 mini-player）永遠在底**，兩者不隨內容捲動。
3. **中間 `.screens` 為唯一可捲動區**（`overflow-y:auto`），當前畫面在此渲染；底部 padding 避開 mini-player + tab-bar，內容不被遮擋。
4. **每屏左右 `--screen-pad`（16px）內距**，padding 充足，文字不貼螢幕邊。
5. **文字不溢出 / 不被裁切**：標題與副標需單行省略時用 `overflow:hidden; text-overflow:ellipsis; white-space:nowrap;` 三件套，並設 `min-width:0`（grid/flex 子項溢出剋星）。
6. **【本次重點】卡片內文字（尤其藝人副標）首字不可被裁切**：
   - 卡內文字容器一律左右 padding ≥ `--sp-3`（12px）；
   - **禁任何負 margin**（`margin-left:-…` 是首字被吃掉的元兇）；
   - 不在文字父層裸用 `overflow:hidden` 把超出字硬切——要省略就用 `text-overflow:ellipsis`（省略號在**尾端**，首字永遠完整）；
   - flex/grid 文字子項加 `min-width:0`，否則內容把欄撐爆反被裁；
   - 封面圖若疊在文字上方需 `overflow:hidden`，**只裁圖、不裁文字**——圖與文字分開容器。
7. **mini-player 與 tab-bar 不重疊不互遮**：mini-player 在 tab-bar 之上獨立一條，兩者高度相加即 `.screens` 底 padding 的一部分。

## Do / Don't

| Do | Don't |
| --- | --- |
| 卡片圓角一律 ≥ 28px（--r-lg），按鈕用藥丸 999px | 用方角或 < 12px 小圓角 |
| 間距一律取 `--sp-*` 8pt 尺度 | 寫 5px / 10px / 15px / 18px 非尺度數值 |
| 強調色從 tonal 階梯（10/40/80/90）取 | 臨時撿不在階梯上的顏色 |
| 主動作用 filled tonal（primary-90 底 + primary-10 字） | 用純色高飽和 raised button |
| tab active 用 secondary-container 藥丸 indicator | 只變色不加藥丸，或用底線 |
| state layer：hover 8% / press 12% 同色覆蓋 | 整塊換背景色做 hover |
| surface 帶極淡 primary tint，用 --m3-surface-* | 用純白 #fff 當卡片底 |
| FAB 漂浮於內容右下、不被 tab-bar 遮 | FAB 貼齊邊緣或壓到 tab-bar |
| 卡內文字左右 padding、首字完整、尾端 ellipsis | 負 margin / 裸 overflow:hidden 切掉首字 |
| mini-player 常駐於 tab-bar 上方，player 屏隱藏 | 漏掉 mini-player，或 player 屏也放 |
| 播放鍵 ▶/⏸ 兩態 + cursor:pointer + active 壓感 | 靜態圖示、無 hover/active 回饋 |

## Mobile Chrome Spec

- 設計基準 **390×844**（iPhone 直式邏輯尺寸，套用於 Android 視覺）；外層 `.device` 鎖 `--screen-w` 寬、`--screen-h` 高、置中、`--device-radius` 圓角螢幕、`overflow:hidden`。
- **status-bar** 固定頂部，必含 `9:41` + 訊號 + 電量；高 `--statusbar-h`。
- **安全區**：`.screens` 底部預留 `calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom))`，可用 `env(safe-area-inset-bottom)` 兜底，內容不被 mini-player / tab-bar 遮。
- **mini-player + tab-bar** 固定於裝置容器底部（堆在 `.device` 內底部，非 `.screens` 內），mini-player 在上、tab-bar 在下。
- 中間為**單一可捲動內容區 `.screens`**，6 個內容屏（home→profile）擇一顯示或縱向排列於此區。
- 任何 transition / @keyframes 必附 `@media (prefers-reduced-motion: reduce)` 關閉；只動 transform / opacity。

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- 8 個 `<section data-screen="<id>">`，固定 id 與順序：`status-bar → home → search → detail → player → library → profile → tab-bar`，各唯一出現一次。
- `<body data-viewport="mobile">` 必須存在。
- **status-bar 顯示 `9:41`**；**tab-bar 四 tab**（首頁 / 搜尋 / 音樂庫 / 我的）。
- **mini-player** 常駐於 tab-bar 上方，顯示於 home/search/library/profile，player 屏隱藏。
- 三層定價字串精確一致：`NT$ 0`、`NT$ 149`、`NT$ 249`（`NT$` 與數字間一個半形空格），後綴「／月」全形斜線；三方案名（免費 / Plus / Family）與三價格須在同屏（profile）。
- 品牌、6 功能名、7 歌單、9 歌名、5 藝人、4 分類 chip、正在播放組合等權威字串一字不差填入對應屏的**可見 body 文字**（不可只放 data-* / aria-*）。
- **可互動多畫面導覽**：tab 切換（4 tab）+ 卡片 → detail + 曲目/迷你播放列 → player + detail/player 返回鍵回上一屏。建議用 `:target` 或 radio/checkbox + label 純 CSS，或極小 inline JS（仍須 reduced-motion 安全）。
- 單檔 HTML ≤ 200 KB（不含 assets 圖）；無外部 CDN（src/href 不可 http:// 或 https:// 開頭）；圖片用相對路徑 `assets/<filename>.webp`。

## Required Images

使用真實風格的方形專輯封面圖，共 6 張 `cover-1.webp`..`cover-6.webp`（600×600，抽象無文字、適合音樂 App、各具不同氛圍），見 `assets-manifest.json`。

用法：
- **detail** 主打專輯 `島嶼晨光` 封面 → `assets/cover-1.webp`。
- **player** 大封面 → `assets/cover-1.webp`（與 detail 同專輯）。
- **mini-player** 縮圖 → `assets/cover-1.webp`。
- **home** 7 個歌單卡封面 → 依序 `assets/cover-1.webp` … `cover-6.webp`，第 7 張循環回 `cover-1.webp`。
- **search / library** 列表 leading 縮圖可取任一 cover。
- **Fallback**：若圖檔不存在，以 CSS tonal 漸層色塊替代（例如 `linear-gradient(135deg, var(--m3-primary-80), var(--m3-tertiary-80))`），維持版面不破。

## Reference Snippet

```css
/* ── 手機殼：鎖 390×844、三段佈局 ── */
.device {
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  position: relative;
  background: var(--m3-bg);
  border-radius: var(--device-radius);
  overflow: hidden;
  box-shadow: var(--elev-3);
  font-family: var(--font-body);
  color: var(--m3-on-surface);
  display: flex;
  flex-direction: column;
}

/* ── 狀態列：永遠在頂 ── */
.statusbar {
  height: var(--statusbar-h);
  flex: 0 0 var(--statusbar-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--sp-6);
  font: 500 15px/20px var(--font-display);
  background: var(--m3-bg);
}

/* ── 可捲動內容區：唯一捲動，底部避開 mini-player + tabbar ── */
.screens {
  flex: 1;
  overflow-y: auto;
  padding: 0 var(--screen-pad);
  padding-bottom: calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom));
}

/* ── 區段標題列 + 查看全部 ── */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--sp-6) 0 var(--sp-3);
}
.section-head h2 { font: 500 17px/22px var(--font-display); margin: 0; }
.section-head .more {
  font: 500 11px/16px var(--font-body); letter-spacing: .05em;
  color: var(--m3-primary-40); cursor: pointer;
}

/* ── M3 elevated 卡 + state layer ── */
.card {
  background: var(--m3-surface-3);
  border-radius: var(--r-lg);
  box-shadow: var(--elev-1);
  padding: var(--sp-4);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.card::after {
  content: ""; position: absolute; inset: 0;
  background: var(--m3-primary-40); opacity: 0;
  transition: opacity .15s ease; pointer-events: none;
}
.card:hover::after  { opacity: var(--state-hover); }
.card:active::after { opacity: var(--state-press); }

/* ── 歌單 media-card：封面與文字分開容器，文字首字不被裁 ── */
.media-card { width: 150px; cursor: pointer; }
.media-card__cover {
  width: 100%; aspect-ratio: 1; border-radius: var(--r-lg);
  overflow: hidden;            /* 只裁圖 */
  background:
    image-set(url('assets/cover-1.webp')) center / cover no-repeat,
    linear-gradient(135deg, var(--m3-primary-80), var(--m3-tertiary-80));
}
.media-card__body {
  padding: var(--sp-2) var(--sp-3);   /* 文字左右 padding，禁負 margin */
}
.media-card__title {
  font: 500 15px/20px var(--font-body);
  margin: 0;
  min-width: 0;                       /* flex/grid 子項溢出剋星 */
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; /* 尾端省略 */
}
.media-card__sub {                    /* ← 藝人副標：本次修的跑版主角 */
  font: 400 13px/19px var(--font-body);
  color: var(--m3-on-surface-variant);
  margin: 2px 0 0;
  padding: 0;                         /* 不需負值；繼承父層左右 padding */
  min-width: 0;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; /* 首字完整，省略在尾端 */
}

/* ── filled tonal 按鈕 ── */
.btn-tonal {
  display: inline-flex; align-items: center; gap: var(--sp-2);
  background: var(--m3-primary-90);
  color: var(--m3-primary-10);
  border: none;
  padding: 10px var(--sp-6);
  border-radius: var(--r-pill);
  font: 500 13px/18px var(--font-body); letter-spacing: .01em;
  cursor: pointer; position: relative; overflow: hidden;
}
.btn-tonal:active { transform: scale(.98); }

/* ── 分類 chip（outlined，可選中）── */
.chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: var(--sp-2) var(--sp-4);
  border-radius: var(--r-pill);
  border: 1px solid var(--m3-outline-variant);
  background: transparent;
  color: var(--m3-on-surface-variant);
  font: 500 13px/18px var(--font-body);
  cursor: pointer; white-space: nowrap;
}
.chip[aria-selected="true"] {
  background: var(--m3-secondary-90);
  color: var(--m3-on-secondary-10);
  border-color: transparent;
}

/* ── 曲目列 / list-item ── */
.song-row {
  display: grid;
  grid-template-columns: 24px 1fr auto;
  align-items: center;
  gap: var(--sp-3);
  padding: var(--sp-3) var(--sp-4);
  border-radius: var(--r-md);
  cursor: pointer;
}
.song-row:hover  { background: var(--m3-surface-2); }
.song-row:active { background: var(--m3-surface-3); }
.song-row .meta  { min-width: 0; }    /* 讓歌名能省略而非撐爆 */
.song-row .title { font: 400 15px/22px var(--font-body); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .sub   { font: 400 13px/19px var(--font-body); color: var(--m3-on-surface-variant); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .dur   { font: 400 13px/16px var(--font-body); color: var(--m3-on-surface-variant); }

/* ── player 大封面 + now-playing ── */
.cover-lg {
  width: 100%; aspect-ratio: 1; border-radius: var(--r-lg);
  overflow: hidden;
  background:
    image-set(url('assets/cover-1.webp')) center / cover no-repeat,
    linear-gradient(135deg, var(--m3-primary-80), var(--m3-tertiary-80));
}
.now-playing { text-align: center; padding: var(--sp-4); }
.now-playing .track  { font: 400 22px/28px var(--font-display); margin-top: var(--sp-4); }
.now-playing .artist { font: 400 13px/19px var(--font-body); color: var(--m3-on-surface-variant); }

/* ── 進度條（M3 slider）── */
.progress { display: grid; grid-template-columns: auto 1fr auto; gap: var(--sp-3); align-items: center; padding: 0 var(--sp-4); }
.progress .track-line { height: 4px; border-radius: var(--r-pill); background: var(--m3-surface-variant); position: relative; }
.progress .track-line > i { position: absolute; left: 0; top: 0; bottom: 0; width: 38%; background: var(--m3-primary-40); border-radius: var(--r-pill); }
.progress .time { font: 400 11px/16px var(--font-body); color: var(--m3-on-surface-variant); }

/* ── 播放鍵 ▶/⏸ 兩態 ── */
.play-btn { cursor: pointer; }
.play-btn .icon-pause { display: none; }
.play-btn[aria-pressed="true"] .icon-play  { display: none; }
.play-btn[aria-pressed="true"] .icon-pause { display: inline; }

/* ── 無損音質徽章 ── */
.badge-hires {
  display: inline-block; padding: var(--sp-1) var(--sp-3);
  border-radius: var(--r-pill);
  background: var(--m3-tertiary-90); color: var(--m3-tertiary-10);
  font: 500 11px/16px var(--font-body); letter-spacing: .05em;
}

/* ── FAB ── */
.fab {
  position: absolute; right: var(--sp-4);
  bottom: calc(var(--tabbar-h) + var(--sp-4));
  width: 56px; height: 56px; border-radius: var(--r-md);
  background: var(--m3-primary-90); color: var(--m3-primary-10);
  border: none; box-shadow: var(--elev-3);
  display: grid; place-items: center; cursor: pointer;
}

/* ── mini-player：常駐於 tab-bar 上方，文字首字不裁 ── */
.miniplayer {
  height: var(--miniplayer-h);
  flex: 0 0 var(--miniplayer-h);
  display: grid; grid-template-columns: 40px 1fr 40px;
  align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-4);
  background: var(--m3-surface-2);
  cursor: pointer;
  border-top: 1px solid var(--m3-outline-variant);
}
.miniplayer__cover { width: 40px; height: 40px; border-radius: var(--r-sm); overflow: hidden; background: linear-gradient(135deg, var(--m3-primary-80), var(--m3-tertiary-80)); }
.miniplayer__meta  { min-width: 0; }
.miniplayer__title { font: 500 13px/18px var(--font-body); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer__sub   { font: 400 11px/16px var(--font-body); color: var(--m3-on-surface-variant); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ── M3 底部導覽列 + 藥丸 active indicator ── */
.tabbar {
  height: var(--tabbar-h);
  flex: 0 0 var(--tabbar-h);
  background: var(--m3-surface-2);
  display: flex; align-items: flex-start;
  padding-top: var(--sp-3);
}
.tab {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; gap: var(--sp-1);
  color: var(--m3-on-surface-variant);
  font: 500 11px/16px var(--font-body); letter-spacing: .05em;
  cursor: pointer;
}
.tab .pill {
  width: 64px; height: 32px; border-radius: var(--r-pill);
  display: grid; place-items: center; background: transparent;
  transition: background .15s ease;
}
.tab:hover .pill { background: rgba(103,80,164,.08); }
.tab[aria-current="page"] { color: var(--m3-on-surface); }
.tab[aria-current="page"] .pill { background: var(--m3-secondary-90); }

/* ── 訂閱方案卡 ── */
.plan { border-radius: var(--r-lg); padding: var(--sp-5); margin-bottom: var(--sp-3); position: relative; }
.plan--free   { background: var(--m3-surface-3); }
.plan--plus   { background: var(--m3-primary-90); color: var(--m3-primary-10); }  /* 主推 filled tonal */
.plan--family { background: transparent; border: 1px solid var(--m3-outline-variant); }
.plan__name  { font: 500 17px/22px var(--font-display); margin: 0; }
.plan__price { font: 400 22px/28px var(--font-display); margin: var(--sp-1) 0 0; }
.plan__tag   { position: absolute; top: var(--sp-4); right: var(--sp-4); font: 500 11px/16px var(--font-body); letter-spacing: .05em; padding: var(--sp-1) var(--sp-3); border-radius: var(--r-pill); background: var(--m3-secondary-90); color: var(--m3-on-secondary-10); }

/* ── reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```
