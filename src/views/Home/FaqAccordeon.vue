<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})

const isOpen = ref(false)
</script>

<template>
  <div
    class="w-full flex flex-col justify-start items-start mb-4 bg-white/20 rounded-xl shadow-lg overflow-hidden"
  >
    <button
      @click="isOpen = !isOpen"
      class="py-2 px-4 bg-gradient-to-r from-blue-800/70 via-indigo-600/70 to-blue-900/70 w-full hover:bg-blue-950 relative transition-all duration-300"
      :class="{ 'rounded-t-xl': isOpen, 'rounded-xl': !isOpen }"
    >
      <div class="flex flex-row justify-start gap-3 items-center">
        <div class="w-[40px] h-8 flex justify-center items-center rounded-full bg-white/20">?</div>
        <p class="w-[calc(100%-5rem)] text-left font-semibold text-sm lg:text-base">
          {{ question }}
        </p>
      </div>
      <Icon
        :icon="isOpen ? 'meteor-icons:minus' : 'meteor-icons:plus'"
        class="text-2xl absolute top-3 right-4 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[500px]"
      leave-from-class="opacity-100 max-h-[500px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-show="isOpen" class="p-4 bg-blue-900/10 w-full">
        <p class="font-medium text-blue-100 mb-2">Jawab:</p>
        <p class="text-white/80">{{ answer }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.frame3 {
  --a: 1.5rem;
  --b: calc(100% - var(--a));
  clip-path: polygon(0 var(--a), 0 100%, var(--b) 100%, 100% var(--b), 100% 0, var(--a) 0);
}
</style>
