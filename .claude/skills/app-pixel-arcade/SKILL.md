---
name: app-pixel-arcade
description: Use when generating a single-file mobile App screen demo for the 迴聲 Resona 音樂串流 App in Pixel Arcade style. Triggers on 8-bit、像素、Pixel Arcade、pixel art、掌機、掌上遊戲機、chiptune、NES、Game Boy、復古遊戲、點陣螢幕、CRT 掃描線、dithering 抖色、PRESS START、retro game UI、限定調色盤、像素描邊.
user-invocable: true
---

# 8-bit 像素機 — 迴聲 Resona

## Style Philosophy

8-bit 像素機（Pixel Arcade）把整個 迴聲 Resona 想像成**一台被裝進手機殼裡的復古掌上遊戲機 / chiptune 播放器**：螢幕是低解析點陣面板，覆著一層 CRT 掃描線與螢幕暗角；UI 全是**無圓角、硬邊、階梯狀像素描邊**的視窗，像 NES 對話框那種粗黑外框＋亮色內框的 9-slice 感；專輯封面不是照片，而是**像素 sprite 色塊**（粗網格 + 抖色 dithering）；進度條不是滑桿，而是一格一格亮起的「XP / 血條」格子；底部 tab-bar 是遊戲機的選單列，被游標 `▶` 選中的那一格高亮反白。聽一首歌＝玩一台掌機：到處都是 `PRESS START` 的能量。

關鍵限制：**像素感全部靠純 CSS 達成，絕不外連任何點陣字型或圖檔（無 CDN）**。字體用 `ui-monospace,'Courier New',monospace` 放大 + 全大寫 + 寬字距，數字像記分板；像素描邊用「無圓角 + 多層階梯狀 `box-shadow`」模擬 2–3px 描邊；抖色與網格用 `repeating` 棋盤 / 條紋 background；CRT 掃描線用 `repeating-linear-gradient` 半透明橫線 overlay + radial 暗角。

用在音樂串流 App，這風格傳達「復古遊戲、chiptune、digital crunch、限定調色盤的硬核懷舊」：深夜靛藍底配高彩度像素亮色（青 / 洋紅 / 檸檬 / 亮綠 / 骨白），整個 App 像一台正在跑 chiptune mixtape 的掌機。

本次精修的三條鐵律：

1. **零圓角、像素硬邊**：全站 `border-radius: 0`。所有視窗 / 卡片 / 按鈕的「邊框」一律用**多層階梯狀 `box-shadow`**（外層深底描邊 + 內層亮色描邊，例如 `box-shadow: 0 0 0 3px var(--ink), 0 0 0 6px var(--cyan)`）而非 `border`，做出 2–3px 像素描邊 + 立體階梯感。`border-image` 與漸層柔光一律禁止。
2. **限定調色盤、抖色不柔光**：只用調色盤裡這 6–7 個色，**不准用平滑漸層做柔光**。需要層次時用**抖色（dithering）**——`repeating` 棋盤 / 點陣 background 模擬中間調，或 `image-rendering: pixelated` 的純 CSS 圖案。封面用 2–3 個調色盤色硬切的色塊 + 棋盤抖色，不同主色區分不同專輯。
3. **像素 mono 全大寫 + 記分板數字 + AA 可讀**：所有文字 `ui-monospace` 等寬、`text-transform: uppercase`（中文無大小寫但英數字一律大寫）、寬字距，標題加像素描邊陰影（多層硬 `text-shadow`）。數字（9:41、時長、價格、進度）`font-variant-numeric: tabular-nums` 像記分板。亮色 on 深底務必達 WCAG AA（主文字對背景 ≥ 4.5:1）。

三個視覺辨識特徵：

1. **像素 sprite 封面（棋盤抖色色塊）**：每張專輯 / 歌單 / 頭像封面 = 純 CSS `conic`/`linear` 硬切色塊 + `repeating` 棋盤抖色覆層 + 像素描邊外框，不同主色（青 / 洋紅 / 檸檬 / 亮綠）區分。**絕無任何圖檔。**
2. **格子化 XP / 血條進度條**：進度條 = 一排分段像素格（用 `repeating-linear-gradient` 切格），已播放的格亮 accent、未播放的格暗，像遊戲血條 / XP 條一格一格亮起；等化器 = 一排高低跳動的像素柱。
3. **遊戲機選單 tab-bar + CRT 掃描線**：tab-bar 是掌機選單列，active 格被閃爍 `▶` 游標選中 + 反白高亮；整台螢幕覆一層 CRT 掃描線（半透明橫線）+ 螢幕暗角，所有可點元件按下時有「像素位移」回饋。

---

## Design Tokens (CSS variables)

```css
:root {
  /* ── 手機殼尺寸（必含、鎖死，無跑版的根本） ── */
  --screen-w: 390px;
  --screen-h: 844px;
  --statusbar-h: 44px;
  --tabbar-h: 64px;             /* tab-bar 本體（含選單列高度） */
  --miniplayer-h: 58px;        /* 迷你播放列（卡帶條）高度 */
  --safe-bottom: 30px;         /* home indicator 安全區 */
  --content-pad: 16px;
  --device-radius: 0px;        /* 像素機：零圓角硬邊 */

  /* ── 8pt 間距尺度（所有 margin/padding/gap 只能取這些值） ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  /* ── 限定調色盤（深夜靛藍底 + 像素亮色，皆 on 深底達 AA） ── */
  --bg:      #14132b;          /* 主背景：深夜靛藍 */
  --ink:     #0d0c1d;          /* 最深：描邊外層 / 暗角 / 螢幕縫隙 */
  --panel:   #1d1c3d;          /* 視窗 / 卡片填色（比 bg 略亮一階） */
  --panel-2: #262450;         /* 次階填色 / hover / 選中底 */
  --cyan:    #38e8d0;          /* 青：主 accent（播放鍵 / 進度 fill / 描邊亮層） */
  --magenta: #ff5ca8;         /* 洋紅：次強調（active tab 游標 / 徽章 / 隨機循環 on） */
  --lemon:   #ffe24a;         /* 檸檬：高亮 / 警示 / 推薦角標 / 等化器頂 */
  --lime:    #6bff8e;         /* 亮綠：成功 / 已下載 / toggle on */
  --bone:    #f4f0e4;         /* 骨白：主文字（on --bg ≥ 12:1，遠超 AA） */

  /* ── 文字（皆 on --bg / --panel 達 WCAG AA） ── */
  --text-1: #f4f0e4;          /* 主文字：骨白（on bg ≈ 13:1） */
  --text-2: #b9b7d6;          /* 次文字：淡靛白（on bg ≈ 7.2:1，達 AA） */
  --text-3: #8a88b4;          /* 弱文字：僅用於 ≥17px 大字或裝飾（on bg ≈ 4.6:1） */
  --text-on-cyan:    #0d0c1d; /* 青底上的深字（對 cyan ≈ 9:1） */
  --text-on-magenta: #1a0a14; /* 洋紅底上的深字（對 magenta ≈ 6.8:1） */
  --text-on-lemon:   #14132b; /* 檸檬底上的深字（對 lemon ≈ 12:1） */

  /* ── 材質：像素描邊（多層階梯 box-shadow，取代 border） ── */
  --edge-cyan:    0 0 0 3px var(--ink), 0 0 0 6px var(--cyan);
  --edge-magenta: 0 0 0 3px var(--ink), 0 0 0 6px var(--magenta);
  --edge-lemon:   0 0 0 3px var(--ink), 0 0 0 6px var(--lemon);
  --edge-bone:    0 0 0 3px var(--ink), 0 0 0 6px var(--bone);
  --edge-soft:    0 0 0 2px var(--ink), 0 0 0 4px var(--panel-2);  /* 內分隔 / 次卡 */
  --pixel-shadow: 4px 4px 0 0 var(--ink);   /* 硬位移像素投影（無模糊） */
  --pixel-shadow-sm: 3px 3px 0 0 var(--ink);

  /* ── 材質：抖色 / 網格 / 掃描線 pattern ── */
  --dither: repeating-conic-gradient(            /* 2px 棋盤抖色 */
      rgba(255,255,255,0.06) 0% 25%, transparent 0% 50%) 0 0 / 4px 4px;
  --grid: repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8px);
  --scanlines: repeating-linear-gradient(0deg,
      rgba(13,12,29,0.00) 0 2px, rgba(13,12,29,0.22) 2px 3px);  /* CRT 掃描線 */
  --vignette: radial-gradient(120% 90% at 50% 45%, transparent 55%, rgba(13,12,29,0.55) 100%);

  /* ── 互動 / 強調 ── */
  --accent: var(--cyan);
  --accent-2: var(--magenta);
  --hover-veil: rgba(255,255,255,0.07);
  --press-shift: 2px;          /* 按下時像素位移量 */

  /* ── 圓角：像素機一律 0 ── */
  --radius: 0;

  /* ── 字體（純系統 mono，無外連點陣字型） ── */
  --font: ui-monospace, 'SFMono-Regular', 'Cascadia Mono', 'Courier New', monospace;

  /* ── 動效（step timing 製造格放感） ── */
  --ease-step: steps(4, end);
  --ease-step-2: steps(2, end);
  --dur-fast: 90ms;
  --dur: 160ms;
}
```

---

## Typography Scale

| 級距 | 大小 / 行高 / 字重 / 字距 / 變換 | 顏色 | 用途 |
| --- | --- | --- | --- |
| caption | 10px / 1.3 / 700 / +1.5px / uppercase | `--text-3` | tab 標籤、播放次數、徽章副字、格子說明 |
| label | 12px / 1.4 / 700 / +0.8px / uppercase | `--text-2` | chip 文字、卡片副標、時長、藝人名 |
| body | 13px / 1.6 / 500 / +0.3px | `--text-2` | 段落、方案權益、說明文字 |
| row-title | 15px / 1.35 / 700 / +0.5px / uppercase | `--text-1` | 歌名、歌單卡標題、列項主文字、迷你播放列歌名 |
| section | 17px / 1.2 / 800 / +1px / uppercase | `--text-1` | 區塊標題（如「每日迴聲 DAILY ECHO」） |
| display | 24px / 1.1 / 800 / +1.5px / uppercase | `--text-1` | home 品牌大標、player 曲名（加像素描邊陰影） |
| hud | 11px / 1 / 700 / +2px / uppercase | `--lemon` | 記分板小字（PRESS START / SCORE / LV 等 HUD 點綴） |

- 全部用 `--font`（等寬 mono），**所有英數字 `text-transform: uppercase` + 寬字距**製造像素機標籤感；中文維持原樣但同樣套寬字距。
- 數字（時間 9:41、價格、時長、進度、等化器數值）一律 `font-variant-numeric: tabular-nums`，對齊得像記分板。
- 標題（section / display）加**多層硬 `text-shadow`** 模擬像素描邊：`text-shadow: 2px 2px 0 var(--ink), 3px 3px 0 var(--accent-2);`（無 blur）。
- `--text-3` 弱文字只准用在 ≥17px 大字或純裝飾 HUD；正文與小字一律 `--text-2` 以上確保 AA。
- 標題與正文間固定 `--space-3` 縱距；區段之間固定 `--space-6`。**禁用任何襯線字體**（與像素衝突）。

---

## Component & Layout

整體結構：最外層 `.device`（390×844 掌機螢幕，`overflow:hidden`、`border-radius:0`、深靛底 + `--grid` 網格底）→ 螢幕覆層 `.crt`（絕對定位鋪滿、`--scanlines` + `--vignette`、`pointer-events:none`、`z-index:9`，CRT 掃描線與暗角）→ `.statusbar`（固定頂、像素 HUD、`z-index:5`）→ `.viewport`（中間可捲動畫面容器、`z-index:1`，依序堆 home/search/detail/player/library/profile 六個 `data-screen`，每次只顯示一個）→ `.dock`（底部固定區，含 `.miniplayer`（卡帶條）+ `.tabbar`（選單列）、`z-index:5`）。

8 個 `<section data-screen>` 順序固定且各恰一次：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`。

### 跨畫面導覽模型（依 B2，無跑版的骨架）

- 用 class 切換：`.screen { display:none }`，**只有** `.screen.is-active { display:flex; flex-direction:column }` 顯示（**嚴禁**任何畫面專屬 class 無條件設 `display`，否則永久疊層）。JS 點 tab / 卡片 / 曲目列 / 卡帶條 / 返回鍵時切換 active screen 並同步 tab-bar active 態。**JS 失效時** `home` 為預設 `is-active`，仍可讀完整內容。
- 導覽行為全部接好（用 `data-go` 委派 click）：tab → 切 home/search/library/profile；home/library/search 歌單或專輯卡（`data-go="detail"`）→ 開 detail；detail 任一曲目 / 卡帶條 / 任一播放鍵（`data-go="player"`）→ 開 player；detail / player 左上返回鍵（`data-go="back"`）→ 回上一畫面。
- **裝置容器三段式鎖定**：status-bar 永遠在頂、`.dock`（miniplayer + tab-bar）永遠在底、中間 `.viewport` 為當前畫面唯一可捲動區。`.viewport` 高 = `calc(--screen-h - --statusbar-h - --tabbar-h - --safe-bottom)`，每個 `.screen` 內部各自 `overflow-y:auto`，底部 padding 預留卡帶條高度，內容絕不被遮擋、不溢出、不被裁切。
- **進入 player 時隱藏整個 dock**（見 player 段），返回時恢復。

### status-bar（`data-screen="status-bar"`）

- 高 `--statusbar-h`，深 `--ink` 底 + 底緣一條 `--cyan` 像素描邊線。像素機 HUD 風：左側時間 **9:41**（tabular-nums，骨白 + 像素描邊陰影）；右側並排訊號格（█▌▍ 階梯方塊純 CSS 繪製）、Wi-Fi（▲ / 階梯方塊）、電量符號（█ 格子電池）。可加一處小 `--lemon` HUD 點綴如 `LV 8`。
- 固定於螢幕頂、不隨內容捲動、永遠在最上層（但在 `.crt` 掃描線之下）。

### home（`data-screen="home"`）

至少三區段，每區段有 section 標題列（左標題雙語如「每日迴聲 DAILY ECHO」+ 右「ALL ▸」連結，cursor:pointer + hover）：

1. **頂部 HUD 列**：左側品牌大標「**迴聲 Resona**」（display，加像素描邊陰影）+ slogan「讓每首歌，回到你身上」；右側頭像（像素 sprite 方塊）。下方一行 HUD 點綴：`PRESS START ▸` 閃爍字。
2. **4 分類 chip 橫排**：華語 / 獨立 / 電子 / 放鬆，膠囊改為**方形像素 chip**（零圓角 + 像素描邊），首個 active（反白 + `--cyan` 描邊 + 前綴 `▶`）。
3. **每日迴聲（個人化每日推薦 banner）**：一張橫幅像素視窗（`--panel` + `--edge-cyan` 描邊 + `--pixel-shadow` 硬投影），左像素 sprite 封面 + 「每日迴聲」標題 + 個人化文案（露出「**個人化每日推薦**」功能名）+ 大像素播放鍵（CSS 階梯三角 ▶）。露出「**無損音質串流**」徽章（lemon 方標）。
4. **為你精選歌單**：section 標題「為你精選歌單 PLAYLISTS」+「ALL ▸」。**7 個歌單卡**兩欄像素網格（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻），每卡 = 像素 sprite 封面（不同主色 + 棋盤抖色）+ 像素標題列 + 曲數副字。卡 `data-go="detail"`。
5. **熱門排行（記分板榜）**：section 標題「熱門排行 TOP CHART」+「ALL ▸」，編號清單（1–5，記分板數字 + `--lemon`），每列 = 排名數字 + 小 sprite 封面 + 歌名 + 藝人 + 時長 + 像素播放鍵。`data-go="player"`。

### search（`data-screen="search"`）

- 頂部**像素搜尋框**（零圓角 `--panel` + `--edge-soft` 描邊 + 放大鏡 ⌕ + placeholder「搜尋歌曲、藝人、歌單 SEARCH」+ 末端閃爍 `_` 游標）。
- 下方 4 分類 chip（華語 / 獨立 / 電子 / 放鬆，方形像素 chip）。
- **熱門歌曲（記分板清單）**：section 標題「熱門歌曲 HOT TRACKS」，**編號清單**（含時長）——海平面樂團〈藍色信號〉、林知夏〈晚風練習曲〉、夜行列車〈霓虹巷弄〉、Echo Lab〈靜電〉、何遠〈無人車站〉……每列 = 序號（記分板）+ 小 sprite 封面 + 歌名 + 藝人 + 時長 + 像素播放鍵（`data-go="player"`）。
- **熱門藝人**：section 標題「熱門藝人 ARTISTS」+ 橫向像素膠囊（sprite 頭像方塊 + 藝人名）：海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠。

### detail（`data-screen="detail"`）

- 左上**像素圓形返回鍵**（方形零圓角 + `‹` + `--edge-soft`，`data-go="back"`，cursor:pointer + hover/active）。
- **大 sprite 封面**：頂部大張像素封面（純 CSS 硬切色塊 + 棋盤抖色 + `--edge-cyan` 描邊，主色呼應島嶼晨光）。
- 資訊區：專輯名 **島嶼晨光** / 藝人 **林知夏** / 年份 **2026** / **9 首** / 總時長 **34:12**（全大寫 + tabular-nums）。
- 動作列：**播放全部 PLAY**（`--cyan` 大像素鍵 + 階梯 ▶ + `--text-on-cyan` 深字 + `--pixel-shadow`）+ **隨機播放 SHUFFLE**（`--panel` 次像素鍵）。
- **完整 9 曲目清單**（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三），每列像素 `.song-row`（`--edge-soft`）：曲序（記分板）+ 歌名 + 藝人（林知夏）+ 時長 + 行尾像素播放鍵 / 選單（⋯）。每列 `data-go="player"`。

### player（`data-screen="player"`）

沉浸像素 now-playing 面板，**進入時隱藏整個 `.dock`**（卡帶條 + tab-bar），整個 player `height:100%; display:flex; flex-direction:column`，**所有控制永遠固定在 844 內、不靠捲動、不被遮擋**：

- 頂列：左上**像素返回鍵**（`⌄` 收合，`data-go="back"`）+ 中央 HUD「NOW PLAYING」+ 右側選單（⋯）。
- **大 sprite 封面**：`flex:1; min-height:0`（可壓縮）的置中像素方塊（純 CSS 硬切色塊 + 棋盤抖色 + `--edge-cyan` 描邊，主色呼應島嶼晨光），上方可疊一排跳動**等化器像素柱**。
- 正在播放：**林知夏 —〈晚風練習曲〉**（display + 像素描邊陰影），副字專輯「島嶼晨光」。
- **歌詞同步**：一行逐字高亮示意（高亮字 `--lemon`，其餘 `--text-3`），露出「**歌詞同步**」功能名。
- **格子化進度條** `.progress`（XP / 血條格子：`repeating-linear-gradient` 切格，已播放格亮 `--cyan`、未播暗），左 **01:12** / 右 **02:47**（tabular-nums，記分板）。
- 控制列：隨機（⤮）/ 上一首（⏮）/ **播放暫停大像素圓鍵（階梯 ▶ / ⏸ 兩態）** / 下一首（⏭）/ 循環（⟳）。隨機與循環 active 上 `--magenta`。
- 底部固定：**Hi-Res 無損音質**徽章（lemon 方標）+ 音量像素格子滑桿。**以上控制 / 進度 / 徽章必須恆在可視區、不溢出 844。**

### library（`data-screen="library"`）

- 「**我的音樂庫 LIBRARY**」標題（section）。
- 分頁列（像素 segmented：零圓角方格 + `--edge-soft`，active 反白 + `--cyan`）：**歌單 / 專輯 / 已下載**，首個 active。
- **收藏歌單清單**：每列 = 像素 sprite 縮圖 + 標題（複用歌單名）+ 曲數副字 + 行尾箭頭（▸），`data-go="detail"`。
- **離線下載**功能列（像素 list-item + 「已下載」`--lime` 方狀態徽章），露出「**離線下載**」功能名。
- **共享音樂庫**功能列（像素 list-item + **方形像素 toggle 開關**：on 為 `--lime` 反白滑塊），露出「**共享音樂庫**」功能名。

### profile（`data-screen="profile"`）

- **使用者卡**：sprite 頭像方塊 + 暱稱 + 會員狀態行（像素強調卡 + `--edge-cyan`）。可加 HUD 點綴 `LV 8 / SCORE 1042`。
- **播放偏好**列表：音質、等化器、**跨裝置接續播放**（方形像素 toggle，預設 on＝`--lime`），露出「**跨裝置接續播放**」功能名。
- **3 訂閱方案卡**（像素卡堆疊）：
  - **免費** — `NT$ 0 ／月` — 標「目前方案」（`--panel` 卡 + `--edge-soft`）。
  - **Plus** — `NT$ 149 ／月` — 標「推薦」，強調卡（`--edge-lemon` + `--pixel-shadow` + 右上 `--lemon` 角標 ★）。
  - **Family** — `NT$ 249 ／月`（`--edge-soft`）。
  - 每卡含 2–3 條權益小字。價格 tabular-nums、`NT$` 與數字間一個半形空格、後綴全形「／月」。

### mini-player（卡帶條，常駐）

- 一條貼在 tab-bar **正上方**的像素「卡帶條」（`--panel` + 頂緣 `--cyan` 像素描邊線），高 `--miniplayer-h`。
- 內容：左小 sprite 封面 + 歌名「晚風練習曲」+ 藝人「林知夏」+ 右側**像素播放/暫停鍵（階梯 ▶ / ⏸）**。
- 顯示於 **home / search / library / profile**；**player 畫面隱藏**（`.is-player .dock { display:none }`，整個 dock 一起藏）。
- 整條 cursor:pointer，`data-go="player"`，點擊（播放鍵以外區域）展開到 player；點播放鍵切換 ▶/⏸ 兩態。
- 底部含一條**格子化進度線**（XP 格子，與 player 同步示意）。

### tab-bar（`data-screen="tab-bar"`）

- 固定底部**遊戲機選單列**：`--ink` 底 + 頂緣 `--cyan` 像素描邊線 + `--pixel-shadow`，4 tab：**首頁 / 搜尋 / 音樂庫 / 我的**，各 = 像素 icon（CSS 方塊繪製）+ 全大寫標籤。
- active tab = **被游標選中的高亮反白格**：填 `--cyan`、`--text-on-cyan` 深字、前綴閃爍 `▶` 游標。每 tab cursor:pointer + hover/active 回饋（hover 疊 `--hover-veil`，active 像素位移）。
- 預留 `--safe-bottom` 安全區。tab-bar 與其上卡帶條一起構成「永遠在底」的 `.dock`。

### 封面繪製規範（重要）

**所有專輯 / 歌單 / 頭像 / 排名 sprite 封面一律純 CSS**——用 `linear-gradient` / `conic-gradient` 做**硬切**色塊（調色盤色，禁柔光漸層）+ `repeating-conic-gradient` 棋盤抖色覆層（`--dither`）+ 像素描邊外框，可疊簡單像素圖形（方塊 / 階梯三角）。不同封面用不同主色（青 / 洋紅 / 檸檬 / 亮綠）區分。**不得引用任何 `assets/*.webp` 圖檔，不得出現 `<img>`。**

---

## Do / Don't

| Do | Don't |
| --- | --- |
| 全站 `border-radius: 0`，邊框用多層階梯 `box-shadow` 做像素描邊 | 用圓角 / `border-radius` / `border-image`（破壞像素硬邊） |
| 層次用抖色（棋盤 / 點陣 `repeating` pattern）製造中間調 | 用平滑漸層柔光、`blur()`、玻璃模糊（與像素衝突） |
| 封面用調色盤色硬切色塊 + 棋盤抖色，不同主色區分 | 引用點陣圖 / `<img src="assets/...">` / 寫實照片 |
| 文字 mono 等寬 + 全大寫英數 + 寬字距，標題加硬 text-shadow 描邊 | 用襯線 / 比例字體 / 柔陰影模糊 |
| 進度條做成一格一格的 XP / 血條格子；等化器做像素柱 | 用平滑滑桿 / 連續漸層進度 |
| tab-bar active 格反白高亮 + `▶` 游標選中感 | active 態無區別 / 只變淡 |
| 數字（時間 / 時長 / 價格 / 進度）tabular-nums 記分板對齊 | 比例字寬數字導致跳動 |
| 按下時用像素位移（translate `--press-shift`）+ 投影縮回回饋 | 元件無 hover/active 態 / 用 scale 平滑縮放柔化 |
| 只用調色盤 6–7 色，亮色 on 深底達 WCAG AA | 隨手加調色盤外的色 / 低對比文字 |
| 間距只取 8pt 尺度（4/8/12/16/20/24/32） | 隨手寫 7px / 13px / 19px 破壞節奏 |
| 動畫用 `steps()` timing 製造格放感 | 用平滑 `ease`/`cubic-bezier` 緩動（不像 8-bit） |

---

## Motion Specification

- **格放感優先**：所有動畫的 `animation-timing-function` / `transition-timing-function` 盡量用 `steps()`（如 `--ease-step` = `steps(4,end)`），讓動態「一格一格跳」而非平滑緩動，符合 8-bit 幀感。
- **CRT 掃描線**：`.crt` overlay 為靜態（或極緩 1–2px 掃描線微移 `@keyframes scan`），`pointer-events:none`，不影響操作；reduced motion 下完全靜態。
- **HUD 閃爍**：`PRESS START` / tab `▶` 游標 / 搜尋框 `_` 用 `@keyframes blink`（`steps(1)` 兩態 opacity 切換，1s 循環）製造光標閃爍。
- **等化器像素柱**：player 封面上一排像素柱用 `@keyframes eq`（不同 `animation-delay` + `transform: scaleY()`，`steps()` timing）跳動；只動 `transform`。
- **microinteractions**：
  - 可點元素 `transition: transform var(--dur-fast) var(--ease-step), background var(--dur);`，`:hover` 疊 `--hover-veil`，`:active { transform: translate(var(--press-shift), var(--press-shift)); }`（像素位移）+ 投影縮為 `--pixel-shadow-sm`，做出「按鍵被壓下」實體感。
  - 播放鍵點擊在階梯 ▶ / ⏸ 兩態間切換（JS 改 class + textContent）。
  - chip / tab / 分頁 active 切換用 background + color 即時或 `steps(2)` 過渡。
- **進度條 / 等化器**：純 CSS 格子示意即可；進度可選用 `steps()` 過渡讓格子「一格一格亮起」。
- 動畫屬性只動 `transform` / `opacity`（掃描線微移、按壓位移、等化器、閃爍）；進度寬度屬靜態示意，不放捲動熱路徑。
- **不使用任何外部動畫庫 / 外部點陣字型。**

## Accessibility (Reduced Motion)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  .crt { /* 掃描線改靜態，仍保留視覺但不動 */ animation: none !important; }
}
```

- CRT 掃描線微移、等化器跳動、HUD 閃爍、按壓位移在 reduced motion 下全部停用；掃描線 / 等化器改為靜態幀仍呈現完整像素質感。
- 內容（所有歌名 / 藝人 / 價格 / 功能名 / 品牌）在 JS 失效或 reduced motion 下仍完整可讀（`home` 預設可見）。
- 像素文字維持 WCAG AA：主文字骨白 `#f4f0e4`（on `--bg` ≈ 13:1）、次文字 `#b9b7d6`（≈ 7.2:1）；弱文字 `#8a88b4`（≈ 4.6:1）只用在 ≥17px 大字。亮色按鍵上的深字（`--text-on-cyan` / `--text-on-lemon`）皆 ≥ 4.5:1。

---

## Required Output Contract

遵循 `.claude/agents/style-page-builder.md` 的「**App 風格額外要求**」：

- **8 個 `<section data-screen="<id>">`**，固定 id 與順序：`status-bar` → `home` → `search` → `detail` → `player` → `library` → `profile` → `tab-bar`，各恰一次。常見漏洞：只寫 `id=` 漏寫 `data-screen=`，務必兩者都加。
- **`<body data-viewport="mobile">`** 必須存在（驗證辨識依據）。
- **status-bar 顯示 9:41**（tabular-nums，可見文字）+ 訊號 / 電量像素符號。
- **tab-bar 四 tab**：可見文字「首頁 / 搜尋 / 音樂庫 / 我的」，active 態為反白 + `▶` 游標選中格。
- **卡帶條（迷你播放列）**常駐於 home/search/library/profile、player 畫面隱藏（整個 dock 一起藏）；點擊展開 player、播放鍵 ▶/⏸ 兩態。
- **player 在 390×844 內完整顯示**：進入隱藏整個 dock，`height:100%; flex column`，封面 `flex:1; min-height:0`，控制 / 進度 / 徽章恆在可視區、不靠捲動、不被遮擋、不溢出。
- **三層訂閱方案精確字串**同屏出現於 profile：`免費` / `NT$ 0 ／月`、`Plus` / `NT$ 149 ／月`、`Family` / `NT$ 249 ／月`（`NT$` 與數字間一個半形空格、後綴全形「／月」），並標「推薦」與「目前方案」。
- **可互動多畫面導覽**（`data-go` 委派）：tab 切換 + 卡片→detail + 曲目/卡帶條→player + detail/player 返回鍵，全部接好；JS 失效時 `home` 預設可見。**畫面切換 CSS 規則**：`.screen{display:none}`、僅 `.screen.is-active{display:flex}`，嚴禁畫面專屬 class 無條件設 display。
- **權威字串全在可見 body 文字**（不可只放 `aria-label` / `data-*`）：品牌「迴聲 / Resona」、6 核心功能（無損音質串流 / 離線下載 / 共享音樂庫 / 跨裝置接續播放 / 歌詞同步 / 個人化每日推薦）、7 歌單（浪潮回聲 / 深夜公路 / 島嶼晨光 / 雨後散步 / 城市心跳 / 山海之間 / 失重時刻）、9 歌名（藍色信號 / 霓虹巷弄 / 候鳥地圖 / 靜電 / 晚風練習曲 / 無人車站 / 潮間帶 / 第七個夏天 / 月台九又四分之三）、5 藝人（海平面樂團 / 林知夏 / 夜行列車 / Echo Lab / 何遠）、4 分類 chip（華語 / 獨立 / 電子 / 放鬆）、正在播放「林知夏 —〈晚風練習曲〉」。
- **無跑版**：裝置容器鎖 390×844、status-bar 永遠在頂、dock（卡帶條 + tab-bar）永遠在底、中間為當前畫面可捲動區、內容不被遮擋、文字不溢出/不被裁切、padding 充足。
- **單檔 HTML ≤ 200 KB**；**無外部 CDN**（`<link>` / `<script>` / `<img>` 的 src/href 不可 `http://` 或 `https://`，含禁止外連任何點陣字型）；繁體中文；CSS 變數驅動、不得用 Tailwind 等 framework CSS。inline `<script>` ≤ 8 KB。
- **動畫政策**：使用任何 `@keyframes` / `transition` 必附 `@media (prefers-reduced-motion: reduce)`，只動 `transform` / `opacity`。

## Required Images

**此風格不使用任何點陣圖。** `assets-manifest.json` 為 `{ "style": "8-bit 像素機 Pixel Arcade", "images": [] }`。所有封面 / sprite / 圖示 / 抖色 / 掃描線一律純 CSS（`linear-gradient` / `conic-gradient` 硬切色塊 + `repeating-conic-gradient` 棋盤抖色 + 多層 `box-shadow` 像素描邊 + CSS 方塊 / 階梯三角繪製），**頁面不得引用任何圖檔、不得外連任何點陣字型**、不得出現指向 `assets/` 的 `<img>`。像素感是 CSS 技法，不是素材。

---

## Reference Snippet

```css
/* ── 掌機螢幕殼（零圓角、網格底） ── */
.device {
  position: relative;
  width: var(--screen-w);
  height: var(--screen-h);
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--radius);          /* 0：像素硬邊 */
  background: var(--bg);
  background-image: var(--grid);
  font-family: var(--font);
  color: var(--text-1);
  box-shadow: 0 0 0 4px var(--ink), 0 0 0 8px #2b2960;  /* 機殼像素描邊 */
  display: flex;
  flex-direction: column;
}

/* ── CRT 掃描線 + 螢幕暗角覆層（不擋操作） ── */
.crt {
  position: absolute; inset: 0; z-index: 9; pointer-events: none;
  background: var(--scanlines), var(--vignette);
  mix-blend-mode: multiply;
  animation: scan 8s steps(2, end) infinite;
}
@keyframes scan { 0% { background-position: 0 0; } 100% { background-position: 0 3px; } }

/* ── 通用像素視窗（NES 對話框感：多層階梯描邊 + 硬投影） ── */
.win {
  background: var(--panel);
  background-image: var(--dither);       /* 棋盤抖色覆層 */
  box-shadow: var(--edge-cyan), var(--pixel-shadow);
  border-radius: 0;
  transition: transform var(--dur-fast) var(--ease-step),
              box-shadow var(--dur) var(--ease-step);
}
.win.is-tap { cursor: pointer; }
.win.is-tap:hover  { background-color: var(--panel-2); }
.win.is-tap:active { transform: translate(var(--press-shift), var(--press-shift));
                     box-shadow: var(--edge-cyan), var(--pixel-shadow-sm); }

/* ── status-bar（HUD，固定頂） ── */
.statusbar {
  position: relative; z-index: 5; flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: var(--statusbar-h); padding: 0 var(--space-4);
  background: var(--ink); box-shadow: inset 0 -3px 0 var(--cyan);
  font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
  font-variant-numeric: tabular-nums; color: var(--text-1);
}
.statusbar .clock { text-shadow: 2px 2px 0 var(--ink); }

/* ── 中段：唯一可捲動畫面容器 ── */
.viewport { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; }
.screen { display: none; height: 100%; overflow-y: auto;
  padding: var(--space-4) var(--content-pad) calc(var(--miniplayer-h) + var(--space-4)); }
.screen.is-active { display: flex; flex-direction: column; }   /* 唯一啟用 display 的規則 */

/* ── 區段標題（雙語 + 像素描邊陰影） ── */
.section-head { display:flex; align-items:baseline; justify-content:space-between;
  margin: var(--space-6) 0 var(--space-3); }
.section-head h2 { font-size:17px; font-weight:800; letter-spacing:1px;
  text-transform:uppercase; text-shadow: 2px 2px 0 var(--ink), 3px 3px 0 var(--magenta); }
.section-head a { font-size:10px; font-weight:700; letter-spacing:1.5px;
  text-transform:uppercase; color:var(--text-2); cursor:pointer; }
.section-head a:hover { color: var(--lemon); }

/* ── 像素 sprite 封面（硬切色塊 + 棋盤抖色 + 描邊；不同主色換變數） ── */
.cover {
  aspect-ratio: 1; border-radius: 0;
  background:
    var(--dither),
    linear-gradient(135deg, var(--cyan) 0 50%, var(--magenta) 50% 100%);
  box-shadow: var(--edge-cyan);
  image-rendering: pixelated;
}
.cover.c-lemon { background: var(--dither),
  linear-gradient(135deg, var(--lemon) 0 50%, var(--lime) 50% 100%);
  box-shadow: var(--edge-lemon); }

/* ── 階梯像素播放三角 ▶（純 CSS，無圓角） ── */
.play-btn {
  width: 56px; height: 56px; border-radius: 0; border: none; cursor: pointer;
  background: var(--cyan); color: var(--text-on-cyan);
  box-shadow: var(--edge-bone), var(--pixel-shadow);
  display: grid; place-items: center; font-size: 18px;
  transition: transform var(--dur-fast) var(--ease-step);
}
.play-btn:active { transform: translate(var(--press-shift), var(--press-shift));
  box-shadow: var(--edge-bone), var(--pixel-shadow-sm); }
.play-btn .tri {                /* 階梯像素三角，靠 clip-path 多點折線 */
  width: 0; height: 0; border-left: 14px solid currentColor;
  border-top: 9px solid transparent; border-bottom: 9px solid transparent; }

/* ── 格子化 XP / 血條進度條（一格一格） ── */
.progress {
  height: 14px; border-radius: 0; box-shadow: var(--edge-soft);
  background:
    linear-gradient(90deg, var(--cyan) 0 var(--p,42%), var(--panel) var(--p,42%) 100%),
    repeating-linear-gradient(90deg, transparent 0 10px, var(--ink) 10px 12px); /* 切格縫 */
  background-blend-mode: normal;
}

/* ── 等化器像素柱（player 封面上跳動） ── */
.eq { display:flex; align-items:flex-end; gap:3px; height:24px; }
.eq i { width:5px; background: var(--lemon); transform-origin:bottom;
  animation: eq 600ms steps(4,end) infinite alternate; }
.eq i:nth-child(2){ animation-delay:120ms } .eq i:nth-child(3){ animation-delay:240ms }
.eq i:nth-child(4){ animation-delay:80ms }  .eq i:nth-child(5){ animation-delay:300ms }
@keyframes eq { from { transform: scaleY(.25);} to { transform: scaleY(1);} }

/* ── 方形像素 chip ── */
.chip {
  padding: var(--space-2) var(--space-3); border-radius: 0;
  background: var(--panel); box-shadow: var(--edge-soft);
  color: var(--text-2); font-size: 12px; font-weight: 700; letter-spacing:.8px;
  text-transform: uppercase; cursor: pointer;
  transition: background var(--dur), color var(--dur); }
.chip:hover { color: var(--lemon); }
.chip[aria-selected="true"] { background: var(--cyan); color: var(--text-on-cyan);
  box-shadow: var(--edge-bone); }
.chip[aria-selected="true"]::before { content:"▶ "; }

/* ── 卡帶條（迷你播放列，常駐 dock 內、player 隱藏） ── */
.miniplayer {
  display: flex; align-items: center; gap: var(--space-3);
  height: var(--miniplayer-h); margin: 0; padding: 0 var(--space-3);
  background: var(--panel); box-shadow: inset 0 3px 0 var(--cyan); cursor: pointer; }
.miniplayer .mp-cover { width:40px; height:40px; box-shadow: var(--edge-soft); }
.miniplayer .mp-title { font-size:13px; font-weight:700; letter-spacing:.5px;
  text-transform:uppercase; color:var(--text-1); }
.miniplayer .mp-play  { margin-left:auto; cursor:pointer; color:var(--cyan); }

/* ── dock（卡帶條 + tab-bar），player 整個藏 ── */
.dock { position: relative; z-index: 5; flex: 0 0 auto; }
.is-player .dock { display: none; }

/* ── tab-bar（遊戲機選單列，固定底） ── */
.tabbar {
  display: flex; justify-content: space-around; align-items: center;
  height: var(--tabbar-h); padding-bottom: var(--safe-bottom);
  background: var(--ink); box-shadow: inset 0 3px 0 var(--cyan), var(--pixel-shadow);
  border-radius: 0; }
.tab { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--text-3); text-align:center; cursor:pointer; padding: var(--space-1) var(--space-2);
  transition: color var(--dur), background var(--dur); }
.tab:hover { color: var(--text-2); background: var(--hover-veil); }
.tab[aria-current="page"] {                       /* 被游標選中的反白格 */
  background: var(--cyan); color: var(--text-on-cyan); }
.tab[aria-current="page"] .cur { animation: blink 1s steps(1) infinite; }  /* ▶ 游標閃爍 */

/* ── HUD 閃爍（PRESS START / 游標 / 搜尋 _ ） ── */
.blink { animation: blink 1s steps(1) infinite; color: var(--lemon); }
@keyframes blink { 0%,49% { opacity:1 } 50%,100% { opacity:0 } }

/* ── 訂閱方案：Plus 推薦卡 ── */
.plan { padding: var(--space-4); background: var(--panel); box-shadow: var(--edge-soft);
  border-radius: 0; }
.plan.is-featured { box-shadow: var(--edge-lemon), var(--pixel-shadow); }
.plan .price { font-size: 17px; font-weight: 800; letter-spacing:.5px;
  font-variant-numeric: tabular-nums; color: var(--lemon); }
.plan .badge { font-size:10px; font-weight:700; letter-spacing:1px;
  text-transform:uppercase; color:var(--text-on-lemon); background:var(--lemon);
  padding:2px 6px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```
