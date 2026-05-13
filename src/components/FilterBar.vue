<script setup lang="ts">
import type { Category } from '../data/works';
import { categoryLabels } from '../data/works';

defineProps<{
  active: Category | 'all';
  counts: Record<Category | 'all', number>;
}>();

defineEmits<{
  (event: 'change', value: Category | 'all'): void;
}>();

const order: (Category | 'all')[] = ['all', 'mainstream', 'retro', 'experimental', 'cultural', 'decorative'];
const allLabel = (key: Category | 'all') => (key === 'all' ? '全部' : categoryLabels[key]);
</script>

<template>
  <nav class="filter-bar" aria-label="分類篩選">
    <button
      v-for="key in order"
      :key="key"
      class="chip"
      :class="{ 'is-active': active === key }"
      @click="$emit('change', key)"
    >
      <span>{{ allLabel(key) }}</span>
      <span class="count">{{ counts[key] ?? 0 }}</span>
    </button>
  </nav>
</template>

<style scoped>
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
}
.chip {
  appearance: none;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #ffffff;
  color: #1e293b;
  padding: 8px 14px;
  border-radius: 999px;
  font: inherit;
  font-size: 13px;
  letter-spacing: 0.02em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
}
.chip:hover {
  border-color: rgba(15, 23, 42, 0.3);
}
.chip.is-active {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}
.count {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  background: rgba(15, 23, 42, 0.08);
  color: inherit;
  padding: 1px 6px;
  border-radius: 999px;
}
.chip.is-active .count {
  background: rgba(255, 255, 255, 0.18);
}
</style>
