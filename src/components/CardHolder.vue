<template>
  <div
    :class="[
      'grid w-full gap-4 my-8',
      'grid-cols-3',
      'md:grid-cols-4',
      'lg:grid-cols-5',
      'xl:grid-cols-6',
      'pb-8',
      extraClasses,
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  extraClasses: {
    type: String,
    default: '',
  },
})
</script>
