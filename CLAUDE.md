# CLAUDE.md

> Claude Code 在本專案的操作手冊。維護或擴充作品時，先讀這份。

## 專案本質

「**Claude Code Skill 設計風格圖鑑**」——示範規模化工作流：**主執行緒寫 Skill、SubAgent 透過 Skill 產出單檔網頁**。目前共 57 份，分三輪、兩種內容主題：

- **第一輪 25 份靜態**（`design-*` slug）——音樂節「島嶼共鳴 2026」
- **第二輪 15 份動態**（`motion-*` slug），分 5 類 motionType：`parallax / scroll-driven / reveal / loop / pointer`——音樂節
- **第三輪 17 份行動 App**（`app-*` slug）——虛構音樂串流 App「迴聲 Resona」，8 原生平台（`native-ui`）＋ 9 風格化（`stylized-mobile`：玻璃擬態／新野獸派／Y2K／線框＋第二批卡帶未來主義／黏土擬態／8-bit 像素機／孟菲斯／孔版印刷）。內容主題改用 `app-brief.md`，畫面契約改用 8 個 `data-screen`（非音樂節 9 個 `data-block`），gallery 以手機外框 + iframe 呈現。

> **兩套內容主題並存**：`design-*` / `motion-*` 用 `festival-brief.md`（音樂節）；`app-*` 用 `app-brief.md`（App）。verify 與 SubAgent 契約皆以 slug 前綴分流（`app-` / `motion-` / 其餘）。

線上版：https://www.casper.tw/claude-skill-design-gallery/

---

## 目錄地圖（必背）

```
.claude/
  agents/style-page-builder.md     # SubAgent 契約（festival / motion / app 三模式），改規則就改這
  content/festival-brief.md        # 音樂節內容資料庫（唯讀，design-* / motion-* 共用）
  content/app-brief.md             # App「迴聲 Resona」內容資料庫（唯讀，app-* 共用）
  skills/<slug>/                   # 每個風格的 Skill
    SKILL.md                       # frontmatter + 完整風格規範
    assets-manifest.json           # AI 圖像生成 prompt 清單
public/works/<slug>/               # SubAgent 產出的成品
  index.html                       # 單檔網頁 ≤ 200 KB
  thumb.webp                       # 1280×800 截圖（app-* 為 390×844 直式）
  thumb.webm                       # （motion 限定）3s loop hover 預覽
  assets/                          # AI 生成圖
src/
  App.vue                          # gallery 主頁（含 in-feed AdSlot 插入）
  main.ts                          # 掛載 + 條件式 initGA4() / loadAdSense()
  lib/analytics.ts                 # GA4 條件式 loader（VITE_GA_ID）
  lib/adsense.ts                   # AdSense 條件式 loader（VITE_ADSENSE_CLIENT）
  data/works.ts                    # 57 份 metadata（slug / 分類 / round / motionType / viewport / status）
  data/skill-content.ts            # import.meta.glob 讀 SKILL.md 給 drawer
  components/
    WorkCard.vue                   # 縮圖卡（hover WebM lazy-load；app 用直式手機外框縮圖）
    FilterBar.vue                  # 分類 chip（含 native-ui / stylized-mobile）
    RoundTab.vue                   # 「全部 / 靜態 25 / 動態 15 / 行動 12」
    SkillDrawer.vue                # 點卡開 drawer 顯示 SKILL.md + 複製（app 加左側手機預覽）
    PhonePreview.vue               # 手機外框 + 即時 iframe（app 限定）
    AdSlot.vue                     # AdSense 版位（未設 client/slot 時完全不顯示）
scripts/
  gen-images.mjs                   # codex imagegen 批次產圖
  verify-page.mjs                  # cheerio 驗證（9 區塊 / 12 樂團 / 票價 / motion 額外）
  screenshot-pages.mjs             # Playwright 截 thumb.webp
  record-webm.mjs                  # Playwright + ffmpeg VP9 錄 3s thumb.webm
  cover-shot.mjs                   # 為 README 拍封面截圖
  gallery-shot.mjs                 # gallery 主頁截圖（含切 tab）
  check-console.mjs                # Playwright 抓 console errors
.github/workflows/deploy.yml       # push main 自動部署到 GitHub Pages
```

---

## 不可動的核心契約

任何更新前先確認這些**沒被破壞**：

### 內容 brief（`.claude/content/festival-brief.md`）

- **`festival-brief.md` 對 SubAgent 是唯讀**——不可改動 12 樂團名、3 舞台名、3 票價數字、9 贊助商名、日期 2026/08/21–23、場地（台東都蘭灣海岸自然公園）
- 任何頁面（含未來新增的）都必須**一字不差**包含上述字串
- 若真要改 brief（例如加樂團），所有 40 頁需要重新派 SubAgent 重生

### 9 個標準區塊

所有頁面必須有 **9 個 `<section data-block="<id>">`**，順序與 id 固定：

```
hero → about → lineup → schedule → venues → tickets → travel → sponsors → footer-faq
```

`data-block` 屬性是驗證腳本辨識依據——SubAgent 容易漏寫，要特別在 prompt 中強調。

### 單檔自足

- 單檔 HTML ≤ 200 KB（不含 `assets/` 圖片）
- **無外部 CDN**：`<link>` `<script>` `<img>` 的 src/href 不可 `http://` 或 `https://` 開頭
- 圖片用相對路徑 `assets/<filename>.webp`

### 動態風格額外契約（`motion-*` slug）

見 `.claude/agents/style-page-builder.md` 末段「動態風格額外要求」8 條，重點：

1. `<body data-motion-type="parallax|scroll-driven|reveal|loop|pointer">` 必須在
2. `@media (prefers-reduced-motion: reduce)` 必須在
3. 純 vanilla JS / CSS / IntersectionObserver / Web Animations API；**禁** GSAP / Lottie / anime.js / framer-motion / popmotion / tween.js
4. scroll listener `passive: true` + rAF 節流
5. 只動 `transform` / `opacity`（不動 top/left/width/height）
6. JS 失敗或 reduced motion 模式下內容仍完整可讀
7. inline `<script>` ≤ 8 KB

---

## 新增風格的標準流程

### 1. 規劃 slug 與 metadata

新增一筆到 `src/data/works.ts`，先標 `status: 'planned'`。slug 命名：

- 靜態風格：`design-<lowercase-kebab>`
- 動態風格：`motion-<lowercase-kebab>` + `motionType` + `round: 2`

### 2. 寫 SKILL.md + assets-manifest.json

放在 `.claude/skills/<slug>/`。模板見任一現有 Skill。SKILL.md 結構：

```markdown
---
name: <slug>
description: Use when ... Triggers on <關鍵詞>.
user-invocable: true
---

# <中文名> — 島嶼共鳴 2026

## Style Philosophy
## Design Tokens (CSS variables)
## Typography Scale
## Layout Rules
## Do / Don't
## Motion Specification     # 僅 motion-*
## Accessibility (Reduced Motion)  # 僅 motion-*
## Required Output Contract
## Required Images
## Reference Snippet (CSS + 對 motion-* 加 JS)
```

`assets-manifest.json`：
```json
{ "style": "...", "images": [ { "filename": "hero.webp", "size": "1600x900", "prompt": "..." } ] }
```

動態風格通常 `images: []`（純 CSS/JS 動畫不需圖）。

### 3. 產圖（如有需要）

```bash
node scripts/gen-images.mjs --slug <slug> --parallel 2
```

走 `codex exec` + 內建 `imagegen` 工具。會吃 codex 配額——一次跑 3-7 張，超過會 429。產圖完會自動 sharp resize + 轉 webp 放進 `public/works/<slug>/assets/`。

### 4. 派 SubAgent

用 Agent tool（subagent_type=`general-purpose`）派 `style-page-builder`，JSON 輸入：

```json
{
  "slug": "<slug>",
  "skill_path": ".claude/skills/<slug>/SKILL.md",
  "brief_path": ".claude/content/festival-brief.md",
  "output_path": "public/works/<slug>/index.html",
  "assets_dir": "public/works/<slug>/assets"
}
```

SubAgent 會讀 SKILL + brief、自我檢查、回單行 JSON `{"ok":true,...}`。

**常見 SubAgent 漏洞**（在 prompt 中強調）：

- 忘了給 `<section>` 加 `data-block` 屬性，只給 id
- 把樂團名只放在 `data-text` / `aria-label` 而不在可見 body 文字裡（counter / typewriter 風格特別容易踩）
- 動態頁忘了 `prefers-reduced-motion` 區塊
- 動態頁用了 `transition: top/left/...` 觸發 reflow

### 5. 驗證

```bash
node scripts/verify-page.mjs --slug <slug>
node scripts/verify-page.mjs --all     # 全跑一次
```

驗證會檢查：9 個 data-block、12 樂團、3 票價、9 贊助商、3 舞台、≤200KB、無外部 CDN，motion-* 額外驗 `prefers-reduced-motion` + 動態觸發 + 禁外部庫。

不過就退回 SubAgent 改、或手動 patch（多半是 `data-block` 屬性沒加，可直接 `sed` 補上）。

### 6. 截縮圖 + 錄 WebM

```bash
node scripts/screenshot-pages.mjs --slug <slug>
node scripts/record-webm.mjs --slug <slug>     # 僅 motion-*
```

WebM 上限 350 KB，腳本會自動嘗試 5 階 CRF（42→60）；動態太密的頁面（marquee / scroll-progress）可能需要 CRF 48+。

### 7. 標 shipped

把 `works.ts` 該 slug 改為 `status: 'shipped'`。Vue gallery 自動列出。

### 8. 驗 + commit

```bash
npm run build              # 確認 TS / Vue 不爆
node scripts/check-console.mjs http://localhost:5173/   # 確認無 console error
git add ... && git commit -m "..."
```

---

## 常見任務速查

### 改 brief（樂團名 / 票價 / 贊助商）

**警告**：一旦改 brief，所有 40 份頁面內容會跟新 brief 不一致。改完必須：

1. 同步更新 `scripts/verify-page.mjs` 內的 `REQUIRED_BANDS` / `REQUIRED_TICKETS` / `REQUIRED_SPONSORS`
2. 全部重派 SubAgent 重生 40 頁
3. 重跑 verify-page、screenshot、record-webm

實務上不要輕易動 brief。

### 改 9 區塊定義

改 `.claude/agents/style-page-builder.md` 的 9-id 列表 + `scripts/verify-page.mjs` 的 `REQUIRED_BLOCKS`。同上，需要全 40 頁重生。

### 加新動態 motion 類型

`src/data/works.ts` 的 `MotionType` union + `motionTypeLabels` 加新值。然後在 `style-page-builder.md` 補對應技術配對說明。

### 更新 SubAgent 契約

改 `.claude/agents/style-page-builder.md`。注意所有現有 Skill 不會自動跟著改——新規則只對之後生成的頁面生效。若要把舊頁面也升級，重派該 SubAgent。

### 改 gallery 主頁

`src/App.vue` + `src/components/*.vue`。Filter 邏輯雙維度：先 round 後 category。新增分類記得在 `categoryLabels` 加標籤。

### 部署

push 到 `main` 觸發 `.github/workflows/deploy.yml`：

- workflow 自動把 `VITE_BASE` 設為 `/${{ github.event.repository.name }}/`
- 若儲存庫改名，**不用改任何檔案**，workflow 自動跟著

手動部署：`npm run deploy`（用 `gh-pages` 套件推到 `gh-pages` 分支）。

#### 分析與廣告環境變數（選用）

`VITE_GA_ID` / `VITE_ADSENSE_CLIENT` / `VITE_ADSENSE_SLOT_INFEED` / `VITE_ADSENSE_SLOT_SIDEBAR`：皆選用，**任一留空即停用對應功能且不載入任何外部腳本、不送請求**（build 產物經 DCE 後也不含 Google loader URL）。本機放 `.env.local`（範本見 `.env.example`）；CI 放 GitHub **Variables**（`vars.*`，非 secrets，因為這些 ID 本就公開）。GA4 在 `src/lib/analytics.ts`、AdSense 在 `src/lib/adsense.ts`，由 `main.ts` 條件式呼叫；版位元件為 `AdSlot.vue`。

### 重拍 README 封面

```bash
node scripts/cover-shot.mjs                   # 從線上版拍
node scripts/cover-shot.mjs http://localhost:5173/   # 從本機拍
```

產出 `docs/cover.webp` / `gallery-all.webp` / `gallery-motion.webp`。

---

## 禁止事項

- ❌ **不要直接編輯 `public/works/<slug>/index.html`**——這是 SubAgent 產出，下次重派會被覆蓋。改 Skill 後重派。
- ❌ **不要在 SKILL.md 寫死樂團名 / 票價**——這些只屬於 brief。Skill 只描述視覺。
- ❌ **不要把樂團名 / 票價當作可變參數**——所有頁面必須一字不差。
- ❌ **不要在 motion-* 用 GSAP / Lottie / 任何外部動畫庫**——驗證會擋。
- ❌ **不要動 `WorkCard.vue` 的 `import.meta.env.BASE_URL` 拼接**——這是 GitHub Pages base path 正確運作的關鍵。
- ❌ **不要 commit `dist/`**——`.gitignore` 已含。
- ❌ **不要在 `public/.nojekyll` 加內容**——必須是空檔，Vite 才會原樣 copy 給 gh-pages。
- ❌ **不要把 GA / AdSense / 任何外部腳本加進 `public/works/<slug>/index.html`**——只能在外層 gallery（`main.ts` / `App.vue` / `AdSlot.vue` / `lib/*`）。作品頁必須維持單檔自足、無外部 CDN（verify 的 CDN 檢查對 app-* 仍生效）。
- ❌ **不要在 `app-*` 頁寫死樂團 / 票價，或把音樂節 9 個 `data-block` 用在 App**——app 頁用 `app-brief.md` 內容與 8 個 `data-screen`。

---

## 常見 pitfalls

| 症狀 | 原因 | 修法 |
| --- | --- | --- |
| verify 找不到 `data-block`，明明 section 都在 | SubAgent 只給 `id=` 沒給 `data-block=` | `sed -i '' 's\|<section class="hero">\|<section class="hero" data-block="hero">\|'` 之類 |
| 計數類 / 打字機類 verify 失敗找不到樂團或票價 | 文字只在 `data-text` / `aria-label` | verify-page 已修為合併屬性值搜尋；新動態風格遵循這個慣例即可 |
| WebM 過 350 KB | 動態太密、scale/CRF 太低 | `record-webm.mjs` 已自動 5 階重試，多半第二或第三階成功 |
| 部署版圖片 404 | path 沒 import `BASE_URL` | 加 `import.meta.env.BASE_URL` 拼前綴 |
| GitHub Pages 顯示空白 | `vite.config.ts` base 沒對應 repo name | 改 `PROD_BASE` 或設 `VITE_BASE` |
| codex 配額用完 | 短時間產太多圖 | 等 1 小時或改用 CSS 純圖案 |

---

## 技術棧版本

- Vue 3.5 / Vite 8 / TypeScript ~6
- cheerio 1.2 / sharp 0.34 / playwright 1.60 / gh-pages 6.3
- Node ≥ 20.19 或 ≥ 22.12

---

## 對未來 Claude 的指引

1. **改之前先 verify**：先跑 `node scripts/verify-page.mjs --all` 看現狀 baseline。
2. **改完再 verify**：確認 40/40 仍 pass。
3. **驗證腳本是源頭真理**：契約看 `style-page-builder.md`、實際強制力在 verify-page.mjs。兩者不一致以 verify 為準。
4. **動 brief 之前先評估代價**——重派 40 頁 SubAgent 是大工程。
5. **不確定就讀 commit history**：
   - `d93034f` — 25 風格初版
   - `1e91a18` — Skill drawer
   - `bd0a066` — 動態 15 風格
   - `ae052d1` — GitHub Pages 部署
   - `a95f3fc` — README + 封面
6. **不要過度設計**：這專案的核心價值是「展示 Skill 工作流」，UI 已經夠豐富，新增功能前先想是否真有必要。
