---
name: app-ios-hig
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in iOS HIG light style. Triggers on iOS HIG、Apple HIG、iOS 17、SF Pro、大標題 large title、分組表格 inset grouped、segmented control、毛玻璃 tab-bar、系統藍、Cupertino、產品級 iOS UI.
user-invocable: true
---

# iOS 淺色 HIG — 迴聲 Resona

## Style Philosophy

Apple 的 Human Interface Guidelines（iOS 17）淺色模式，是「**克制、清晰、可預期**」的產品級系統。它不靠裝飾搶眼，而靠**層次、留白與一致的系統元件**讓內容自己說話。介面像一張乾淨的紙：背景是中性淺灰 `#F2F2F7`，內容浮在純白卡片上；唯一的強調色是系統藍 `#007AFF`，用得很省——只標互動與選取。字體交給 SF Pro system stack，靠字級與字重（regular / medium / semibold / bold）建立階層，而非靠顏色或框線。在「迴聲 Resona」音樂串流 App 中，這風格呈現出「**像 Apple Music 與設定 App 混血的官方感**」——熟悉、安心、零學習成本。

本次精修的目標：把這個已是標竿的頁面再推到 **Apple Music 級的細膩度**——精修 SF 字級階梯（含行高 / 字重 / 字距）、補上常駐 **mini-player（迷你播放列）**、補「最近播放」「熱門排行」等更豐富的內容區段、為每個可點元素加上 `:hover` / `:active` 微互動，並把「無跑版」的版面契約寫死。整體保持極度克制：**不增加任何裝飾性陰影或第二強調色**。

三個視覺辨識特徵：

1. **大標題收合**：每屏頂部 34px bold 大標題（large title），向上捲動時收合成 17px semibold 的 navbar 居中標題，配一條 hairline 分隔線。
2. **分組 inset 圓角表格**：清單一律是白卡圓角 10px、左側留 16px inset 的群組，列與列之間是 0.5px `#C6C6C8` 淺灰分隔線（不通到最左）。
3. **底部毛玻璃半透 tab-bar + mini-player**：`backdrop-filter: blur(28px)` 的半透明白色 bar，上緣一條 hairline；mini-player 常駐 tab-bar 上方，4 個 SF Symbols 風格 icon，active tab 染系統藍。

---

## Design Tokens (CSS variables)

```css
:root {
  /* ── 手機外殼專用 token ── */
  --screen-w: 390px;            /* iPhone 直式設計寬（鎖定） */
  --screen-h: 844px;            /* 設計高（鎖定） */
  --statusbar-h: 47px;          /* iOS 狀態列高（含瀏海安全區） */
  --navbar-h: 44px;             /* 收合後 navbar 高 */
  --tabbar-h: 49px;             /* 標準 tab-bar 內容高 */
  --miniplayer-h: 56px;         /* 迷你播放列高 */
  --safe-bottom: 34px;          /* Home Indicator 安全區 */
  --device-radius: 44px;        /* 螢幕外框圓角（iPhone 14 級） */
  --content-pad: 16px;          /* 系統標準左右邊距 */
  --inset-pad: 16px;            /* 分組表格 inset 左右留白 */

  /* ── 8pt 間距尺度（所有 padding/gap/margin 只用這些值）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;

  /* ── 色彩（iOS system colors, light）── */
  --ios-blue: #007AFF;          /* systemBlue accent，唯一強調色 */
  --ios-blue-press: #0063D1;    /* 按下態 */
  --ios-blue-tint: rgba(0,122,255,0.10);  /* 推薦卡 / hover 淺藍底 */
  --ios-green: #34C759;         /* 偶用：無損徽章 */
  --ios-red: #FF3B30;           /* 偶用：刪除 / 喜歡 */
  --ios-orange: #FF9500;        /* 偶用：排行榜名次 */

  --bg-grouped: #F2F2F7;        /* systemGroupedBackground，屏底 */
  --bg-card: #FFFFFF;           /* secondarySystemGroupedBackground，白卡 */
  --bg-bar: rgba(249,249,249,0.80); /* navbar / tab-bar / mini 毛玻璃底 */
  --bg-chip: #FFFFFF;           /* segmented / chip 軌道 */
  --track-segment: #E3E3E8;     /* segmented control 軌道灰 */
  --fill-press: rgba(60,60,67,0.10);  /* 列 / 卡片按下態高亮 */

  --label: #000000;             /* label 主文字 */
  --label-secondary: rgba(60,60,67,0.60);  /* secondaryLabel 灰 */
  --label-tertiary: rgba(60,60,67,0.30);   /* tertiaryLabel，更淡 */
  --separator: rgba(60,60,67,0.29);        /* opaque hairline ≈ #C6C6C8 */
  --fill-quaternary: rgba(116,116,128,0.08); /* 搜尋框 / 次要填色 */

  /* ── 圓角 ── */
  --radius-card: 10px;          /* 分組表格 / 卡片標準圓角 */
  --radius-tile: 12px;          /* 歌單卡牆方塊圓角 */
  --radius-cover: 14px;         /* 專輯封面圓角 */
  --radius-cover-lg: 18px;      /* player 大封面圓角 */
  --radius-mini: 8px;           /* mini-player 縮圖圓角 */
  --radius-pill: 999px;         /* segmented thumb / 膠囊 chip */
  --radius-button: 12px;        /* filled 按鈕 */

  /* ── 陰影（克制，幾乎不用大陰影）── */
  --shadow-bar: 0 -0.5px 0 var(--separator);    /* bar 上緣 hairline */
  --shadow-thumb: 0 3px 8px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.04); /* segmented 拇指 / slider 旋鈕 */
  --shadow-tile: 0 1px 3px rgba(0,0,0,0.08);    /* 歌單方塊微浮 */
  --shadow-cover: 0 12px 32px rgba(0,0,0,0.16); /* player 大封面 */

  /* ── 動效（克制；只動 transform / opacity）── */
  --ease-ios: cubic-bezier(0.32, 0.72, 0, 1);   /* iOS spring 感緩動 */
  --dur-press: 120ms;

  /* ── 字體：SF Pro system stack（不可載外部字體）── */
  --font-system: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display',
                 'PingFang TC', 'Noto Sans TC', 'Helvetica Neue', system-ui, sans-serif;
}
```

> **色彩鎖定**：accent 永遠是 `--ios-blue` `#007AFF`；屏底永遠 `--bg-grouped` `#F2F2F7`；卡片永遠純白 `--bg-card`。不要引入第二強調色（綠 / 橘 / 紅僅作徽章與名次，面積極小）。

---

## Typography Scale（精修：SF Pro 對應 iOS HIG，手機字級）

完整字級階梯，**每一級都鎖定大小 / 行高 / 字重 / 字距**。SF Pro 在小字用 Text 光學尺寸、大字（≥20px）用 Display；字距（letter-spacing / tracking）依 Apple 規格在大字收緊、小字放鬆。

| 名稱 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| large-title | 34px / 41px / 700 bold / +0.011em | 每屏頂部大標題（home/search/library/profile）|
| title-1 | 28px / 34px / 700 bold / +0.007em | profile 區塊大標、detail 專輯名（大）|
| title-2 | 22px / 28px / 700 bold / +0.005em | 區塊大標、player 曲名（大）|
| title-3 | 20px / 25px / 600 semibold / +0.004em | 區段標題「為你精選歌單」等 |
| navbar-title | 17px / 22px / 600 semibold / 0 | 收合後 navbar 居中標題 |
| headline | 17px / 22px / 600 semibold / −0.004em | 列主文字、卡片標題、player 曲名 |
| body | 17px / 22px / 400 regular / −0.004em | 段落、主要內容 |
| callout | 16px / 21px / 400 regular / −0.003em | 列副文字、藝人名 |
| subhead | 15px / 20px / 400 regular / −0.002em | 次層說明、mini-player 藝人 |
| subhead-emph | 15px / 20px / 600 semibold / −0.002em | 「查看全部」連結、強調小標 |
| footnote | 13px / 18px / 400 regular / 0 | 時長、播放次數、年份 |
| caption-1 | 12px / 16px / 400 regular / 0 | group header（含 +0.06em uppercase 時）、輔助標 |
| caption-2 | 11px / 13px / 500 medium / +0.005em | tab-bar 標籤、排行名次小字 |

- **group header**（分組表格上方小標）：13px / `--label-secondary` / `text-transform: uppercase` / `letter-spacing: 0.06em` / 400。
- **數字對齊**：所有時間、時長、價格、名次、進度時間用 `font-variant-numeric: tabular-nums` 等寬對齊。
- **行尾省略**：歌名 / 藝人 / 歌單名一律 `overflow: hidden; text-overflow: ellipsis; white-space: nowrap`，避免長字串溢出撐破列（無跑版關鍵）。

---

## Component & Layout

逐屏規範，**內容密度精修版**。所有屏共用：屏底 `--bg-grouped`、左右 `--content-pad` 16px、清單用分組 inset 表格。專輯封面一律 `assets/cover-N.webp`（相對路徑），**圖檔不存在時以 CSS 線性漸層色塊 fallback**（見 Reference Snippet `.cover` / `.cover[data-fallback]`）。可捲動內容區底部 padding 必須預留 `tab-bar + mini-player + safe-bottom` 高度，內容絕不被遮擋。

### 0. 共用：mini-player（迷你播放列，常駐）

- **常駐於 tab-bar 正上方**，顯示於 **home / search / library / profile** 四屏；**player 畫面本身不顯示 mini-player**（避免重複，符合 Apple Music 行為）。
- 構成：左 = `--radius-mini` 8px 小封面縮圖（44×44）；中 = headline 17px 曲名「晚風練習曲」+ subhead 15px 藝人「林知夏」（兩行，皆單行省略）；右 = 播放 / 暫停鍵（▶ / ⏸ 兩態切換）+（可選）下一首鍵。
- **毛玻璃底**：與 tab-bar 同一塊 `--bg-bar` + `blur(28px)`，mini 與 tabbar 之間一條 hairline 分隔。
- **整條可點**：點封面 / 文字區 → 展開到 `player` 畫面；點播放鍵僅切換 ▶ / ⏸ 兩態（不導頁）。
- 微互動：整條 `:active` 時加 `--fill-press` 淺灰高亮；播放鍵 `:hover` 微放大 `scale(1.06)`、`:active` `scale(0.92)`。

### 1. `status-bar`（固定頂部，每屏共用，不可省）

- 高 `--statusbar-h`，置於裝置殼最上、永遠在頂，左側時間 **9:41**（semibold 15px、置中於左 1/3）、右側依序 **訊號格（信號）+ Wi-Fi + 電量符號**（用 inline SVG 或 unicode 方塊條繪製，純黑 `--label`）。
- 淺色：文字黑、無底色（透明，浮在內容上方）。

### 2. `home`（首頁）

頂部 **large-title 34px bold「迴聲 Resona」** 品牌大標題 + 副標 slogan 文案。以下至少 **3 個區段**，每段含 title-3 區段標題 + 右側「查看全部 ›」（subhead-emph，系統藍）：

- **「每日迴聲」每日推薦 banner**：大圓角白卡（橫幅），左封面縮圖（72×72）+ 右側 headline 標題 + footnote「每天 06:00 更新」+ 系統藍小播放鍵。整卡 `:active` 加按下態。
- **4 分類 chip**（華語 / 獨立 / 電子 / 放鬆）：橫向可捲動膠囊，未選白底灰字、選中系統藍底白字（`.chip.active`）。
- **「為你精選歌單」卡牆**：2 欄網格列出全部 7 個歌單名（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = `assets/cover-N.webp` 方形封面（`--radius-tile`）+ headline 歌單名 + footnote 副標。卡片 `:hover` 微浮、`:active` `scale(0.97)`，點擊→ `detail`。
- **「最近播放」清單**（分組 inset 表格）：列出近期播放的多首歌名（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉…）與藝人，每列左 cover 縮圖 + headline 歌名 + callout 藝人 + 右 footnote 時長。整列點擊→ `player`。
- 底部「熱門排行」或核心功能小卡，露出「無損音質串流」「歌詞同步」等核心功能名。

### 3. `search`（搜尋）

- 頂部 large-title「搜尋」。
- **iOS 搜尋框**：`--fill-quaternary` 填色、圓角 10px、左側放大鏡 icon、placeholder「藝人、歌曲、歌單」、灰字。`:focus`／`:active` 可微亮。
- **4 分類 chip** 再次出現（華語 / 獨立 / 電子 / 放鬆）。
- **「熱門歌曲」編號清單**（分組 inset 表格）：左側名次序號（1–N，tertiary 灰、tabular-nums）+ cover 縮圖 + headline 歌名 + callout 藝人名 + 右 footnote 時長。露出多首歌名（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉…）與多個藝人名（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）。整列點擊→ `detail` 或 `player`。
- **「熱門藝人」**：橫向圓形頭像列（圓形 cover fallback）+ callout 藝人名，露出 5 位藝人名。

### 4. `detail`（專輯詳情）

- 頂部 navbar 含 **返回鍵 `‹ 音樂庫`**（系統藍，點擊→上一屏）。
- **大專輯封面**：`assets/cover-N.webp`，置中、圓角 `--radius-cover`、寬約 200px，`--shadow-tile` 克制陰影。
- title-1 / title-2 專輯名 **島嶼晨光** + callout 藝人 **林知夏** + footnote（**2026** 年份 · **9** 首 · 總時長 · 無損音質串流徽章）。
- **播放全部**（filled 系統藍膠囊鈕，含 ▶ icon）+ **隨機播放**（outline / tinted 鈕，含 ⤮ icon）。兩鈕點擊→ `player`。
- **曲目分組 inset 表格**：列出全部 **9 首曲目**（〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉），每列左側曲序（1–9，tertiary 灰、tabular-nums）、headline 歌名、callout 藝人、右側 footnote 時長 + 行尾選單鍵 `⋯`（或 hover 顯示播放鍵）。整列點擊→ `player`。

### 5. `player`（播放器，正在播放）

- 頂部 navbar 含 **收合鍵 `⌄`**（chevron-down，點擊→返回上一屏 / 收回 mini）+ 居中「正在播放」navbar-title。
- 背景可用同封面的模糊放大色暈（仍須 WCAG AA 可讀，文字罩白／黑保證對比）。
- **大圓角封面**：`assets/cover-N.webp`，正方、圓角 `--radius-cover-lg`、`--shadow-cover` 浮起。
- 曲名 title-2 **晚風練習曲** + callout 藝人 **林知夏** + subhead 專輯 **島嶼晨光**。
- **系統 slider 進度條**：細軌（已播段系統藍、未播灰），左端目前時間、右端總長 **02:47**（footnote、tabular-nums）；拇指為小白圓 + `--shadow-thumb`。
- **控制列**：隨機 ⤮ / 上一首 ⏮ / 播放暫停（大圓系統藍，▶ / ⏸ 兩態）/ 下一首 ⏭ / 循環 ⟳。SF Symbols 風格細線 icon。
- **歌詞同步**：露出 2–3 行歌詞，**當前一行逐字高亮**（高亮行 `--label` 全黑 + 微大，其餘 `--label-tertiary` 淡灰）。
- 底列：音量 / **無損音質串流**徽章（綠或藍小膠囊）+ 歌詞入口。
- **player 不顯示 mini-player**。

### 6. `library`（音樂庫）

- large-title「音樂庫」。
- **segmented control**（歌單 / 專輯 / 已下載）切換軌，active 段白底浮起。
- **收藏歌單清單**（分組 inset 表格）：列出收藏歌單（從 7 歌單取數筆），每列左 cover 縮圖 + headline 歌單名 + callout 副標（曲數，如「18 首」）+ 右 chevron `›`，點擊→ `detail`。
- **「離線下載」列**（含已下載 footnote「12 首 · 已下載」）+ **「共享音樂庫」列**（Family 權益）。各列左 SF Symbols icon + headline 名 + callout 副標 + 右 chevron。

### 7. `profile`（我的）

- large-title「我的」+ **帳號身份卡**（頭像圓 + 暱稱 headline + email footnote + 右 chevron）。
- **播放偏好** 分組表格：「無損音質串流」開關列 + 「歌詞同步」開關列 + **「跨裝置接續播放」開關列**（含 iOS 風格 toggle，開啟態系統綠 `--ios-green`）。
- **3 訂閱方案卡**（同屏）：免費 / Plus / Family。
  - 卡片堆疊或並列，每卡 = 方案名 headline + 價格 title-2 + 權益 footnote。
  - 價格一字不差：**`NT$ 0` ／月**、**`NT$ 149` ／月**、**`NT$ 249` ／月**（NT$ 與數字一個半形空格，後綴全形「／月」）。
  - Plus 卡為**推薦態**：`--ios-blue` 邊框 + `--ios-blue-tint` 淺藍底 tonal + 右上「推薦」膠囊；免費卡標「目前方案」。「升級 Plus」filled 系統藍鈕。

### 8. `tab-bar`（底部 4 tab）

- 固定裝置殼底部、永遠在底、毛玻璃半透 `--bg-bar` + `backdrop-filter: blur(28px)`、上緣 hairline、下方預留 `--safe-bottom`。
- 4 tab 可見文字：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = SF Symbols 風格 icon（上）+ caption-2 標籤（下）。
- **active 態**：當前 tab（建議「首頁」）icon 與標籤染 `--ios-blue`；其餘 `--label-secondary` 灰。tab `:active` 微縮 `scale(0.94)`。
- tab-bar 與其上方 mini-player 共組一塊底部毛玻璃容器（mini 在上、tabs 在下）。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| accent 全程只用系統藍 `#007AFF` | 引入第二、第三強調色亂用 |
| 所有間距只取 8pt 尺度（4/8/12/16/20/24/32） | 用 7px / 13px / 18px 等隨意數值 |
| 清單一律分組 inset 圓角 10px + 0.5px hairline 分隔線 | 用全寬無圓角列或粗黑框線 |
| 靠字級／字重（regular / medium / semibold / bold）建立階層 | 靠顏色、底色塊區分文字層次 |
| mini-player 常駐於 4 屏、player 內不再出現 | 每屏都放或 player 內重複放 mini-player |
| 可點元素全部 `cursor:pointer` + `:hover`/`:active` 回饋 | 列與卡片點下去毫無視覺變化 |
| 播放鍵嚴格 ▶ / ⏸ 兩態切換 | 播放鍵永遠同一個 icon |
| 文字一律單行省略（ellipsis），不溢出撐破列 | 長歌名換行或溢出蓋到時長 |
| tab-bar / navbar / mini 用 `backdrop-filter: blur` 毛玻璃半透 | bar 用不透明純色或加重陰影 |
| 大標題 34px bold，捲動收合成 17px navbar 標題 | 每屏只有小標題、缺大標題層次 |
| 陰影極克制（僅 player 封面、segmented 拇指、tile 微浮） | 卡片到處加 Material 式大陰影 |
| 圖示用 SF Symbols 風格細線 icon（inline SVG / unicode） | 用粗重、彩色、卡通化 icon |
| 分隔線 hairline 0.5px，不通到最左（留 16px inset） | 分隔線全寬通到螢幕邊 |
| WCAG AA：灰字至少達 `secondaryLabel` 對比 | 用過淡灰字導致看不清 |

---

## Mobile Chrome Spec（無跑版鐵律）

- **390×844 直式鎖定**：最外層 `.device` 寬鎖 `--screen-w`（390px）、高鎖 `--screen-h`（844px）、置中、`overflow: hidden`、`border-radius: --device-radius`（44px）模擬 iPhone 圓角螢幕。`.device` 用 `display: flex; flex-direction: column` 三段式佈局。
- **三段式版面**：`.device` 由上到下＝ ① `status-bar`（`flex: 0 0 auto`，永遠在頂）→ ② `.screen` 當前畫面可捲動區（`flex: 1 1 auto; overflow-y: auto`）→ ③ 底部毛玻璃容器（mini-player + tab-bar，`flex: 0 0 auto`，永遠在底）。
- **status-bar 固定頂部**：高 `--statusbar-h`，左 **9:41** + 右訊號 / Wi-Fi / 電量；浮在內容上，淺色文字黑、透明底；任何畫面捲動都不動。
- **內容不被遮擋**：可捲動區底部 `padding-bottom: calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom) + 8px)`，確保最後一列內容不被 mini-player / tab-bar 蓋住；`player` 屏無 mini-player，padding 改 `calc(var(--tabbar-h) + var(--safe-bottom) + 8px)`。
- **文字不溢出 / 不被裁切**：所有歌名 / 藝人 / 歌單名單行省略；列高足夠（≥ 48px 觸控區），padding 充足（列 11–12px 縱向、16px 橫向）。
- **多畫面切換**：每個 `data-screen` 以 `.screen` 為一個畫面，預設只顯示一屏（`hidden` 或 `display:none` 切換），切 tab / 點卡 / 點返回時切換顯示——確保任何時刻只有一屏佔據可捲動區，不會多屏堆疊跑版。
- **底部毛玻璃容器**：mini-player 在上、tab-bar 在下，整塊半透 + 上緣 hairline + `--safe-bottom` 預留 Home Indicator。
- **圓角螢幕**：`.device` 圓角；底部置中放一條 Home Indicator 小橫條（深灰 134×5 圓角）。
- 全頁外層置中於中性背景（`#d9d9de` 深灰）襯出裝置殼。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」（App 模式，取代 festival 第 3、4 條）：

- **8 個 `<section data-screen="...">`**，唯一 id、各恰一次、固定順序：
  `status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`（最高頻錯誤是只給 `id=` 漏 `data-screen=`，務必兩者都有）。
- **`<body data-viewport="mobile">` 必須存在**。
- `status-bar` 必含 **9:41** + 訊號 + 電量；`tab-bar` 必含 **首頁 / 搜尋 / 音樂庫 / 我的** 四 tab 且標 active 態。
- **mini-player 常駐**：在 tab-bar 上方、顯示於 home/search/library/profile，含封面縮圖 + 歌名 + 藝人 + 播放/暫停鍵；點擊展開到 `player`；`player` 畫面不顯示 mini-player。
- **可互動多畫面導覽**（必須真的可點切換）：
  - tab-bar 四 tab → 切換 home / search / library / profile；
  - home 歌單卡 / library 歌單列 → 進 `detail`；
  - detail 曲目列 / 播放鍵、search 歌曲列、mini-player → 進 `player`；
  - detail / player 含**返回鍵**回上一屏。
  - 以純 CSS（`:target` / radio-hack / `hidden` toggle）或 ≤ 8KB inline JS 實作；若用 JS，失敗時內容仍須完整可讀。
- **三層定價精確字串**（同屏 profile 訂閱卡）：**`NT$ 0`**、**`NT$ 149`**、**`NT$ 249`**（NT$ 與數字間一個半形空格 + 全形「／月」）。
- 照抄 brief 全部權威字串於**可見文字**（非僅 `aria-label` / `data-*`）：品牌迴聲 / Resona、6 核心功能、3 方案、7 歌單、9 歌名、5 藝人、4 分類 chip、正在播放（林知夏 —〈晚風練習曲〉/ 島嶼晨光 / 02:47）。
- **單檔 HTML ≤ 200 KB**（不含 `assets/`）、**無外部 CDN**（`<link>`/`<script>`/`<img>` 不可 `http(s)://` 開頭）、圖片相對路徑 `assets/cover-N.webp`。
- **無 framework CSS**（不用 Tailwind 等），純 CSS 變數驅動；繁體中文；WCAG AA 對比。
- **所有可點元素** `cursor: pointer` + 明確 `:hover` / `:active`；若使用任何動畫（segmented 切換 / 按壓態 transition / 畫面切換），須附 `@media (prefers-reduced-motion: reduce)` 並只動 `transform` / `opacity`。

---

## Required Images

使用**真實專輯封面圖**策略。`assets-manifest.json` 列 6 張方形專輯封面 `cover-1.webp` … `cover-6.webp`（每張 600×600、抽象、無文字無 logo、各具不同氛圍）。

- 用途：`home` 每日推薦 / 歌單卡牆 / 最近播放、`search` 列縮圖與藝人頭像、`detail` 大封面、`player` 大封面、`library` 列縮圖、`mini-player` 縮圖。
- **路徑一律相對**：`assets/cover-N.webp`。
- **Fallback 必備**：圖檔不存在時，封面元素以 CSS 線性／徑向漸層色塊呈現（不可破圖、不可顯示 alt 字串擋版）。實作見 Reference Snippet 的 `.cover` 與 `.cover[data-fallback]`。

---

## Reference Snippet

可直接套用的 CSS（≥ 60 行，體現 iOS HIG 淺色 + mini-player + 微互動 + 無跑版三段式佈局）：

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-system);
  background: #d9d9de;                 /* 襯托裝置殼的中性深灰 */
  color: var(--label);
  display: flex; justify-content: center; align-items: center;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* 手機外殼：三段式 flex 佈局（status / screen / bottom-bar） */
.device {
  position: relative;
  width: var(--screen-w); height: var(--screen-h);
  background: var(--bg-grouped);
  border-radius: var(--device-radius);
  overflow: hidden;
  display: flex; flex-direction: column;
}

/* 狀態列 9:41（永遠在頂） */
.statusbar {
  flex: 0 0 var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; z-index: 30;
  font-size: 15px; font-weight: 600; color: var(--label);
  background: transparent;
}
.statusbar .clock { font-variant-numeric: tabular-nums; }
.statusbar .glyphs { display: flex; gap: 5px; align-items: center; }

/* 可捲動內容區（佔滿中段，不被底 bar 遮住） */
.screen {
  flex: 1 1 auto; overflow-y: auto; -webkit-overflow-scrolling: touch;
  padding: var(--sp-2) var(--content-pad)
           calc(var(--tabbar-h) + var(--miniplayer-h) + var(--safe-bottom) + var(--sp-2));
}
.screen.player-screen {                  /* player 無 mini，padding 較小 */
  padding-bottom: calc(var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
}

/* 區段標題 + 查看全部 */
.large-title { font-size: 34px; line-height: 41px; font-weight: 700; letter-spacing: 0.011em; margin: var(--sp-1) 0 var(--sp-3); }
.section-head { display: flex; align-items: baseline; justify-content: space-between; margin: var(--sp-5) 0 var(--sp-3); }
.section-head .t { font-size: 20px; line-height: 25px; font-weight: 600; letter-spacing: 0.004em; }
.section-head .all { font-size: 15px; font-weight: 600; color: var(--ios-blue); cursor: pointer; }
.section-head .all:active { opacity: 0.5; }

/* 分組 inset 圓角表格 */
.group { background: var(--bg-card); border-radius: var(--radius-card); overflow: hidden; }
.group-header {
  font-size: 13px; color: var(--label-secondary);
  text-transform: uppercase; letter-spacing: 0.06em;
  padding: 14px var(--inset-pad) 6px;
}
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 11px var(--inset-pad); position: relative;
  cursor: pointer; transition: background var(--dur-press) var(--ease-ios);
  min-height: 48px;
}
.song-row:active { background: var(--fill-press); }
.song-row + .song-row::before {           /* 0.5px hairline，留 16px inset */
  content: ""; position: absolute; top: 0; left: var(--inset-pad); right: 0;
  height: 0.5px; background: var(--separator); transform: scaleY(0.5);
}
.song-row .idx   { width: 22px; text-align: center; font-size: 15px; color: var(--label-tertiary); font-variant-numeric: tabular-nums; }
.song-row .title { font-size: 17px; font-weight: 600; letter-spacing: -0.004em; color: var(--label);
                   overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .sub   { font-size: 15px; color: var(--label-secondary);
                   overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .meta  { margin-left: auto; font-size: 13px; color: var(--label-secondary); font-variant-numeric: tabular-nums; }
.song-row .chev  { margin-left: auto; color: var(--label-tertiary); font-size: 17px; }

/* 歌單卡牆（2 欄網格） */
.tile-wall { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3); }
.tile { cursor: pointer; transition: transform var(--dur-press) var(--ease-ios); }
.tile:hover { transform: translateY(-2px); }
.tile:active { transform: scale(0.97); }
.tile .name { font-size: 17px; font-weight: 600; margin-top: var(--sp-2);
              overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tile .desc { font-size: 13px; color: var(--label-secondary); }

/* 專輯封面（有圖用圖，無圖漸層 fallback） */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-tile);
  background-size: cover; background-position: center;
  box-shadow: var(--shadow-tile);
}
.cover[data-fallback] {                    /* 圖檔缺失時的 CSS 色塊 */
  background-image: linear-gradient(135deg, #8ab6ff 0%, #c9a8ff 50%, #ffd0b0 100%);
}

/* segmented control */
.segmented { display: flex; padding: 2px; gap: 2px; background: var(--track-segment); border-radius: 9px; }
.segmented .seg { flex: 1; text-align: center; font-size: 13px; font-weight: 500;
  padding: 6px 0; border-radius: 7px; color: var(--label); cursor: pointer; }
.segmented .seg.active { background: var(--bg-card); box-shadow: var(--shadow-thumb); }

/* 分類 chip */
.chip { display: inline-flex; align-items: center; padding: 6px 14px; border-radius: var(--radius-pill);
  font-size: 14px; font-weight: 500; background: var(--bg-card); color: var(--label);
  border: 0.5px solid var(--separator); cursor: pointer;
  transition: background var(--dur-press) var(--ease-ios); }
.chip:active { background: var(--fill-press); }
.chip.active { background: var(--ios-blue); color: #fff; border-color: var(--ios-blue); }

/* filled 系統藍按鈕 */
.btn-filled { display: inline-flex; justify-content: center; align-items: center; gap: 6px;
  background: var(--ios-blue); color: #fff; border: none;
  padding: 11px 20px; border-radius: var(--radius-button);
  font-size: 17px; font-weight: 600; cursor: pointer;
  transition: transform var(--dur-press) var(--ease-ios), background var(--dur-press); }
.btn-filled:hover { background: #0a84ff; }
.btn-filled:active { background: var(--ios-blue-press); transform: scale(0.97); }

/* player 大封面 + 系統 slider + 控制列 */
.now-playing .cover-lg { width: 78%; margin: var(--sp-2) auto var(--sp-5); aspect-ratio: 1;
  border-radius: var(--radius-cover-lg); box-shadow: var(--shadow-cover); }
.slider { height: 4px; border-radius: 2px; background: var(--track-segment); position: relative; }
.slider .fill { position: absolute; inset: 0 auto 0 0; width: 58%; background: var(--ios-blue); border-radius: 2px; }
.slider .knob { position: absolute; top: 50%; left: 58%; width: 12px; height: 12px; border-radius: 50%;
  background: #fff; transform: translate(-50%, -50%); box-shadow: var(--shadow-thumb); }
.lyric-line { font-size: 17px; color: var(--label-tertiary); text-align: center; transition: color var(--dur-press); }
.lyric-line.now { color: var(--label); font-weight: 600; }
.play-btn { width: 64px; height: 64px; border-radius: 50%; background: var(--ios-blue); color: #fff;
  display: grid; place-items: center; cursor: pointer;
  transition: transform var(--dur-press) var(--ease-ios); }
.play-btn:active { transform: scale(0.92); }

/* 訂閱卡（Plus 推薦態） */
.plan { background: var(--bg-card); border-radius: var(--radius-card); padding: var(--sp-4);
  border: 1px solid var(--separator); }
.plan.featured { border-color: var(--ios-blue); background: var(--ios-blue-tint); }
.plan .price { font-size: 22px; font-weight: 700; letter-spacing: 0.005em; font-variant-numeric: tabular-nums; }

/* 底部毛玻璃容器：mini-player + tab-bar（永遠在底） */
.bottom-bar { flex: 0 0 auto; z-index: 30;
  background: var(--bg-bar);
  -webkit-backdrop-filter: blur(28px) saturate(1.6);
  backdrop-filter: blur(28px) saturate(1.6);
  box-shadow: var(--shadow-bar); }

/* mini-player */
.mini { display: flex; align-items: center; gap: var(--sp-3);
  height: var(--miniplayer-h); padding: 0 var(--sp-3); cursor: pointer;
  position: relative; transition: background var(--dur-press) var(--ease-ios); }
.mini:active { background: var(--fill-press); }
.mini::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 0.5px;
  background: var(--separator); transform: scaleY(0.5); }
.mini .mc { width: 44px; height: 44px; border-radius: var(--radius-mini); flex: 0 0 auto;
  background-size: cover; background-position: center; }
.mini .info { min-width: 0; }
.mini .info .ttl { font-size: 17px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mini .info .art { font-size: 15px; color: var(--label-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.mini .mp { margin-left: auto; width: 36px; height: 36px; display: grid; place-items: center;
  cursor: pointer; transition: transform var(--dur-press) var(--ease-ios); }
.mini .mp:hover { transform: scale(1.06); }
.mini .mp:active { transform: scale(0.92); }

/* tab-bar */
.tabbar { display: flex; height: var(--tabbar-h); padding-bottom: var(--safe-bottom); }
.tabbar .tab { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 2px; font-size: 11px; font-weight: 500; color: var(--label-secondary); cursor: pointer;
  transition: transform var(--dur-press) var(--ease-ios); }
.tabbar .tab:active { transform: scale(0.94); }
.tabbar .tab.active { color: var(--ios-blue); }

/* Home Indicator */
.home-indicator { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
  width: 134px; height: 5px; border-radius: 3px; background: rgba(0,0,0,0.32); z-index: 31; }

/* 畫面切換：一次只顯示一屏（無跑版） */
.screen { display: none; }
.screen.is-active { display: block; }

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```
