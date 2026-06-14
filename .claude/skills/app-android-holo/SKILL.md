---
name: app-android-holo
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Android Holo Dark (ICS) style. Triggers on Android Holo、Holo Dark、Holo 復古、ICS、Ice Cream Sandwich、Android 4.x、Roboto Light、復古安卓、action bar tab、Holo blue、#33B5E5.
user-invocable: true
---

# Holo 復古 — 迴聲 Resona

## Style Philosophy

Holo 是 Google 在 2011 年 Android 4.0（Ice Cream Sandwich）推出的第一套官方系統設計語言，由 Matias Duarte 主導，主旨是「**從紙感回到玻璃與光（glass & light）**」——純黑底、霓虹般的青藍 accent、極細髮絲線分隔、Roboto 字型。它是 Material Design 之前的安卓美學，方正、低裝飾、資訊密度高，帶有一種 2012 年高階 Android 手機（Galaxy Nexus）的工程冷感與復古科技味。在迴聲 Resona 這支音樂串流 App 中，Holo 風格呈現「**像一台老 Nexus 上跑的播放器**」——黑得徹底、藍得發光、線細到幾乎看不見、列表一行行排得密實。

本次精修的目標：在「正宗 ICS 復古」的前提下，把細膩度推到產品級——action bar 下方的**底線式分頁**要精準、Holo 青藍要克制而發光、加入常駐**迷你播放列**、所有可點元素要有明確的 `:hover` / `:active` 按下回饋，並徹底鎖死版面（390×844、status-bar 永遠在頂、迷你播放列+tab-bar 永遠在底）。

三個視覺辨識特徵：
1. **純黑 (#000) 背景 + Holo 青藍 #33B5E5 單一 accent**：accent 只用在 active 狀態、進度、強調文字、底線、播放鍵；其餘一律灰階，色彩極度克制。
2. **1px 髮絲線分隔 #222 + 底線式 action bar tab**：頂部 action bar 下方有一條可切換的 tab 列，active tab 由 2px Holo 藍底線標示（不是膠囊、不是填色）。
3. **Roboto Light 細字 + 全大寫 small-caps 標籤 + 高資訊密度**：標題用 Roboto Light（300 weight），區塊標籤用 11px 全大寫加寬字距的灰字，列表行高壓得很緊。

## Design Tokens (CSS variables)

完整 token 系統。**所有間距、字級、圓角、陰影一律取自下列 token，不得寫死任意數值。**

```css
:root {
  /* ── 手機外殼尺寸 token ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 24px;          /* Holo 狀態列偏矮 */
  --actionbar-h: 48px;          /* action bar 標準高 */
  --tab-h: 40px;                /* action bar 底下的底線式 tab 列 */
  --miniplayer-h: 56px;         /* 常駐迷你播放列高 */
  --tabbar-h: 52px;             /* 底部 4-tab 導覽列 */
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --screen-radius: 28px;        /* 螢幕圓角 */

  /* ── 8pt 間距尺度（唯一允許的間距值）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --gutter: 16px;               /* 螢幕左右標準邊距，= --sp-4 */

  /* ── Holo Dark 色票 ── */
  --holo-bg: #000000;           /* 純黑背景 */
  --holo-surface: #0a0a0a;      /* 卡片/列表底，幾乎全黑 */
  --holo-surface-2: #141414;    /* pressed / 次層 */
  --holo-surface-3: #1c1c1c;    /* hover / 浮起層 */
  --holo-blue: #33b5e5;         /* Holo 青藍 accent（唯一彩色） */
  --holo-blue-dim: #2a93b8;     /* accent pressed */
  --holo-blue-soft: rgba(51, 181, 229, 0.12); /* active 列淡藍底 */
  --holo-blue-glow: rgba(51, 181, 229, 0.22); /* 微光暈 */

  /* ── 文字灰階（純黑底上的 Roboto）── */
  --holo-text: #e8e8e8;         /* 主文字（非純白，較柔） */
  --holo-text-2: #a0a0a0;       /* 次級文字 */
  --holo-text-3: #6a6a6a;       /* 三級 / 說明 */
  --holo-label: #808080;        /* 區塊標籤（全大寫） */

  /* ── 分隔線 / 邊框 — Holo 標誌性的極細線 ── */
  --holo-line: #222222;         /* 1px 髮絲分隔線 */
  --holo-line-2: #1a1a1a;       /* 更暗的次分隔 */
  --holo-divider-blue: #33b5e5; /* active 底線色 */

  /* ── 圓角 — Holo 偏方正，圓角極小 ── */
  --radius-xs: 2px;
  --radius-sm: 3px;
  --radius-card: 4px;
  --radius-none: 0px;
  --radius-pill: 999px;         /* 僅用於進度把手/迷你封面，仍極少 */

  /* ── 陰影 — Holo 幾乎不用陰影，靠線與光 ── */
  --shadow-bar: 0 1px 0 rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5);
  --shadow-mini: 0 -1px 0 rgba(0,0,0,0.9), 0 -2px 6px rgba(0,0,0,0.5);
  --glow-blue: 0 0 8px var(--holo-blue-glow);

  /* ── 字型 — Roboto / Roboto Light 為核心，缺字回落系統 ── */
  --font-base: 'Roboto', 'Noto Sans TC', 'PingFang TC', 'Helvetica Neue', system-ui, sans-serif;
  --font-light: 'Roboto Light', 'Roboto', 'Noto Sans TC', system-ui, sans-serif;
  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --tracking-caps: 0.12em;      /* 全大寫標籤字距 */
  --tracking-tight: -0.01em;    /* 大標題微縮字距 */

  /* ── 動效（必附 reduced-motion）── */
  --dur-fast: 90ms;
  --dur-base: 140ms;
  --ease-holo: cubic-bezier(0.4, 0.0, 0.2, 1);
}
```

## Typography Scale（手機字級，Holo Roboto Light 主導）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| display | 28px / 1.15 / 300（Light） / `--tracking-tight` | 大封面下的曲名、player 主標 |
| title | 22px / 1.2 / 300（Light） / `--tracking-tight` | home / detail 頁面大標、action bar 標題 |
| headline | 19px / 1.25 / 400 | 區段標題（如「為你精選歌單」） |
| subhead | 17px / 1.3 / 400 | 列表主要文字（歌單名、歌名行） |
| body | 15px / 1.45 / 400 | 一般說明文字、功能描述 |
| caption | 13px / 1.4 / 400 | 列表次行（藝人、時長、播放數） |
| micro | 12px / 1.3 / 400 | 進度時間、tab 文字、徽章內文 |
| label | 11px / 1.2 / 500 / `--tracking-caps` / `uppercase` | 區塊標籤（DAILY MIX / ALBUMS / NOW PLAYING），全大寫加寬距，灰色 |

字重規則：標題一律 Roboto Light（300），列表內文 400，唯有全大寫小標籤、active 文字、訂閱卡方案名可用 500。**絕不用 700 粗體**——Holo 的層級靠字級與顏色，不靠加粗。區段標題（headline）右側若有「查看全部」，用 13px Holo 藍。

## Component & Layout

整體外框（device chrome）由上而下固定為四段：**status-bar（24px，永遠頂）→ 當前畫面可捲動內容區（含 action bar + 底線 tab）→ mini-player（56px，常駐）→ 底部 tab-bar（52px，永遠底）**。內容區為 8 屏堆疊，每屏一個 `<section data-screen>`。mini-player 顯示於 home/search/library/profile/detail，**player 畫面本身不顯示 mini-player**（因為已是全屏播放）。

### 共用 chrome

- **status-bar**（`data-screen="status-bar"`）：高 24px，純黑底。左側 `9:41`（11px，Roboto，白），右側依序 訊號格（用 ▮▮▮▯ 或 inline SVG 三角訊號）、Wi-Fi、電量符號 `■` 與百分比。整列文字 11px、`--holo-text`。Holo 招牌的「極窄頂列」。

- **mini-player（迷你播放列）**：常駐於 tab-bar **上方**、緊貼 tab-bar，高 56px、純黑底、頂部 1px `--holo-line` + `--shadow-mini`。由左到右：40px 方形小封面縮圖（`assets/cover-3.webp`，無圖漸層 fallback）+ 歌名〈晚風練習曲〉（subhead，單行省略號）+ 藝人 `林知夏`（caption 灰，單行省略號）+ 右側 Holo 藍 ▶/⏸ 播放鍵（36px 觸控區）。**點擊封面/文字區域語意上展開到 player 畫面**（demo 中以 `:hover` 浮起 `--holo-surface-2` + cursor:pointer 暗示可點）。中間文字區用 `min-width:0` + `overflow:hidden` 確保長歌名不撐破。

- **tab-bar**（`data-screen="tab-bar"`）：固定底部，高 52px，純黑底、頂部 1px `--holo-line`。**4 個 tab**：`首頁` / `搜尋` / `音樂庫` / `我的`，各為「上 icon + 下 11px 文字」。**active 態**：icon 與文字轉 `--holo-blue`，並在該 tab **頂部加 2px Holo 藍指示線**（Holo 標誌性的 top-indicator）；非 active 為 `--holo-text-3` 灰。每 tab `cursor:pointer`、`:active` 文字轉 `--holo-blue-dim`。預設 active 設在「首頁」。

### home（`data-screen="home"`）

頂部 action bar 顯示品牌標題「**迴聲 Resona**」（22px Light，左對齊；右側放搜尋 ⚲ 與 overflow ⋮ icon，皆 Holo 藍、各為可點 icon-button）。action bar 下方一條 1px `--holo-line`，再下方是**底線式 tab 列**：`為你` / `最新` / `電台` 三分頁，active（「為你」）以 2px Holo 藍底線標示。內容至少 3 區段：

1. **每日迴聲**（DAILY MIX）：頂部推薦橫幅 banner，標籤 `DAILY MIX` 全大寫小字 + 大封面（`assets/cover-1.webp`，無圖則 CSS 漸層 fallback），上面浮一行標題「每日迴聲」+ 副文字「依你的聆聽口味，每天為你重新編排」+ 右下角 Holo 藍 ▶ 播放鍵。
2. **為你精選歌單**（區段標題 headline + 右側「查看全部」）：列出全部 **7 歌單名**（`浪潮回聲`/`深夜公路`/`島嶼晨光`/`雨後散步`/`城市心跳`/`山海之間`/`失重時刻`），用 2 欄方形封面網格（封面輪流套 `assets/cover-1.webp`…`cover-6.webp`，第 7 張回用 `cover-1`），每卡：方形封面 + 下方歌單名（subhead）+ 曲數 caption。
3. **熱門排行**（區段標題 + 「查看全部」）：編號清單，露出至少 4 首歌（`〈藍色信號〉`/`〈霓虹巷弄〉`/`〈候鳥地圖〉`/`〈晚風練習曲〉`），每行左大號軌號（Holo 藍）、歌名 + 藝人 caption、右側時長與 ▶ 播放鍵。
4. **功能露出**：以細線分隔的列表行，列出 6 核心功能名中至少「無損音質串流」「歌詞同步」「離線下載」三項。

每張卡片與每個 list-item 皆 `cursor:pointer`、`:hover` 浮起 `--holo-surface-3`、`:active` 沉到 `--holo-surface-2`。

### search（`data-screen="search"`）

頂部 action bar 標題「搜尋」。下方一個 Holo 風搜尋框——**全黑底、底部 2px Holo 藍底線（Holo 招牌的 underline input，不是圓框）**、placeholder 灰字「搜尋歌曲、藝人、歌單」、左側 ⚲ icon。下方放 **4 分類 chip**（`華語`/`獨立`/`電子`/`放鬆`，Holo 方正小框）。內容：

- **熱門歌曲**（TRENDING）：編號清單，每行左軌號、歌名（subhead）、藝人 caption、右側時長。露出多首：〈藍色信號〉(03:12)、〈霓虹巷弄〉(02:54)、〈候鳥地圖〉(04:03)、〈靜電〉(03:28)、〈晚風練習曲〉(02:47)。
- **熱門藝人**（ARTISTS）：橫向小列或網格，露出 5 藝人名 `海平面樂團`/`Echo Lab`/`夜行列車`/`何遠`/`林知夏`，各為圓/方頭像縮圖 + 名字。

### detail（`data-screen="detail"`）

主打專輯 `島嶼晨光`。頂部含返回鍵（← Holo 藍，可點，語意返回上一畫面）+ overflow ⋮。大封面（`assets/cover-3.webp`，無圖以漸層 fallback）。封面下方：

- 專輯名 `島嶼晨光`（title 22px Light）+ 藝人 `林知夏`（caption 灰）+ 一行 metadata：`2026` · `9 首` · `總時長 28:42`。
- 操作列：「播放全部」（Holo 藍邊框方正鈕，▶ + 文字）+「隨機播放」（次級灰邊框鈕，⤨ + 文字），皆 `cursor:pointer` + 按下回饋。
- **完整 9 首曲目清單**，每首一行 `.song-row`：左軌號（灰）、中間歌名 + 藝人 caption、右側時長 + 行尾選單 ⋮（或 ▶ 播放鍵），行與行用 1px `--holo-line` 分隔，`:hover`/`:active` 有底色回饋。9 首全列：〈藍色信號〉(03:12)、〈霓虹巷弄〉(02:54)、〈候鳥地圖〉(04:03)、〈靜電〉(03:28)、〈晚風練習曲〉(02:47)、〈無人車站〉(03:55)、〈潮間帶〉(03:01)、〈第七個夏天〉(02:39)、〈月台九又四分之三〉(04:23)。

### player（`data-screen="player"`）

全黑沉浸頁，**不顯示 mini-player**。頂部含返回鍵（⌄ 或 ← Holo 藍，可點，語意收合回上一畫面）+ `NOW PLAYING` 全大寫標籤 + overflow ⋮。內容置中：

- 大封面（`assets/cover-3.webp`，無圖漸層 fallback，方正小圓角）→ 曲名〈晚風練習曲〉（display 28px Light）→ 藝人 `林知夏`（caption）→ 專輯 `島嶼晨光`（micro 灰）。
- **進度條**：一條 2px 細軌，已播部分 `--holo-blue` + `--glow-blue`、把手為小方點/小圓點，兩端時間 `00:47 / 02:47`（02:47 為總長）。
- **控制列**：⤨ 隨機 → ⏮ 上一首 → ⏯ 中央播放鍵（Holo 藍圓框，▶/⏸ 兩態）→ ⏭ 下一首 → ⟳ 循環，皆 icon-only、`cursor:pointer`、按下回饋；active 的隨機/循環轉 Holo 藍。
- **底部資訊列**：左「無損音質串流」徽章（藍邊小框 `HI-RES`），右「歌詞同步」標籤。
- **歌詞同步**：3 行歌詞，**中間一行為 active（Holo 藍、較亮）**，上下兩行 `--holo-text-3` 灰，示意逐字/逐行高亮。

### library（`data-screen="library"`）

頂部 action bar 標題「音樂庫」+ 底線式分頁列 `歌單` / `專輯` / `已下載`（active「歌單」2px 藍底線）。內容：

- **收藏歌單清單**：密實列表，每行左 44px 小封面縮圖、主文字歌單名、右 caption（曲數）。列出數個歌單名 `浪潮回聲`(18 首)/`山海之間`(24 首)/`島嶼晨光`(9 首)/`失重時刻`(12 首)，行尾 ⋮ 選單。
- **離線下載**：一行 list-item「離線下載」+ 副文「已下載 3 個歌單 · 約 412 MB」+ 右側下載狀態 icon。
- **共享音樂庫**：一行 list-item「共享音樂庫」+ 副文「與家庭方案成員共用」。

每行 `cursor:pointer` + hover/active 回饋。

### profile（`data-screen="profile"`）

頂部 action bar 標題「我的」。內容：

- **使用者卡**：頭像方塊 + 暱稱 + `resona.app` 帳號 + caption「Plus 會員」。
- **播放偏好**：以細線分隔的設定列，含「跨裝置接續播放」開關（Holo 風 toggle：方正軌 + Holo 藍 active 點）、「無損音質串流」開關、「歌詞同步」開關。
- **3 訂閱方案卡**，Holo 風格為**方正卡、1px 邊框、無填色**，縱排：
  - `免費` — `NT$ 0` ／月（邊框 `--holo-line`，灰，標「目前方案」）
  - `Plus` — `NT$ 149` ／月（邊框 `--holo-blue`、標題藍、為主推方案，標「推薦」）
  - `Family` — `NT$ 249` ／月（邊框 `--holo-line`）
  價格用 `NT$ 149` 半形字串（`NT$` 與數字一個半形空格）、後綴全形「／月」。三方案名與三價格須同屏出現。每卡含一個方正「選擇方案」/「目前方案」鈕，`cursor:pointer` + 按下回饋。

## Do / Don't

| Do | Don't |
| --- | --- |
| 背景一律純黑 `#000`，accent 只用單一 Holo 藍 `#33B5E5` | 用多種彩色、漸層花俏背景、Material 動態色 |
| 分隔用 1px 髮絲線 `#222`，active 用 2px 藍底線 | 用圓角卡 + 大陰影做分隔（那是 Material） |
| 標題用 Roboto Light（300），標籤全大寫加寬字距灰字 | 用 700 粗體堆疊視覺層級 |
| 圓角 ≤ 4px、chip / 按鈕用方正細框 | 用膠囊鈕、28px 大圓角、填色 chip |
| active tab 用「頂部 2px 藍指示線 + 藍字」，分頁用底線 | 用底部膠囊高亮或填滿背景塊 |
| 所有間距取自 8pt token（4/8/12/16/20/24/32） | 寫死 7px / 13px / 18px 之類非尺度值 |
| 列表行高壓緊、資訊密度高、靠線排版 | 大留白、卡片間大間距的鬆散排版 |
| 可點元素 `cursor:pointer` + `:hover` 浮起 + `:active` 按下回饋 | 點了沒任何視覺變化的死板元素 |
| 播放鍵有 ▶/⏸ 兩態、active 隨機/循環轉藍 | 播放鍵永遠同一個 icon 沒狀態 |
| accent 文字確保對黑底達 WCAG AA（#33B5E5 對 #000 約 7:1） | 用 #444 之類低對比灰字寫正文 |

## Motion & Micro-interaction

- 所有可點元素：`cursor: pointer`。卡片/列表行 `:hover` 提升底色至 `--holo-surface-3`、`:active` 沉到 `--holo-surface-2`（並可 `transform: scale(0.99)`）。
- icon-button / 控制鍵 `:hover` 提亮、`:active` `transform: scale(0.92)` 給「按下去」回饋。
- 中央播放鍵 ▶/⏸ 兩態（demo 用 `:active`/`.playing` class 切換 icon 字符）；隨機 ⤨、循環 ⟳ 的 active 態轉 `--holo-blue`。
- 底線式分頁 active 的 2px 藍底線、tab-bar active 的 2px 頂部藍線可加 `transition` 過渡。
- 所有 transition 只動 `transform` / `opacity`（以及顏色 `color`/`background`），時長用 `--dur-fast`/`--dur-base`、緩動 `--ease-holo`。**任何動畫/transition 必附 `@media (prefers-reduced-motion: reduce)` 關閉。**

## Mobile Chrome Spec（鎖死版面、無跑版）

- 設計基準 **390×844**（iPhone 直式）；最外層 `.device` 鎖 `width: var(--screen-w)`、`height: var(--screen-h)`、置中、`overflow: hidden`、`border-radius: var(--screen-radius)` 模擬圓角螢幕、背景純黑、`display:flex; flex-direction:column`。
- **status-bar 永遠在頂**（24px，不捲動），**mini-player + tab-bar 永遠在底**（mini-player 56px 緊貼於 tab-bar 52px 之上，兩者皆不捲動），中間為**單一可捲動內容區**（`flex:1; overflow-y:auto`）。
- 內容區底部留 `padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2))`，確保最後一行內容**不被 mini-player / tab-bar 遮住**。
- **文字不溢出 / 不被裁切**：所有單行標題用 `overflow:hidden; text-overflow:ellipsis; white-space:nowrap` + 父層 `min-width:0`；多行說明用正常換行，padding 充足（左右 `--gutter`）。
- **player 畫面例外**：player 為全屏沉浸頁，不顯示 mini-player（避免重複播放列），但 status-bar 與 tab-bar 仍在。其餘 7 屏皆顯示 mini-player。
- **action bar 底線 tab / 分頁列**：active 以 2px `--holo-blue` 底線標示，是 Holo 的核心識別；純 CSS 呈現即可（不需真切換邏輯）。
- **tab-bar + mini-player** 用 `position: sticky; bottom: 0`（或 fixed 於裝置容器內）固定，永遠可見。

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="<id>">`**，固定順序：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，每個 id 各出現恰一次。
- `<body data-viewport="mobile">` 必須存在。
- **status-bar 顯示 `9:41`**；**tab-bar 四 tab** `首頁` / `搜尋` / `音樂庫` / `我的` 齊全。
- **常駐 mini-player**：在 tab-bar 上方、顯示於 home/search/detail/library/profile（player 不顯示），含小封面 + 歌名〈晚風練習曲〉+ 藝人 `林知夏` + ▶/⏸ 播放鍵。
- **三層定價精確字串**同屏出現：`免費` / `Plus` / `Family` 配 `NT$ 0` / `NT$ 149` / `NT$ 249`（`NT$` 與數字間一個半形空格、後綴全形「／月」）。
- **可互動多畫面導覽**：tab 切換（4 tab）+ 卡片 → detail + 曲目/迷你播放列 → player + detail/player 含返回鍵；可點元素皆 `cursor:pointer` + `:hover`/`:active` 視覺。
- 品牌「迴聲 / Resona」、6 核心功能名、7 歌單名、9 歌名、5 藝人名、4 分類 chip、正在播放（`林知夏` —〈`晚風練習曲`〉/ 02:47）皆出現在**可見 body 文字**中（不可只塞 `aria-label` / `data-*`）。
- 單檔 HTML **≤ 200 KB**（不含 `assets/` 圖片）。
- **無外部 CDN**：`<link>` / `<script>` / `<img>` 的 src/href 不得以 `http://` 或 `https://` 開頭；圖片一律相對路徑 `assets/<filename>.webp`。
- 不可用 framework CSS（Tailwind 等），全部 CSS 變數驅動。
- 若使用任何動畫（`@keyframes` / `transition`），必附 `@media (prefers-reduced-motion: reduce)` 關閉或簡化，且只動 `transform` / `opacity`（顏色過渡可保留）。

## Required Images

本風格使用**真實專輯封面圖**。`assets-manifest.json` 列 6 張方形專輯封面 `cover-1.webp` … `cover-6.webp`（各 600×600，抽象、無文字、各具不同氛圍）。使用規則：

- **home** 的「每日迴聲」橫幅用 `assets/cover-1.webp`；7 歌單卡牆輪流套用 `cover-1.webp`…`cover-6.webp`（第 7 張回用 `cover-1`）。
- **detail** 的 `島嶼晨光` 主打封面、**player** 的大封面、**mini-player** 的小封面皆用 `assets/cover-3.webp`。
- **library** 的收藏縮圖、**search** 的藝人頭像可重複套用 6 張封面。
- **Fallback**：每個 `<img>` 外層套一個帶 CSS 漸層的容器（深色系，如 `linear-gradient(135deg, #0d1b24, #1a2b33)` 等與 Holo 黑藍氛圍相符的暗色漸層），圖檔不存在或載入失敗時（`onerror` 隱藏 img 或圖未產出時）以該漸層色塊呈現，仍維持版面與可讀性。

## Reference Snippet

≥ 60 行可直接使用的 Holo CSS（手機殼、狀態列、action bar + 底線分頁、區段標題、chip、underline 搜尋框、卡片、song-row、進度條、訂閱卡、mini-player、tab-bar、reduced-motion）：

```css
/* ── 手機外殼 ── */
.device {
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  background: var(--holo-bg);
  color: var(--holo-text);
  font-family: var(--font-base);
  border-radius: var(--screen-radius);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* ── 狀態列：Holo 招牌窄頂列（永遠頂、不捲動）── */
.statusbar {
  height: var(--statusbar-h);
  flex: none;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-3);
  font-size: 11px; color: var(--holo-text);
  background: var(--holo-bg);
}
.statusbar .right { display: flex; gap: var(--sp-1); align-items: center; letter-spacing: 0.02em; }

/* ── 可捲動內容區（中段，留底部 mini+tab 空間）── */
.content {
  flex: 1; overflow-y: auto;
  padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
}

/* ── action bar + Holo 底線式分頁 ── */
.actionbar {
  height: var(--actionbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--gutter);
  font-family: var(--font-light); font-weight: var(--weight-light);
  font-size: 22px; letter-spacing: var(--tracking-tight);
  box-shadow: var(--shadow-bar);
}
.actionbar .icons { display: flex; gap: var(--sp-5); color: var(--holo-blue); font-size: 18px; }
.actionbar .icons .ib { cursor: pointer; transition: opacity var(--dur-fast) var(--ease-holo); }
.actionbar .icons .ib:active { opacity: 0.6; transform: scale(0.92); }
.actionbar .back { color: var(--holo-blue); cursor: pointer; }

.tabline { display: flex; height: var(--tab-h); border-bottom: 1px solid var(--holo-line); }
.tabline .tab {
  flex: 1; display: flex; align-items: center; justify-content: center;
  font-size: 11px; letter-spacing: var(--tracking-caps); text-transform: uppercase;
  color: var(--holo-text-3); border-bottom: 2px solid transparent; cursor: pointer;
  transition: color var(--dur-base) var(--ease-holo), border-color var(--dur-base) var(--ease-holo);
}
.tabline .tab:active { color: var(--holo-text-2); }
.tabline .tab.active { color: var(--holo-blue); border-bottom-color: var(--holo-divider-blue); }

/* ── 全大寫區塊標籤 + 區段標題（含「查看全部」）── */
.section-label {
  font-size: 11px; letter-spacing: var(--tracking-caps); text-transform: uppercase;
  color: var(--holo-label); padding: var(--sp-4) var(--gutter) var(--sp-1);
}
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  padding: var(--sp-5) var(--gutter) var(--sp-2);
}
.section-head h2 { font-size: 19px; font-weight: var(--weight-regular); }
.section-head .more { font-size: 13px; color: var(--holo-blue); cursor: pointer; }
.section-head .more:active { color: var(--holo-blue-dim); }

/* ── Holo 方正 chip（非膠囊）── */
.chips { display: flex; gap: var(--sp-2); padding: 0 var(--gutter) var(--sp-3); flex-wrap: wrap; }
.chip {
  padding: var(--sp-1) var(--sp-3); font-size: 11px;
  letter-spacing: var(--tracking-caps); text-transform: uppercase;
  color: var(--holo-blue); border: 1px solid var(--holo-blue);
  background: transparent; border-radius: var(--radius-xs); cursor: pointer;
  transition: background var(--dur-fast) var(--ease-holo);
}
.chip:hover { background: var(--holo-blue-soft); }
.chip.active { background: var(--holo-blue); color: var(--holo-bg); }

/* ── Holo underline 搜尋框（底線輸入）── */
.search-field {
  display: flex; align-items: center; gap: var(--sp-2);
  margin: var(--sp-3) var(--gutter);
  padding: var(--sp-2) 2px; color: var(--holo-text-2);
  background: transparent; border: none; border-bottom: 2px solid var(--holo-blue);
}

/* ── 封面 + 漸層 fallback 容器 ── */
.cover {
  aspect-ratio: 1; width: 100%; border-radius: var(--radius-card);
  background: linear-gradient(135deg, #0d1b24, #1a2b33); overflow: hidden;
}
.cover img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* ── 歌單卡（2 欄網格）── */
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-3); padding: 0 var(--gutter) var(--sp-4); }
.pcard { cursor: pointer; transition: transform var(--dur-fast) var(--ease-holo); }
.pcard:hover { transform: translateY(-2px); }
.pcard:active { transform: scale(0.98); }
.pcard .name { font-size: 17px; margin-top: var(--sp-2); }
.pcard .sub { font-size: 13px; color: var(--holo-text-2); }

/* ── 密實列表行 — song-row（1px 髮絲線分隔）── */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3);
  padding: var(--sp-3) var(--gutter);
  border-bottom: 1px solid var(--holo-line); font-size: 15px;
  cursor: pointer; transition: background var(--dur-fast) var(--ease-holo);
}
.song-row:hover { background: var(--holo-surface-3); }
.song-row:active { background: var(--holo-surface-2); }
.song-row .num { width: 22px; color: var(--holo-text-3); font-size: 13px; text-align: right; }
.song-row .body { flex: 1; min-width: 0; }
.song-row .title { color: var(--holo-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .artist { color: var(--holo-text-2); font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .meta { color: var(--holo-text-2); font-size: 13px; }
.song-row .play { color: var(--holo-blue); cursor: pointer; }

/* ── player now-playing + 進度條 ── */
.now-playing { padding: var(--sp-4); text-align: center; }
.now-playing .art { width: 240px; aspect-ratio: 1; margin: var(--sp-3) auto; border-radius: var(--radius-card); }
.now-playing .track { font-family: var(--font-light); font-weight: 300; font-size: 28px; letter-spacing: var(--tracking-tight); }
.now-playing .artist { color: var(--holo-text-2); font-size: 13px; }
.progress { height: 2px; background: var(--holo-line); margin: var(--sp-4) 0 var(--sp-1); position: relative; }
.progress .fill { height: 100%; background: var(--holo-blue); box-shadow: var(--glow-blue); }
.progress .knob { position: absolute; top: -3px; width: 8px; height: 8px; background: var(--holo-blue); border-radius: var(--radius-pill); }
.times { display: flex; justify-content: space-between; font-size: 12px; color: var(--holo-text-3); }
.controls { display: flex; align-items: center; justify-content: center; gap: var(--sp-6); margin: var(--sp-5) 0; }
.controls .ctl { color: var(--holo-text); cursor: pointer; transition: transform var(--dur-fast) var(--ease-holo); }
.controls .ctl:active { transform: scale(0.9); }
.controls .ctl.on { color: var(--holo-blue); }
.controls .pp {
  width: 56px; height: 56px; display: flex; align-items: center; justify-content: center;
  border: 2px solid var(--holo-blue); border-radius: var(--radius-pill);
  color: var(--holo-blue); cursor: pointer; transition: transform var(--dur-fast) var(--ease-holo);
}
.controls .pp:active { transform: scale(0.92); background: var(--holo-blue-soft); }
.lyrics .line { color: var(--holo-text-3); font-size: 15px; text-align: center; padding: var(--sp-1) 0; }
.lyrics .line.active { color: var(--holo-blue); }
.badge-hires {
  display: inline-block; padding: 3px var(--sp-2); font-size: 10px;
  letter-spacing: var(--tracking-caps); text-transform: uppercase;
  color: var(--holo-blue); border: 1px solid var(--holo-blue); border-radius: var(--radius-xs);
}

/* ── 訂閱方案卡（Holo 方正細框、無填色）── */
.plan { border: 1px solid var(--holo-line); border-radius: var(--radius-card); padding: var(--sp-4); margin: var(--sp-2) var(--gutter); background: var(--holo-surface); }
.plan.featured { border-color: var(--holo-blue); }
.plan.featured .plan-name { color: var(--holo-blue); }
.plan .plan-name { font-size: 17px; font-weight: var(--weight-medium); }
.plan .plan-price { font-family: var(--font-light); font-weight: 300; font-size: 22px; }
.plan .plan-price .per { font-size: 13px; color: var(--holo-text-3); }
.plan .plan-btn {
  margin-top: var(--sp-3); padding: var(--sp-2) var(--sp-4); display: inline-block;
  border: 1px solid var(--holo-line); border-radius: var(--radius-xs); color: var(--holo-text-2);
  cursor: pointer; transition: background var(--dur-fast) var(--ease-holo);
}
.plan.featured .plan-btn { border-color: var(--holo-blue); color: var(--holo-blue); }
.plan .plan-btn:active { background: var(--holo-surface-2); }

/* ── mini-player（常駐，tab-bar 上方）── */
.miniplayer {
  flex: none; height: var(--miniplayer-h);
  display: flex; align-items: center; gap: var(--sp-3);
  padding: 0 var(--sp-3); background: var(--holo-bg);
  border-top: 1px solid var(--holo-line); box-shadow: var(--shadow-mini);
  cursor: pointer; transition: background var(--dur-fast) var(--ease-holo);
}
.miniplayer:hover { background: var(--holo-surface-2); }
.miniplayer .mini-art { width: 40px; height: 40px; flex: none; border-radius: var(--radius-sm); }
.miniplayer .mini-body { flex: 1; min-width: 0; }
.miniplayer .mini-title { font-size: 15px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mini-artist { font-size: 12px; color: var(--holo-text-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mini-pp {
  flex: none; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
  color: var(--holo-blue); cursor: pointer; transition: transform var(--dur-fast) var(--ease-holo);
}
.miniplayer .mini-pp:active { transform: scale(0.9); }

/* ── 底部 tab-bar（4 tab，active 頂部 2px 藍指示線）── */
.tabbar {
  flex: none; height: var(--tabbar-h); display: flex;
  background: var(--holo-bg); border-top: 1px solid var(--holo-line);
  padding-bottom: var(--safe-bottom);
}
.tabbar .tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 2px; font-size: 11px; color: var(--holo-text-3);
  border-top: 2px solid transparent; cursor: pointer;
  transition: color var(--dur-base) var(--ease-holo);
}
.tabbar .tab .ic { font-size: 18px; }
.tabbar .tab:active { color: var(--holo-blue-dim); }
.tabbar .tab.active { color: var(--holo-blue); border-top-color: var(--holo-blue); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; }
}
```
