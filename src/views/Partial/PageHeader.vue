<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

import NavSearch from '@/components/NavSearch.vue'
import HeadlessModal from '@/components/HeadlessModal.vue'
import LoginView from '../Auth/LoginView.vue'
// import RegisterView from '../Auth/RegisterView.vue'

const logo = ref({
  src: null,
  alt: 'Vue logo',
})

const showMobileSearch = ref(false)
const mobileSearchRef = ref(null)
const searchButtonRef = ref(null)
const showModal = ref(false)
// const tampil = ref(false)

// Click outside handler
const handleClickOutside = (event) => {
  if (
    mobileSearchRef.value &&
    !mobileSearchRef.value.contains(event.target) &&
    searchButtonRef.value &&
    !searchButtonRef.value.contains(event.target)
  ) {
    showMobileSearch.value = false
  }
}

// Add event listener when component mounts
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

// Remove event listener when component unmounts
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <!-- header -->
  <header class="bg-blue-950 text-blue-100 w-full fixed top-0 z-50">
    <div class="container mx-auto flex items-center justify-between py-4 h-20 relative">
      <!-- logo -->
      <RouterLink to="/" class="max-w-[125px] pl-4 lg:pl-0 lg:w-[255px]">
        <img
          v-if="logo.src"
          :alt="logo.alt"
          class="logo"
          :src="logo.src"
          width="125"
          height="125"
        />
        <div v-else class="text-xl font-bold">
          <span class="bg-linear-65 from-purple-500 to-pink-500 px-2 pb-1 rounded-md">VIP</span>
          <span
            class="font-bold bg-gradient-to-r from-blue-50 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >Top</span
          >
        </div>
      </RouterLink>

      <!-- search button for mobile -->
      <div class="lg:hidden mr-4 flex flex-row items-center justify-center gap-4">
        <button
          ref="searchButtonRef"
          @click="showMobileSearch = !showMobileSearch"
          class="focus:outline-none"
        >
          <Icon icon="tabler:search" class="text-blue-100 text-3xl" />
        </button>
        <Icon icon="tabler:user-square-rounded" class="text-blue-100 text-4xl" />
      </div>

      <!-- search for desktop -->
      <div class="hidden lg:block w-full lg:w-1/2">
        <NavSearch />
      </div>

      <!-- mobile search dropdown with transition -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="showMobileSearch"
          ref="mobileSearchRef"
          class="lg:hidden absolute top-full left-0 w-full bg-blue-950 p-4 shadow-lg z-50"
        >
          <NavSearch />
        </div>
      </transition>

      <!-- nav -->
      <div
        class="fixed left-0 bottom-0 w-full p-2 bg-blue-950 text-blue-100 lg:relative lg:bg-transparent lg:h-auto lg:w-auto lg:flex-row lg:gap-4"
      >
        <nav
          class="flex flex-row items-center justify-around lg:gap-4 lg:justify-start lg:items-center lg:w-full"
        >
          <RouterLink
            to="/"
            class="flex flex-col items-center"
            active-class="text-blue-400 font-medium"
          >
            <Icon icon="tabler:home" class="text-4xl lg:hidden" />
            <span class="text-sm font-light lg:text-[1rem] lg:font-bold">Home</span>
          </RouterLink>
          <RouterLink
            to="/order"
            class="flex flex-col items-center"
            active-class="text-blue-400 font-medium"
          >
            <Icon icon="tabler:shopping-cart" class="text-4xl lg:hidden" />
            <span class="text-sm font-light lg:text-[1rem] lg:font-bold">Cek Order</span>
          </RouterLink>
          <RouterLink
            to="/promo"
            class="flex flex-col lg:hidden items-center"
            active-class="text-blue-400 font-medium"
          >
            <Icon icon="tabler:rosette-discount" class="text-4xl lg:hidden" />
            <span class="text-sm font-light lg:text-[1rem] lg:font-bold">Promo</span>
          </RouterLink>
          <button class="flex flex-col cursor-pointer items-center" @click="showModal = true">
            <Icon icon="codicon:sign-in" class="text-4xl lg:hidden" />
            <span class="text-sm font-light lg:text-[1rem] lg:font-bold">Sign In</span>
          </button>

          <!-- modal login -->
          <HeadlessModal :show="showModal" @close="showModal = false">
            <LoginView />

            <button
              @click="showModal = false"
              class="absolute top-2 left-2 px-2 py-2 rounded-full bg-transparent cursor-pointer text-blue-100 hover:text-blue-200 transition-colors duration-300 hover:bg-blue-900 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12l6 6m-6-6l6-6"
                />
              </svg>
            </button>
          </HeadlessModal>

          <!-- <HeadlessModal :show="tampil" @close="showModal = false">
            <RegisterView />

            <button
              @click="tampil = false"
              class="absolute top-2 left-2 px-2 py-2 rounded-full bg-transparent cursor-pointer text-blue-100 hover:text-blue-200 transition-colors duration-300 hover:bg-blue-900 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12l6 6m-6-6l6-6"
                />
              </svg>
            </button>
          </HeadlessModal> -->
        </nav>
      </div>
    </div>
  </header>
</template>
