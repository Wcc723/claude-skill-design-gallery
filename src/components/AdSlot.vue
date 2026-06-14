<script setup lang="ts">
import { onMounted } from 'vue';
import { hasAdSense } from '../lib/adsense';

const props = withDefaults(
  defineProps<{
    adSlot?: string;
    format?: string;
    layout?: string;
  }>(),
  { format: 'auto', layout: '' },
);

const client = import.meta.env.VITE_ADSENSE_CLIENT;
// 需同時有 publisher id 與版位 slot 才渲染真實廣告
const enabled = hasAdSense() && !!props.adSlot;
const isDev = import.meta.env.DEV;

onMounted(() => {
  if (!enabled) return;
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch {
    // adsbygoogle.js 尚未就緒時靜默，不影響頁面
  }
});
</script>

<template>
  <!-- 有 client + slot：真實 AdSense 版位 -->
  <ins
    v-if="enabled"
    class="adsbygoogle ad-slot"
    style="display: block"
    :data-ad-client="client"
    :data-ad-slot="adSlot"
    :data-ad-format="format"
    :data-ad-layout="layout || undefined"
    data-full-width-responsive="true"
  ></ins>
  <!-- 無 client：DEV 顯示佔位框；PROD 不渲染（v-if 皆 false → 什麼都不輸出） -->
  <div v-else-if="isDev" class="ad-placeholder" aria-hidden="true">
    廣告版位<template v-if="adSlot"> · {{ adSlot }}</template>
  </div>
</template>

<style scoped>
.ad-slot {
  min-height: 90px;
}
.ad-placeholder {
  display: grid;
  place-items: center;
  min-height: 140px;
  border: 1px dashed #94a3b8;
  border-radius: 14px;
  color: #94a3b8;
  font-size: 13px;
  letter-spacing: 0.08em;
  background: rgba(148, 163, 184, 0.05);
}
</style>
