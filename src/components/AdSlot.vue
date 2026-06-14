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
// 需同時有 publisher id 與版位 slot 才渲染真實廣告；否則完全不顯示（不渲染佔位框）
const enabled = hasAdSense() && !!props.adSlot;

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
  <!-- 只有同時有 client + slot 才渲染真實 AdSense 版位；否則什麼都不輸出 -->
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
</template>

<style scoped>
.ad-slot {
  min-height: 90px;
}
</style>
