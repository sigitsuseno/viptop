<script setup>
import { RouterView } from 'vue-router'
import PageHeader from '@/views/Partial/PageHeader.vue'
import PageFooter from '@/views/Partial/PageFooter.vue'
// import logoImage from '@/assets/logo.svg' // Make sure this path is correct
</script>

<template>
  <!-- <div class="absolute z-[-1] top-0 left-0 w-full h-auto">
    <img src="/src/assets/qqquad.svg" alt="" />
  </div> -->
  <div
    class="fixed z-[-1] top-0 left-0 w-full h-full bg-[url('/src/assets/qqquad.svg')] bg-repeat"
  ></div>
  <!-- header -->
  <PageHeader />

  <!-- main -->
  <main class="text-blue-100 mt-20">
    <RouterView />
  </main>
  <!-- footer -->
  <PageFooter />
</template>
