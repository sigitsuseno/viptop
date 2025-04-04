<template>
  <div class="swiper-container">
    <swiper
      :loop="true"
      :space-between="20"
      :navigation="false"
      :modules="modules"
      :breakpoints="breakpoints"
      class="mySwiper"
    >
      <!-- swiper item slider -->
      <SwiperSlide v-for="(item, index) in testimonials" :key="index">
        <div
          class="w-full p-4 frame bg-gradient-to-r from-indigo-800/50 from-10% via-purple-800/50 via-70% to-purple-950/50 to-90%"
        >
          <div class="grid grid-rows-[125px_1fr] lg:grid-cols-[112px_1fr] gap-4">
            <div class="flex flex-col items-center justify-center">
              <div
                class="w-28 h-28 frame2 overflow-hidden bg-orange-300 flex items-center justify-center"
              >
                <div class="w-[100px] h-[100px] frame3 overflow-hidden bg-white">
                  <img :src="item.avatar" :alt="item.name" class="w-full h-full object-cover" />
                </div>
              </div>
              <div class="flex flex-row items-center justify-start gap-1 mt-2">
                <StartLike v-for="(star, i) in 5" :key="i" />
              </div>
            </div>

            <div class="flex flex-col lg:items-start lg:justify-start items-center">
              <div class="text-2xl font-bold text-white">
                {{ item.name }}
              </div>
              <a
                href="/"
                class="frame3 py-2 px-4 bg-linear-to-r from-purple-800 to-blue-500 mt-2 flex flex-row items-center justify-start gap-2"
              >
                <img
                  src="https://testweb.imatechcom.com/viptop/youtube-color-svgrepo-com.svg"
                  :alt="item.game"
                  class="w-8 h-8 object-cover"
                />
                <span>{{ item.game }}</span>
              </a>
              <div class="text-sm text-gray-300 mt-2">"{{ item.testimonial }}"</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import StartLike from '@/components/StartLike.vue'

const modules = [Pagination, Navigation, Autoplay]

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
  },
  // when window width is >= 1024px
  1024: {
    slidesPerView: 2,
  },
}

defineProps({
  testimonials: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped>
.swiper-container {
  padding: 20px 0;
}

.mySwiper {
  width: 100%;
  height: auto;
}

.swiper-slide {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-wrapper {
  padding: 5px !important;
}

.frame {
  --a: 1.8rem;
  --b: calc(100% - var(--a));
  clip-path: polygon(0 var(--a), 0 100%, var(--b) 100%, 100% var(--b), 100% 0, var(--a) 0);
}

.frame2 {
  --a: 1.6rem;
  --b: calc(100% - var(--a));
  clip-path: polygon(0 var(--a), 0 100%, var(--b) 100%, 100% var(--b), 100% 0, var(--a) 0);
}

.frame3 {
  --a: 1.5rem;
  --b: calc(100% - var(--a));
  clip-path: polygon(0 var(--a), 0 100%, var(--b) 100%, 100% var(--b), 100% 0, var(--a) 0);
}
</style>
