---
name: app-fluent
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Microsoft Fluent / WinUI style. Triggers on Fluent、Fluent Design、WinUI、Windows 11、微軟設計、Acrylic、Mica、Reveal highlight、Segoe、accent #0067C0、企業層次質感.
user-invocable: true
---

# Fluent（微軟流暢設計） — 迴聲 Resona

## Style Philosophy

Fluent Design 是微軟自 Windows 10（2017）到 Windows 11 / WinUI 3 一脈相承的設計語言，核心是「**光、深度、動態、材質、縮放**」五大要素。它不靠艷色搶眼，而靠**半透明材質的層次堆疊**與**邊緣的細微高光**製造一種「乾淨、克制、企業級」的秩序感——像把 Resona 做成一個 Windows 11 原生 app。整體調性是中性灰階打底、單一品牌藍 accent 點睛、所有互動都有微妙的深度與光暈回饋。

把這支 demo 想成「Windows 11 媒體播放器搬上 iPhone」：底層是一張 **Mica 淺色雲母桌布**（極淡的暖灰，帶幾乎不可見的色彩漸層），所有 UI 浮層——status-bar、navbar、卡片、tab-bar、mini-player——都是一層層 **Acrylic 亞克力磨砂面**疊在 Mica 上。層次靠「材質透明度差 + Reveal 高光邊 + elevation 陰影」三件事堆出來，**不靠彩色、不靠粗線**。

三個視覺辨識特徵：
1. **Mica 底材質 + Acrylic 浮層的雙層體系**：最底 canvas 是 Mica（較不透明、帶極淡漸層暈染，代表「桌布」）；其上所有可互動面是 Acrylic（`backdrop-filter: blur()` + 半透白底 + 飽和度提升 + 噪點微疊，代表「漂浮的材質玻璃」）。兩種材質透明度與模糊度刻意不同，製造可感知的層次深度。
2. **Reveal 邊緣高光**：卡片、列表項、按鈕在 rest 態就有 1px 半透白 inset 邊（材質的「亮邊」）；hover/active 時邊框與表面浮現一圈柔光（外圈 accent-tint glow + 內白邊增強），模擬 Windows Reveal 滑鼠靠近時的光暈。這是 Fluent 最關鍵的「活著」的細節。
3. **單一 accent 藍 `#0067C0` + 中性灰階層 + 8px 圓角系統**：色彩極度節制，accent 只用在播放鍵、選中態、進度條、active tab、推薦方案描邊；其餘全是 grey scale；圓角統一 8px（小元件 4px、大封面 12px、圓鍵 999px），陰影用系統化 elevation token（2/4/8/16）。

**本輪精修重點（務必落實）**：status-bar **不可**出現黑色瀏海 pill / Dynamic Island 黑膠囊——那與 Fluent 的淺色雲母調性衝突。status-bar 必須是一條**乾淨的 Fluent 淺色 Acrylic 列**，只放左側 9:41 + 右側訊號 / Wi-Fi / 電量三個灰階符號，整條無彩色、無黑塊。同時強化 Acrylic / Mica 的半透層次差，並讓 Reveal 高光在 rest 與 hover 兩態都清楚可見。

## Design Tokens (CSS variables)

所有數值集中於此。間距走 **8pt 系統**（4 / 8 / 12 / 16 / 20 / 24 / 32），字級、圓角、陰影、材質全部 token 化，元件只引用變數、不寫死數字。

```css
:root {
  /* ── 手機外殼專用 ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;
  --miniplayer-h: 56px;
  --safe-bottom: 24px;
  --screen-radius: 44px;          /* 模擬手機螢幕圓角 */

  /* ── 8pt 間距尺度（唯一允許的間距來源）── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;

  /* ── Fluent accent（單一品牌藍，全頁唯一彩色）── */
  --accent: #0067C0;              /* Fluent 標準 accent */
  --accent-light: #2E8FE0;        /* hover / 漸層上緣 */
  --accent-dark: #004C8C;         /* pressed */
  --accent-tint: rgba(0,103,192,0.12);   /* 選中態填充 */
  --accent-tint-strong: rgba(0,103,192,0.20); /* active / 按下加深 */
  --on-accent: #ffffff;

  /* ── 中性灰階層（Fluent neutral palette，淺色主題）── */
  --grey-2:  #faf9f8;            /* 最底 canvas */
  --grey-4:  #f3f2f1;            /* 內容區底 */
  --grey-8:  #edebe9;            /* 分隔 / 次表面 */
  --grey-20: #d2d0ce;            /* border / stroke */
  --grey-40: #a19f9d;           /* 次要圖示 */
  --grey-90: #605e5c;            /* 次要文字 */
  --grey-130: #323130;          /* 主要文字 */
  --grey-160: #201f1e;          /* 最深標題 */

  /* ── Acrylic / Mica 材質（精修：拉開兩者層次差）── */
  /* Mica：桌布底材，較不透明、帶極淡暖灰漸層暈，模糊度低 */
  --mica-bg: rgba(246,245,244,0.92);
  --mica-tint-a: rgba(0,103,192,0.05);   /* Mica 上極淡的左上色暈 */
  --mica-tint-b: rgba(160,159,157,0.06); /* Mica 上極淡的右下灰暈 */
  /* Acrylic：浮層材質，更透、更模糊、飽和度更高（玻璃感更強）*/
  --acrylic-bg: rgba(252,252,252,0.72);
  --acrylic-bg-thin: rgba(252,252,252,0.55);  /* 更薄的 acrylic（搜尋框 / chip）*/
  --acrylic-blur: blur(30px) saturate(135%);
  --acrylic-blur-thin: blur(18px) saturate(125%);
  --noise-opacity: 0.04;                   /* 噪點微疊強度 */

  /* ── 表面與文字（語意 token）── */
  --surface: #ffffff;
  --surface-alt: var(--grey-4);
  --card-bg: rgba(255,255,255,0.80);
  --card-bg-hover: rgba(255,255,255,0.92);
  --fg: var(--grey-160);
  --fg-secondary: var(--grey-90);
  --fg-disabled: var(--grey-40);
  --stroke: var(--grey-20);
  --stroke-soft: rgba(0,0,0,0.06);

  /* ── 圓角（Fluent 統一 8px 系統）── */
  --radius-xs: 4px;             /* chip / 小標籤 */
  --radius: 8px;               /* 標準：卡片 / 按鈕 / 輸入框 */
  --radius-lg: 12px;           /* 大封面 / 浮層 */
  --radius-pill: 999px;        /* 圓形播放鍵 / 進度拖點 */

  /* ── 深度陰影（Fluent elevation，比 Material 更輕薄）── */
  --shadow-2:  0 1px 2px rgba(0,0,0,0.06), 0 0.5px 1px rgba(0,0,0,0.04);
  --shadow-4:  0 1.6px 3.6px rgba(0,0,0,0.08), 0 0.3px 0.9px rgba(0,0,0,0.06);
  --shadow-8:  0 3.2px 7.2px rgba(0,0,0,0.10), 0 0.6px 1.8px rgba(0,0,0,0.07);
  --shadow-16: 0 6.4px 14.4px rgba(0,0,0,0.12), 0 1.2px 3.6px rgba(0,0,0,0.08);
  /* Reveal 邊緣高光：rest 態的 1px inset 半透白；hover 的外圈柔光 */
  --reveal-border: inset 0 0 0 1px rgba(255,255,255,0.65);
  --reveal-border-strong: inset 0 0 0 1px rgba(255,255,255,0.85);
  --reveal-glow: 0 0 0 1px var(--accent-tint), 0 0 16px rgba(0,103,192,0.20);

  /* ── 動態（統一 easing，僅 transform/opacity）── */
  --ease-fluent: cubic-bezier(0.16, 1, 0.3, 1);   /* WinUI 標準減速曲線 */
  --dur-fast: .12s;
  --dur: .18s;

  /* ── 字體（Segoe 風，回退到系統無襯線）── */
  --font: 'Segoe UI Variable', 'Segoe UI', 'PingFang TC', 'Noto Sans TC',
          'Microsoft JhengHei', system-ui, -apple-system, sans-serif;
  --font-display: 'Segoe UI Variable Display', 'Segoe UI Semibold', var(--font);
}
```

## Typography Scale

Fluent 的字級偏細、字重靠 Semibold 拉層次（標題用 600，內文 400），字距收緊（標題級 -0.01em，display 級 -0.02em）。完整階梯：

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| caption | 11px / 1.4 / 400 / 0 | status-bar、時長、播放次數、tab 文字、輔助標籤 |
| body-sm | 13px / 1.45 / 400 / 0 | 列表副標、藝人名、chip 文字、mini-player 藝人 |
| body | 15px / 1.5 / 400 / 0 | 段落、歌名、功能說明、song-row 主標 |
| subtitle | 17px / 1.4 / 600 / -0.005em | 卡片標題、區塊小標、tab active 文字、方案名 |
| title | 22px / 1.3 / 600 / -0.01em | navbar 大標題（home「迴聲」、各屏標頭） |
| display | 28px / 1.2 / 600 / -0.02em | player 曲名、profile 頁主標、訂閱價格 |

- 主要文字色 `--fg`（#201f1e）對 `--surface`（#fff）對比 > 15:1；次要文字 `--fg-secondary`（#605e5c）對白底約 5.7:1，皆過 WCAG AA。
- accent 藍 `#0067C0` 對白底約 5.0:1，可作為文字（連結、active tab 標籤、價格）使用。
- 即使浮層半透，所有正文都必須坐在「足夠不透明的色塊」上（`--card-bg` ≥ 0.80 或實心 `--surface`），不可讓文字直接壓在模糊背景導致對比不足。

## Component & Layout

整頁是**一支虛擬 iPhone**：最外層 `.device`（390×844、`--screen-radius` 圓角、`overflow:hidden`、置中、底層 canvas 為 **Mica 淺色雲母**）。版面是固定三明治：**status-bar 永遠釘頂 → 當前畫面的可捲動內容區 → mini-player + tab-bar 永遠釘底**。

### 整體框架（無跑版的硬規範）

- `.device` 鎖死 `width:390px; height:844px`（不是 min-height）、`overflow:hidden`、`display:flex; flex-direction:column`，內部三段：`.statusbar`（固定高 44px）+ `.stage`（`flex:1; position:relative; overflow:hidden`）+ `.dock`（mini-player + tab-bar，固定高）。
- **多畫面切換**用「同一 `.stage` 內疊放多個 `.screen`、以 class 控制顯示」：每個畫面（home/search/detail/player/library）是一個絕對定位填滿 `.stage` 的 `.screen`，各自 `overflow-y:auto`，只有 active 的那張 `display:flex/block` 可見，其餘 `display:none`。切 tab / 點卡 / 點 mini-player 只是換哪張 `.screen` 可見。
- **每張可捲動畫面**自己 `padding: var(--sp-4)`，底部 `padding-bottom` 必須 ≥ `mini-player + tab-bar` 高度（用 `calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2))`），確保內容捲到底也不被 dock 遮住。
- **status-bar 與 dock 永遠在原位**，不隨內容捲動；它們是 `.device` 的直接子層或絕對定位於 `.device`。
- **文字防溢出**：所有單行標題用 `overflow:hidden; text-overflow:ellipsis; white-space:nowrap`；卡片標題最多兩行用 `-webkit-line-clamp:2`。封面圖一律 `aspect-ratio:1; object-fit:cover` 不變形。

逐屏與元件規範：

### `status-bar`（屏 1，data-screen="status-bar"）

- 固定頂部、高 `--statusbar-h`（44px）、**Fluent 淺色 Acrylic 列**（`--acrylic-bg` + `--acrylic-blur` + `--reveal-border` 底亮邊）。
- **精修：絕對不放黑色瀏海 / Dynamic Island pill。** 整條乾淨淺色，無黑塊、無彩色。
- 左側時間 **9:41**（caption 級、`--fg`、字重 600）。
- 右側依序：訊號格、Wi-Fi、電量符號——用 inline SVG 或 unicode 純字符繪製（如訊號 `▂▄▆█`、Wi-Fi 扇形、電量電池框），**全部 `--fg` 灰階填色**，彼此間距 `--sp-2`。
- 上下置中、左右 padding `var(--sp-5)`（20px）。

### `home`（屏 2，data-screen="home"）

頂部 navbar（sticky 於本畫面頂）：左大標題 **迴聲**（title 級 Semibold），其下 body-sm 灰字 **Resona**；右上頭像圓鈕（Acrylic 圓 + Reveal）。navbar 下方留 `--sp-4`。內容至少三個區段，每段有「區段標題（subtitle）+ 右側『查看全部』連結（body-sm、accent、cursor:pointer）」的 `.section-head`：

1. **每日迴聲（每日推薦 banner）**：一張橫幅 Acrylic 大卡（`.daily-card`，`--card-bg` + blur + `--shadow-8` + Reveal 邊框），左側方形封面縮圖（`assets/cover-1.webp`，`--radius`），右側文案「每日迴聲 · 個人化每日推薦」+ 副標「為你挑選 30 首 · 林知夏、夜行列車…」+ 底部 accent **▶ 播放** 圓鈕。整卡 cursor:pointer，點擊 → 切到 detail。
2. **為你精選歌單（卡牆）**：`.section-head` 標「為你精選歌單」+「查看全部」。下方 **7 張歌單卡**，2 欄 grid（`gap: var(--sp-3)`），**完整列出 7 個歌單名**：`浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻`。每卡：頂部方形封面（依序 `cover-1`…`cover-6`，第 7 張重用 `cover-1`，`--radius`、`--shadow-4`）+ 下方歌單名（subtitle，可省略號）+ 副標 body-sm（如「24 首 · 約 1 小時」）。卡片 hover 升 elevation + Reveal glow，cursor:pointer，點擊 → 切到 detail。
3. **熱門排行（編號清單）**：`.section-head` 標「熱門排行」+「查看全部」。下方至少 5 條 `.song-row`（左排名數字 accent、中歌名+藝人、右時長），列出歌名與藝人混排（如 `〈霓虹巷弄〉海平面樂團`、`〈候鳥地圖〉夜行列車`、`〈靜電〉Echo Lab`）。點任一列 → 切到 player。
4. **功能徽章列**：把 6 個功能名以小 Acrylic 徽章帶過（`無損音質串流 / 離線下載 / 跨裝置接續播放 / 歌詞同步 / 共享音樂庫 / 智慧推薦`，依 brief 為準），確保 6 功能名出現在可見文字。

### `search`（屏 3，data-screen="search"）

- 頂部 navbar：title「搜尋」。
- **搜尋框**：薄 Acrylic 輸入框（`.search-box`，`--acrylic-bg-thin` + `--acrylic-blur-thin`、`--radius`、`--stroke` 邊、左側放大鏡 icon、placeholder「搜尋歌曲、藝人、歌單」），:focus-within 時加 `--reveal-glow` + 底部 accent 2px underline，cursor:text。
- **4 分類 chip**：`華語 / 獨立 / 電子 / 放鬆`（依 brief 4 分類為準），第一個 active。`.chip` 未選為 `--acrylic-bg-thin` 薄玻璃 + `--stroke` 邊、選中為 `--accent-tint` 底 + accent 文字 + accent 邊。cursor:pointer，hover Reveal。
- **熱門歌曲（編號清單）**：`.section-head`「熱門歌曲」。至少 6 條 `.song-row`（左序號、中歌名+藝人、右**時長**如 `03:42`、最右行尾 ⋯ 選單鈕）。列出歌名 `〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉` 與藝人 `海平面樂團 / 夜行列車 / Echo Lab / 何遠 / 林知夏`。點列 → player。
- **熱門藝人**：`.section-head`「熱門藝人」+ 橫向捲動的圓形頭像 + 藝人名 chip 列（列出 5 藝人）。

### `detail`（屏 4，data-screen="detail"）

主打專輯 **島嶼晨光**。

- 頂部返回列：左 chevron-left **返回鈕**（cursor:pointer，→ 回 home）+ 右 ⋯ 選單。
- **大封面**：方形 `assets/cover-3.webp`（`.detail-cover`，寬約 200px 置中或靠左，`--radius-lg`、`--shadow-16`）。
- 元資料區：專輯名 **島嶼晨光**（title 級）+ 藝人 **林知夏**（subtitle、accent 可點）+ 一行 body-sm 灰字「2026 · 9 首 · 約 34 分鐘」（年份 / 曲目數 / 總時長）。
- **動作列**：accent filled **▶ 播放全部** 主鈕（`.btn-primary`，cursor:pointer → player）+ outline **⤮ 隨機** 次鈕 + ⤓ 下載 + ♡ 收藏（皆 Acrylic outline、Reveal hover）。
- **9 首完整曲目清單**：`.song-row`，grid 欄位 `序號 / (歌名+藝人) / 時長 / ▶或⋯`。全部列出：`〈藍色信號〉〈霓虹巷弄〉〈候鳥地圖〉〈靜電〉〈晚風練習曲〉〈無人車站〉〈潮間帶〉〈第七個夏天〉〈月台九又四分之三〉`，每首歌名下小字藝人、右側時長（如 `03:18`）。**當前播放**的 `晚風練習曲` 標 `.is-playing`（accent 文字 + 🔊 小喇叭符號）。點任一列 → player。

### `player`（屏 5，data-screen="player"）

正在播放 **林知夏** —〈**晚風練習曲**〉。**此畫面不顯示 mini-player**（mini-player 是 player 的收合態）。

- 頂部收合列：左 chevron-down **收合鈕**（cursor:pointer → 回上一個畫面 / home）+ 中央小字「正在播放 · 島嶼晨光」+ 右 ⋯。
- **大封面** `.now-playing`：方形 `assets/cover-3.webp`（`--radius-lg`、`--shadow-16`，置中、寬約 280px），上下留 `--sp-6`。
- 曲名 **晚風練習曲**（display 級）+ 藝人 **林知夏**（body-sm、`--fg-secondary`），下方 body-sm「島嶼晨光」（專輯名）。
- **音質徽章**：小 Acrylic pill「無損音質串流」（accent-tint 底 + accent 文字）。
- **進度條** `.progress`：灰軌 `--grey-8` + accent 已播段（約 38%）+ 圓形 accent 拖點；兩端時間 **02:47** / **04:05**（目前 / 總長，caption 灰字）。
- **控制列**：`⏮ 上一首`（圖示鈕）/ **大圓 accent 播放/暫停鍵**（`.play-fab`，`--radius-pill`、accent 漸層填充、`--shadow-8`，預設顯 `⏸`、按下切 `▶`，cursor:pointer）/ `⏭ 下一首`；外側 `🔀 隨機`（toggle active 變 accent）/ `🔁 循環`（toggle active 變 accent）兩個灰圖示鈕。
- **歌詞同步**：下方 `.lyrics` 三行歌詞，**中間當前句逐字高亮**（用 accent 文字 + 左到右 `background-clip:text` 漸層或單句 accent），上下句為 `--fg-disabled`。例：上句灰「霓虹熄滅以前」/ 當前句 accent「晚風吹過你的側臉」/ 下句灰「我把整座城市調成靜音」。

### `library`（屏 6，data-screen="library"）

我的音樂庫。

- 頂部 navbar「音樂庫」title + 右上 ⤓ 下載管理 圓鈕。
- **分頁 tab**（`.seg`，三段式 segmented）：`歌單 / 專輯 / 已下載`，第一個 active（accent-tint 底 + accent 文字 + Reveal），cursor:pointer。
- **收藏歌單清單**：每列 `.lib-row`（左小封面縮圖 `cover-N`、中歌單名 + 副標「曲數 · 建立者」如「島嶼晨光 · 9 首」、右 chevron）。至少列 4–5 個歌單（重用 `浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步`）。cursor:pointer → detail。
- **離線下載分區**：`.section-head`「離線下載」，列出 2–3 個已下載項目 + ⤓ 下載完成圖示 + 容量小字。
- **共享音樂庫卡**：Acrylic 卡，標「共享音樂庫 · Family 方案最多 6 人共建」+ 重疊頭像群 + accent「邀請成員」鈕。

### `profile`（屏 7，data-screen="profile"）

- 頂部**使用者卡**：大頭像 + 暱稱「夜行的人」+ email 樣示 `listener@resona.app` + accent「編輯個人檔案」小鈕。
- **播放偏好**區（`.pref-list`，Fluent 設定列樣式）：每列左 icon + 中標題 + 右控制。至少含：「無損音質串流」（toggle on）、「**跨裝置接續播放**」（toggle on，副標「手機 · 平板 · 車機 無縫接續」）、「離線下載品質」（右值「無損」）、「歌詞同步」（toggle on）。toggle 用 Fluent 開關（軌 + 圓鈕，on 態 accent 軌）。
- **3 訂閱方案卡**（縱列，價格一字不差，後綴「／月」全形斜線）：
  - **免費** — **NT$ 0** ／月：隨機播放、含廣告、標準音質。outline Acrylic 卡，標「目前方案」徽章。
  - **Plus** — **NT$ 149** ／月：無廣告、無損音質串流、離線下載。**推薦卡**：accent 1.5px 描邊 + `--accent-tint` 表面 + `--reveal-glow`，右上「推薦」accent 徽章。
  - **Family** — **NT$ 249** ／月：6 帳號、共享音樂庫、家長控制。outline Acrylic 卡。
  - 每卡：頂部方案名（subtitle）+ 大價格（display + accent）+「／月」+ 下方權益小列表（每條前置 ✓ accent 勾）+ 底部「選擇方案」鈕（推薦卡為 filled accent，其餘為 outline）。

### mini-player（迷你播放列，常駐於 home/search/library/profile，及 detail）

- 一條**常駐迷你播放列** `.miniplayer`，**緊貼在 tab-bar 正上方**（dock 內、tab-bar 之上），高 `--miniplayer-h`（56px），Acrylic 材質 + 頂緣 Reveal 亮邊 + `--shadow-8`（彷彿浮在 tab-bar 上）。
- 內容：左 36px 方形封面縮圖（`cover-3`，`--radius-xs`）+ 中「**晚風練習曲**」（body，省略號）/「林知夏」（body-sm 灰，省略號）+ 右側 **▶/⏸ 播放/暫停**圓鈕（accent，cursor:pointer，點擊只切播放態、不換畫面）。
- 底部有一條 1px accent 細進度線（約 38%），表示當前播放進度。
- **點擊封面或文字區 → 展開到 player 畫面**（cursor:pointer）。
- **顯示規則**：在 home / search / library / profile / detail 顯示；在 **player 畫面隱藏**（player 是它的展開全屏態）。可用：當 player 為 active screen 時，給 `.dock` 加 class 把 `.miniplayer` `display:none`。

### `tab-bar`（屏 8，data-screen="tab-bar"）

- 底部固定、Acrylic 材質（`--acrylic-bg` + blur + 頂緣 1px `--stroke-soft`），高 `--tabbar-h` + `--safe-bottom` 安全區。
- 4 個 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，每 tab 上 icon 下 caption 文字。
- **active 態**（預設首頁）：icon 與文字轉 `--accent`、上方 2px accent 指示條 + 淡 `--accent-tint` 膠囊底；其餘 tab `--grey-40`。tab hover Reveal、cursor:pointer。
- 點 tab → 切換對應 `.screen` 並更新 active 樣式（首頁→home、搜尋→search、音樂庫→library、我的→profile）。

## Do / Don't

| Do | Don't |
| --- | --- |
| status-bar 是乾淨的淺色 Fluent Acrylic 列，只放 9:41 + 訊號 + 電量 | **在 status-bar 放黑色瀏海 / Dynamic Island 黑膠囊**（與淺色雲母衝突） |
| Mica（底）與 Acrylic（浮層）刻意拉開透明度 / 模糊度，做出雙層材質深度 | 底與浮層用同一種半透明，層次糊成一片 |
| 卡片 / 列表 rest 態就有 1px Reveal 白邊，hover 再疊 accent-tint glow | hover 才有邊、rest 態死板無材質感 |
| 全頁僅用單一 accent `#0067C0` 點睛，其餘走中性灰階 | 同屏出現多種搶眼彩色破壞企業克制感 |
| 間距只用 `--sp-*` 8pt 尺度、圓角只用 `--radius-*`、陰影只用 `--shadow-*` | 隨手寫 7px / 13px / 不一致圓角與濃黑陰影 |
| 可點元素全部 cursor:pointer + :hover/:active 回饋，播放鍵 ▶/⏸ 兩態 | 卡片 / 按鈕點下去毫無回饋 |
| 字重靠 Semibold（600）拉層次、字距收緊 | 全頁同一字重、靠放大字級硬撐標題 |
| 文字坐在 ≥0.80 不透明色塊上確保 AA 對比 | 文字直接壓在模糊背景上導致對比不足 |
| 單行標題 ellipsis、封面 object-fit:cover，內容絕不溢出 / 被 dock 遮住 | 長歌名撐爆卡片、捲到底被 mini-player 蓋住 |

## Motion Specification

- 所有過場只動 `transform` / `opacity`，用 `--ease-fluent`（WinUI 減速曲線）+ `--dur`（0.18s）/ `--dur-fast`（0.12s）。
- Reveal hover：`box-shadow` 過渡（白邊 → 白邊+glow）+ 微 `transform: translateY(-1px)`；active 按下 `translateY(1px) scale(0.99)`。
- 畫面切換：新 `.screen` `opacity 0→1` + `translateY(8px)→0` 淡入；不做位移會 reflow 的動畫。
- mini-player ▶/⏸ 切換：圖示 opacity 交替，無位移。

## Accessibility (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
    scroll-behavior: auto !important;
  }
}
```

- reduced motion 下：所有 hover/active/畫面切換**只保留最終狀態**（顏色 / Reveal 邊照常顯示，只是無過渡）。內容不依賴動畫即完整可讀。
- 互動可達性：可點元素用 `<button>` / `role="button"` + `tabindex`，焦點態給 `--reveal-glow` 作 focus ring；圖示鈕補 `aria-label`。

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- `<body data-viewport="mobile">` 必須存在。
- 8 個 `<section data-screen="<id>">`，固定順序：`status-bar → home → search → detail → player → library → profile → tab-bar`，每個 id 各出現恰一次（mini-player 屬於 dock 區、不額外占一個 data-screen，但須實作）。
- status-bar 顯示 **9:41**，且**不含黑色瀏海 / Dynamic Island 黑膠囊**——乾淨淺色 Acrylic 列。
- tab-bar 四 tab：**首頁 / 搜尋 / 音樂庫 / 我的**。
- 所有「必抄」字串（品牌 迴聲/Resona、6 功能名、7 歌單、9 歌名、5 藝人、4 分類 chip、正在播放 林知夏—〈晚風練習曲〉）出現在**可見 body 文字**中（不可只放 `aria-label` / `data-*`）。
- 三層定價精確字串於同一畫面（profile）：**免費 NT$ 0**、**Plus NT$ 149**、**Family NT$ 249**（後綴「／月」全形斜線）；標示「目前方案」與「推薦」。
- **可互動多畫面導覽**（純 vanilla JS）：tab 切換（4 tab → home/search/library/profile）+ 卡片 → detail（每日迴聲卡 / 歌單卡 / library 列）+ 曲目列 → player + mini-player 點擊 → player + detail/player 返回鍵 → 回上一畫面；mini-player ▶/⏸ 兩態切換；player 大播放鍵 ▶/⏸ 兩態切換。
- mini-player 常駐於 home/search/library/profile/detail，**player 畫面隱藏**。
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`。
- 單檔 ≤ 200 KB（不含 assets）、無外部 CDN（`<link>/<script>/<img>` 不可 `http(s)://`）、CSS 變數驅動、無 framework CSS、繁體中文、無 LLM 自白。
- 任何動畫必附 `@media (prefers-reduced-motion: reduce)` 且只動 `transform` / `opacity`。

## Required Images

使用**真實風格專輯封面圖**，共 6 張方形封面：`assets/cover-1.webp` … `assets/cover-6.webp`（各 600×600，抽象、無文字、無 logo，各具不同氛圍）。用法：

- **home** 每日迴聲 banner 縮圖：`cover-1`；歌單卡牆 7 張卡封面：依序 `cover-1`…`cover-6`，第 7 張重用 `cover-1`。
- **detail** 主打專輯 `島嶼晨光` 大封面：`assets/cover-3.webp`。
- **player** 大封面 `.now-playing`：同 `assets/cover-3.webp`。
- **mini-player** 縮圖：`cover-3`（與正在播放一致）。
- **library** 小封面縮圖：沿用對應歌單的 cover-N。
- **Fallback**：若圖檔不存在，以 CSS 漸層色塊替代——`linear-gradient(135deg, var(--accent-light), var(--grey-20))` 填滿同尺寸 `--radius` 圓角方塊，維持版面不破。封面元素一律 `aspect-ratio:1; background-size:cover`。

```json
{ "style": "Microsoft Fluent / WinUI", "images": [ … 見 assets-manifest.json，共 6 張 ] }
```

## Reference Snippet

可直接套用的 Fluent 核心 CSS（手機殼 / Mica 雲母 / Acrylic / 噪點 / Reveal / 乾淨 statusbar / section / song-row / 卡片 / now-playing / 進度條 / mini-player / tab-bar / 訂閱卡 / reduced-motion），≥ 60 行：

```css
/* ── 手機外殼：固定三明治 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  border-radius: var(--screen-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-16);
  /* Mica 雲母底：淺色 + 極淡雙色暈染（桌布感）*/
  background:
    radial-gradient(120% 90% at 0% 0%, var(--mica-tint-a), transparent 55%),
    radial-gradient(120% 90% at 100% 100%, var(--mica-tint-b), transparent 55%),
    var(--mica-bg);
}
/* 全域噪點微疊（材質顆粒感，覆蓋 Mica 與 Acrylic） */
.device::after {
  content: ""; position: absolute; inset: 0; z-index: 50;
  pointer-events: none; opacity: var(--noise-opacity);
  background-image: url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'>\
<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter>\
<rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* ── Acrylic 浮層材質（比 Mica 更透更模糊，玻璃感更強）── */
.acrylic {
  background: var(--acrylic-bg);
  backdrop-filter: var(--acrylic-blur);
  -webkit-backdrop-filter: var(--acrylic-blur);
  box-shadow: var(--reveal-border);   /* rest 態 1px Reveal 內白邊 */
}

/* ── 乾淨的 Fluent 淺色狀態列（無黑色瀏海）── */
.statusbar {
  flex: 0 0 var(--statusbar-h); z-index: 40;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-5);
  font: 600 11px/1 var(--font); color: var(--fg);
  background: var(--acrylic-bg);
  backdrop-filter: var(--acrylic-blur);
  -webkit-backdrop-filter: var(--acrylic-blur);
  box-shadow: var(--reveal-border);
}
.statusbar .sys { display: flex; align-items: center; gap: var(--sp-2); color: var(--fg); }

/* ── 中央舞台 + 可切換畫面 ── */
.stage { position: relative; flex: 1; overflow: hidden; }
.screen {
  position: absolute; inset: 0; display: none;
  overflow-y: auto; padding: var(--sp-4);
  padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h) + var(--safe-bottom) + var(--sp-2));
}
.screen.is-active { display: block; animation: scrnIn var(--dur) var(--ease-fluent); }
@keyframes scrnIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

/* ── 區段標頭 + 查看全部 ── */
.section-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: var(--sp-5) 0 var(--sp-3);
}
.section-head h2 { font: 600 17px/1.4 var(--font); letter-spacing: -.005em; color: var(--fg); }
.section-head a { font: 400 13px/1 var(--font); color: var(--accent); cursor: pointer; }

/* ── Fluent 卡片 + Reveal hover ── */
.card {
  background: var(--card-bg);
  backdrop-filter: var(--acrylic-blur); -webkit-backdrop-filter: var(--acrylic-blur);
  border-radius: var(--radius);
  box-shadow: var(--shadow-4), var(--reveal-border);
  padding: var(--sp-3); cursor: pointer;
  transition: box-shadow var(--dur) var(--ease-fluent), transform var(--dur) var(--ease-fluent);
}
.card:hover { background: var(--card-bg-hover); box-shadow: var(--shadow-8), var(--reveal-glow), var(--reveal-border-strong); transform: translateY(-1px); }
.card:active { transform: translateY(1px) scale(.99); }
.card .cover { aspect-ratio: 1; border-radius: var(--radius); object-fit: cover; box-shadow: var(--shadow-2);
  background: linear-gradient(135deg, var(--accent-light), var(--grey-20)); }
.card .name { font: 600 17px/1.4 var(--font); color: var(--fg); margin-top: var(--sp-2);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ── 分類 chip（薄 Acrylic）── */
.chip {
  display: inline-flex; align-items: center; padding: 6px var(--sp-3);
  margin: 0 var(--sp-2) var(--sp-2) 0; border-radius: var(--radius-xs);
  font: 400 13px/1 var(--font); color: var(--fg-secondary); cursor: pointer;
  background: var(--acrylic-bg-thin); backdrop-filter: var(--acrylic-blur-thin);
  border: 1px solid var(--stroke); transition: box-shadow var(--dur-fast) var(--ease-fluent);
}
.chip:hover { box-shadow: var(--reveal-glow); }
.chip[aria-selected="true"], .chip.is-active {
  background: var(--accent-tint); color: var(--accent); border-color: var(--accent);
}

/* ── 歌曲 / 列表項 ── */
.song-row {
  display: grid; grid-template-columns: 28px 1fr auto 32px; align-items: center; gap: var(--sp-3);
  padding: var(--sp-2) var(--sp-2); border-radius: var(--radius); color: var(--fg); cursor: pointer;
  transition: background var(--dur-fast) var(--ease-fluent), box-shadow var(--dur-fast) var(--ease-fluent);
}
.song-row:hover { background: var(--card-bg); box-shadow: var(--reveal-border), var(--reveal-glow); }
.song-row:active { transform: translateY(1px); }
.song-row .idx { color: var(--fg-secondary); font: 400 13px/1 var(--font); text-align: center; }
.song-row .title { font: 400 15px/1.4 var(--font); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-row .artist { font: 400 13px/1.4 var(--font); color: var(--fg-secondary); }
.song-row .dur { font: 400 11px/1 var(--font); color: var(--fg-secondary); }
.song-row.is-playing .title, .song-row.is-playing .idx { color: var(--accent); font-weight: 600; }

/* ── 播放器大封面 + fallback 漸層 ── */
.now-playing {
  width: 280px; max-width: 76%; aspect-ratio: 1; margin: var(--sp-6) auto;
  border-radius: var(--radius-lg); box-shadow: var(--shadow-16), var(--reveal-border);
  background: url("assets/cover-3.webp") center/cover no-repeat,
              linear-gradient(135deg, var(--accent-light), var(--grey-20));
}

/* ── 進度條 ── */
.progress { height: 4px; border-radius: var(--radius-pill); background: var(--grey-8); position: relative; }
.progress > .bar { height: 100%; width: 38%; border-radius: inherit; background: var(--accent); }
.progress > .knob { position: absolute; left: 38%; top: 50%; width: 12px; height: 12px;
  transform: translate(-50%, -50%); border-radius: var(--radius-pill);
  background: var(--accent); box-shadow: var(--shadow-4); }
.progress-row { display: flex; justify-content: space-between; font: 400 11px/1 var(--font); color: var(--fg-secondary); margin-top: var(--sp-2); }

/* ── 大圓 accent 播放鍵（▶/⏸ 兩態）── */
.play-fab {
  width: 64px; height: 64px; border: none; border-radius: var(--radius-pill); cursor: pointer;
  display: grid; place-items: center; color: var(--on-accent); font-size: 24px;
  background: linear-gradient(180deg, var(--accent-light), var(--accent));
  box-shadow: var(--shadow-8), var(--reveal-border);
  transition: transform var(--dur-fast) var(--ease-fluent);
}
.play-fab:hover { transform: scale(1.04); box-shadow: var(--shadow-16), var(--reveal-glow); }
.play-fab:active { transform: scale(.96); }

/* ── 迷你播放列（dock，tab-bar 之上）── */
.dock { flex: 0 0 auto; z-index: 40; }
.miniplayer {
  height: var(--miniplayer-h); display: grid; grid-template-columns: 36px 1fr 40px;
  align-items: center; gap: var(--sp-3); padding: 0 var(--sp-4); cursor: pointer;
  background: var(--acrylic-bg); backdrop-filter: var(--acrylic-blur); -webkit-backdrop-filter: var(--acrylic-blur);
  box-shadow: var(--shadow-8), var(--reveal-border); position: relative;
}
.miniplayer .mp-cover { width: 36px; height: 36px; border-radius: var(--radius-xs); object-fit: cover;
  background: linear-gradient(135deg, var(--accent-light), var(--grey-20)); }
.miniplayer .mp-title { font: 400 15px/1.2 var(--font); color: var(--fg); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-artist { font: 400 13px/1.2 var(--font); color: var(--fg-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.miniplayer .mp-play { width: 40px; height: 40px; border: none; border-radius: var(--radius-pill); cursor: pointer;
  background: var(--accent-tint); color: var(--accent); display: grid; place-items: center; font-size: 16px; }
.miniplayer::after { content: ""; position: absolute; left: 0; bottom: 0; height: 1.5px; width: 38%; background: var(--accent); }
.dock.player-active .miniplayer { display: none; }   /* player 畫面隱藏 mini-player */

/* ── 訂閱卡：Plus 推薦態 ── */
.plan { padding: var(--sp-4); border-radius: var(--radius); margin-bottom: var(--sp-3);
  background: var(--card-bg); box-shadow: var(--shadow-4), var(--reveal-border); }
.plan.is-recommended { border: 1.5px solid var(--accent); background: var(--accent-tint);
  box-shadow: var(--shadow-8), var(--reveal-glow); }
.plan .pname { font: 600 17px/1.4 var(--font); color: var(--fg); }
.plan .price { font: 600 28px/1.1 var(--font-display); letter-spacing: -.02em; color: var(--accent); }

/* ── 底部 tab-bar ── */
.tabbar {
  display: grid; grid-template-columns: repeat(4, 1fr);
  height: calc(var(--tabbar-h) + var(--safe-bottom)); padding-bottom: var(--safe-bottom);
  background: var(--acrylic-bg); backdrop-filter: var(--acrylic-blur); -webkit-backdrop-filter: var(--acrylic-blur);
  border-top: 1px solid var(--stroke-soft);
}
.tab { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px; color: var(--grey-40); font: 400 11px/1 var(--font); cursor: pointer;
  transition: color var(--dur-fast) var(--ease-fluent); }
.tab:hover { color: var(--accent-light); }
.tab.is-active { color: var(--accent); }
.tab.is-active::before { content: ""; position: absolute; top: 0; width: 28px; height: 2px;
  border-radius: var(--radius-pill); background: var(--accent); }

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
}
```
