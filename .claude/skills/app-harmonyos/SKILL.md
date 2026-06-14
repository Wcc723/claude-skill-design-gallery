---
name: app-harmonyos
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in HarmonyOS (鴻蒙) style. Triggers on HarmonyOS、鴻蒙、Harmony、華為、Huawei、HarmonyOS Sans、靈動卡片、柵格化、card grid、#007DFF、通透留白、清爽資訊密度.
user-invocable: true
---

# 鴻蒙 HarmonyOS — 迴聲 Resona

## Style Philosophy

HarmonyOS 是華為的跨裝置作業系統設計語言，核心是「**一生萬物、生生不息**」的通透哲學：介面像被光線穿透的清玻璃，元素以**靈動卡片**自由重組、以**柵格化**排布，資訊密度高卻不擁擠。它不追求 iOS 的精緻擬真，也不像 Material 那樣強調陰影層階；而是用**大面積純淨留白**讓內容浮在表面，配上單一鮮明的科技藍 `#007DFF` 作為唯一強調色。整體氣質是「**冷靜、通透、有秩序的呼吸感**」——像把音樂串流做成一台精密儀器的儀表板，但每個模組都圓潤友善、可被點擊喚醒。

把這份精修目標記在心裡：**要更細膩、更像真實上架 App、零跑版**。差別不在於加更多色彩，而在於——間距用同一套 8pt 尺度、字級各有明確行高字重、圓角陰影都來自 token、每個可點元素都有 hover/active 回饋、迷你播放列常駐、內容密度恰到好處但留白依舊通透。

三個視覺辨識特徵：
1. **靈動卡片 + 柵格化資訊密度**：所有內容裝進 16–24px 圓角卡片，2 欄／不對稱柵格自由排布，卡片之間以留白分隔而非分隔線；同一畫面可同時有「主卡 + 卡牆 + 清單」三種密度層次。
2. **單一科技藍 accent**：`#007DFF` 是整頁唯一彩色，用於 active 態、進度、強調數字、主按鈕、迷你播放列播放鍵；其餘一律中性灰階。
3. **柔和淺陰影 + 高留白**：陰影極淺（接近無，只有 4–6% 黑），靠 surface 微差與 generous padding（16–24px）營造層次，不靠重陰影。hover 時陰影才微微抬升，傳達「卡片被喚醒」的靈動感。

---

## Design Tokens (CSS variables)

完整 token，數值寫死於此，SubAgent 不得自由發明新數值——間距只能取 `--sp-*` 階、字級只能取 Typography Scale、圓角陰影只能取以下 token。

```css
:root {
  /* ── 手機外殼（裝置鎖定，禁止改動）── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 60px;            /* tab 本體高（不含 mini-player、不含 safe-bottom） */
  --miniplayer-h: 56px;        /* 迷你播放列高 */
  --safe-bottom: 34px;         /* Home indicator 安全區 */
  --screen-radius: 44px;       /* 模擬裝置螢幕圓角 */

  /* ── HarmonyOS 色彩：單一科技藍 + 中性灰階 ── */
  --hm-accent: #007DFF;        /* 唯一強調色 */
  --hm-accent-press: #0066D6;  /* 按壓態（:active） */
  --hm-accent-hover: #1A8BFF;  /* hover 態，略亮 */
  --hm-accent-soft: #E5F1FF;   /* 藍色填底（chip active / badge / 推薦卡底） */
  --hm-accent-tint: rgba(0,125,255,0.08);

  --hm-bg: #F1F3F5;            /* App 底層淺灰，襯出白卡 */
  --hm-surface: #FFFFFF;       /* 卡片表面 */
  --hm-surface-2: #F7F8FA;     /* 次級 surface（輸入框 / chip 預設 / 內嵌列） */
  --hm-surface-press: #EDEFF2; /* 列／卡按壓底色 */
  --hm-line: #ECEEF1;          /* 極淡分隔線（少用） */

  --hm-text: #0D0D0D;          /* 主文字，對白卡 ≈ 19:1 */
  --hm-text-2: #5A6066;        /* 次文字，對白卡 ≈ 6.4:1 通過 AA */
  --hm-text-3: #9AA0A6;        /* 第三級（時長 / 計數），僅用於大字或非關鍵 */
  --hm-on-accent: #FFFFFF;     /* 藍底白字 ≈ 4.6:1 通過 AA */

  /* ── 圓角（HarmonyOS 偏好 16–24，膠囊用 999）── */
  --radius-card: 20px;
  --radius-card-lg: 24px;      /* 主卡 / 大封面 */
  --radius-chip: 999px;
  --radius-cover: 16px;        /* 列縮圖 / 中型封面 */
  --radius-thumb: 10px;        /* 小縮圖（song-row / mini-player） */
  --radius-control: 14px;      /* 按鈕 / 搜尋框 */

  /* ── 陰影：極淺、靠留白分層；hover 才抬升 ── */
  --shadow-card: 0 2px 8px rgba(17,24,39,0.04), 0 1px 2px rgba(17,24,39,0.04);
  --shadow-card-hover: 0 8px 20px rgba(17,24,39,0.08), 0 2px 6px rgba(17,24,39,0.05);
  --shadow-float: 0 8px 24px rgba(0,125,255,0.22);  /* 僅主 CTA / 播放圓鈕 / FAB */
  --shadow-bar: 0 -1px 0 rgba(17,24,39,0.04);       /* tab-bar 頂部極淡描邊 */

  /* ── 字體：HarmonyOS Sans 感（缺字退回系統無襯線）── */
  --font-ui: 'HarmonyOS Sans', 'HarmonyOS Sans SC', 'PingFang TC',
             'Noto Sans TC', 'Source Han Sans TC', system-ui, sans-serif;

  /* ── 8pt 間距系統：所有 margin/padding/gap 只能取這幾階 ── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;

  /* 語意化別名（便於閱讀，值來自上方階梯） */
  --pad-screen: 20px;   /* = --sp-5，內容區左右留白 */
  --pad-card: 16px;     /* = --sp-4，卡片內距 */
  --gap-card: 12px;     /* = --sp-3，卡片間 / 卡牆 gap */
  --gap-section: 24px;  /* = --sp-6，區段之間 */

  /* ── 動效（全部只動 transform / opacity）── */
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --dur: 180ms;
}
```

### 間距使用規則（無跑版關鍵）

- 區段（section block）之間留 `--gap-section`(24px)；區段標題列與其內容之間留 `--sp-3`(12px)。
- 卡牆 grid gap 一律 `--gap-card`(12px)；卡內 padding 一律 `--pad-card`(16px)。
- song-row 上下 padding 用 `--sp-2`(8px)~`--sp-3`(12px)，左右靠 content 的 `--pad-screen` 不另加。
- 任何「貼邊」都禁止：內容區左右恆 `--pad-screen`(20px)，文字不可碰到裝置邊。

---

## Typography Scale（手機字級，含行高／字重／字距）

| 級距 | size / line-height / weight / letter-spacing | 用途 |
| --- | --- | --- |
| display | 28px / 34px / 700 / -0.02em | home 品牌「迴聲」、player 曲名 |
| title | 22px / 28px / 600 / -0.01em | 區塊主標、detail 專輯名、訂閱卡價格 |
| headline | 17px / 24px / 600 / 0 | 卡片標題、歌單名、tab active、區段標題 |
| body | 15px / 22px / 400 / 0 | 內文、曲目名、說明 |
| label | 13px / 18px / 500 / 0 | 次要標籤、藝人名、chip 文字、副標 |
| caption | 11px / 15px / 400 / +0.01em | 時長、播放次數、status-bar、tab 文字 |

- 字重只用 400 / 500 / 600 / 700；HarmonyOS Sans 的氣質是「方正中帶圓潤」。
- 數字（進度時間、播放次數、價格、曲序）一律 `font-variant-numeric: tabular-nums` 對齊。
- 所有單行文字（歌單名、曲名、藝人名）必須 `overflow: hidden; text-overflow: ellipsis; white-space: nowrap`，**禁止溢出裝置或被裁字**；副標可換 2 行用 `-webkit-line-clamp: 2`。

---

## Component & Layout（逐屏細則）

整頁是一個 390×844 裝置殼，由上而下三層**永遠固定**：頂部 `status-bar`(44px) → 中間「**單一可捲動內容區** `.content`」(8 屏依序堆疊) → 底部「**迷你播放列 + tab-bar**」固定堆疊。內容區左右恆留 `--pad-screen`(20px)，底部以 `padding-bottom` 預留 `mini-player + tab-bar + safe-bottom` 的高度，**內容絕不被遮擋**。

> 導覽心智模型：tab-bar 4 顆切換 home/search/library/profile；卡片 → detail；曲目列 / 迷你播放列 → player；detail 與 player 各有左上返回鍵回到上一屏。實作以 `:target` 或 class 切換顯示（純 CSS/JS，無框架）。

### status-bar（`data-screen="status-bar"`）
固定頂部 44px，透明貼齊背景。左側時間 **9:41**（caption、600 字重、tabular-nums）；右側依序訊號格、Wi-Fi 弧、電量符號（inline SVG 或 unicode，配 `--hm-text`）。每頁固定不可省。

### home（`data-screen="home"`）— 至少三大區段，密度豐富但留白通透
1. **品牌列**：左 display 級「迴聲 / Resona」+ 一行 label slogan「讓每首歌，回到你身上」；右側圓形頭像（44px）。
2. **分類 chip 橫排**：`華語 / 獨立 / 電子 / 放鬆`，預設 `--hm-surface-2` 灰膠囊，第一顆 active（`--hm-accent-soft` 底 + `--hm-accent` 字）。可橫向捲動。
3. **「每日迴聲」每日推薦 banner**：大圓角 24px 主卡，藍色漸層底（`linear-gradient(135deg,#0A66E8,#007DFF)`），白字。含小標「每日迴聲」+ 一行「個人化每日推薦」功能露出 + 封面 `assets/cover-1.webp`（右側方塊）+ 一顆白底藍字「立即播放 ▶」按鈕。
4. **「為你精選歌單」卡牆**：區段標題列（headline「為你精選歌單」+ 右側「查看全部 ›」連結，cursor:pointer）。下方 `grid-2` **柵格化 2 欄卡片，列全部 7 個歌單**（封面 cover-2..cover-6 循環，第 7 張重用 cover-1）：
   - `浪潮回聲`（副標：海平面樂團）
   - `深夜公路`（副標：夜行列車）
   - `島嶼晨光`（副標：林知夏）
   - **`雨後散步`（副標：何遠）** ← 注意：本歌單藝人為「何遠」，不可寫 Echo Lab
   - `城市心跳`（副標：Echo Lab）
   - `山海之間`（副標：海平面樂團）
   - `失重時刻`（副標：夜行列車）
   每卡 = 方形封面 + 歌單名(headline) + 藝人副標(label, `--hm-text-2`)；整卡可點 → detail。
5. **「最近播放」清單**：區段標題 headline「最近播放」+「查看全部 ›」。3–4 列 `.song-row`（縮圖 + 歌名 + 藝人 + 右側時長），點列 → player。露出歌名如〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉與藝人。
6. 底部露出 1–2 張**核心功能小卡**（「無損音質串流」「個人化每日推薦」），label 級徽章。

### search（`data-screen="search"`）
1. **搜尋框**：`--hm-surface-2` 底、`--radius-control`、左放大鏡 icon、placeholder「搜尋歌曲、藝人、歌單」、:focus 時邊框轉 `--hm-accent`。
2. **4 分類 chip**：`華語 / 獨立 / 電子 / 放鬆`。
3. **熱門歌曲**：區段標題 headline「熱門歌曲」。**編號清單**（`.song-row` 帶左側 1–7 序號，`--hm-text-3`、tabular-nums）混排歌名與藝人，含時長：露出多首歌名（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉…）與藝人（`海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠`），右側時長 caption。點列 → player。
4. **熱門藝人**：區段標題 headline「熱門藝人」+ 橫向圓形頭像列，名字 label：`海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠`。

### detail（`data-screen="detail"`）— 主打專輯 `島嶼晨光`
1. 左上**返回鍵 ‹**（回 home，44×44 命中區）。
2. **大封面**（`assets/cover-3.webp`，置中、寬約 200px、`--radius-card-lg`、`--shadow-card`，無圖以 `.cover` 漸層 fallback）。
3. **專輯資訊**：title 級「島嶼晨光」+ label「林知夏」+ 一行 meta（caption）「2026 · 9 首 · 38 分鐘」。
4. **動作列**：藍色主按鈕「播放全部 ▶」(`.btn-primary`) + 次按鈕「隨機播放 ⤮」(`--hm-surface-2` 底)。
5. **完整 9 曲目清單**（`.song-row` ×9，全部列出，禁刪）：每列 = 曲序(caption, tabular-nums) + 曲名(body) + 藝人(label) + 右側時長(caption) + 行尾「⋯」選單鍵（hover 才顯著）。曲目與建議時長：
   1. 〈藍色信號〉 04:12
   2. 〈霓虹巷弄〉 03:48
   3. 〈候鳥地圖〉 04:30
   4. 〈靜電〉 03:05
   5. 〈晚風練習曲〉 02:47（← player 正在播放此首，可加藍色「正在播放」小點）
   6. 〈無人車站〉 05:01
   7. 〈潮間帶〉 03:52
   8. 〈第七個夏天〉 04:20
   9. 〈月台九又四分之三〉 06:15
   藝人主要為「林知夏」，可穿插一兩首 feat. 其他藝人。點任一曲 → player。

### player（`data-screen="player"`）— 通透全屏播放器（此屏不顯示 mini-player）
1. 左上**返回鍵 ⌄**（回上一屏）+ 中央 caption「正在播放 · 島嶼晨光」+ 右上「⋯」。
2. **大封面**（`assets/cover-4.webp`，置中、寬約 280px / max 80%、`--radius-card-lg`、`--shadow-card`）。
3. **曲目資訊**：曲名 display「晚風練習曲」+ 藝人 label「林知夏」+ 專輯 caption「島嶼晨光」。
4. **歌詞同步**：一行逐字高亮歌詞（當前行 `--hm-accent`、前後行 `--hm-text-3`），標示「歌詞同步」。
5. **進度條** `.player-progress`：藍色已播段 + 灰軌道 + 圓點滑塊；左 `02:47` 右 `-00:00`（或左當前右總長），caption tabular-nums。
6. **控制列**：隨機 ⤮ / 上一首 ⏮ / **播放圓鈕（藍色 64px，含 ▶/⏸ 兩態）** / 下一首 ⏭ / 循環 ⟲。
7. **底列**：左「無損音質串流」Hi-Res 徽章（`--hm-accent-soft` 藥丸）、右音量 icon。

### library（`data-screen="library"`）
1. 標題 title「我的音樂庫」。
2. **分頁列**（segmented，3 段）：`歌單 / 專輯 / 已下載`，active 段 `--hm-accent-soft` 底 + `--hm-accent` 字。
3. **收藏歌單清單**：再次列出數個歌單，每列 = 封面縮圖 + 歌單名(headline) + 曲數(caption「· 12 首」)：`雨後散步 / 城市心跳 / 山海之間 / 失重時刻`（並補足其餘以涵蓋 7 歌單其它名於 home 已現）。點列 → detail。
4. **功能卡**：兩張並列卡「離線下載」（icon + 名 + 「3 個歌單已下載」）、「共享音樂庫」（icon + 名 + 「Family 方案」），露出功能名。

### profile（`data-screen="profile"`）
1. **使用者卡**：頭像 + 暱稱 + 「迴聲 Resona 會員」label。
2. **播放偏好**：列出開關列，含「**跨裝置接續播放**」（右側藍色 toggle，active 態）、「無損音質串流」、「歌詞同步」。
3. **三訂閱方案卡**（並列／堆疊，必含一字不差價格）：
   - `免費`：`NT$ 0 ／月` — 含廣告插播、標準音質。標「目前方案」。
   - `Plus`：`NT$ 149 ／月` — 無廣告、無損音質、離線下載。**推薦態**（`--hm-accent` 邊框 + 「推薦」藍 badge + `--hm-accent-soft` 微底）。
   - `Family`：`NT$ 249 ／月` — 6 帳號、共享音樂庫、家長控制。
   `NT$` 與數字間一個半形空格，「／月」全形斜線。

### mini-player（迷你播放列）— 常駐於 tab-bar 上方
- 顯示於 **home / search / library / profile**；**player 屏本身不顯示**（避免重複）。
- 結構：左小縮圖(40px, `--radius-thumb`) + 歌名(body, 截斷)「晚風練習曲」+ 藝人(caption)「林知夏」+ 右側「播放/暫停鍵（▶/⏸ 兩態）」。
- 整條 `--hm-surface` 底 + 頂部 `--hm-line` 描邊 + 底部一條 `--hm-accent` 細進度（2px，寬約 60%）暗示播放進度。
- **點整條（除播放鍵外）→ 展開到 player 畫面**；播放鍵就地切 ▶/⏸ 不導頁。
- 位置：`tab-bar` 容器內、4 tab 之上；高 `--miniplayer-h`(56px)，不擠壓 tab 本體。

### tab-bar（`data-screen="tab-bar"`）
固定底部容器，**內含 mini-player(上) + 4 tab(下)**。tab 高 `--tabbar-h`(60px) + `--safe-bottom`，白底 + 頂部 `--shadow-bar` 極淡描邊。4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，每個含 icon(22px) + 文字(caption)。active tab（首頁）icon 與文字皆 `--hm-accent`，其餘 `--hm-text-3`。

封面圖一律相對路徑 `assets/cover-N.webp`；若圖檔不存在，以 `.cover` CSS 漸層色塊 fallback，畫面仍完整可讀。

---

## 微互動（所有可點元素都要做到）

- 所有可點元素 `cursor: pointer`，並有明確 `:hover` / `:active`：
  - 卡片：`:hover` 抬升 `--shadow-card-hover` + `transform: translateY(-2px)`；`:active` 壓回並 `background: --hm-surface-press`。
  - song-row：`:hover`/`:active` 整列 `background: --hm-surface-press` + `border-radius: --radius-thumb`。
  - chip：`:hover` 略深；`.active` 為藍底藍字。tab：`.active` 為藍色 icon+字。
  - 主按鈕：`:hover` → `--hm-accent-hover`；`:active` → `--hm-accent-press`。
- **播放鍵兩態**：player 主圓鈕與 mini-player 播放鍵都用 ▶/⏸ 切換（toggle class 或 `:checked`），按下有縮放回饋 `transform: scale(0.94)`。
- segmented 分頁、tab、卡片都要有 active 視覺；切換時只動 `transform`/`opacity`。
- 任何 transition 必附 `@media (prefers-reduced-motion: reduce)` 關閉，且**只動 transform / opacity**（禁動 top/left/width/height/box-shadow 觸發 reflow，shadow 改用 opacity 疊層或直接無 transition）。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 全頁只用一個彩色 `--hm-accent` (#007DFF)，其餘中性灰階 | 撒多種彩色、彩虹漸層 |
| 間距只取 `--sp-*` 8pt 階；字級只取 Typography Scale | 隨手寫 13px/17px/21px 等非階梯數值 |
| 圓角 16–24px，內容裝進靈動卡片；陰影只用 token | 用方角卡、<12px 小圓角、自創 box-shadow |
| 陰影極淺，hover 才抬升，靠留白與 surface 微差分層 | 用重陰影 / 深 Material elevation 製造立體 |
| 柵格化 2 欄歌單卡牆 + 區段標題「查看全部」呈現密度 | 全部單欄長列表、沒有區段層次 |
| mini-player 常駐 4 屏、player 屏不重複顯示 | 每屏都塞 mini-player、或完全沒有 mini-player |
| 雨後散步 副標寫「何遠」 | 雨後散步 副標誤寫「Echo Lab」 |
| 每個可點元素都有 cursor + hover + active 兩態 | 卡片/列點下去毫無回饋 |
| 單行文字一律 ellipsis 截斷、不溢出裝置 | 文字撐破卡片、被裁切、貼邊 |
| 次文字用 `--hm-text-2` 確保對白卡 ≥ 4.5:1 | 用 `--hm-text-3` 當關鍵正文（對比不足） |

---

## Mobile Chrome Spec（無跑版鐵律）

- **390×844 直式**：最外層 `.device` 寬鎖 `--screen-w`、高鎖 `--screen-h`、置中、`overflow: hidden`、`border-radius: --screen-radius`、`position: relative`、`display: flex; flex-direction: column`。
- **三段式 flex 佈局**：`.statusbar`(固定高，flex:none) → `.content`(flex:1, `overflow-y:auto`) → `.dock`(固定高，flex:none，內含 mini-player + tab-bar)。status-bar 永遠在頂、dock 永遠在底、中間捲動。
- **status-bar 9:41**：固定 44px，左時間右訊號／Wi-Fi／電量，每頁固定不可省。
- **內容不被遮擋**：`.content` 底部 `padding-bottom: --sp-4`，dock 為獨立 flex 子項，內容捲到底仍露出最後一張卡；單屏切換時其餘屏 `display:none`，當前屏佔 `.content`。
- **文字不溢出/不裁切**：所有單行截斷、卡內 padding 充足(`--pad-card`)、左右恆 `--pad-screen`。
- **圓角螢幕**：`.device` 的 `--screen-radius` 裁切內容；dock 底部圓角與裝置一致。
- 8 屏共用同一 `.device` 外框與同一 `.dock`，只切換 `.content` 內當前屏。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- 8 個 `<section data-screen="<id>">`，固定 id 與順序：`status-bar → home → search → detail → player → library → profile → tab-bar`，各出現恰一次（mini-player 屬於 tab-bar section 之內，不另計 data-screen）。
- `<body data-viewport="mobile">` 必須存在。
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`。
- status-bar 顯示 `9:41`；tab-bar 含 4 tab 可見文字 `首頁 / 搜尋 / 音樂庫 / 我的`。
- 三層定價精確字串於同一畫面（profile）：`免費 NT$ 0`、`Plus NT$ 149`、`Family NT$ 249`（後綴「／月」），`NT$` 與數字間一個半形空格。
- 所有 app-brief「必抄」字串出現在**可見 body 文字**（非僅屬性）：品牌 迴聲 / Resona；6 功能 個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫；7 歌單 浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻；9 歌名 藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三；5 藝人 海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠；4 分類 chip 華語 / 獨立 / 電子 / 放鬆。
- **正在播放組合**（player 同屏）：`林知夏` —〈`晚風練習曲`〉，專輯 `島嶼晨光`，進度 `02:47`。
- **雨後散步** 歌單副標的藝人為 `何遠`（不可寫 Echo Lab）。
- **可互動多畫面導覽**：tab 切換 4 主屏 + 卡片→detail + 曲目列/迷你播放列→player + detail/player 返回鍵回上一屏。
- mini-player 常駐 home/search/library/profile、player 屏不顯示；含 ▶/⏸ 兩態播放鍵。
- 單檔 ≤ 200 KB（不含 assets 圖）、無外部 CDN（src/href 不得以 http:// 或 https:// 開頭）、CSS 變數驅動、不可用 framework CSS。
- 任何動畫必附 `@media (prefers-reduced-motion: reduce)`，且只動 `transform` / `opacity`。

---

## Required Images

本風格使用**真實感方形專輯封面圖**（非純 CSS 圖案）。共 6 張，相對路徑 `assets/cover-1.webp` .. `assets/cover-6.webp`，每張 600×600，抽象、無文字、無 logo、各具不同氛圍，適合音樂串流 App。

用法：
- `home` 的「每日迴聲」主 banner 用 `cover-1.webp`；歌單牆各卡循環 `cover-2`..`cover-6`（第 7 張重用 `cover-1`）。
- `detail` 主打專輯 `島嶼晨光` 封面用 `cover-3.webp`。
- `player` 大封面用 `cover-4.webp`。
- song-row / mini-player / 最近播放縮圖循環取用任一 cover。
- **若任一 cover 圖檔不存在**：以 `.cover` 的漸層 fallback 呈現完整可讀畫面，不依賴圖片。

詳見同目錄 `assets-manifest.json`。

---

## Reference Snippet

可直接套用的 HarmonyOS 風格 CSS（≥ 60 行：device 殼 / statusbar / 區段 / song-row / 卡片 / mini-player / tabbar / 進度條 / 訂閱卡 + prefers-reduced-motion）。

```css
/* ── 裝置外殼：三段式 flex ── */
.device {
  width: var(--screen-w); height: var(--screen-h);
  margin: 0 auto; position: relative;
  display: flex; flex-direction: column;
  background: var(--hm-bg);
  border-radius: var(--screen-radius);
  overflow: hidden;
  font-family: var(--font-ui);
  color: var(--hm-text);
  -webkit-font-smoothing: antialiased;
}

/* ── 狀態列（固定頂）── */
.statusbar {
  flex: none; height: var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 22px;
  font-size: 13px; font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.statusbar .signals { display: flex; gap: 6px; align-items: center; }

/* ── 單一可捲動內容區（中間）── */
.content {
  flex: 1; overflow-y: auto;
  padding: 0 var(--pad-screen) var(--sp-4);
  -webkit-overflow-scrolling: touch;
}
.screen { display: none; }
.screen.active { display: block; }

/* ── 區段標題列（含「查看全部」）── */
.section { margin-top: var(--gap-section); }
.section-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: var(--sp-3);
}
.section-head h2 { font-size: 17px; line-height: 24px; font-weight: 600; margin: 0; }
.section-head .more {
  font-size: 13px; color: var(--hm-accent); font-weight: 500;
  cursor: pointer;
}

/* ── 靈動卡片（hover 抬升）── */
.card {
  background: var(--hm-surface);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--pad-card);
  cursor: pointer;
  transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
}
.card:hover { transform: translateY(-2px); box-shadow: var(--shadow-card-hover); }
.card:active { transform: translateY(0) scale(0.99); background: var(--hm-surface-press); }
.card-lg { border-radius: var(--radius-card-lg); padding: var(--sp-5); }

/* ── 柵格化卡牆 ── */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--gap-card); }

/* 封面（圖不存在時漸層 fallback） */
.cover {
  aspect-ratio: 1; width: 100%;
  border-radius: var(--radius-cover);
  background: linear-gradient(135deg, #DCEBFF 0%, #8FBEFF 55%, #007DFF 100%);
  background-size: cover; background-position: center;
}

/* ── 每日迴聲主 banner ── */
.daily {
  display: flex; gap: var(--sp-4); align-items: center;
  padding: var(--sp-5);
  border-radius: var(--radius-card-lg);
  background: linear-gradient(135deg, #0A66E8 0%, #007DFF 100%);
  color: var(--hm-on-accent); cursor: pointer;
}
.daily .cover { width: 88px; flex: none; border-radius: var(--radius-cover); }

/* ── 分類 chip ── */
.chip {
  display: inline-flex; align-items: center; padding: var(--sp-2) var(--sp-4);
  border-radius: var(--radius-chip);
  background: var(--hm-surface-2); color: var(--hm-text-2);
  font-size: 13px; font-weight: 500; white-space: nowrap;
  cursor: pointer; transition: background var(--dur) var(--ease);
}
.chip:hover { background: var(--hm-surface-press); }
.chip.active { background: var(--hm-accent-soft); color: var(--hm-accent); }

/* ── 歌曲列（編號 / 縮圖 / 時長 / ⋯）── */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-2) var(--sp-1);
  border-radius: var(--radius-thumb);
  cursor: pointer; transition: background var(--dur) var(--ease);
}
.song-row:hover, .song-row:active { background: var(--hm-surface-press); }
.song-row .idx { width: 20px; text-align: center; font-size: 13px;
  color: var(--hm-text-3); font-variant-numeric: tabular-nums; flex: none; }
.song-row .thumb { width: 48px; height: 48px; border-radius: var(--radius-thumb);
  flex: none; background: linear-gradient(135deg, #DCEBFF, #007DFF); }
.song-row .meta { min-width: 0; flex: 1; }
.song-row .title { font-size: 15px; font-weight: 500; color: var(--hm-text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .sub { font-size: 13px; color: var(--hm-text-2);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .dur { font-size: 11px; color: var(--hm-text-3);
  font-variant-numeric: tabular-nums; flex: none; }
.song-row .more-ic { color: var(--hm-text-3); opacity: 0; flex: none; }
.song-row:hover .more-ic { opacity: 1; }

/* ── 主按鈕 / 播放圓鈕 ── */
.btn-primary {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--hm-accent); color: var(--hm-on-accent); border: none;
  border-radius: var(--radius-control); padding: 13px var(--sp-6);
  font-size: 15px; font-weight: 600; cursor: pointer;
  box-shadow: var(--shadow-float);
  transition: transform var(--dur) var(--ease), background var(--dur) var(--ease);
}
.btn-primary:hover { background: var(--hm-accent-hover); }
.btn-primary:active { background: var(--hm-accent-press); transform: scale(0.96); }
.play-fab {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--hm-accent); color: var(--hm-on-accent); border: none;
  display: grid; place-items: center; cursor: pointer;
  box-shadow: var(--shadow-float);
  transition: transform var(--dur) var(--ease);
}
.play-fab:active { transform: scale(0.94); }

/* ── 播放器：大封面 + 進度 ── */
.now-art { width: 280px; max-width: 80%; aspect-ratio: 1; margin: var(--sp-6) auto;
  border-radius: var(--radius-card-lg); box-shadow: var(--shadow-card); }
.player-progress { height: 4px; border-radius: 999px; background: var(--hm-line);
  position: relative; margin: var(--sp-4) 0 var(--sp-1); }
.player-progress .played { position: absolute; inset: 0 40% 0 0;
  background: var(--hm-accent); border-radius: 999px; }
.player-progress .knob { position: absolute; top: 50%; left: 60%;
  width: 12px; height: 12px; border-radius: 50%; background: var(--hm-accent);
  transform: translate(-50%, -50%); box-shadow: var(--shadow-float); }
.player-times { display: flex; justify-content: space-between;
  font-size: 11px; color: var(--hm-text-3); font-variant-numeric: tabular-nums; }
.lyric-line { text-align: center; font-size: 17px; color: var(--hm-text-3); }
.lyric-line .hl { color: var(--hm-accent); font-weight: 600; }

/* ── Hi-Res 徽章 ── */
.badge { display: inline-flex; align-items: center; gap: 4px;
  padding: 4px 10px; border-radius: 999px;
  background: var(--hm-accent-soft); color: var(--hm-accent);
  font-size: 11px; font-weight: 600; }

/* ── 底部 dock：mini-player + tab-bar ── */
.dock { flex: none; background: var(--hm-surface); box-shadow: var(--shadow-bar); }
.miniplayer {
  height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-4); border-bottom: 1px solid var(--hm-line);
  cursor: pointer; position: relative;
}
.miniplayer .thumb { width: 40px; height: 40px; border-radius: var(--radius-thumb);
  flex: none; background: linear-gradient(135deg, #DCEBFF, #007DFF); }
.miniplayer .meta { min-width: 0; flex: 1; }
.miniplayer .title { font-size: 15px; color: var(--hm-text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.miniplayer .sub { font-size: 11px; color: var(--hm-text-2); }
.miniplayer .mp-play { width: 36px; height: 36px; border-radius: 50%; border: none;
  background: var(--hm-accent-soft); color: var(--hm-accent); cursor: pointer;
  display: grid; place-items: center; flex: none;
  transition: transform var(--dur) var(--ease); }
.miniplayer .mp-play:active { transform: scale(0.9); }
.miniplayer .mp-bar { position: absolute; left: 0; bottom: 0; height: 2px;
  width: 60%; background: var(--hm-accent); }
/* player 屏不顯示 mini-player */
.device[data-current="player"] .miniplayer { display: none; }

.tabbar {
  height: calc(var(--tabbar-h) + var(--safe-bottom));
  padding-bottom: var(--safe-bottom);
  display: flex;
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 3px;
  font-size: 11px; color: var(--hm-text-3); cursor: pointer;
  transition: color var(--dur) var(--ease);
}
.tabbar .tab.active, .tabbar .tab.active .ic { color: var(--hm-accent); }

/* ── 訂閱方案卡（推薦態）── */
.plan { background: var(--hm-surface); border: 1.5px solid var(--hm-line);
  border-radius: var(--radius-card); padding: 18px; }
.plan.recommend { border-color: var(--hm-accent); background: var(--hm-accent-soft); }
.plan .price { font-size: 22px; line-height: 28px; font-weight: 700;
  color: var(--hm-text); font-variant-numeric: tabular-nums; }
.plan .rec-badge { display: inline-block; padding: 2px 8px; border-radius: 999px;
  background: var(--hm-accent); color: var(--hm-on-accent);
  font-size: 11px; font-weight: 600; }

/* ── Segmented 分頁（library）── */
.segmented { display: flex; background: var(--hm-surface-2);
  border-radius: var(--radius-control); padding: 3px; }
.segmented .seg { flex: 1; text-align: center; padding: 7px 0;
  font-size: 13px; font-weight: 500; color: var(--hm-text-2);
  border-radius: 11px; cursor: pointer; }
.segmented .seg.active { background: var(--hm-surface); color: var(--hm-accent);
  box-shadow: var(--shadow-card); }

/* ── Reduced motion：關閉所有動效，只動 transform/opacity 的原則下保險全關 ── */
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```
