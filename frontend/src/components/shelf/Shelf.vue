<template>
<div>
  <div v-for="(shelfBooks, idx) in shelves" :key="idx" class="shelf-row">
    <div class="shelf">
      <div class="books">
          <Book
            v-for="b in shelfBooks"
            :key="b.id || b.title"
            :book="b"
            @checked-out="emitCheckedOut"
          />
      </div>

  <div class="leg left"></div>
  <div class="shadow"></div>
  <div class="leg right"></div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import Book from './Book.vue';

const props = defineProps<{ books?: Array<{ id?: string; title?: string }> }>();
const books = computed(() => props.books ?? []);

// responsive chunk size: 3 on large, 2 on medium (<= 1200px), 1 on mobile (<= 767px)
const chunkSize = ref<number>(3);

let mqSmall: MediaQueryList | null = null;   // <= 767px
let mqMedium: MediaQueryList | null = null;  // <= 1200px
let mqSmallHandler: ((e: MediaQueryListEvent) => void) | null = null;
let mqMediumHandler: ((e: MediaQueryListEvent) => void) | null = null;

onMounted(() => {
  if (typeof window === 'undefined' || !('matchMedia' in window)) return;
  mqSmall = window.matchMedia('(max-width: 767px)');
  mqMedium = window.matchMedia('(max-width: 1200px)');

  const setSize = (small: boolean, medium: boolean) => { chunkSize.value = small ? 1 : (medium ? 2 : 3); };
  // initialize
  setSize(mqSmall.matches, mqMedium.matches);

  const update = () => setSize(!!mqSmall?.matches, !!mqMedium?.matches);

  mqSmallHandler = (e: MediaQueryListEvent) => update();
  mqMediumHandler = (e: MediaQueryListEvent) => update();

  if (mqSmall.addEventListener) mqSmall.addEventListener('change', mqSmallHandler);
  else if ((mqSmall as any).addListener) (mqSmall as any).addListener(mqSmallHandler);

  if (mqMedium.addEventListener) mqMedium.addEventListener('change', mqMediumHandler);
  else if ((mqMedium as any).addListener) (mqMedium as any).addListener(mqMediumHandler);
});

onBeforeUnmount(() => {
  if (mqSmall && mqSmallHandler) {
    if (mqSmall.removeEventListener) mqSmall.removeEventListener('change', mqSmallHandler);
    else if ((mqSmall as any).removeListener) (mqSmall as any).removeListener(mqSmallHandler);
  }
  if (mqMedium && mqMediumHandler) {
    if (mqMedium.removeEventListener) mqMedium.removeEventListener('change', mqMediumHandler);
    else if ((mqMedium as any).removeListener) (mqMedium as any).removeListener(mqMediumHandler);
  }
});

const shelves = computed(() => {
  const list = books.value || [];
  const out: Array<Array<any>> = [];
  const size = Math.max(1, Math.floor(chunkSize.value || 3));
  for (let i = 0; i < list.length; i += size) {
    out.push(list.slice(i, i + size));
  }
  return out.length ? out : [[]];
});

const q = ref('');
const emit = defineEmits<{
  (e: 'checked-out', book?: any): void;
  (e: 'returned', book?: any): void;
}>();

function emitCheckedOut(bk: any) {
  emit('checked-out', bk);
}
</script>

<style scoped lang="scss">
.shelf {
  width: 100%;
  position: relative;
  margin: 4rem auto;
  display: flex;
  align-items: flex-end;
  border-radius: 0.2rem;
  background: transparent;
  overflow: visible;

  /* bottom bar */
  &::after {
    content: '';
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    height: 1em;
    bottom: -0.9em;
    background: #d97a53;
    border-radius: 0.2rem;
    z-index: 1;
  }

  .leg {
    width: 1em;
    height: 2em;
    position: absolute;
    bottom: -2.5rem;
    background: #732b23;
    border-radius: 0 0 0.15rem 0.15rem;
    z-index: 0;
  }

  .leg.left { left: 1em; }
  .leg.right { right: 1em; }
}

.shadow {
    position: absolute;
    bottom: -2.5em;
    height: 1.7em;
    left: 1em;
    right: 1em;
    z-index: -1;
    background: linear-gradient(to bottom, #545454ee 0%, #fff 100%);
}

/* book visuals */
.books {
    display: flex;
    justify-content: space-between;
    gap: 0.4rem;
    padding: 0.6rem 1rem;
    width: 100%;

}
</style>
