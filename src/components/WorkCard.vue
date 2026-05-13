<script setup lang="ts">
import type { Work } from '../data/works';
import { categoryLabels } from '../data/works';

defineProps<{ work: Work }>();
</script>

<template>
  <a
    class="card"
    :class="{ 'is-planned': work.status === 'planned' }"
    :href="work.status === 'shipped' ? `/works/${work.slug}/index.html` : undefined"
    :target="work.status === 'shipped' ? '_blank' : undefined"
    :rel="work.status === 'shipped' ? 'noopener' : undefined"
  >
    <div class="thumb">
      <img
        v-if="work.status === 'shipped'"
        :src="`/works/${work.slug}/thumb.webp`"
        :alt="`${work.name.zh} 縮圖`"
        loading="lazy"
        decoding="async"
      />
      <div v-else class="placeholder">
        <span class="placeholder-label">即將上線</span>
      </div>
      <span class="category-chip">{{ categoryLabels[work.category] }}</span>
    </div>

    <div class="meta">
      <div class="title-row">
        <h3 class="title-zh">{{ work.name.zh }}</h3>
        <span class="title-en">{{ work.name.en }}</span>
      </div>
      <p class="brief">{{ work.brief }}</p>
      <ul class="tags">
        <li v-for="tag in work.tags" :key="tag">#{{ tag }}</li>
      </ul>
    </div>
  </a>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 18px rgba(15, 23, 42, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid rgba(15, 23, 42, 0.06);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(15, 23, 42, 0.06), 0 18px 40px rgba(15, 23, 42, 0.1);
}
.card.is-planned {
  cursor: default;
  opacity: 0.62;
}
.card.is-planned:hover {
  transform: none;
}

.thumb {
  position: relative;
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  overflow: hidden;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 14px;
  color: #64748b;
  letter-spacing: 0.05em;
}
.placeholder-label {
  padding: 6px 14px;
  border: 1px dashed #94a3b8;
  border-radius: 999px;
  font-weight: 500;
}
.category-chip {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 11px;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  background: rgba(15, 23, 42, 0.78);
  color: #ffffff;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}

.meta {
  padding: 18px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.title-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}
.title-zh {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #0f172a;
  letter-spacing: 0.02em;
}
.title-en {
  font-size: 12px;
  color: #64748b;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.brief {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.6;
  color: #475569;
}
.tags {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tags li {
  font-size: 11px;
  color: #64748b;
  background: #f1f5f9;
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 0.04em;
}
</style>
