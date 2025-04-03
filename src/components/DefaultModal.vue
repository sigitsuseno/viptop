<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const modalRef = ref(null)

// Handle click outside
const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    emit('close')
  }
}

// Handle escape key
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    emit('close')
  }
}

// Lock scroll when modal is open
const lockScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = '15px' // Prevent content shift
}

const unlockScroll = () => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}

// Setup event listeners
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
  if (props.show) lockScroll()
})

// Cleanup
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
  unlockScroll()
})

// Watch for show changes
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      lockScroll()
    } else {
      unlockScroll()
    }
  },
)
</script>

<template>
  <Teleport to="body">
    <!-- Overlay with fade transition -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="fixed inset-0 bg-slate-900/50 bg-opacity-50 z-50"></div>
    </transition>

    <!-- Modal container with slide down transition -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 translate-y-[-50px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-50px]"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
      >
        <!-- Modal content -->
        <div
          ref="modalRef"
          class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-auto overflow-hidden"
        >
          <!-- Close button -->
          <button
            @click="$emit('close')"
            class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <!-- Slot for content -->
          <div class="p-6">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
