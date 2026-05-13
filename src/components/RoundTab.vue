<script setup lang="ts">
import type { Round } from '../data/works';

defineProps<{
  active: Round | 'all';
  totalAll: number;
  totalR1: number;
  totalR2: number;
}>();

defineEmits<{
  (event: 'change', value: Round | 'all'): void;
}>();
</script>

<template>
  <nav class="round-tab" aria-label="輪次切換">
    <button
      class="tab"
      :class="{ 'is-active': active === 'all' }"
      @click="$emit('change', 'all')"
    >
      <span class="tab-name">全部</span>
      <span class="tab-count">{{ totalAll }}</span>
    </button>
    <button class="tab" :class="{ 'is-active': active === 1 }" @click="$emit('change', 1)">
      <span class="tab-name">靜態</span>
      <span class="tab-tag">第一輪</span>
      <span class="tab-count">{{ totalR1 }}</span>
    </button>
    <button class="tab" :class="{ 'is-active': active === 2 }" @click="$emit('change', 2)">
      <span class="tab-name">動態</span>
      <span class="tab-tag">第二輪</span>
      <span class="tab-count">{{ totalR2 }}</span>
    </button>
  </nav>
</template>

<style scoped>
.round-tab {
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  background: #f1f5f9;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.06);
}
.tab {
  appearance: none;
  background: transparent;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  font: inherit;
  font-size: 14px;
  color: #475569;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.02em;
  transition: background 0.18s ease, color 0.18s ease;
}
.tab:hover {
  color: #0f172a;
}
.tab.is-active {
  background: #0f172a;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.18);
}
.tab-name {
  font-weight: 600;
}
.tab-tag {
  font-size: 11px;
  letter-spacing: 0.08em;
  color: inherit;
  opacity: 0.7;
  text-transform: uppercase;
}
.tab.is-active .tab-tag {
  opacity: 0.85;
}
.tab-count {
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  background: rgba(15, 23, 42, 0.08);
  color: inherit;
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 600;
}
.tab.is-active .tab-count {
  background: rgba(255, 255, 255, 0.18);
}
</style>
