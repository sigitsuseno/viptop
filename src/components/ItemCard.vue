<template>
  <RouterLink
    :to="href"
    class="relative aspect-2/3 bg-blue-950 rounded-2xl shadow-lg hover:shadow-slate-700 shadow-slate-950 flex flex-col p-2 overflow-hidden"
  >
    <div class="w-full aspect-square overflow-clip rounded-md bg-blue-200/15">
      <img
        :src="src"
        alt=""
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h5 class="lg:text-xl text-center mt-3">{{ title }}</h5>
    <div
      v-if="disc !== ''"
      class="absolute top-0 left-0 bg-red-500 rounded-tl-2xl rounded-br-2xl py-1 px-2 h-8 w-16 text-center"
    >
      <span class="font-bold">{{ disc }}</span>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: '/',
  },
  title: {
    type: String,
    default: 'Viptop Item',
  },
  src: {
    type: String,
    default: '/src/assets/default-bg.png',
  },
  disc: {
    type: String,

    default: '',
  },
})
</script>
