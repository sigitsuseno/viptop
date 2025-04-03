<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import semua gambar secara eksplisit
import qris from '@/assets/pembayaran/qris.png'
import alfamart from '@/assets/pembayaran/alfamart.png'
import indomaret from '@/assets/pembayaran/indomaret.png'
import bca from '@/assets/pembayaran/bca.png'
import bni from '@/assets/pembayaran/bni.png'
import bri from '@/assets/pembayaran/bri.png'
import mandiri from '@/assets/pembayaran/mandiri.png'
import dana from '@/assets/pembayaran/dana.png'
import ovo from '@/assets/pembayaran/ovo.png'
import spay from '@/assets/pembayaran/spay.png'
import linkaja from '@/assets/pembayaran/linkaja.png'
import permata from '@/assets/pembayaran/permata.png'
import octo from '@/assets/pembayaran/octo.png'
import visa from '@/assets/pembayaran/visa.png'
import mastercard from '@/assets/pembayaran/mastercard.png'

const props = defineProps({
  speed: {
    type: Number,
    default: 1,
  },
  // Hapus default images dari props karena kita akan menggunakan yang diimpor
})

const containerRef = ref(null)
const animationRef = ref(null)
const isPaused = ref(false)

// Daftar gambar yang sudah diimpor
const paymentImages = [
  qris,
  alfamart,
  indomaret,
  bca,
  bni,
  bri,
  mandiri,
  dana,
  ovo,
  spay,
  linkaja,
  permata,
  octo,
  visa,
  mastercard,
]

onMounted(() => {
  let position = 0
  const container = containerRef.value

  function animate() {
    if (!isPaused.value) {
      position -= props.speed

      // Reset position ketika mencapai setengah lebar total
      if (position <= -container.scrollWidth / 2) {
        position = 0
      }

      container.style.transform = `translateX(${position}px)`
    }
    animationRef.value = requestAnimationFrame(animate)
  }

  animationRef.value = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationRef.value)
})

const pauseAnimation = () => (isPaused.value = true)
const resumeAnimation = () => (isPaused.value = false)
</script>

<template>
  <div
    class="overflow-hidden relative w-full h-12 bg-transparent"
    @mouseenter="pauseAnimation"
    @mouseleave="resumeAnimation"
  >
    <div ref="containerRef" class="absolute whitespace-nowrap flex items-center h-full">
      <img
        v-for="(image, index) in [...paymentImages]"
        :key="index"
        :src="image"
        :alt="`Payment method ${(index % paymentImages.length) + 1}`"
        class="inline-block mx-2 h-8 w-auto object-cover rounded-lg shadow-sm"
      />
    </div>
  </div>
</template>
