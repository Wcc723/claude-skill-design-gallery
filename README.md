# Claude Code Skill 設計風格圖鑑 · 島嶼共鳴 2026

> 一個音樂節，25 種設計語言。
> 由 Claude Code 主執行緒撰寫 Skill，再由 SubAgent 透過 Skill 完成單檔網頁的示範作品集。

## 這是什麼

這個專案展示一個可規模化的設計工作流：

1. **共用內容腦** — `.claude/content/festival-brief.md` 定義虛構音樂節「島嶼共鳴 2026」的所有內容（12 組樂團、3 個舞台、3 種票價、9 個贊助商、7 條 FAQ）
2. **設計風格 Skill** — `.claude/skills/design-*/` 各自描述一種設計風格的完整規範（設計 token、字體、構圖規則、do/don't、reference snippets）
3. **SubAgent 製造工** — `.claude/agents/style-page-builder.md` 接 JSON 輸入，讀 Skill 與 brief，吐出單檔 HTML
4. **AI 圖像資產** — `scripts/gen-images.mjs` 透過 codex CLI 內建 `imagegen` 工具，依 `assets-manifest.json` 批次產出每個風格的圖像素材
5. **品質驗證** — `scripts/verify-page.mjs` 用 cheerio 自動檢查 9 區塊、12 樂團名、3 票價、無外部 CDN
6. **截圖** — `scripts/screenshot-pages.mjs` 用 Playwright 預先截每頁縮圖
7. **Vue Gallery** — 主頁 (`src/App.vue`) 以縮圖卡片牆展示 25 份作品，可依分類 filter

內容相同、視覺各異——這就是設計風格的本體。

## 啟動

```bash
npm install
npm run dev
```

開啟 http://localhost:5173 即可瀏覽圖鑑。

## 重生作品

```bash
# 為某個風格生成 AI 圖像（需 codex CLI 已登入）
node scripts/gen-images.mjs --slug design-glassmorphism --parallel 2

# 用 SubAgent 重建頁面（在 Claude Code 內透過 style-page-builder agent）

# 驗證頁面
node scripts/verify-page.mjs --slug design-glassmorphism
node scripts/verify-page.mjs --all

# 重新截縮圖
node scripts/screenshot-pages.mjs --slug design-glassmorphism
node scripts/screenshot-pages.mjs --all
```

## 下載並使用某個 Skill

每個 `.claude/skills/design-<slug>/` 目錄都是自足的 Skill，把整個目錄複製到任意 Claude Code 專案的 `.claude/skills/` 內即可由 Claude 召喚使用。

每個 Skill 包含：
- `SKILL.md` — 風格哲學、design token、layout rule、reference snippets
- `assets-manifest.json` — AI 圖像生成 prompt 清單
- （可選）`references/` — 補充材料

## 25 個風格

### 主流 UI
- `design-glassmorphism` 玻璃擬態
- `design-neumorphism` 新擬物化
- `design-material-3` Material You
- `design-minimalism` 極簡主義
- `design-dark-mode` 沉浸暗黑

### 復古懷舊
- `design-vaporwave` 蒸氣波
- `design-y2k` Y2K 千禧
- `design-web1` 90s Web 1.0
- `design-american-retro-print` 美式復古印刷
- `design-synthwave` 80s Synthwave
- `design-bauhaus` 包浩斯

### 實驗前衛
- `design-brutalism` 野獸派
- `design-glitch` 故障藝術
- `design-cyberpunk` 賽博龐克
- `design-constructivism` 構成主義
- `design-ascii-terminal` ASCII 終端機
- `design-editorial` 雜誌排版

### 文化在地
- `design-wabi-sabi` 日式禪意
- `design-chinoiserie` 中國風國潮
- `design-scandinavian` 北歐極簡
- `design-swiss-international` 瑞士國際
- `design-taiwan-temple` 台灣廟會

### 裝飾性
- `design-isometric-3d` 等距 3D
- `design-hand-drawn` 手繪塗鴉
- `design-gradient-mesh` 漸層 Mesh

## 9 個標準區塊

所有 25 頁都使用同一份內容、同一份 HTML 區塊結構：

| # | data-block | 內容 |
|---|---|---|
| 1 | `hero` | 節慶名、slogan、日期、地點、CTA |
| 2 | `about` | 理念、4 個關鍵數字 |
| 3 | `lineup` | 12 組樂團（3 組頭條） |
| 4 | `schedule` | 三日 × 三舞台時程表 |
| 5 | `venues` | 共鳴山 / 海風 / 部落三舞台 |
| 6 | `tickets` | 單日 / 三日 / VIP 三種票價 |
| 7 | `travel` | 自行開車 / 大眾運輸 / 住宿建議 |
| 8 | `sponsors` | Title / Gold / Silver 贊助商 |
| 9 | `footer-faq` | 7 條 FAQ + 聯絡 |

差異**只在視覺設計**，便於並列比較不同風格的詮釋。

## 技術棧

- **Vue 3.5** + **Vite 8** + **TypeScript**
- **Cheerio** — HTML 解析驗證
- **Sharp** — 圖像處理
- **Playwright** — 自動截圖

## 工作流圖示

```
┌────────────────────────────────────────────────────────────┐
│  主執行緒 (Claude Code)                                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  1. 寫 SKILL.md + assets-manifest.json              │  │
│  └──────────────────────────────────────────────────────┘  │
│             │                                              │
│             ▼                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  2. 跑 scripts/gen-images.mjs                       │  │
│  │     → codex exec → imagegen tool                    │  │
│  │     → public/works/<slug>/assets/*.webp             │  │
│  └──────────────────────────────────────────────────────┘  │
│             │                                              │
│             ▼                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  3. 派 style-page-builder SubAgent                  │  │
│  │     輸入 { slug, skill_path, brief_path, ... }      │  │
│  │     → 產出 public/works/<slug>/index.html           │  │
│  └──────────────────────────────────────────────────────┘  │
│             │                                              │
│             ▼                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  4. verify-page.mjs / screenshot-pages.mjs         │  │
│  │     → public/works/<slug>/thumb.webp                │  │
│  │     → 確認 9 區塊 / 12 樂團 / 3 票價 / 無 CDN       │  │
│  └──────────────────────────────────────────────────────┘  │
│             │                                              │
│             ▼                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  5. 更新 src/data/works.ts 標 shipped               │  │
│  │     gallery 主頁卡片自動顯示                        │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

## License

作品集中所有樂團名、贊助商名、節慶名皆為虛構，與任何實際存在的組織無關。
