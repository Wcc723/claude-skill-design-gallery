---
name: app-glassmorphism
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Glassmorphism style. Triggers on Glassmorphism、玻璃擬態、frosted glass、磨砂玻璃、backdrop-filter blur、aurora 漸層、半透明卡片、frosted UI、glass card、毛玻璃.
user-invocable: true
---

# 玻璃擬態行動 — 迴聲 Resona

## Style Philosophy

玻璃擬態（Glassmorphism）把整個 App 想像成**疊在一塊會流動的彩色光暈上的多層磨砂玻璃**：最底層是一片緩緩流動的 aurora 漸層光霧（洋紅 / 靛藍 / 青綠 / 紫互相滲透），前景每一片元件都是一塊半透明霜玻璃——你能隱約看見它後面的光色透出來，邊緣有一圈被光打亮的白色高光，玻璃內部還有極淡的頂部內發光（inset highlight）。深度不靠投影堆，而靠「**透明度 × 模糊度 × 光暈疊加**」三件事疊出空氣感，讓畫面像一疊漂在霧氣裡的玻璃板。

用在 迴聲 Resona 音樂串流 App，這風格傳達「清涼、輕盈、沉浸、未來感」：專輯與歌單封面是一塊塊不同色相的漸層玻璃磚，迷你播放列是一條半透明的浮條，整個 App 像漂在極光裡的播放器。

本次精修的三條鐵律：

1. **多層磨砂、不要單層**：背景 aurora、卡片玻璃、bar 玻璃要用**三個不同的 blur / opacity 等級**（內容卡 18px、bar 30px、迷你播放列 24px），重疊時才會分出前後層次而不是糊成一片。
2. **aurora 要有流動感**：背景光暈用極慢（30s+）的 `transform: translate/scale` 緩動漂移，幅度小（≤ 6%），永遠附 `prefers-reduced-motion` 關閉。
3. **高對比可讀優先於透明度**：玻璃再美，文字一定要在 aurora 上達 WCAG AA。主文字純白、次文字 80% 白，弱文字只准用在 ≥17px 大字。透明度為美學服務，可讀性不可妥協。

三個視覺辨識特徵：
1. **彩色 aurora 漸層背景**：裝置殼底層鋪 4 個大尺寸 `radial-gradient` 光暈，極慢漂移，所有玻璃元件漂在它之上。
2. **磨砂半透明玻璃卡**：每張卡 `rgba(255,255,255,0.10~0.16)` + `backdrop-filter: blur() saturate()` + `1px` 白邊 + 頂部 `inset` 內光高光。
3. **白色高對比文字 + 漸層色塊封面**：正文純白/半透白、無任何點陣圖；所有封面一律純 CSS 漸層方塊（不同色相區分）；tab-bar 與迷你播放列是更厚的半透玻璃條。

---

## Design Tokens (CSS variables)

```css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 60px;             /* tab-bar 本體 */
  --miniplayer-h: 60px;         /* 迷你播放列高度 */
  --safe-bottom: 34px;          /* iPhone home indicator 安全區 */
  --content-pad: 20px;
  --device-radius: 46px;

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── Aurora 背景光暈色（鋪在裝置最底層） ── */
  --aurora-1: #ff4d9d;          /* 洋紅 */
  --aurora-2: #6a5cff;          /* 靛藍 */
  --aurora-3: #2fe2c8;          /* 青綠 */
  --aurora-4: #b14dff;          /* 紫 */
  --aurora-base: #0e0a2a;       /* 深底，避免漸層之間露白 */

  /* ── 玻璃材質：三層 blur 等級製造層次 ── */
  --glass-fill: rgba(255, 255, 255, 0.10);          /* 內容卡 */
  --glass-fill-strong: rgba(255, 255, 255, 0.16);   /* 強調卡 / now-playing / 推薦方案 */
  --glass-fill-bar: rgba(255, 255, 255, 0.07);      /* status-bar / tab-bar 底 */
  --glass-fill-mini: rgba(255, 255, 255, 0.13);     /* 迷你播放列（介於兩者） */
  --glass-stroke: rgba(255, 255, 255, 0.28);        /* 1px 白邊 */
  --glass-stroke-soft: rgba(255, 255, 255, 0.16);   /* 內分隔線 */
  --glass-inner: inset 0 1px 0 rgba(255, 255, 255, 0.35);  /* 頂部內光高光 */
  --glass-blur: blur(18px) saturate(140%);          /* 內容卡 */
  --glass-blur-mini: blur(24px) saturate(150%);     /* 迷你播放列 */
  --glass-blur-bar: blur(30px) saturate(160%);      /* status-bar / tab-bar 最厚 */

  /* ── 文字（白色高對比，WCAG AA on aurora） ── */
  --text-1: rgba(255, 255, 255, 0.98);   /* 主文字 */
  --text-2: rgba(255, 255, 255, 0.80);   /* 次文字（≥AA on aurora） */
  --text-3: rgba(255, 255, 255, 0.62);   /* 弱文字：僅用於 ≥17px 大字或非關鍵裝飾 */
  --text-on-chip: rgba(255, 255, 255, 0.95);

  /* ── 互動 / 強調 ── */
  --accent: #ff4d9d;            /* 播放鍵 / active tab / 進度 fill / 推薦方案邊 */
  --accent-2: #6a5cff;          /* 次強調（隨機/循環 active、徽章） */
  --accent-soft: rgba(255, 77, 157, 0.22);
  --chip-fill: rgba(255, 255, 255, 0.12);
  --chip-active: rgba(255, 255, 255, 0.26);
  --hover-veil: rgba(255, 255, 255, 0.08);   /* hover 疊加 */
  --press-veil: rgba(0, 0, 0, 0.10);         /* active 按下疊加 */

  /* ── 圓角 ── */
  --radius-card: 24px;
  --radius-card-sm: 16px;
  --radius-cover: 18px;
  --radius-cover-sm: 12px;
  --radius-chip: 999px;
  --radius-bar: 26px;

  /* ── 陰影（玻璃靠光暈，不靠重陰影；僅極淡懸浮影） ── */
  --shadow-float: 0 8px 32px rgba(10, 6, 40, 0.35);
  --shadow-float-sm: 0 4px 16px rgba(10, 6, 40, 0.28);
  --shadow-bar: 0 -6px 24px rgba(10, 6, 40, 0.30);

  /* ── 字體 ── */
  --font: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, 'Helvetica Neue', sans-serif;

  /* ── 動效 ── */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 120ms;
  --dur: 200ms;
}
```

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 11px / 1.3 / 500 / +0.2px | `--text-3` | tab 標籤、播放次數、徽章副字 |
| label | 13px / 1.4 / 500 / 0 | `--text-2` | chip 文字、卡片副標、曲目時長、藝人名 |
| body | 15px / 1.5 / 400 / 0 | `--text-2` | 段落、方案權益、說明 |
| row-title | 17px / 1.35 / 600 / 0 | `--text-1` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 22px / 1.25 / 700 / -0.2px | `--text-1` | 各屏區塊標題（如「每日迴聲」） |
| display | 28px / 1.15 / 800 / -0.4px | `--text-1` | home 品牌大標、player 曲名 |

- 全部用 `--font`。
- 數字（時間 9:41、價格、時長、進度）一律 `font-variant-numeric: tabular-nums` 對齊。
- 11px 弱文字只准搭 `--text-2` 以上以確保 AA；`--text-3` 只准用在 ≥17px 大字或純裝飾元件。
- 標題與正文間固定 `--space-3` 縱距；區段之間固定 `--space-6`。

---

## Component & Layout

整體結構：最外層 `.device`（390×844 玻璃手機殼，`overflow:hidden`、`border-radius: --device-radius`）→ 底層 `.aurora`（絕對定位鋪滿、放 aurora 流動光暈，`z-index:0`）→ `.statusbar`（固定頂、`z-index:5`）→ `.viewport`（中間可捲動畫面容器，`z-index:1`，依序堆 home/search/detail/player/library/profile 六個 `data-screen`，每次只顯示一個）→ `.miniplayer`（貼在 tab-bar 上方的常駐迷你播放列、`z-index:4`）→ `.tabbar`（固定底、`z-index:5`）。

8 個 `<section data-screen>` 順序固定且各恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。

### 跨畫面導覽模型（無跑版的骨架）

- 用一個簡單的 class 切換：`.screen` 預設 `display:none`，`.screen.is-active` 顯示。JS 點 tab / 卡片 / 迷你播放列 / 返回鍵時切換 active screen 並同步 tab-bar active 態。**JS 失效時**請讓 home 為預設 `is-active`，仍可讀完整內容。
- 導覽行為要全部接好：tab → 切 home/search/library/profile；home 歌單卡 / detail 任一曲目列 → 開 detail；迷你播放列 / detail 播放鍵 / 任一曲目播放鍵 → 開 player；detail / player 左上返回鍵 → 回上一畫面。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、tab-bar（含其上方 miniplayer）永遠在底、中間 `.viewport` 為當前畫面的唯一可捲動區。`.viewport` 高度 = `calc(--screen-h - --statusbar-h - --tabbar-h - --safe-bottom)`，每個 `.screen` 內部各自 `overflow-y:auto`，底部 padding 預留迷你播放列高度，內容絕不被遮擋、不溢出、不被裁切。

### status-bar（`data-screen="status-bar"`）

- 高 `--statusbar-h`，最厚玻璃條（`--glass-blur-bar` + `--glass-fill-bar`）。
- 左側時間 **9:41**（tabular-nums），右側並排訊號格 + Wi-Fi + 電量符號（純 CSS / unicode 繪製，不用圖檔）。
- 固定於裝置頂、不隨內容捲動、永遠在最上層。

### home（`data-screen="home"`）

至少三區段，每區段有 section 標題列（左標題 + 右「查看全部」連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display）+ slogan；右側頭像漸層圓。
2. **每日迴聲（每日推薦 banner）**：一張橫幅玻璃強調卡（`--glass-fill-strong`），左漸層封面 + 「每日迴聲」標題 + 個人化文案 + 大播放鍵（▶）。露出「**無損音質串流**」徽章。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄玻璃網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一塊不同色相 `.cover`（純 CSS 漸層方塊）+ 玻璃標題列 + 曲數副字。
4. **熱門排行（或最近播放）**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 排名數字 + 小漸層封面 + 歌名 + 藝人 + 時長 + 播放鍵。
5. 4 分類 chip 橫排（華語 / 獨立 / 電子 / 放鬆）置於問候列下方，膠囊玻璃 chip，首個 active。

### search（`data-screen="search"`）

- 頂部玻璃搜尋框（半透 input 外觀 + 放大鏡 + placeholder「搜尋歌曲、藝人、歌單」）。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆）。
- **熱門歌曲**：section 標題，**編號清單**（含時長）——海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = 序號 + 小漸層封面 + 歌名 + 藝人 + 時長 + 播放鍵（點擊 → player）。
- **熱門藝人**：section 標題 + 橫向玻璃膠囊（漸層圓頭像 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（`data-screen="detail"`）

- 左上玻璃圓形**返回鍵**（‹，cursor:pointer + hover/active）。
- **大封面**：頂部大張漸層封面（純 CSS 大色塊，色相呼應島嶼晨光）。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**。
- 動作列：**播放全部**（accent 大鍵 ▶）+ **隨機播放**（玻璃次鍵）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列玻璃 `.song-row`：曲序 + 歌名 + 藝人（林知夏）+ 時長 + 行尾播放鍵 / 選單（⋯）。點任一曲 → player。

### player（`data-screen="player"`）

沉浸玻璃面板，**本畫面不顯示迷你播放列**（迷你播放列只在 home/search/library/profile 出現）：

- 左上玻璃圓形**返回鍵**（⌄ 收合，回上一畫面）。
- **大封面**：置中大尺寸漸層方塊（純 CSS，conic/radial，色相呼應島嶼晨光）。
- 正在播放：**林知夏 —〈晚風練習曲〉**，副字專輯「島嶼晨光」。
- **歌詞同步**：一行逐字高亮示意（高亮字 `--text-1`，其餘 `--text-3`）。
- 進度條 `.progress`（玻璃軌 + `--accent` fill），左 **01:12** / 右 **03:24**（tabular-nums）。
- 控制列：隨機（⤮）/ 上一首（⏮）/ **播放暫停大圓鍵（▶ / ⏸ 兩態）** / 下一首（⏭）/ 循環（⟳）。隨機與循環 active 時上 `--accent-2`。
- 底部：**Hi-Res 無損音質**徽章 + 音量滑桿（玻璃軌）。

### library（`data-screen="library"`）

- 「**我的音樂庫**」標題（section）。
- 分頁列（玻璃 segmented）：**歌單 / 專輯 / 已下載**，首個 active。
- **收藏歌單清單**：每列 = 封面縮圖（小漸層方塊）+ 標題（複用歌單名）+ 曲數副字 + 行尾箭頭，點擊 → detail。
- **離線下載**功能列（玻璃 list-item + 已下載狀態徽章）。
- **共享音樂庫**功能列（玻璃 list-item + 切換開關 toggle）。

### profile（`data-screen="profile"`）

- **使用者卡**：頭像漸層圓 + 暱稱 + 會員狀態行（玻璃強調卡）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（玻璃 toggle 開關，預設開）。
- **3 訂閱方案卡**（玻璃卡堆疊或並排）：
  - **免費** — `NT$ 0 ／月` — 標「目前方案」。
  - **Plus** — `NT$ 149 ／月` — 標「推薦」，強調卡（`--glass-fill-strong` + `--accent` 邊 + 角標）。
  - **Family** — `NT$ 249 ／月`。
  - 每卡含 2–3 條權益小字。價格 tabular-nums、`NT$` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

- 一條貼在 tab-bar **正上方**的半透明玻璃浮條（`--glass-fill-mini` + `--glass-blur-mini`），高 `--miniplayer-h`。
- 內容：左小漸層封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**播放/暫停鍵（▶ / ⏸）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（`.is-player .miniplayer { display:none }`）。
- 整條 cursor:pointer，點擊（播放鍵以外區域）展開到 player；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細進度線（玻璃軌 + accent，與 player 同步示意）。

### tab-bar（`data-screen="tab-bar"`）

- 固定底部最厚玻璃條（`--glass-blur-bar` + `--glass-fill-bar` + `--shadow-bar`），4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS icon + 標籤。
- active tab 用 `--accent` 上色 + 淡 `--accent-soft` 玻璃高亮膠囊。每 tab cursor:pointer + hover/active 回饋。
- 預留 `--safe-bottom` 安全區。tab-bar 與其上的 miniplayer 一起構成「永遠在底」的固定區。

### 封面繪製規範（重要）

**所有專輯 / 歌單 / 頭像 / 排名封面一律純 CSS**——用 `linear-gradient` / `radial-gradient` / `conic-gradient` 配不同色相區分，可疊幾何形狀或細線框佔位。**不得引用任何 `assets/*.webp` 圖檔，不得出現指向圖檔的 `<img>`。**

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 玻璃卡用 `rgba` 半透白 + `backdrop-filter: blur()` + 1px 白邊 + inset 內光 | 用不透明實色卡（失去玻璃感） |
| 內容卡 / bar / 迷你播放列用三個不同 blur 等級，重疊才分層 | 所有玻璃同一 blur/opacity（畫面糊成一片） |
| 背景鋪多個 `radial-gradient` aurora，極慢小幅漂移流動 | 純色背景或大幅快速動畫（玻璃看不出透色、暈眩） |
| 封面用純 CSS 漸層色塊，不同色相區分 | 引用點陣圖 / `<img src="assets/...">` |
| 文字用白與半透白，確保對 aurora 對比 ≥ AA | 用深灰或低對比文字（在亮光暈上讀不到） |
| 所有可點元素 cursor:pointer + :hover veil + :active 縮放回饋 | 元件無 hover/active 態（不像真實產品） |
| 播放鍵 ▶/⏸ 兩態、tab/chip/分頁有 active 視覺 | 播放鍵單態、active 態無區別 |
| `backdrop-filter` 一律附 `-webkit-` 前綴 | 漏前綴導致 Safari 不模糊 |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px 破壞節奏 |
| 進度/曲長/價格用 tabular-nums | 比例字寬數字導致跳動 |

---

## Motion Specification

- **aurora 漂移**：背景光暈用 `@keyframes auroraFloat` 做 30–40s 無限緩動，只動 `transform: translate3d() scale()`，幅度 ≤ 6%，`ease-in-out`，永久循環。製造「光霧緩緩流動」感而非閃爍。
- **microinteractions**：
  - 可點元素 `transition: transform var(--dur-fast), background var(--dur);`，`:hover` 疊 `--hover-veil`，`:active { transform: scale(0.97); }`。
  - 卡片 `:hover` 微浮（`transform: translateY(-2px)`）+ 強化邊光。
  - 播放鍵點擊在 ▶ / ⏸ 兩態間切換（JS 改 textContent + class）。
  - chip / tab / 分頁 active 切換用 background + color 的 200ms 過渡。
- **進度條**：純 CSS 寬度示意即可，可選 `transition: width` 動進度。
- 只動 `transform` / `opacity`（aurora、按壓、卡片浮起）；進度條動 `width` 屬靜態示意可接受但不放在捲動熱路徑。
- 不使用任何外部動畫庫。

## Accessibility (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

- aurora 漂移、卡片浮起、按壓縮放在 reduced motion 下全部停用；aurora 改為靜態漸層仍呈現完整玻璃層次。
- 內容（所有歌名/藝人/價格/功能名）在 JS 失效或 reduced motion 下仍完整可讀。
- 玻璃文字維持 WCAG AA：主文字純白、次文字 80% 白；弱文字（62%）只用在 ≥17px。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="<id>">`**，固定 id 與順序：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，各恰一次。常見漏洞：只寫 `id=` 漏寫 `data-screen=`，務必兩者都加。
- **`<body data-viewport="mobile">`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態明確。
- **迷你播放列**常駐於 home/search/library/profile、player 畫面隱藏；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **三層訂閱方案精確字串**同屏出現於 profile：`免費` / `NT$ 0 ／月`、`Plus` / `NT$ 149 ／月`、`Family` / `NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**：tab 切換 + 卡片→detail + 曲目/迷你播放列→player + detail/player 返回鍵，全部接好；JS 失效時 home 預設可見。
- **權威字串全在可見 body 文字**（不可只放 `aria-label` / `data-*`）：品牌「迴聲 / Resona」、6 核心功能（無損音質串流 / 離線下載 / 共享音樂庫 / 跨裝置接續播放 / 歌詞同步 / 個人化每日推薦）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、tab-bar（含 miniplayer）永遠在底、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（`<link>` / `<script>` / `<img>` 的 src/href 不可 `http://` 或 `https://`）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline `<script>` 精簡。

## Required Images

**此風格不使用任何點陣圖。** `assets-manifest.json` 為 `{ "style": "玻璃擬態行動 Glassmorphism", "images": [] }`。所有封面一律純 CSS（`linear-gradient` / `radial-gradient` / `conic-gradient` / 幾何色塊 / 線框佔位）繪製，**頁面不得引用任何圖檔**、不得出現指向 `assets/` 的 `<img>`。

---

## Reference Snippet

```css
/* ── 手機殼 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  background: var(--aurora-base);
  font-family: var(--font);
  color: var(--text-1);
  box-shadow: var(--shadow-float);
  display: flex;
  flex-direction: column;
}

/* ── aurora 流動光暈背景 ── */
.aurora {
  position: absolute; inset: -8%;
  z-index: 0;
  background:
    radial-gradient(60% 50% at 18% 12%, var(--aurora-1) 0%, transparent 60%),
    radial-gradient(55% 45% at 88% 22%, var(--aurora-2) 0%, transparent 58%),
    radial-gradient(70% 55% at 30% 85%, var(--aurora-3) 0%, transparent 62%),
    radial-gradient(60% 50% at 92% 92%, var(--aurora-4) 0%, transparent 60%);
  filter: saturate(125%);
  animation: auroraFloat 36s ease-in-out infinite;
}
@keyframes auroraFloat {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50%      { transform: translate3d(2%, -3%, 0) scale(1.06); }
}

/* ── 通用玻璃卡 ── */
.glass {
  background: var(--glass-fill);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-stroke);
  border-radius: var(--radius-card);
  box-shadow: var(--glass-inner), var(--shadow-float-sm);
  transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease);
}
.glass.is-tap { cursor: pointer; }
.glass.is-tap:hover  { transform: translateY(-2px); box-shadow: var(--glass-inner), var(--shadow-float); }
.glass.is-tap:active { transform: scale(0.98); }

/* ── status-bar（最厚玻璃，固定頂） ── */
.statusbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: var(--statusbar-h); padding: 0 22px;
  font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums;
  color: var(--text-1);
  -webkit-backdrop-filter: var(--glass-blur-bar);
  backdrop-filter: var(--glass-blur-bar);
  background: var(--glass-fill-bar);
}

/* ── 中間畫面容器：唯一三段式中段，每屏自己捲動 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad)
           calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: block; }
.screen.screen-player { padding-bottom: var(--space-4); }  /* player 無迷你播放列 */

/* ── 區段標題列 ── */
.section-head { display:flex; align-items:baseline; justify-content:space-between;
  margin: var(--space-6) 0 var(--space-3); }
.section-head h2 { font-size:22px; font-weight:700; letter-spacing:-0.2px; }
.section-head a { font-size:13px; color:var(--text-2); cursor:pointer; }
.section-head a:hover { color: var(--text-1); }

/* ── 純 CSS 漸層封面（靠不同色相區分） ── */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-cover);
  border: 1px solid var(--glass-stroke);
  background:
    linear-gradient(135deg, var(--aurora-2), var(--aurora-3)),
    radial-gradient(80% 80% at 30% 20%, rgba(255,255,255,0.35), transparent 60%);
  box-shadow: var(--glass-inner);
}

/* ── 歌曲列 ── */
.song-row {
  display: flex; align-items: center; gap: var(--space-3);
  padding: var(--space-3); border-radius: var(--radius-card-sm);
  background: var(--glass-fill);
  -webkit-backdrop-filter: var(--glass-blur); backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-stroke-soft);
  cursor: pointer; transition: background var(--dur) var(--ease);
}
.song-row:hover  { background: var(--glass-fill-strong); }
.song-row:active { background: var(--press-veil); }
.song-row .idx   { width: 20px; text-align:center; color: var(--text-3);
  font-variant-numeric: tabular-nums; }
.song-row .title { font-size: 17px; font-weight: 600; color: var(--text-1); }
.song-row .meta  { font-size: 13px; color: var(--text-2); }
.song-row .dur   { margin-left:auto; font-size:13px; color:var(--text-2);
  font-variant-numeric: tabular-nums; }

/* ── 分類 chip ── */
.chip {
  padding: var(--space-2) var(--space-4); border-radius: var(--radius-chip);
  background: var(--chip-fill); border: 1px solid var(--glass-stroke);
  color: var(--text-on-chip); font-size: 13px; font-weight: 500;
  cursor: pointer; transition: background var(--dur) var(--ease);
}
.chip:hover { background: var(--chip-active); }
.chip[aria-selected="true"] { background: var(--chip-active); color: var(--text-1); }

/* ── player：大封面 + 進度 + 控制 ── */
.now-playing .art {
  width: 100%; aspect-ratio: 1; border-radius: 22px;
  background: conic-gradient(from 200deg, var(--aurora-1), var(--aurora-4), var(--aurora-2), var(--aurora-1));
  border: 1px solid var(--glass-stroke); box-shadow: var(--glass-inner);
}
.lyric { text-align:center; font-size:17px; color:var(--text-3); }
.lyric .now { color: var(--text-1); font-weight:600; }
.progress { height: 6px; border-radius: 999px; background: rgba(255,255,255,0.18); overflow:hidden; }
.progress > i { display:block; height:100%; width:35%; background: var(--accent); border-radius:999px; }
.ctrl-row { display:flex; align-items:center; justify-content:space-between; }
.ctrl { cursor:pointer; color:var(--text-1); transition: transform var(--dur-fast); }
.ctrl:active { transform: scale(0.9); }
.ctrl.is-on { color: var(--accent-2); }
.play-btn {
  width: 64px; height: 64px; border-radius: 50%;
  background: var(--accent); color:#fff; border:none; cursor:pointer;
  box-shadow: 0 8px 24px var(--accent-soft);
  transition: transform var(--dur-fast) var(--ease);
}
.play-btn:active { transform: scale(0.92); }

/* ── 迷你播放列（常駐，貼 tab-bar 上方） ── */
.miniplayer {
  position: relative; z-index: 4; flex: 0 0 auto;
  display: flex; align-items: center; gap: var(--space-3);
  height: var(--miniplayer-h); margin: 0 var(--space-3) var(--space-1);
  padding: 0 var(--space-3); border-radius: var(--radius-card-sm);
  background: var(--glass-fill-mini);
  -webkit-backdrop-filter: var(--glass-blur-mini); backdrop-filter: var(--glass-blur-mini);
  border: 1px solid var(--glass-stroke); box-shadow: var(--glass-inner), var(--shadow-float-sm);
  cursor: pointer;
}
.miniplayer:active { transform: scale(0.99); }
.miniplayer .mp-cover { width:40px; height:40px; border-radius:10px; }
.miniplayer .mp-title { font-size:15px; font-weight:600; color:var(--text-1); }
.miniplayer .mp-artist{ font-size:12px; color:var(--text-2); }
.miniplayer .mp-play  { margin-left:auto; cursor:pointer; color:var(--text-1); }
.is-player .miniplayer { display:none; }   /* player 畫面隱藏迷你播放列 */

/* ── tab-bar（最厚玻璃，固定底） ── */
.tabbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  border-radius: var(--radius-bar) var(--radius-bar) 0 0;
  background: var(--glass-fill-bar);
  -webkit-backdrop-filter: var(--glass-blur-bar); backdrop-filter: var(--glass-blur-bar);
  border-top: 1px solid var(--glass-stroke); box-shadow: var(--shadow-bar);
}
.tab { font-size: 11px; color: var(--text-3); text-align:center; cursor:pointer;
  padding: var(--space-1) var(--space-3); border-radius: var(--radius-chip);
  transition: color var(--dur), background var(--dur); }
.tab:hover { color: var(--text-2); }
.tab[aria-current="page"] { color: var(--accent); background: var(--accent-soft); }

/* ── 訂閱方案：Plus 推薦卡 ── */
.plan { padding: var(--space-4); border-radius: 20px; background: var(--glass-fill);
  border: 1px solid var(--glass-stroke-soft); }
.plan.is-featured { background: var(--glass-fill-strong); border: 1px solid var(--accent); }
.plan .price { font-size: 22px; font-weight: 700; font-variant-numeric: tabular-nums; color: var(--text-1); }
.plan .badge { font-size:11px; color:var(--accent); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```
