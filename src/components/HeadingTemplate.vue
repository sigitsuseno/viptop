<template>
  <div class="relative w-full h-16">
    <div :class="`absolute left-4 -top-2 w-16 h-16 ${color} shadow-lg shadow-slate-950`">
      <img :src="themeImage" alt="tema image" />
    </div>
    <div
      class="w-full h-12 bg-blue-950 flex items-center shadow-[0_3px_10px_0px_#00000088] shadow-slate-950"
    >
      <h4 class="ml-24 text-xl lg:text-2xl font-bold tracking-wider z-10 shadow-text">
        {{ headingName }}
      </h4>
    </div>
    <div class="slanted-edge absolute top-0 right-0">
      <img :src="headingImage" alt="tema image" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  headingName: {
    type: String,
    required: true,
  },
  headingImage: {
    type: String,
    default: '/src/assets/bg-3.jpg',
  },
  themeImage: {
    type: String,
    default: '/src/assets/tag.png',
  },
  color: {
    type: String,
    default: 'bg-orange-400',
  },
})
</script>

<style scoped>
@media (max-width: 1023.99px) {
  .slanted-edge {
    --p: 70px; /* control the shape (can be percentage) */
    height: 64px;
    width: 200px;
    aspect-ratio: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, var(--p) 100%);
  }
}
@media (min-width: 1024px) {
  .slanted-edge {
    --p: 70px; /* control the shape (can be percentage) */
    height: 64px;
    width: 270px;
    aspect-ratio: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, var(--p) 100%);
  }
}

.shadow-text {
  text-shadow: 2px 2px 4px #000000;
}
</style>
