<script setup lang="ts">
import type { Work } from '../data/works';
import { categoryLabels } from '../data/works';

defineProps<{ work: Work }>();
defineEmits<{ (e: 'open-skill', work: Work): void }>();
</script>

<template>
  <article class="card" :class="{ 'is-planned': work.status === 'planned' }">
    <a
      class="thumb-link"
      :href="work.status === 'shipped' ? `/works/${work.slug}/index.html` : undefined"
      :target="work.status === 'shipped' ? '_blank' : undefined"
      :rel="work.status === 'shipped' ? 'noopener' : undefined"
      :aria-label="`開啟 ${work.name.zh} 作品`"
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
    </a>

    <div class="meta">
      <div class="title-row">
        <h3 class="title-zh">{{ work.name.zh }}</h3>
        <span class="title-en">{{ work.name.en }}</span>
      </div>
      <p class="brief">{{ work.brief }}</p>
      <ul class="tags">
        <li v-for="tag in work.tags" :key="tag">#{{ tag }}</li>
      </ul>
      <div class="actions">
        <button
          class="action skill"
          :disabled="work.status !== 'shipped'"
          @click="$emit('open-skill', work)"
        >
          <span class="icon">📄</span>
          <span>查看 Skill</span>
        </button>
        <a
          class="action open"
          :href="work.status === 'shipped' ? `/works/${work.slug}/index.html` : undefined"
          :target="work.status === 'shipped' ? '_blank' : undefined"
          :rel="work.status === 'shipped' ? 'noopener' : undefined"
          :aria-disabled="work.status !== 'shipped'"
        >
          <span>開啟作品</span>
          <span class="icon">↗</span>
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 18px rgba(15, 23, 42, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid rgba(15, 23, 42, 0.06);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(15, 23, 42, 0.06), 0 18px 40px rgba(15, 23, 42, 0.1);
}
.card.is-planned {
  opacity: 0.62;
}
.card.is-planned:hover {
  transform: none;
}

.thumb-link {
  display: block;
  text-decoration: none;
  color: inherit;
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
  padding: 18px 18px 18px;
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

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
}
.action {
  appearance: none;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.14);
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 13px;
  font-weight: 500;
  color: #0f172a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
}
.action:hover:not(:disabled):not([aria-disabled='true']) {
  background: #f8fafc;
  border-color: rgba(15, 23, 42, 0.28);
}
.action:disabled,
.action[aria-disabled='true'] {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}
.action.skill {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}
.action.skill:hover:not(:disabled) {
  background: #1e293b;
}
.action .icon {
  font-size: 13px;
  line-height: 1;
}
</style>
