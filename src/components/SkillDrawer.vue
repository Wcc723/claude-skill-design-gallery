<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Work } from '../data/works';
import { skillContent } from '../data/skill-content';
import PhonePreview from './PhonePreview.vue';

const props = defineProps<{ work: Work | null }>();
const emit = defineEmits<{ (e: 'close'): void }>();

const copied = ref(false);
const content = computed(() => (props.work ? skillContent[props.work.slug] || '' : ''));
// 第三輪行動 App：在 drawer 左側嵌入手機外框即時預覽
const isMobileWork = computed(() => props.work?.round === 3);
const targetPath = computed(() =>
  props.work ? `.claude/skills/${props.work.slug}/SKILL.md` : '',
);

watch(
  () => props.work,
  () => {
    copied.value = false;
  },
);

async function copyContent() {
  if (!content.value) return;
  try {
    await navigator.clipboard.writeText(content.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2200);
  } catch {
    // fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = content.value;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2200);
  }
}

function onBackdrop(e: MouseEvent) {
  if (e.target === e.currentTarget) emit('close');
}
function onEsc(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close');
}

watch(
  () => props.work,
  (w) => {
    if (w) {
      document.addEventListener('keydown', onEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    }
  },
);
</script>

<template>
  <Transition name="drawer">
    <div v-if="work" class="backdrop" @click="onBackdrop" role="dialog" aria-modal="true">
      <aside class="panel" :class="{ 'has-preview': isMobileWork }" :aria-label="`${work.name.zh} Skill 內容`">
        <div v-if="isMobileWork" class="preview-pane">
          <div class="phone-scale">
            <div class="phone-inner">
              <PhonePreview :work="work" :active="!!work" />
            </div>
          </div>
        </div>

        <div class="main-pane">
          <header class="panel-head">
            <div class="panel-title">
              <span class="kicker">SKILL · {{ work.slug }}</span>
              <h2>{{ work.name.zh }} <span class="en">{{ work.name.en }}</span></h2>
            </div>
            <button class="close" @click="emit('close')" aria-label="關閉">✕</button>
          </header>

          <section class="install">
            <h3>使用方式</h3>
            <ol>
              <li>
                在你的 Claude Code 專案中建立 <code>{{ targetPath }}</code>
              </li>
              <li>
                點下方「複製 SKILL.md」按鈕，把整段內容貼進該檔案
              </li>
              <li>
                在 Claude Code 中召喚 <code>{{ work.slug }}</code>，即可重現這個風格的網頁
              </li>
            </ol>
          </section>

          <section class="code-block">
            <header class="code-head">
              <span class="filename">{{ targetPath }}</span>
              <button class="copy-btn" :class="{ done: copied }" @click="copyContent">
                {{ copied ? '✓ 已複製' : '複製 SKILL.md' }}
              </button>
            </header>
            <pre><code>{{ content }}</code></pre>
          </section>
        </div>
      </aside>
    </div>
  </Transition>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(2px);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
}

.panel {
  width: min(820px, 100%);
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  box-shadow: -20px 0 60px rgba(15, 23, 42, 0.25);
  overflow: hidden;
}
.panel.has-preview {
  width: min(1200px, 100%);
}

/* 主內容欄（標題 + 安裝說明 + SKILL code）—— 維持原本垂直堆疊 */
.main-pane {
  flex: 1 1 0;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 行動 App 預覽欄：左側手機外框，等比縮放使整支裝置一眼可見 */
.preview-pane {
  flex: 0 0 auto;
  background: #eef2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-right: 1px solid rgba(15, 23, 42, 0.08);
  overflow: hidden;
}
.phone-scale {
  --s: 0.82;
  width: calc(412px * var(--s)); /* 390 + 11*2 border */
  height: calc(866px * var(--s)); /* 844 + 11*2 border */
}
.phone-inner {
  width: 412px;
  height: 866px;
  transform: scale(var(--s));
  transform-origin: top left;
}
@media (max-height: 880px) {
  .phone-scale {
    --s: 0.66;
  }
}
@media (max-height: 700px) {
  .phone-scale {
    --s: 0.52;
  }
}
/* 窄螢幕：改為上下堆疊（預覽在上、SKILL 在下） */
@media (max-width: 980px) {
  .panel.has-preview {
    flex-direction: column;
  }
  .preview-pane {
    border-right: none;
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    padding: 14px;
  }
  .phone-scale {
    --s: 0.5;
  }
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  flex-shrink: 0;
}
.panel-title {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.kicker {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
  font-family:
    'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace;
}
.panel-title h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #0f172a;
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}
.panel-title .en {
  font-size: 13px;
  letter-spacing: 0.06em;
  color: #64748b;
  text-transform: uppercase;
}

.close {
  appearance: none;
  background: transparent;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 999px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 14px;
  color: #1e293b;
  display: grid;
  place-items: center;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.close:hover {
  background: #f1f5f9;
  border-color: rgba(15, 23, 42, 0.24);
}

.install {
  padding: 20px 28px;
  background: #f8fafc;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  flex-shrink: 0;
}
.install h3 {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: #1e293b;
  text-transform: uppercase;
  font-weight: 600;
}
.install ol {
  margin: 0;
  padding-left: 1.4em;
  font-size: 13.5px;
  line-height: 1.75;
  color: #334155;
}
.install li + li {
  margin-top: 4px;
}
.install code {
  background: #e2e8f0;
  color: #0f172a;
  padding: 1px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', 'JetBrains Mono', 'Menlo', monospace;
  font-size: 12.5px;
}

.code-block {
  flex: 1 1 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: #0f172a;
}
.code-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 28px;
  background: #1e293b;
  flex-shrink: 0;
}
.filename {
  font-family: 'SF Mono', 'JetBrains Mono', 'Menlo', monospace;
  font-size: 12px;
  color: #94a3b8;
}
.copy-btn {
  appearance: none;
  background: #f8fafc;
  color: #0f172a;
  border: none;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease;
}
.copy-btn:hover {
  background: #ffffff;
}
.copy-btn.done {
  background: #22c55e;
  color: #ffffff;
}

.code-block pre {
  margin: 0;
  flex: 1 1 0;
  min-height: 0;
  overflow: auto;
  padding: 20px 28px 28px;
  color: #e2e8f0;
  font-family: 'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', monospace;
  font-size: 12.5px;
  line-height: 1.65;
  white-space: pre;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.22s ease;
}
.drawer-enter-active .panel,
.drawer-leave-active .panel {
  transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}
.drawer-enter-from .panel,
.drawer-leave-to .panel {
  transform: translateX(100%);
}

@media (max-width: 720px) {
  .panel-head,
  .install,
  .code-head,
  .code-block pre {
    padding-left: 18px;
    padding-right: 18px;
  }
}
</style>
