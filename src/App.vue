<script setup lang="ts">
import { computed, ref } from 'vue';
import { works, type Category, type Round, type Work } from './data/works';
import WorkCard from './components/WorkCard.vue';
import FilterBar from './components/FilterBar.vue';
import RoundTab from './components/RoundTab.vue';
import SkillDrawer from './components/SkillDrawer.vue';

const activeRound = ref<Round | 'all'>('all');
const active = ref<Category | 'all'>('all');
const activeWork = ref<Work | null>(null);

const r1Works = computed(() => works.filter((w) => w.round === 1));
const r2Works = computed(() => works.filter((w) => w.round === 2));

const roundFiltered = computed(() => {
  if (activeRound.value === 'all') return works;
  return works.filter((w) => w.round === activeRound.value);
});

const counts = computed(() => {
  const c: Record<Category | 'all', number> = {
    all: roundFiltered.value.length,
    mainstream: 0,
    retro: 0,
    experimental: 0,
    cultural: 0,
    decorative: 0,
    motion: 0,
  };
  for (const w of roundFiltered.value) c[w.category] += 1;
  return c;
});

const shippedCount = computed(() => works.filter((w) => w.status === 'shipped').length);
const r1Shipped = computed(() => r1Works.value.filter((w) => w.status === 'shipped').length);
const r2Shipped = computed(() => r2Works.value.filter((w) => w.status === 'shipped').length);

const filtered = computed(() => {
  if (active.value === 'all') return roundFiltered.value;
  return roundFiltered.value.filter((w) => w.category === active.value);
});

function onRoundChange(r: Round | 'all') {
  activeRound.value = r;
  // 切換輪次時把分類重置為「全部」，避免出現空清單
  active.value = 'all';
}
</script>

<template>
  <div class="page">
    <header class="hero">
      <div class="hero-inner">
        <p class="kicker">Claude Code Skill 設計風格圖鑑</p>
        <h1 class="hero-title">
          一個音樂節，<br />
          <span class="emph">{{ works.length }}</span> 種設計語言。
        </h1>
        <p class="hero-sub">
          以虛構獨立音樂節「<strong>島嶼共鳴 2026</strong>」為共同主題，
          每一份作品都先由 Claude Code 撰寫成一個可下載的 Skill，再交給 SubAgent 透過該 Skill 完成單檔網頁。
          第一輪是 25 種靜態設計語言，第二輪則加入視差、滾動、入場、循環、指標 5 類動態效果共 15 種。
        </p>
        <ul class="hero-stats">
          <li><strong>{{ works.length }}</strong><span>設計風格</span></li>
          <li><strong>{{ shippedCount }}</strong><span>已完成作品</span></li>
          <li><strong>{{ r1Shipped }} / {{ r2Shipped }}</strong><span>靜態 / 動態</span></li>
          <li><strong>9</strong><span>共用標準區塊</span></li>
        </ul>
      </div>
    </header>

    <main class="content">
      <section class="round-section" aria-label="輪次切換">
        <RoundTab
          :active="activeRound"
          :total-all="works.length"
          :total-r1="r1Works.length"
          :total-r2="r2Works.length"
          @change="onRoundChange"
        />
      </section>

      <section class="filter-section" aria-label="分類篩選">
        <FilterBar :active="active" :counts="counts" @change="(v) => (active = v)" />
      </section>

      <section class="grid" aria-label="作品列表">
        <WorkCard
          v-for="work in filtered"
          :key="work.slug"
          :work="work"
          @open-skill="(w) => (activeWork = w)"
        />
      </section>

      <p v-if="filtered.length === 0" class="empty-state">
        這個分類目前沒有作品。試試切換到「全部」。
      </p>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div>
          <h2>關於這個專案</h2>
          <p>
            這是一個示範專案，展示「主執行緒寫 Skill → SubAgent 透過 Skill 產出網頁」的規模化工作流。
            所有 Skill 都隨專案進 Git，可被自由下載、修改、套用至其他專案。
          </p>
        </div>
        <div>
          <h2>下載 Skill</h2>
          <p>
            點任一張卡片右下角的「查看 Skill」即可開啟 drawer 一鍵複製。
            或把 <code>.claude/skills/&lt;slug&gt;/</code> 整個目錄複製到任意 Claude Code 專案。
          </p>
        </div>
        <div class="footer-meta">
          <p>島嶼共鳴 2026 · 由浪打文化（虛構）主辦</p>
          <p>Built with Vue 3 · Vite · Claude Code Skills</p>
        </div>
      </div>
    </footer>

    <SkillDrawer :work="activeWork" @close="activeWork = null" />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fafafa 0%, #f1f5f9 100%);
  color: #0f172a;
}

.hero {
  background: radial-gradient(ellipse at 20% 0%, #fef3c7 0%, transparent 50%),
    radial-gradient(ellipse at 80% 30%, #dbeafe 0%, transparent 55%),
    linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
}
.hero-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 80px 28px 64px;
}
.kicker {
  font-size: 12px;
  letter-spacing: 0.18em;
  color: #64748b;
  text-transform: uppercase;
  margin: 0 0 14px;
}
.hero-title {
  font-size: clamp(36px, 5.5vw, 64px);
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 24px;
  color: #0f172a;
}
.hero-title .emph {
  background: linear-gradient(135deg, #f59e0b 0%, #ec4899 60%, #6366f1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.hero-sub {
  font-size: 16px;
  line-height: 1.75;
  max-width: 720px;
  color: #334155;
  margin: 0 0 36px;
}
.hero-stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
.hero-stats li {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.hero-stats strong {
  font-size: 28px;
  font-variant-numeric: tabular-nums;
  color: #0f172a;
}
.hero-stats span {
  font-size: 12px;
  letter-spacing: 0.08em;
  color: #64748b;
  text-transform: uppercase;
}

.content {
  max-width: 1180px;
  margin: 0 auto;
  padding: 32px 28px 80px;
}

.round-section {
  display: flex;
  justify-content: center;
  padding: 12px 0 8px;
}

.filter-section {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 16px 0;
  margin-bottom: 12px;
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.95) 0%, rgba(248, 250, 252, 0.85) 100%);
  backdrop-filter: blur(8px);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
}

.empty-state {
  text-align: center;
  color: #64748b;
  padding: 40px 0;
  font-size: 14px;
}

.footer {
  background: #0f172a;
  color: #cbd5e1;
}
.footer-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 60px 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
}
.footer h2 {
  font-size: 14px;
  letter-spacing: 0.08em;
  color: #f1f5f9;
  text-transform: uppercase;
  margin: 0 0 12px;
}
.footer p {
  margin: 0;
  line-height: 1.7;
  font-size: 14px;
}
.footer code {
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}
.footer-meta {
  grid-column: span 2;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #94a3b8;
  letter-spacing: 0.04em;
}

@media (max-width: 720px) {
  .hero-inner {
    padding: 56px 22px 48px;
  }
  .content {
    padding: 24px 22px 60px;
  }
  .footer-inner {
    grid-template-columns: 1fr;
    padding: 48px 22px;
  }
  .footer-meta {
    grid-column: span 1;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
