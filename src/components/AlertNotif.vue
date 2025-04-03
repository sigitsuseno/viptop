<script setup>
import { ref } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: 'Silakan login untuk mengakses fitur lengkap',
  },
  pageKey: {
    type: String,
    required: true,
  },
})

const isVisible = ref(true)

const closeAlert = () => {
  isVisible.value = false
  localStorage.setItem(`alertClosed_${props.pageKey}`, 'true')
}
</script>

<template>
  <div v-if="isVisible" class="relative bg-transparent text-blue-700 container mt-4 m-auto h-20">
    <button
      @click="closeAlert"
      class="absolute top-2 right-2 text-blue-500 hover:text-blue-700 z-10"
      aria-label="Tutup notifikasi"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div
      class="papan before:bg-blue-950 after:bg-blue-950 bg-gradient-to-r from-blue-950 via-purple-800 to-blue-950"
    >
      <div class="w-full h-20 flex justify-center items-center text-blue-100">
        <span class="text-sm text-center">{{ message }}</span>
      </div>
    </div>
    <div class="slanted-right bg-blue-950 absolute top-0 right-0"></div>
    <div class="slanted-left bg-blue-950 absolute top-0 left-0"></div>
  </div>
</template>

<style scoped>
@media (max-width: 420px) {
  .slanted-right {
    --p: 60px;
    height: var(--p);
    width: 60px;
    aspect-ratio: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, var(--p) 100%);
  }
  .slanted-left {
    --p: 60px;
    height: var(--p);
    width: 60px;
    aspect-ratio: 1;
    clip-path: polygon(0 0, 100% 0, calc(100% - var(--p)) 100%, 0 100%);
  }
  /* HTML: <div class="triangle"></div> */
  .papan {
    padding: 0 10px;
    position: absolute;
    width: calc(100% - 60px);
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 8;
    border-radius: 5px;
    --a: calc(100% - 40px);
    clip-path: polygon(0 50%, 40px 100%, var(--a) 100%, 100% 50%, var(--a) 0, 40px 0);
  }
}
@media (min-width: 421px) {
  .slanted-right {
    --p: 60px;
    height: var(--p);
    width: 100px;
    aspect-ratio: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, var(--p) 100%);
  }
  .slanted-left {
    --p: 60px;
    height: var(--p);
    width: 100px;
    aspect-ratio: 1;
    clip-path: polygon(0 0, 100% 0, calc(100% - var(--p)) 100%, 0 100%);
  }
  /* HTML: <div class="triangle"></div> */
  .papan {
    padding: 0 10px;
    position: absolute;
    width: calc(100% - 140px);
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 8;
    border-radius: 5px;
    --a: calc(100% - 40px);
    clip-path: polygon(0 50%, 40px 100%, var(--a) 100%, 100% 50%, var(--a) 0, 40px 0);
  }
}
@media (min-width: 1024px) {
  .slanted-right {
    --p: 60px;
    height: var(--p);
    width: 200px;
    aspect-ratio: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, var(--p) 100%);
  }
  .slanted-left {
    --p: 60px;
    height: var(--p);
    width: 200px;
    aspect-ratio: 1;
    clip-path: polygon(0 0, 100% 0, calc(100% - var(--p)) 100%, 0 100%);
  }

  .papan {
    position: absolute;
    width: calc(100% - 340px);
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    border-radius: 5px;
    clip-path: polygon(0 50%, 40px 100%, var(--a) 100%, 100% 50%, var(--a) 0, 40px 0);
  }
}
</style>
