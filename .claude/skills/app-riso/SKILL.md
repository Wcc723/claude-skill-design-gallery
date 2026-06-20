---
name: app-riso
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Risograph style. Triggers on Risograph、孔版印刷、孔版、絲網印刷、screen print、riso、riso print、半色調、halftone、網點、套印錯位、misregistration、疊印、overprint、油墨顆粒、ink grain、zine、獨立廠牌印刷、螢光粉、寶藍、紙色奶油。
user-invocable: true
---

# 孔版印刷 — 迴聲 Resona

## Style Philosophy

孔版印刷（Risograph）是一種介於影印與絲網印刷之間的孔版印刷工藝：每一個專色油墨各製一張版、分次滾印在暖色再生紙上。它的美學來自**製程的不完美**——油墨是半透明的，疊印時會 multiply 混出第三色；每一版滾印時對位不可能完全精準，所以邊緣總帶著 1–2px 的**套印錯位（misregistration）**重影；色塊不是平塗，而是由一顆顆網點（halftone）構成的**半色調**；整張紙還鋪著一層細微的**油墨顆粒與紙質紋理**。它看起來像獨立音樂廠牌親手印的 zine、像唱片行牆上貼的限量演出海報——粗糙、溫暖、有手感、絕不數位光滑。

用在 迴聲 Resona 音樂串流 App，這風格傳達「手作、獨立、實體唱片、印刷工坊」的氣質：每張專輯封面是一塊雙色半色調網點漸層、每個區塊標題是粉藍重影的粗體套印字、每個分類 chip 像蓋下去的橡皮圖章。整個 App 像是一本被掃描進手機的音樂 zine。

本風格嚴格只用 **2–3 個專色油墨 + 1 個紙色**，這是 Risograph 的根本限制，也是它辨識度的來源——**任何柔光漸層、玻璃模糊、霓虹發光、第四個顏色都會立刻破壞它**。

本次精修的三條鐵律：

1. **只有 3 專色 + 紙色，絕不多**：螢光粉 `#ff48a0`、寶藍 `#2b50d6`、墨黑 `#1d1a17`，印在奶油紙 `#f3ecda` 上。疊印區（粉×藍 `multiply`）自然混成紫，**那是「印」出來的第四色、不是另調一個色**。禁止任何此清單外的色碼出現在可見元件上。
2. **質感靠四件套，缺一不可**：(1) 網點半色調（radial-gradient 圓點 repeating）做封面與色塊填充；(2) 套印錯位（同一字/形複製粉、藍各位移 1–2px，外層 `mix-blend-mode: multiply`）；(3) 紙顆粒（一層極淡 repeating 細點 overlay 鋪滿全頁）；(4) 形狀偏扁平、邊緣 1px 粗描帶手感。沒有這四件，它就只是一個換色的普通 App。
3. **可讀性靠墨黑、不靠專色**：主文與所有小字一律**墨黑 `#1d1a17` 印在紙色 `#f3ecda` 上**（對比 ≈ 13:1，遠超 WCAG AA）。螢光粉與寶藍只准做**色塊、強調、圖章、icon 實底**，不做小字主文（紙上的螢光粉對比不足）。透明度與顆粒為美學服務，文字清晰度不可妥協。

三個視覺辨識特徵（signature）：

1. **雙色半色調網點封面**：所有專輯 / 歌單 / 頭像封面 = 純 CSS `repeating radial-gradient` 圓點，疊兩層（粉一層、藍一層），`background-size` 控制網點疏密，靠紙色露白做半色調漸變，不同色相區分不同封面。
2. **套印錯位粗標題**：每個區塊大標用粗無襯線體，**複製一層螢光粉、一層寶藍各位移 1.5px，外層 `mix-blend-mode: multiply`**，疊出帶重影、印歪了一格的手感粗標。
3. **橡皮圖章 chip / 徽章 / icon**：分類膠囊、徽章、播放鍵、tab icon = 螢光粉或寶藍**實底色塊 + 墨字 + 網點填充 + 1px 墨黑粗描**，像一個個蓋上去的印章。整頁覆一層極淡紙顆粒。

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
  --device-radius: 44px;

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 專色油墨：嚴格 3 色 + 紙色，禁止任何此清單外的顏色 ── */
  --ink-pink: #ff48a0;          /* riso 螢光粉（FLUORESCENT PINK 對應色） */
  --ink-blue: #2b50d6;          /* riso 寶藍（FEDERAL BLUE 對應色） */
  --ink-black: #1d1a17;         /* 墨黑（主文字色） */
  --paper: #f3ecda;             /* 紙色奶油（背景／露白做半色調） */
  --paper-deep: #ece2c9;        /* 紙色微深（卡面與背景區分，仍屬紙系） */
  /* 疊印混色（粉×藍 multiply 的結果，僅供需要實色紫時取用，勿濫用） */
  --ink-overprint: #6a2fa0;     /* 印出來的「第四色」紫，等同粉藍疊印 */

  /* ── 半透專色（做網點與淡色塊用；專色本身半透才有油墨感） ── */
  --pink-ink: rgba(255, 72, 160, 0.92);
  --blue-ink: rgba(43, 80, 214, 0.90);
  --pink-soft: rgba(255, 72, 160, 0.16);   /* 淡粉底（仍須墨字在上維持對比） */
  --blue-soft: rgba(43, 80, 214, 0.14);    /* 淡藍底 */

  /* ── 文字（一律墨黑 on 紙色 ≈ 13:1，遠超 AA；反白只用在實底色塊上的大字） ── */
  --text-1: #1d1a17;            /* 主文字：墨黑 */
  --text-2: rgba(29, 26, 23, 0.74);  /* 次文字：墨黑降透明（on 紙仍 ≥ AA） */
  --text-3: rgba(29, 26, 23, 0.56);  /* 弱文字：僅 ≥ 15px 或裝飾用 */
  --text-on-pink: #f7f1e6;      /* 反白字 on 螢光粉實底（≥ AA，僅 ≥ 13px 粗體） */
  --text-on-blue: #f7f1e6;      /* 反白字 on 寶藍實底（≥ AA） */

  /* ── 材質配方：網點 / 顆粒 / 套印錯位（核心，務必照用） ── */
  --halftone-size: 6px;         /* 網點基準間距，越小越密 */
  --halftone-dot: 2.2px;        /* 單顆網點半徑控制（配 radial-gradient 停止點） */
  /* 粉色網點層（用於封面與色塊；靠 background-size 改密度做漸變） */
  --halftone-pink:
    radial-gradient(var(--halftone-dot) at 50% 50%, var(--ink-pink) 0 60%, transparent 62%);
  /* 藍色網點層 */
  --halftone-blue:
    radial-gradient(var(--halftone-dot) at 50% 50%, var(--ink-blue) 0 60%, transparent 62%);
  /* 紙顆粒（極淡墨點 overlay，鋪滿全頁，低透明度，pointer-events:none） */
  --paper-grain:
    radial-gradient(0.6px at 50% 50%, rgba(29,26,23,0.10) 0 50%, transparent 52%);
  --grain-size: 3px;            /* 紙顆粒密度 */
  --misreg: 1.5px;              /* 套印錯位位移量（粉 +1.5 / 藍 −1.5） */

  /* ── 互動 / 強調 ── */
  --accent: var(--ink-pink);    /* 播放鍵 / active tab / 進度 fill */
  --accent-2: var(--ink-blue);  /* 次強調（隨機 / 循環 / 徽章邊） */
  --chip-fill: var(--paper-deep);
  --press-veil: rgba(29, 26, 23, 0.08);   /* active 按下疊加 */

  /* ── 邊框：1px 墨黑粗描，是手感來源（不是陰影） ── */
  --stroke: 1px solid var(--ink-black);
  --stroke-2: 2px solid var(--ink-black);

  /* ── 圓角：偏扁平、略帶手感，不要大圓角玻璃感 ── */
  --radius-card: 6px;
  --radius-card-sm: 4px;
  --radius-cover: 4px;
  --radius-chip: 2px;           /* 圖章感：幾乎方角 */
  --radius-stamp: 50%;          /* 圓形圖章（頭像 / 播放鍵） */

  /* ── 陰影：孔版幾乎不用柔影；只用「硬位移實影」模擬印刷層疊（墨黑、無模糊） ── */
  --shadow-hard: 3px 3px 0 var(--ink-black);
  --shadow-hard-sm: 2px 2px 0 var(--ink-black);
  --shadow-press: 1px 1px 0 var(--ink-black);

  /* ── 字體：粗無襯線 / 工業感，墨色 ── */
  --font: 'Arial Black', 'Helvetica Neue', 'PingFang TC', 'Noto Sans TC', system-ui, sans-serif;
  --font-body: 'PingFang TC', 'Noto Sans TC', system-ui, -apple-system, sans-serif;

  /* ── 動效（孔版幾乎全靜態，僅圖章按壓回饋） ── */
  --ease: steps(1, end);        /* 印刷感：偏好瞬間切換而非柔順緩動 */
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 90ms;
  --dur: 140ms;
}
```

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 11px / 1.3 / 600 / +0.3px | `--text-2` | tab 標籤、播放次數、徽章副字、時長 |
| label | 13px / 1.4 / 600 / +0.2px | `--text-2` | chip 文字、卡片副標、藝人名、列項副字 |
| body | 15px / 1.55 / 500 / 0 | `--text-1` | 段落、方案權益、說明文案 |
| row-title | 16px / 1.3 / 700 / 0 | `--text-1` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 22px / 1.1 / 900 / -0.3px | `--text-1` | 各屏區塊標題（**套印錯位重影**） |
| display | 30px / 1.0 / 900 / -0.6px | `--text-1` | home 品牌大標、player 曲名（**套印錯位重影**） |

- 標題（section / display）一律 `--font`（粗黑無襯線）並做**套印錯位**：複製粉、藍兩層各位移 `--misreg`，`text-transform: uppercase` 對英文、中文則靠字重撐出粗黑印刷感。
- 內文與小字用 `--font-body`，字重偏粗（500–700），呼應印刷的厚實墨色。
- 數字（時間 9:41、價格、時長、進度）一律 `font-variant-numeric: tabular-nums`。
- 11px 弱字一律 `--text-2` 以上（墨黑系，對紙色仍 ≥ AA）；`--text-3` 只准用在 ≥ 15px 或純裝飾。
- 標題與正文間固定 `--space-3` 縱距；區段之間固定 `--space-6`。

---

## Component & Layout

整體結構：最外層 `.device`（390×844 手機殼，紙色底 `--paper`、`overflow:hidden`、`border-radius: --device-radius`、四周 `--stroke-2` 墨黑粗描）→ 底層 `.grain`（絕對定位鋪滿、`--paper-grain` 紙顆粒 overlay、`pointer-events:none`、`z-index:9` 蓋在最上但不擋點）→ `.statusbar`（固定頂、`z-index:5`）→ `.viewport`（中間可捲動畫面容器，`z-index:1`，依序堆 home/search/detail/player/library/profile 六個 `data-screen`，每次只顯示一個）→ `.dock`（底部固定區：`.miniplayer` 迷你播放列 + `.tabbar`，`z-index:5`）。

8 個 `<section data-screen>` 順序固定且各恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。

### 跨畫面導覽模型（B2，無跑版的骨架）

- 用簡單 class 切換：`.screen` 預設 `display:none`，**只有** `.screen.is-active { display:flex; flex-direction:column }` 顯示。**嚴禁任何畫面專屬 class 無條件設 `display`**（會造成永久疊層 bug）；畫面專屬樣式只設 padding / 排版。預設 `home` 為 `is-active`，**JS 失效時 home 仍完整可讀**。
- 導覽元素一律加 `data-go="<target>"`，JS 用事件委派處理 click：tab → 切 `home` / `search` / `library` / `profile` 並同步 tab active 態；home / library / search 的歌單或專輯卡 `data-go="detail"`；detail 任一曲目列 / 迷你播放列 / 任一播放鍵 `data-go="player"`；detail / player 左上返回鍵 `data-go="back"`。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、`.dock`（miniplayer + tab-bar）永遠在底、中間 `.viewport` 為當前畫面唯一可捲動區。`.viewport` 高度 = `calc(--screen-h - --statusbar-h - 一層 dock 高)`，每個 `.screen` 內部 `overflow-y:auto`，底部 padding 預留迷你播放列高度，內容絕不被遮擋 / 溢出 / 裁切。

### 封面繪製規範（純 CSS，重要）

**所有專輯 / 歌單 / 頭像 / 排名 / 縮圖封面一律純 CSS，零點陣圖。** 用**雙色半色調網點**繪製：

```css
.cover {
  aspect-ratio: 1; border-radius: var(--radius-cover);
  border: var(--stroke); background-color: var(--paper);
  background-image: var(--halftone-pink), var(--halftone-blue);
  /* 兩層網點不同 size + 不同 position offset，做出套印與半色調漸變 */
  background-size: 7px 7px, 9px 9px;
  background-position: 0 0, 2px 3px;
}
```

- 不同封面靠**改 `background-size`（網點疏密 → 明暗）+ `background-position`（錯位量）+ 哪一色為主**來區分色相，例如某封面偏粉（粉網點密、藍網點疏）、某封面偏紫（兩色等密疊印）。
- 可在 cover 上疊一個 `mix-blend-mode: multiply` 的單色幾何形（圓 / 三角 / 斜帶）做封面圖案。**不得引用任何 `assets/*.webp`，不得出現指向圖檔的 `<img>`。**

### status-bar（`data-screen="status-bar"`）

- 高 `--statusbar-h`，紙色底、底緣 `--stroke` 墨線分隔。
- 左側時間 **9:41**（tabular-nums、墨黑粗體），右側並排訊號格 + Wi-Fi + 電量符號（純 CSS / unicode 墨黑繪製，不用圖檔）。
- 固定於裝置頂、不隨內容捲動、永遠在最上層（紙顆粒 `.grain` 仍覆蓋於其上）。

### home（`data-screen="home"`）

至少三區段，每區段有 section 標題列（左**套印錯位粗標** + 右「查看全部」墨字連結，cursor:pointer + hover）：

1. **頂部問候列**：左側品牌大標「**迴聲 Resona**」（display、套印錯位重影）+ slogan「讓每首歌，回到你身上」；右側頭像 = 圓形圖章（網點填充 + 墨描）。
2. **每日迴聲 banner**：一張橫幅卡（粉色實底色塊 + 網點 + 墨描），左半色調封面 + 「每日迴聲」標題 + 個人化每日推薦文案 + 大播放鍵（▶ 圓形圖章）。露出「**無損音質串流**」徽章（藍實底圖章）。
3. **為你精選歌單**：section 標題「為你精選歌單」+「查看全部」。**7 個歌單卡**兩欄網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 一塊半色調網點 `.cover`（各封面色相 / 網點密度不同）+ 紙色標題列（墨字）+ 曲數副字。
4. **熱門排行**：section 標題「熱門排行」+「查看全部」，編號清單（1–5），每列 = 大號排名數字（套印錯位）+ 小網點封面 + 歌名 + 藝人 + 時長 + 播放鍵圖章。
5. 4 分類 chip 橫排（華語 / 獨立 / 電子 / 放鬆）置於問候列下方，**橡皮圖章 chip**（粉或藍實底 + 反白墨字 + 網點 + 墨描），首個 active。

### search（`data-screen="search"`）

- 頂部搜尋框：紙色 input 外觀 + `--stroke` 墨描 + 放大鏡（墨黑）+ placeholder「搜尋歌曲、藝人、歌單」。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆，圖章 chip）。
- **熱門歌曲**：section 標題，**編號清單**（含時長）——歌名與藝人混排，露出多首歌名（藍色信號 / 霓虹巷弄 / 晚風練習曲 / 靜電 / 無人車站…）與多個藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）。每列 = 序號 + 小網點封面 + 歌名 + 藝人 + 時長 + 播放鍵（`data-go="player"`）。
- **熱門藝人**：section 標題 + 橫向圖章膠囊（圓形網點頭像 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（`data-screen="detail"`）

- 左上**返回鍵**圓形圖章（‹，`data-go="back"`，cursor:pointer + hover/active）。
- **大封面**：頂部大張半色調網點封面（純 CSS，色相呼應島嶼晨光，可疊 multiply 幾何形）。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**。
- 動作列：**播放全部**（粉實底大圖章 ▶）+ **隨機播放**（紙色描邊次鍵）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列 `.song-row`（紙色 + 底緣墨線分隔）：曲序 + 歌名 + 藝人（林知夏）+ 時長 + 行尾播放鍵圖章 / 選單（⋯）。點任一曲 `data-go="player"`。

### player（`data-screen="player"`）

沉浸全屏 now-playing，**進入時隱藏底部 dock（tab-bar + miniplayer）**，整個 player `height:100%; display:flex; flex-direction:column`：

- 左上**返回鍵**圓形圖章（⌄ 收合，`data-go="back"`）。
- **大封面**：`flex:1; min-height:0`（可壓縮）的半色調網點大方塊（純 CSS，色相呼應島嶼晨光，疊 multiply 幾何）。封面可壓縮以保證下方控制永遠在 844 內。
- 正在播放：**林知夏 —〈晚風練習曲〉**，副字專輯「島嶼晨光」/ 02:47。
- **歌詞同步**：一行逐字高亮示意（高亮字墨黑粗體，其餘 `--text-3`）。
- 進度條 `.progress`（紙色軌 + 墨描 + `--accent` 粉色 fill），左 **01:12** / 右 **02:47**（tabular-nums）。
- 控制列（flex 固定不靠捲動）：隨機（⤮）/ 上一首（⏮）/ **播放暫停大圓圖章（▶ / ⏸ 兩態）** / 下一首（⏭）/ 循環（⟳）。隨機與循環 active 時上 `--accent-2` 藍。
- 底部：**Hi-Res 無損音質**徽章（藍圖章）+ 音量滑桿（紙色軌 + 墨描）。**進度 / 控制 / 徽章永遠固定在可視區內、不依賴捲動、不超出 844、不被遮擋。**

### library（`data-screen="library"`）

- 「**我的音樂庫**」標題（section、套印錯位）。
- 分頁列（圖章 segmented）：**歌單 / 專輯 / 已下載**，首個 active。
- **收藏歌單清單**：每列 = 小網點封面 + 標題（複用歌單名）+ 曲數副字 + 行尾箭頭，點擊 `data-go="detail"`。
- **離線下載**功能列（紙色 list-item + 墨描 + 已下載狀態徽章圖章）。
- **共享音樂庫**功能列（紙色 list-item + 切換開關 toggle，圖章樣式）。

### profile（`data-screen="profile"`）

- **使用者卡**：圓形網點頭像 + 暱稱 + 會員狀態行（紙色卡 + 墨描 + 硬位移影）。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（圖章 toggle 開關，預設開）。
- **3 訂閱方案卡**：
  - **免費** — `NT$ 0 ／月` — 標「目前方案」。
  - **Plus** — `NT$ 149 ／月` — 標「推薦」，強調卡（粉色描邊 + 角標圖章 + 硬位移影加厚）。
  - **Family** — `NT$ 249 ／月`。
  - 每卡含 2–3 條權益小字。價格 tabular-nums、`NT$` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（迷你播放列，常駐）

- 一條貼在 tab-bar **正上方**的紙色浮條（`--paper-deep` + `--stroke` 墨描 + `--shadow-hard-sm` 硬位移影），高 `--miniplayer-h`。
- 內容：左小網點封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**播放/暫停鍵圖章（▶ / ⏸）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（`.is-player .dock .miniplayer { display:none }`，且 player 時整個 dock 隱藏）。
- 整條 cursor:pointer，點擊（播放鍵以外區域）展開到 player（`data-go="player"`）；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條極細進度線（紙色軌 + 粉 fill，與 player 同步示意）。

### tab-bar（`data-screen="tab-bar"`）

- 固定底部紙色條（`--paper` + 頂緣 `--stroke-2` 粗墨線），4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = unicode/CSS 墨黑 icon + 標籤。
- active tab 用粉色圖章高亮（粉實底 + 反白字 + 墨描的小膠囊背景）。每 tab cursor:pointer + hover/active 回饋。
- 預留 `--safe-bottom` 安全區。tab-bar 與其上 miniplayer 一起構成「永遠在底」的固定 `.dock`；**player 屏整個 dock 隱藏**。

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 嚴格只用螢光粉 / 寶藍 / 墨黑 + 奶油紙 4 色 | 出現第 5 個顏色、用柔和過渡色或灰階 |
| 色塊用網點半色調（`repeating radial-gradient`）填充 | 用平塗實色或數位漸層柔光 |
| 標題做粉藍雙層套印錯位（`mix-blend-mode: multiply`） | 標題用單層平直字（失去印刷重影） |
| 疊印區讓粉×藍 multiply 自然混出紫 | 另外調一個「紫色」當第四專色 |
| 全頁鋪一層極淡紙顆粒 overlay（`pointer-events:none`） | 用 backdrop-filter blur / 玻璃模糊 / 發光 |
| 邊緣用 1px 墨黑粗描帶手感 | 用無邊柔影卡片（沒有印刷實體感） |
| 主文與小字一律墨黑 on 紙（≈ 13:1） | 用螢光粉 / 寶藍做小字主文（紙上對比不足） |
| 陰影只用墨黑硬位移實影（無模糊） | 用大範圍模糊柔影（不是孔版語彙） |
| chip / icon / 播放鍵做成蓋印章（實底 + 墨字 + 網點 + 墨描） | chip 做成圓潤漸層膠囊 |
| 圓角偏小（2–6px）、形狀扁平 | 大圓角玻璃感 / 重 3D 立體 |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px 破壞節奏 |
| 進度 / 曲長 / 價格用 tabular-nums | 比例字寬數字導致跳動 |

---

## Motion Specification

孔版印刷是**靜態印刷品**，本風格**預設幾乎全靜態**——層次靠網點、套印、顆粒、硬位移影，不靠動畫。僅允許以下極克制的互動回饋：

- **圖章按壓**：可點元素（chip / 播放鍵 / tab / 卡片 / 列項）`:active` 時做「壓進去」效果——`transform: translate(2px, 2px)` 同時 `box-shadow` 由 `--shadow-hard` 變 `--shadow-press`（影子變短），模擬印章蓋下、紙被壓低。`transition` 用 `--dur-fast`。
- **hover**：可點元素 `:hover` 疊極淡 `--press-veil` 或微抬（`transform: translate(-1px,-1px)`、影子變長），回饋「可蓋章」。
- **active 切換**：chip / tab / 分頁 active 用 background + color 瞬間切換（`--ease` = `steps`），呼應印刷的離散感而非柔順緩動。
- **播放鍵點擊**：在 ▶ / ⏸ 兩態間切換（JS 改 textContent + class）。
- **進度條**：純 CSS 寬度示意即可。
- 只動 `transform` / `opacity` / `box-shadow`；不做位移漂浮 loop、不做柔光呼吸、不做任何抖動。
- 不使用任何外部動畫庫。
- **可選的「印刷錯位微抖」**：若要更有手感，可讓套印錯位的粉藍層在 hover 時各多位移 0.5px（純 transform）。此抖動**必須在 reduced motion 下完全停用**。

## Accessibility (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  /* 套印錯位是「靜態視覺」可保留；但任何 hover 微抖 / 位移回饋停用 */
  .is-tap:hover, .is-tap:active { transform: none !important; }
}
```

- 圖章按壓、hover 微抖、任何位移回饋在 reduced motion 下全部停用；**套印錯位重影、網點、顆粒屬靜態印刷視覺，保留不變**，畫面仍呈現完整孔版質感。
- 內容（所有歌名 / 藝人 / 價格 / 功能名）在 JS 失效或 reduced motion 下仍完整可讀。
- 文字維持 WCAG AA 以上：主文與小字一律墨黑 on 紙（≈ 13:1）；反白字只用在螢光粉 / 寶藍實底上的 ≥ 13px 粗體（`--text-on-pink` / `--text-on-blue` ≥ AA）。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="<id>">`**，固定 id 與順序：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，各恰一次。常見漏洞：只寫 `id=` 漏寫 `data-screen=`，務必兩者都加。
- **`<body data-viewport="mobile">`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態明確（粉色圖章高亮）。
- **迷你播放列**常駐於 home/search/library/profile、**player 畫面整個 dock 隱藏**；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **三層訂閱方案精確字串**同屏出現於 profile：`免費` / `NT$ 0 ／月`、`Plus` / `NT$ 149 ／月`、`Family` / `NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **player 必須在 390×844 內完整顯示**：進入時隱藏底部 dock；`height:100%; display:flex; flex-direction:column`；封面 `flex:1; min-height:0`；進度 / 控制 / 徽章永遠固定可見、不靠捲動、不被遮擋、不超出 844。
- **可互動多畫面導覽**：tab 切換 + 卡片 `data-go="detail"` + 曲目/迷你播放列 `data-go="player"` + detail/player 返回鍵 `data-go="back"`，全部接好；**JS 失效時 home 預設可見**。畫面切換 CSS 遵守「只有 `.is-active` 設 display」鐵律，禁止畫面專屬 class 無條件設 display。
- **權威字串全在可見 body 文字**（不可只放 `aria-label` / `data-*`）：品牌「迴聲 / Resona」、6 核心功能（個人化每日推薦 / 無損音質串流 / 離線下載 / 歌詞同步 / 跨裝置接續播放 / 共享音樂庫）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、dock（miniplayer + tab-bar）永遠在底（player 時隱藏）、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（`<link>` / `<script>` / `<img>` 的 src/href 不可 `http://` 或 `https://`）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline `<script>` ≤ 8 KB。
- **若使用任何裝飾動畫**（圖章按壓 / hover 微抖），必附 `@media (prefers-reduced-motion: reduce)`，且只動 `transform` / `opacity` / `box-shadow`。

## Required Images

**此風格不使用任何點陣圖。** `assets-manifest.json` 為 `{ "style": "孔版印刷 Risograph", "images": [] }`。所有封面 / 頭像 / 圖案一律純 CSS 繪製——**半色調網點靠 `repeating radial-gradient` + `background-size`**、套印靠雙層位移 + `mix-blend-mode: multiply`、顆粒靠細點 overlay、圖案靠幾何形 + multiply 疊色。**頁面不得引用任何圖檔**、不得出現指向 `assets/` 的 `<img>`。

---

## Reference Snippet

```css
/* ── 手機殼：紙色底 + 墨黑粗描 ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--device-radius);
  background: var(--paper);
  border: var(--stroke-2);
  font-family: var(--font-body);
  color: var(--text-1);
  display: flex;
  flex-direction: column;
}

/* ── 紙顆粒 overlay：鋪滿全頁、極淡、不擋點、永遠在最上 ── */
.grain {
  position: absolute; inset: 0; z-index: 9; pointer-events: none;
  background-image: var(--paper-grain);
  background-size: var(--grain-size) var(--grain-size);
  mix-blend-mode: multiply;
  opacity: 0.7;
}

/* ── 套印錯位粗標題：粉 / 藍兩層位移 + multiply 疊印 ── */
.misreg {
  position: relative; display: inline-block;
  font-family: var(--font); font-weight: 900; letter-spacing: -0.3px;
  color: var(--ink-black);                 /* 主層墨黑（清晰、AA） */
  isolation: isolate;
}
.misreg::before, .misreg::after {
  content: attr(data-text);
  position: absolute; inset: 0; z-index: -1;
  mix-blend-mode: multiply;                /* 疊印混色 */
  pointer-events: none;
}
.misreg::before { color: var(--ink-pink); transform: translate(calc(-1 * var(--misreg)), var(--misreg)); }
.misreg::after  { color: var(--ink-blue); transform: translate(var(--misreg), calc(-1 * var(--misreg))); }
/* 用法：<span class="misreg" data-text="為你精選歌單">為你精選歌單</span> */

/* ── 半色調網點封面（雙色，靠 size/position 改色相與明暗） ── */
.cover {
  aspect-ratio: 1; border-radius: var(--radius-cover);
  border: var(--stroke); background-color: var(--paper);
  background-image: var(--halftone-pink), var(--halftone-blue);
  background-size: 7px 7px, 9px 9px;
  background-position: 0 0, 2px 3px;
}
.cover.is-blue   { background-size: 10px 10px, 6px 6px; }   /* 偏藍 */
.cover.is-violet { background-size: 7px 7px, 7px 7px; background-position: 0 0, 0 0; } /* 等密疊印 → 紫 */

/* ── 圖章 chip：實底 + 反白字 + 網點 + 墨描 ── */
.chip {
  padding: var(--space-2) var(--space-4); border-radius: var(--radius-chip);
  border: var(--stroke); background: var(--paper-deep);
  color: var(--text-1); font-size: 13px; font-weight: 700; letter-spacing: .2px;
  cursor: pointer; box-shadow: var(--shadow-hard-sm);
  transition: transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft);
}
.chip:hover  { transform: translate(-1px, -1px); box-shadow: var(--shadow-hard); }
.chip:active { transform: translate(2px, 2px);   box-shadow: var(--shadow-press); }
.chip[aria-selected="true"] {
  background: var(--ink-pink); color: var(--text-on-pink);
  background-image: var(--halftone-pink); background-size: 5px 5px;
}

/* ── 通用可點圖章按壓 ── */
.is-tap { cursor: pointer; transition: transform var(--dur-fast) var(--ease-soft),
                                        box-shadow var(--dur-fast) var(--ease-soft); }
.is-tap:active { transform: translate(2px, 2px); box-shadow: var(--shadow-press); }

/* ── status-bar（紙色，底緣墨線，固定頂） ── */
.statusbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: var(--statusbar-h); padding: 0 22px;
  font-size: 15px; font-weight: 700; font-variant-numeric: tabular-nums;
  color: var(--ink-black); background: var(--paper);
  border-bottom: var(--stroke);
}

/* ── 中間畫面容器：唯一可捲動中段，每屏自己捲動 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad) calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }  /* 只有 active 設 display */

/* ── 歌曲列（紙色 + 底緣墨線分隔） ── */
.song-row {
  display: flex; align-items: center; gap: var(--space-3);
  padding: var(--space-3) var(--space-2); border-bottom: var(--stroke);
  cursor: pointer; transition: background var(--dur-fast) var(--ease-soft);
}
.song-row:hover  { background: var(--press-veil); }
.song-row:active { background: var(--blue-soft); }
.song-row .idx   { width: 22px; text-align: center; color: var(--text-3);
  font-family: var(--font); font-weight: 900; font-variant-numeric: tabular-nums; }
.song-row .title { font-size: 16px; font-weight: 700; color: var(--text-1); }
.song-row .meta  { font-size: 13px; color: var(--text-2); }
.song-row .dur   { margin-left: auto; font-size: 13px; color: var(--text-2);
  font-variant-numeric: tabular-nums; }

/* ── 圓形播放鍵圖章（粉實底 + 網點 + 墨描） ── */
.play-btn {
  width: 56px; height: 56px; border-radius: var(--radius-stamp);
  background-color: var(--ink-pink); background-image: var(--halftone-pink);
  background-size: 5px 5px; color: var(--text-on-pink);
  border: var(--stroke-2); cursor: pointer; box-shadow: var(--shadow-hard);
  display: grid; place-items: center; font-size: 22px;
  transition: transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft);
}
.play-btn:active { transform: translate(3px, 3px); box-shadow: var(--shadow-press); }

/* ── player：封面可壓縮、控制永遠在 844 內 ── */
.screen-player.is-active { display: flex; flex-direction: column;
  height: 100%; padding-bottom: var(--space-4); }   /* player 無 miniplayer 預留 */
.now-playing { display: flex; flex-direction: column; height: 100%; gap: var(--space-4); }
.now-playing .art {
  flex: 1 1 auto; min-height: 0;                      /* 可壓縮，保證控制可見 */
  border-radius: var(--radius-cover); border: var(--stroke-2);
  background-color: var(--paper);
  background-image: var(--halftone-pink), var(--halftone-blue);
  background-size: 9px 9px, 11px 11px; background-position: 0 0, 3px 4px;
}
.now-playing .ctrl-row { flex: 0 0 auto; display: flex; align-items: center;
  justify-content: space-between; }
.progress { height: 8px; border-radius: 2px; border: var(--stroke);
  background: var(--paper); overflow: hidden; }
.progress > i { display: block; height: 100%; width: 42%;
  background-color: var(--ink-pink); background-image: var(--halftone-pink);
  background-size: 4px 4px; }
.lyric { text-align: center; font-size: 16px; color: var(--text-3); }
.lyric .now { color: var(--ink-black); font-weight: 800; }

/* ── dock：miniplayer + tab-bar，永遠在底；player 時整個隱藏 ── */
.dock { position: relative; z-index: 5; flex: 0 0 auto; }
.is-player .dock { display: none; }

.miniplayer {
  display: flex; align-items: center; gap: var(--space-3);
  height: var(--miniplayer-h); margin: 0 var(--space-3) var(--space-2);
  padding: 0 var(--space-3); border-radius: var(--radius-card-sm);
  background: var(--paper-deep); border: var(--stroke); box-shadow: var(--shadow-hard-sm);
  cursor: pointer;
}
.miniplayer .mp-cover { width: 40px; height: 40px; border-radius: var(--radius-card-sm);
  border: var(--stroke); }
.miniplayer .mp-title { font-size: 15px; font-weight: 700; color: var(--text-1); }
.miniplayer .mp-artist{ font-size: 12px; color: var(--text-2); }
.miniplayer .mp-play  { margin-left: auto; cursor: pointer; }

/* ── tab-bar（紙色，頂緣粗墨線，固定底） ── */
.tabbar {
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  background: var(--paper); border-top: var(--stroke-2);
}
.tab { font-size: 11px; font-weight: 600; color: var(--text-2); text-align: center;
  cursor: pointer; padding: var(--space-1) var(--space-3); border-radius: var(--radius-chip);
  transition: color var(--dur-fast) var(--ease); }
.tab:hover { color: var(--ink-black); }
.tab[aria-current="page"] {
  color: var(--text-on-pink); background: var(--ink-pink);
  border: var(--stroke); box-shadow: var(--shadow-press);
}

/* ── 訂閱方案：Plus 推薦卡（粉描邊 + 角標 + 硬位移影加厚） ── */
.plan { padding: var(--space-4); border-radius: var(--radius-card); border: var(--stroke);
  background: var(--paper); box-shadow: var(--shadow-hard-sm); }
.plan.is-featured { border: var(--stroke-2); box-shadow: 4px 4px 0 var(--ink-pink); }
.plan .price { font-family: var(--font); font-size: 22px; font-weight: 900;
  font-variant-numeric: tabular-nums; color: var(--ink-black); }
.plan .badge { display: inline-block; font-size: 11px; font-weight: 700;
  color: var(--text-on-pink); background: var(--ink-pink);
  border: var(--stroke); padding: 2px 8px; border-radius: var(--radius-chip); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .is-tap:hover, .is-tap:active, .chip:hover, .chip:active { transform: none !important; }
}
```
