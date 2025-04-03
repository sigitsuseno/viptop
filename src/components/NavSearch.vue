<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const searchQuery = ref('')
const inputRef = ref(null)

const clearSearch = () => {
  searchQuery.value = ''
  // Fokus kembali ke input setelah clear
  inputRef.value?.focus()
}
</script>

<template>
  <div class="relative">
    <input
      ref="inputRef"
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
      class="bg-[var(--bg-field-color)] text-blue-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 ring-1 ring-[var(--ring-color)] w-full pr-10"
    />
    <transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-100 focus:outline-none z-10"
        aria-label="Clear search"
      >
        <Icon icon="tabler:x" class="text-xl" />
      </button>
    </transition>
  </div>
</template>
