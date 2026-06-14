---
name: app-y2k
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Y2K (千禧年鉻金屬果凍泡泡) style. Triggers on Y2K、千禧、Y2K Phone、Frutiger Aero、chrome、鉻金屬、果凍按鈕、jelly bubble、半透塑膠、translucent plastic、星星貼紙、藍銀、cyber-cute、Lisa Frank、2000s UI.
user-invocable: true
---

# Y2K 手機 — 迴聲 Resona

## Style Philosophy

Y2K（千禧年）視覺把「2000 年前後對未來的樂觀想像」凝結成介面語言：液態鉻金屬、半透明塑膠、果凍質感的圓潤按鈕、星星閃光與漸層光暈。它的精神是「**科技但可愛、未來但溫暖**」（cyber-cute / Frutiger Aero 的近親），把冷冰冰的金屬科技包進糖果般的圓角與高光裡。在 迴聲 Resona 的音樂串流畫面中，這風格讓播放器與歌單像一台 2003 年的透明 MP3 隨身聽——藍銀為主、螢光點綴，每個元件都像被一層水亮塑膠包覆，有捏得下去的果凍感。

設計這份手機原型時，核心目標是「**像一台 2003 年真的會出貨的透明電子產品**」：每個按鈕都有可按壓的果凍回饋、每張卡片都像被真空封進塑膠殼、鉻金屬永遠有明確的「弧面反光」而非平塗灰。細膩度的關鍵在於**高光的紀律**——鉻金屬的白高光只在一條窄帶、果凍的 specular 只在上半、星星只在邊角點綴，整體仍維持藍銀的冷靜底，不讓螢光與星星淹沒結構。

三個視覺辨識特徵：
1. **鉻金屬漸層（liquid chrome）**：銀藍多段 `linear-gradient`（深藍灰→亮銀→白高光→淺藍→深），白高光收窄成一條 8–14% 的窄帶製造「金屬弧面」錯覺，用於 navbar、播放控制環、專輯封面外框、tab-bar、進度軌。
2. **果凍泡泡按鈕（jelly bubble）**：高圓角（22px+ 或全圓 pill），表面「上半亮、下半暗」雙層漸層 + 一顆 `::before` 橢圓 specular 高光點，`:active` 時整顆下沉 + 高光縮小，按下去像會 Q 彈。
3. **半透塑膠卡片 + 星星貼紙**：卡片用 `rgba` 半透白 + `backdrop-filter` 微霧 + 內描邊高光（雙層 inset），邊角散落 ✦ ✧ 星星與 sparkle，藍銀底配螢光點綴（螢光藍 / 螢光粉 / 螢光綠），像 2000 年代貼在筆電上的雷射貼紙。

---

## Design Tokens (CSS variables)

所有數值集中於此；逐屏與 snippet 一律引用變數，禁止散落 magic number。

```css
:root {
  /* ── 手機框架（所有 app-* 共用基準，數值固定，禁改） ───────────── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 84px;            /* tab-bar 本體（不含 mini-player） */
  --miniplayer-h: 58px;       /* mini-player 常駐高度 */
  --safe-bottom: 34px;        /* iPhone home indicator 安全區 */
  --device-radius: 56px;      /* 圓角螢幕外框半徑 */

  /* ── 8pt 間距尺度（唯一允許的間距值） ──────────────────────────── */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 20px;
  --sp-6: 24px;
  --sp-8: 32px;
  --content-pad: 18px;        /* 內容區左右安全內距（Y2K 微寬於 16） */

  /* ── Y2K 藍銀色票 ───────────────────────────────────────────── */
  --y2k-ink: #15233f;         /* 主文字：深藍墨 */
  --y2k-ink-soft: #41577e;    /* 次文字：藍灰 */
  --y2k-sky: #cfe6ff;         /* 淺天藍 */
  --y2k-sky-2: #e7f3ff;       /* 更淺天藍背景 */
  --y2k-silver: #dfe7f2;      /* 銀 */
  --y2k-silver-d: #9fb2cc;    /* 暗銀（描邊 / 陰影） */
  --y2k-blue: #2f6fff;        /* 主藍（active / CTA） */
  --y2k-blue-d: #1b3ea8;      /* 深藍 */

  /* ── 螢光點綴（active 態 / 徽章 / 星星，僅作點綴） ───────────────── */
  --y2k-neon-blue: #38e0ff;   /* 螢光藍 */
  --y2k-neon-pink: #ff7ad9;   /* 螢光粉 */
  --y2k-neon-green: #8dff5a;  /* 螢光綠 */

  /* ── 鉻金屬漸層（核心招牌：暗→亮銀→窄白高光→淺藍→深） ──────────── */
  --chrome: linear-gradient(180deg,
    #6b86b4 0%, #c9d8ec 12%, #ffffff 26%, #ffffff 34%,
    #aebfe0 50%, #5d7bb0 70%, #9fb6dc 88%, #e9f1ff 100%);
  --chrome-blue: linear-gradient(180deg,
    #1b3ea8 0%, #3f7bff 26%, #bfe0ff 48%, #ffffff 52%, #2f6fff 74%, #173b9a 100%);
  --chrome-soft: linear-gradient(180deg, #f4f9ff 0%, #d6e6fb 48%, #aac6ef 100%);

  /* ── 果凍泡泡漸層（按鈕 / chip） ────────────────────────────────── */
  --jelly-blue: linear-gradient(180deg, #7db8ff 0%, #2f6fff 52%, #1c46c4 100%);
  --jelly-pink: linear-gradient(180deg, #ffc1ec 0%, #ff7ad9 52%, #d23ba6 100%);
  --jelly-green: linear-gradient(180deg, #c6ff9e 0%, #8dff5a 50%, #4fce2e 100%);
  --jelly-glass: linear-gradient(180deg,
    rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 46%,
    rgba(180,205,245,0.25) 54%, rgba(120,160,230,0.30) 100%);

  /* ── 半透塑膠卡片 ───────────────────────────────────────────── */
  --plastic-fill: rgba(255,255,255,0.62);
  --plastic-fill-2: rgba(255,255,255,0.48);  /* 列項較淡填充 */
  --plastic-stroke: rgba(255,255,255,0.85);
  --plastic-stroke-d: rgba(110,140,190,0.55);

  /* ── 圓角尺度 ───────────────────────────────────────────────── */
  --r-sm: 12px;               /* 小縮圖 / chip 內元素 */
  --r-bubble: 22px;           /* 卡片 / 按鈕果凍圓角 */
  --r-pill: 999px;            /* 膠囊 chip / 控制鈕 / 進度軌 */
  --r-cover: 26px;            /* 專輯封面圓角 */

  /* ── 陰影 / 高光 token ─────────────────────────────────────────── */
  --sh-card: 0 8px 22px rgba(40,80,160,0.18), inset 0 1px 0 rgba(255,255,255,0.9);
  --sh-card-lift: 0 14px 30px rgba(40,80,160,0.28), inset 0 1px 0 rgba(255,255,255,0.95); /* hover 抬升 */
  --sh-jelly: 0 6px 14px rgba(30,70,200,0.35), inset 0 2px 3px rgba(255,255,255,0.85), inset 0 -4px 8px rgba(20,50,140,0.45);
  --sh-jelly-press: 0 2px 6px rgba(30,70,200,0.4), inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -2px 6px rgba(20,50,140,0.55); /* :active 下沉 */
  --sh-inset: inset 0 2px 6px rgba(20,40,120,0.28);  /* 搜尋框 / 進度軌內凹 */
  --glow-neon: 0 0 12px rgba(56,224,255,0.7);
  --glow-pink: 0 0 12px rgba(255,122,217,0.65);

  /* ── 動效時長（統一節奏） ───────────────────────────────────────── */
  --dur-fast: 0.12s;          /* 按壓回饋 */
  --dur-base: 0.22s;          /* hover / tab 切換 */
  --ease-jelly: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Q 彈 overshoot */

  /* ── 字體 ───────────────────────────────────────────────────── */
  --font-ui: 'PingFang TC', 'Noto Sans TC', 'Arial Rounded MT Bold', 'Verdana', system-ui, sans-serif;
  --font-num: 'Verdana', 'Tahoma', 'PingFang TC', system-ui, sans-serif;  /* 千禧網頁感數字 */
}
```

---

## Typography Scale（手機字級階梯）

| 級距 | 大小 / 行高 / 字重 / 字距 | 用途 |
| --- | --- | --- |
| display | 28px / 1.15 / 800 / -0.01em | 播放器曲名、home 大標「迴聲 Resona」 |
| title | 22px / 1.20 / 700 / 0 | 屏標題（搜尋 / 音樂庫 / 我的）、專輯名 |
| section | 17px / 1.30 / 700 / 0 | 區段標題、卡片主標、歌單名 |
| body | 15px / 1.45 / 500 / 0 | 一般內文、曲目主文字 |
| label | 13px / 1.30 / 600 / 0.02em | 藝人名、chip、tab 文字、徽章 |
| caption | 11px / 1.20 / 600 / 0.01em | 時長、播放次數、status-bar、附註 |

- 字體一律圓潤無襯線；數字（時長 02:47、價格、進度、播放數）用 `--font-num` 帶千禧網頁感。
- 字距：標題類保持 0；label/caption 加 0.02em 讓銀底小字更清楚。
- **對比紀律（WCAG AA）**：深藍墨 `--y2k-ink` 永遠落在淺底（sky / silver / 白塑膠）；亮藍 / 螢光 CTA 上的文字一律純白並加 `text-shadow: 0 1px 2px rgba(20,40,120,.7)` 深藍描影確保可讀；**禁止**亮銀字壓亮銀底。
- 區段標題列固定樣式：左 `section` 級標題 + 右側「查看全部 ›」`label` 級藍字連結（cursor:pointer）。

---

## Component & Layout（逐屏與元件規範）

### 整體外框

`.device` 鎖 390×844、置中、圓角螢幕 `--device-radius`、`overflow:hidden`，內部三層垂直結構（CSS：`.device` 為 flex column）：

1. **`.statusbar`**（`data-screen="status-bar"`）— `position:sticky; top:0`，永遠在頂，高 `--statusbar-h`。
2. **`.viewport`**（可捲動內容區）— `flex:1; overflow-y:auto`，當前畫面顯示於此；status-bar 與底部欄不隨之捲動。
3. **底部固定群**（永遠在底，`position:sticky; bottom:0`）= **mini-player（`--miniplayer-h`）疊在 tab-bar（`--tabbar-h`）上方**，合成一塊鉻金屬底座。player 畫面時 mini-player 隱藏。

`.viewport` 底部須留 `padding-bottom: calc(var(--miniplayer-h) + var(--tabbar-h))`，確保最後一段內容**不被 mini-player / tab-bar 遮擋**。

背景：`.device` 用 `--chrome-soft` 淺藍銀漸層；右上、左下各放一顆模糊光暈圓（`radial-gradient` 螢光藍 / 螢光粉，`opacity:.35`，`filter:blur`），再點綴數顆 ✦ ✧ 星星貼紙（純 CSS，`position:absolute`、`pointer-events:none`、可旋轉），製造透明殼底紋。

8 屏皆包在同一 `.device` 內，依 `data-screen` 順序排列；同一時間只顯示一屏（其餘 `display:none` 或 `hidden`），透過 tab / 卡片 / 返回鍵切換。**可互動導覽以純 CSS（`:target` / radio + label）或 ≤8KB inline JS 實作皆可**，但所有畫面與權威字串必須存在於 DOM、可被驗證搜尋到。

### status-bar（屏 1）

固定頂部，高 `--statusbar-h`，半透銀底 + `backdrop-filter` 微霧。左側時間 **9:41**（`--font-num` 700）；右側依序：訊號格（4 條漸高小柱，純 CSS 方塊）、Wi-Fi 弧、電量符號（圓角電池外殼 + 內填螢光綠）。整條底部一道銀色高光線分隔。

### home（屏 2）— 至少三區段

頂部 **navbar 大標題**：鉻金屬橫條（`--chrome`），左 App 標題「**迴聲 Resona**」白字 + 深藍描影 + 一顆 ✦ 星，右側齒輪 / 鈴鐺果凍小圓鈕（cursor:pointer、:active 下沉）。下接淺藍內容區，內容自上而下：

1. **「每日迴聲」每日推薦 banner**（區段標題「每日迴聲 · 為你準備的每日推薦」）：一張寬鉻金屬框橫幅卡，左側純 CSS 鉻框小封面、右側標題「今日精選 · 島嶼晨光」+ 副標 + 果凍「播放」鈕，邊角 ✦✧ 星星。
2. **「為你精選歌單」卡牆**（區段標題列：左標題 + 右「查看全部 ›」）：4 顆**分類 chip**（華語 / 獨立 / 電子 / 放鬆）果凍膠囊水平排列，active 一顆填螢光藍；其下 **7 個歌單卡（2 欄網格）**，列全部歌單名：浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻。每張 = 半透塑膠卡 + 純 CSS 鉻框封面 + 歌單名（section）+ 副標（caption）。卡片 cursor:pointer、hover 抬升（`--sh-card-lift`）、:active 微縮；**點任一卡 → detail 畫面**。
3. **「熱門排行」清單**（區段標題「熱門排行 · 本週」+「查看全部 ›」）：編號清單列出多首歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖…），每列：排名圓徽 + 歌名（body）+ 藝人（label）+ 時長（caption）+ 右側果凍播放鈕。**點任一列 → player 畫面**。

穿插露出核心功能標語徽章（如「無損音質串流」「離線下載」「跨裝置接續播放」「共享音樂庫」小卡 / 膠囊）。

### search（屏 3）

頂部果凍**搜尋框**（半透塑膠 + `--sh-inset` 內凹 + 放大鏡 icon + placeholder「搜尋歌曲、藝人、歌單」）。其下重複 4 分類 chip（華語 / 獨立 / 電子 / 放鬆）。

- **「熱門歌曲」編號清單**（含時長）：列出多首歌名（霓虹巷弄 / 候鳥地圖 / 潮間帶…），每列左側鉻框小縮圖 + 編號 + 歌名（body）+ 藝人（label）+ 時長（caption，`--font-num`）+ 右側果凍播放鈕。點列 → player。
- **「熱門藝人」**：橫向膠囊 / 圓鉻框頭像列，列出多位藝人：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠（label 名稱可見）。

### detail（屏 4）— 專輯詳情

頂部左上**返回鍵 ‹**（果凍小圓鈕，cursor:pointer，回 home）。下方大張**純 CSS 鉻框專輯封面**。資訊區：
- 專輯名 **島嶼晨光**（title）、藝人 **林知夏**（label）、後設一行「2003 · 9 首 · 38 分鐘」（年份 / 曲目數 / 總時長，caption）。
- 兩顆主 CTA：**播放全部**（鉻藍果凍 pill）+ **隨機播放**（半透塑膠 pill + 隨機 icon）。
- **完整 9 曲目 `.song-row` 清單**（全部 9 歌名）：藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三。每列：序號圓徽（曲序）+ 歌名（body）+ 藝人（label，林知夏）+ 時長（caption）+ 行尾選單 ⋯ 或果凍播放鍵。**點任一列 → player**。

### player（屏 5）— 不顯示 mini-player

頂部左上**返回鍵 ‹**（回 detail）。中央**特大純 CSS 鉻框專輯封面**（島嶼晨光，加緩慢旋轉光暈與星星）。其下：
- 曲名「**晚風練習曲**」(display) + 藝人「**林知夏**」(label) + 專輯「島嶼晨光」(caption)。
- **音質徽章**：螢光綠果凍膠囊「無損音質串流 · Hi-Res」（音量 / 音質徽章需求）。
- **進度條**：鉻金屬軌 + 螢光藍填充 + 圓珠 thumb；左 `00:00`（目前）右 `02:47`（總長），`--font-num`。
- **控制列**：上一首 ⏮ / **大果凍播放鈕（鉻藍 + specular 高光，▶/⏸ 兩態，cursor:pointer，:active 下沉）** / 下一首 ⏭，兩側放隨機 🔀 與循環 🔁 小鈕（active 態填螢光）。
- **歌詞同步面板**：逐行歌詞，**當前行逐字高亮一行**（螢光藍底 + 粗體），上下行淡化。

### library（屏 6）— 分頁

屏標題「**音樂庫**」。其下**分頁列（歌單 / 專輯 / 已下載）**果凍 tab，active 一顆填螢光藍。
- **收藏歌單清單**（重複歌單名於列表）：每列 = 鉻框縮圖 + 歌單名（section）+ 曲數（caption），cursor:pointer。
- **「離線下載」**區塊：果凍下載鈕 + 「已下載 · 12 首」徽章。
- **「共享音樂庫」**區塊：多顆重疊頭像泡泡（圓鉻框）+ 說明文字。

### profile（屏 7）— 訂閱方案

頂部**使用者卡**（圓鉻框頭像 + 暱稱 + 副標「Resona 會員」）。
- **「播放偏好」**卡：含**跨裝置接續播放**開關（果凍 toggle，手機 / 平板 / 車機小圖示）、音質偏好、自動下載等列項。
- **3 張訂閱方案卡**（果凍泡泡 + 鉻框，垂直堆疊）：
  - **免費** — `NT$ 0 ／月`（隨機播放、含廣告、標準音質）— 標「目前方案」徽章。
  - **Plus** — `NT$ 149 ／月`（無廣告、無損音質、離線下載）— **主打**：鉻藍填充 + 螢光描邊 + 「推薦」星星徽章。
  - **Family** — `NT$ 249 ／月`（6 帳號、共享音樂庫、家長控制）。

  價格字串一字不差：`NT$` 與數字間半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

位於 tab-bar **上方**，疊在底座頂部，高 `--miniplayer-h`。內容：左側鉻框小封面縮圖 + 中間「晚風練習曲」(label 700) + 「林知夏」(caption) + 右側**播放/暫停果凍鍵**（▶/⏸ 兩態）。整條一道細螢光藍進度線在底緣。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（player 本身就是全屏播放器）。
- **點 mini-player 主體 → 展開到 player 畫面**；點播放鍵切換 ▶/⏸（不導頁）。
- cursor:pointer，hover 高光增強，:active 微縮。

### tab-bar（屏 8）

固定底部，高 `--tabbar-h`（含 `--safe-bottom`），鉻金屬橫條 + 半透塑膠，與 mini-player 合成底座。4 顆果凍 tab，可見文字 **首頁 / 搜尋 / 音樂庫 / 我的**，各帶圓潤 icon。active tab 填螢光藍果凍 + 上方 `--glow-neon` 光暈 + 文字加深（`--y2k-blue-d`）；非 active 為銀灰。**點 tab → 切換對應畫面**（home/search/library/profile）。

### 純 CSS 鉻框專輯封面（全風格通用，禁圖檔）

外層 `--chrome` 或 `--chrome-blue` 厚框（5px padding）+ `--r-cover` 圓角；內層 `.art` 用 `conic-gradient` / `linear-gradient` / 重疊半透色塊 + 一兩個幾何形（圓、斜帶、星）構成抽象封面，每張可換主色相（藍 / 粉 / 綠 / 紫）做出區別；右上一顆 ✦ 高光星。不引用任何 `assets/` 圖檔。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 鉻金屬一律多段 `linear-gradient`，白高光收成 8–14% 窄帶做弧面反光 | 用單色灰當金屬、無高光、白佔半屏 |
| 果凍按鈕加 `::before` 橢圓 specular 高光 + 雙層內陰影，`:active` 換 `--sh-jelly-press` 下沉 | 做成扁平 Material 純色按鈕、無按壓回饋 |
| 所有可點元素 `cursor:pointer` + 明確 `:hover` / `:active` | 可點卻無 hover/active 視覺，像死圖 |
| 卡片半透 `rgba` + 雙層內描邊高光 + 微 `backdrop-filter` | 不透明實心白卡，失去塑膠真空感 |
| 星星 / sparkle 用純 CSS（`clip-path` / 文字 ✦✧ / box-shadow 點），邊角點綴 | 引用外部 emoji 圖檔或 CDN icon、星星滿屏 |
| 螢光色只作點綴（active / 徽章 / 進度 / 星），主體仍藍銀 | 整屏螢光，刺眼又破壞千禧質感 |
| 間距只用 `--sp-*` 8pt 尺度；圓角只用 `--r-*` token | 散落 13px/17px 等隨意間距 / 小直角圓角 |
| 對比達 AA：深藍墨字於淺底、純白字於藍 CTA 並加描影 | 亮銀字壓亮銀底，糊成一片 |
| 內容 padding 充足、文字 `overflow` 收斂（ellipsis / 換行），絕不裁切 | 文字溢出殼外、被 mini-player/tab-bar 遮住 |

---

## Motion Specification

- 統一節奏：按壓回饋 `--dur-fast`、hover / tab 切換 `--dur-base`；果凍按壓用 `--ease-jelly` overshoot。
- **僅動 `transform` / `opacity`**（按鈕 `scale` 下沉、卡片 `translateY` 抬升、tab 高光 `opacity`、封面光暈 `rotate`、星星 `opacity` 閃爍）。**禁動** `top/left/width/height`。
- 微互動清單：
  - 果凍鈕 `:active { transform: scale(.96); box-shadow: var(--sh-jelly-press); }`
  - 卡片 `:hover { transform: translateY(-3px); box-shadow: var(--sh-card-lift); }`、`:active { transform: translateY(-1px) scale(.99); }`
  - tab / 分頁 active：`opacity` 高光淡入 + 文字色變。
  - 播放鍵 ▶/⏸ 兩態切換（class 或 `:checked`），暫停 ↔ 播放 icon 互換。
  - 封面光暈緩慢 `rotate`（loop，≤ 20s）、星星 `opacity` 呼吸閃爍。
- 內容在 JS 失敗或 reduced-motion 下仍完整可讀，動效只是錦上添花。

## Accessibility (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  .cover .halo, .star { animation: none !important; }
}
```

- reduced-motion 下移除所有旋轉 / 閃爍 / 過渡，保留 `:active` 的靜態最終態即可。
- 焦點可見：可點元素 `:focus-visible` 給 2px 螢光藍外框，不可只靠顏色。
- 觸控目標 ≥ 44×44（果凍小鈕用 padding 撐足，視覺可較小）。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「App 風格額外要求」：

1. `<body data-viewport="mobile">` 必須存在。
2. **8 個 `<section data-screen="...">`**，id 與順序固定：`status-bar → home → search → detail → player → library → profile → tab-bar`，各恰一次。
3. 全頁單一固定外框：**status-bar 永遠在頂、tab-bar(含其上方 mini-player) 永遠在底、中間為當前畫面可垂直捲動區**；內容不被遮擋、文字不溢出殼外 / 不被裁切、padding 充足。
4. **mini-player 常駐**於 home/search/library/profile（封面縮圖 + 歌名 + 藝人 + 播放/暫停鍵），player 畫面不顯示 mini-player；點 mini-player 展開到 player。
5. **可互動多畫面導覽**：tab 切換（首頁/搜尋/音樂庫/我的）+ 卡片 → detail + 曲目列/mini-player → player + detail/player 有返回鍵。可用純 CSS（`:target` / radio）或 ≤8KB inline JS。
6. 三層定價精確字串一字不差：`NT$ 0`、`NT$ 149`、`NT$ 249`，搭配方案名 `免費 / Plus / Family`，同屏（profile）出現，含「推薦 / 目前方案」標示。
7. 品牌「迴聲 / Resona」、6 核心功能名、7 歌單名、9 歌名、5 藝人名、4 分類 chip、底部 4 tab 文字（首頁 / 搜尋 / 音樂庫 / 我的）皆出現在**可見 body 文字**中（不可只放 `aria-label` / `data-*`）。
8. 狀態列 **9:41** 必含（可見文字）。
9. 所有可點元素具 `cursor:pointer` + `:hover` / `:active` 回饋；播放鍵 ▶/⏸ 兩態；tab / 卡片有 active 視覺。
10. 任何 `transition` / `animation` 只動 `transform` / `opacity`，並附 `@media (prefers-reduced-motion: reduce)`。
11. 單檔 HTML ≤ 200 KB；**無外部 CDN**（`<link>` `<script>` `<img>` 的 src/href 不可 `http://` / `https://`）。
12. 不使用任何 framework CSS（Tailwind 等），純 CSS 變數驅動；專輯封面全為純 CSS、不引用圖檔。

## Required Images

此風格為**純 CSS 風格，不使用任何點陣圖**。`assets-manifest.json` 為 `{ "style": "Y2K 手機", "images": [] }`。所有專輯封面、頭像、icon、星星裝飾一律以純 CSS（鉻金屬漸層框 + `conic-gradient` / `linear-gradient` / 幾何色塊 / `clip-path` 線框 / 文字 ✦✧）繪製，不引用任何 `assets/` 圖檔或外部圖片。

---

## Reference Snippet

```css
/* ── 手機殼（三層 flex column） ─────────────────────────────────── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  display: flex; flex-direction: column;
  border-radius: var(--device-radius);
  overflow: hidden;
  background: var(--chrome-soft);
  box-shadow: 0 24px 60px rgba(30,60,140,0.35), inset 0 0 0 2px rgba(255,255,255,0.6);
  font-family: var(--font-ui);
  color: var(--y2k-ink);
}
/* 透明殼底紋光暈 + 星星貼紙 */
.device::before {
  content: ""; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(220px 220px at 88% 8%, rgba(56,224,255,0.35), transparent 70%),
    radial-gradient(220px 220px at 6% 92%, rgba(255,122,217,0.30), transparent 70%);
  filter: blur(2px);
}
.star { position: absolute; color: #fff; pointer-events: none; z-index: 1;
  text-shadow: 0 0 8px rgba(56,224,255,0.9); animation: twinkle 2.6s ease-in-out infinite; }
@keyframes twinkle { 0%,100%{opacity:.5} 50%{opacity:1} }

/* 可捲動內容區：底部留出 mini-player + tab-bar，內容不被遮擋 */
.viewport {
  position: relative; z-index: 2;
  flex: 1; overflow-y: auto;
  padding: var(--sp-4) var(--content-pad)
           calc(var(--miniplayer-h) + var(--tabbar-h)) var(--content-pad);
  display: flex; flex-direction: column; gap: var(--sp-5);
}

/* ── 狀態列 9:41 ─────────────────────────────────────────────── */
.statusbar {
  position: sticky; top: 0; z-index: 30; flex: 0 0 var(--statusbar-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 var(--sp-5);
  font: 700 14px/1 var(--font-num); color: var(--y2k-ink);
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(214,230,251,0.7));
  border-bottom: 1px solid rgba(255,255,255,0.7);
  backdrop-filter: blur(6px);
}
.statusbar .battery {
  width: 24px; height: 12px; border-radius: 3px;
  border: 1.5px solid var(--y2k-ink);
  background: var(--jelly-green);
  box-shadow: 0 0 6px rgba(141,255,90,0.6);
}

/* ── 區段標題列（標題 + 查看全部） ───────────────────────────────── */
.sec-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: var(--sp-3); }
.sec-head h2 { font: 700 17px/1.3 var(--font-ui); margin: 0; }
.sec-head a { font: 600 13px/1.3 var(--font-ui); color: var(--y2k-blue); cursor: pointer; text-decoration: none; }
.sec-head a:hover { text-decoration: underline; }

/* ── 鉻金屬 navbar ───────────────────────────────────────────── */
.navbar {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--chrome); padding: var(--sp-3) var(--content-pad);
  color: #fff; text-shadow: 0 1px 2px rgba(20,40,90,0.8);
  font: 800 22px/1.1 var(--font-ui);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 10px rgba(40,80,160,0.25);
}

/* ── 半透塑膠卡片（hover 抬升） ─────────────────────────────────── */
.plastic-card {
  position: relative;
  background: var(--plastic-fill);
  border-radius: var(--r-bubble);
  border: 1px solid var(--plastic-stroke);
  box-shadow: var(--sh-card);
  backdrop-filter: blur(8px);
  padding: var(--sp-4);
  transition: transform var(--dur-base) var(--ease-jelly), box-shadow var(--dur-base) ease;
}
.plastic-card[role="button"], a.plastic-card { cursor: pointer; }
.plastic-card[role="button"]:hover, a.plastic-card:hover { transform: translateY(-3px); box-shadow: var(--sh-card-lift); }
.plastic-card[role="button"]:active, a.plastic-card:active { transform: translateY(-1px) scale(.99); }

/* ── 果凍泡泡按鈕（specular 高光 + 按壓下沉） ───────────────────── */
.jelly-btn {
  position: relative; border: none; cursor: pointer;
  border-radius: var(--r-pill); padding: 12px 22px;
  background: var(--jelly-blue); color: #fff;
  font: 700 15px/1 var(--font-ui); text-shadow: 0 1px 2px rgba(20,40,120,0.7);
  box-shadow: var(--sh-jelly); overflow: hidden;
  transition: transform var(--dur-fast) var(--ease-jelly), box-shadow var(--dur-fast) ease;
}
.jelly-btn::before {
  content: ""; position: absolute; inset: 3px 6px auto 6px; height: 42%;
  border-radius: var(--r-pill); background: var(--jelly-glass); pointer-events: none;
  transition: opacity var(--dur-fast) ease;
}
.jelly-btn:hover { box-shadow: var(--sh-jelly), 0 0 14px rgba(47,111,255,0.5); }
.jelly-btn:active { transform: scale(.96); box-shadow: var(--sh-jelly-press); }
.jelly-btn:active::before { opacity: .6; }
.jelly-btn:focus-visible { outline: 2px solid var(--y2k-neon-blue); outline-offset: 2px; }
.jelly-btn--green { background: var(--jelly-green); color: var(--y2k-ink); text-shadow: none; }

/* ── 分類 chip（果凍膠囊，active 螢光） ─────────────────────────── */
.chip {
  display: inline-flex; align-items: center; gap: var(--sp-1); cursor: pointer;
  padding: 7px 14px; border-radius: var(--r-pill);
  background: rgba(255,255,255,0.7); border: 1px solid var(--plastic-stroke-d);
  color: var(--y2k-ink-soft); font: 600 13px/1 var(--font-ui);
  transition: transform var(--dur-fast) var(--ease-jelly), box-shadow var(--dur-base) ease;
}
.chip:hover { transform: translateY(-1px); }
.chip:active { transform: scale(.95); }
.chip[aria-selected="true"] {
  background: var(--jelly-blue); color: #fff;
  border-color: var(--y2k-neon-blue); box-shadow: var(--glow-neon);
}

/* ── 純 CSS 鉻框專輯封面（禁圖檔） ───────────────────────────────── */
.cover {
  position: relative; aspect-ratio: 1; border-radius: var(--r-cover);
  padding: 5px; background: var(--chrome); box-shadow: var(--sh-card);
}
.cover > .art {
  width: 100%; height: 100%; border-radius: 20px;
  background:
    conic-gradient(from 200deg at 30% 30%, var(--y2k-neon-pink), var(--y2k-blue), var(--y2k-neon-blue), var(--y2k-neon-pink)),
    linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0));
  box-shadow: inset 0 2px 6px rgba(255,255,255,0.8), inset 0 -8px 16px rgba(20,40,120,0.45);
}
.cover .halo { position: absolute; inset: -8px; border-radius: 50%;
  background: radial-gradient(circle, rgba(56,224,255,0.35), transparent 70%);
  animation: spin 18s linear infinite; pointer-events: none; }
@keyframes spin { to { transform: rotate(360deg); } }
.cover::after { content: "✦"; position: absolute; top: 8px; right: 10px;
  color: #fff; font-size: 16px; text-shadow: 0 0 8px rgba(56,224,255,0.9); }

/* ── 曲目列 / 清單列 ─────────────────────────────────────────── */
.song-row {
  display: flex; align-items: center; gap: var(--sp-3); cursor: pointer;
  padding: 11px 12px; border-radius: var(--r-bubble);
  background: var(--plastic-fill-2); border: 1px solid rgba(255,255,255,0.8);
  transition: transform var(--dur-fast) var(--ease-jelly), background var(--dur-base) ease;
}
.song-row:hover { transform: translateX(2px); background: rgba(255,255,255,0.72); }
.song-row:active { transform: scale(.99); }
.song-row .idx {
  flex: 0 0 26px; height: 26px; border-radius: 50%; display: grid; place-items: center;
  background: var(--chrome-blue); color: #fff; font: 700 12px/1 var(--font-num);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
}
.song-row .meta { min-width: 0; }
.song-row .meta .title { font: 500 15px/1.3 var(--font-ui); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.song-row .meta .artist { font: 600 13px/1.2 var(--font-ui); color: var(--y2k-ink-soft); }
.song-row .time { margin-left: auto; font: 600 11px/1 var(--font-num); color: var(--y2k-ink-soft); }

/* ── 搜尋框（內凹果凍） ──────────────────────────────────────── */
.search-box {
  display: flex; align-items: center; gap: var(--sp-2);
  padding: 10px 14px; border-radius: var(--r-pill);
  background: rgba(255,255,255,0.7); box-shadow: var(--sh-inset);
  color: var(--y2k-ink-soft); font: 500 15px/1 var(--font-ui);
}

/* ── 播放器 now-playing ─────────────────────────────────────── */
.now-playing .play-main {
  width: 76px; height: 76px; border-radius: 50%; cursor: pointer; border: none;
  background: var(--jelly-blue); color: #fff;
  box-shadow: var(--sh-jelly), 0 0 20px rgba(47,111,255,0.5);
  transition: transform var(--dur-fast) var(--ease-jelly);
}
.now-playing .play-main:active { transform: scale(.94); }
.now-playing .progress {
  height: 8px; border-radius: var(--r-pill);
  background: var(--chrome); box-shadow: var(--sh-inset);
}
.now-playing .progress > i {
  display: block; height: 100%; width: 56%; border-radius: var(--r-pill);
  background: linear-gradient(90deg, var(--y2k-neon-blue), var(--y2k-blue));
  box-shadow: var(--glow-neon);
}
.now-playing .badge {
  display: inline-flex; padding: 5px 12px; border-radius: var(--r-pill);
  background: var(--jelly-green); color: var(--y2k-ink);
  font: 600 11px/1 var(--font-ui); box-shadow: var(--sh-jelly);
}
/* 歌詞同步：當前行高亮 */
.lyrics .line { color: var(--y2k-ink-soft); opacity: .55; font: 500 15px/1.6 var(--font-ui); transition: opacity var(--dur-base) ease; }
.lyrics .line.active { opacity: 1; font-weight: 800; color: var(--y2k-blue-d);
  background: linear-gradient(90deg, rgba(56,224,255,0.25), transparent); border-radius: var(--r-sm); padding: 0 6px; }

/* ── 訂閱卡（主打態） ────────────────────────────────────────── */
.plan { padding: var(--sp-4); border-radius: var(--r-bubble);
  background: var(--plastic-fill); border: 1px solid var(--plastic-stroke); box-shadow: var(--sh-card); }
.plan .price { font: 800 22px/1.1 var(--font-num); color: var(--y2k-ink); }
.plan--featured { background: var(--chrome-blue); color: #fff; border: 2px solid var(--y2k-neon-blue); box-shadow: var(--glow-neon), var(--sh-card); }
.plan--featured .price { color: #fff; text-shadow: 0 1px 2px rgba(20,40,120,.7); }
.plan .tag { display: inline-flex; padding: 3px 10px; border-radius: var(--r-pill);
  background: var(--jelly-pink); color: #fff; font: 700 11px/1 var(--font-ui); box-shadow: var(--glow-pink); }

/* ── 底座：mini-player 疊在 tab-bar 上方，永遠在底 ───────────────── */
.dock { position: sticky; bottom: 0; z-index: 30; flex: 0 0 auto; }

.mini-player {
  display: flex; align-items: center; gap: var(--sp-3); cursor: pointer;
  height: var(--miniplayer-h); padding: 0 var(--content-pad);
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(214,230,251,0.72));
  border-top: 1px solid rgba(255,255,255,0.8);
  backdrop-filter: blur(8px);
  box-shadow: 0 -2px 10px rgba(40,80,160,0.18);
  transition: background var(--dur-base) ease;
}
.mini-player:hover { background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(214,230,251,0.85)); }
.mini-player:active { transform: scale(.995); }
.mini-player .thumb { flex: 0 0 40px; height: 40px; border-radius: 10px; background: var(--chrome); padding: 3px; }
.mini-player .mp-title { font: 700 13px/1.2 var(--font-ui); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mini-player .mp-artist { font: 600 11px/1.1 var(--font-ui); color: var(--y2k-ink-soft); }
.mini-player .mp-play { flex: 0 0 34px; height: 34px; margin-left: auto; border: none; cursor: pointer;
  border-radius: 50%; background: var(--jelly-blue); color: #fff; box-shadow: var(--sh-jelly); }
.mini-player .mp-play:active { transform: scale(.92); box-shadow: var(--sh-jelly-press); }
/* player 畫面時隱藏 mini-player */
.screen-player ~ .dock .mini-player,
[data-active-screen="player"] .mini-player { display: none; }

/* ── 底部 tab-bar ────────────────────────────────────────────── */
.tabbar {
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  display: flex; justify-content: space-around; align-items: center;
  background: var(--chrome);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 -4px 14px rgba(40,80,160,0.25);
}
.tabbar .tab { display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer;
  font: 600 11px/1.3 var(--font-ui); color: var(--y2k-ink-soft); text-align: center;
  transition: transform var(--dur-fast) var(--ease-jelly), color var(--dur-base) ease; }
.tabbar .tab:hover { transform: translateY(-1px); }
.tabbar .tab:active { transform: scale(.94); }
.tabbar .tab[aria-current="page"] { color: var(--y2k-blue-d); filter: drop-shadow(var(--glow-neon)); }
.tabbar .tab[aria-current="page"] .ic { background: var(--jelly-blue); box-shadow: var(--glow-neon); }

/* ── Reduced motion ─────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```
