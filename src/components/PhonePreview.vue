<script setup lang="ts">
import { computed } from 'vue';
import type { Work } from '../data/works';

const props = defineProps<{ work: Work; active: boolean }>();

const BASE = import.meta.env.BASE_URL;
const workPath = computed(() => `${BASE}works/${props.work.slug}/index.html`);
// 只有 drawer 開啟（active）且作品已產出時才設 src，否則空字串＝不發任何請求
const src = computed(() =>
  props.active && props.work.status === 'shipped' ? workPath.value : '',
);
</script>

<template>
  <div class="phone" role="img" :aria-label="`${work.name.zh} 行動 App 即時預覽`">
    <div class="notch"></div>
    <iframe
      v-if="src"
      :src="src"
      class="screen"
      title="App 即時預覽"
      loading="lazy"
      sandbox="allow-scripts allow-same-origin"
      referrerpolicy="no-referrer"
    ></iframe>
    <div v-else class="screen placeholder">
      <span>即將上線</span>
    </div>
    <div class="home-indicator"></div>
  </div>
</template>

<style scoped>
.phone {
  position: relative;
  width: 390px;
  height: 844px;
  max-width: 100%;
  flex-shrink: 0;
  border-radius: 46px;
  border: 11px solid #0f172a;
  background: #0f172a;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.32);
  overflow: hidden;
}
.screen {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 35px;
  background: #ffffff;
  display: block;
}
.placeholder {
  display: grid;
  place-items: center;
  color: #94a3b8;
  font-size: 14px;
  letter-spacing: 0.08em;
}
.notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 26px;
  background: #0f172a;
  border-radius: 0 0 18px 18px;
  z-index: 2;
}
.home-indicator {
  position: absolute;
  bottom: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 5px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.55);
  z-index: 2;
  pointer-events: none;
}
</style>
