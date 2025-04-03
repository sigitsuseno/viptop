<template>
  <div class="swiper-container">
    <swiper
      :loop="true"
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :space-between="20"
      :pagination="{
        clickable: true,
        type: 'progressbar',
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <!-- swiper item slider -->
      <swiper-slide>
        <div class="w-full h-full p-1 relative">
          <div
            class="inverted-radius inset-shadow-sm inset-shadow-blue-600 bg-blue-500/50 grid grid-cols-[100px_1fr]"
          >
            <div class="w-[100px] h-[110%] bg-slate-200/20 py-2 flex flex-col justify-start">
              <div class="w-full h-[100px] overflow-hidden p-2">
                <img
                  src="/src/assets/promo/token.webp"
                  alt=""
                  class="w-full h-full object-contain"
                />
              </div>
              <span class="text-center font-bold">Tokens</span>
            </div>
            <!-- text promo -->
            <a href class="w-full h-full pt-3">
              <div class="w-full h-24">
                <h4 class="font-bold tracking-wide text-lg/6">Honor Of Kings of Sunshine</h4>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[5px]">
                  1200 + 108 Tokens gratitute gratitute
                </p>
              </div>
              <div>
                <div class="line-through text-red-600 text-sm">Rp. 267.030</div>
                <div class="font-bold text-xl -mt-1">Rp. 209.000</div>
                <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div class="bg-blue-600 h-1 rounded-full" style="width: 35%"></div>
                </div>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[2px]">12 item tersisa</p>
              </div>
            </a>
          </div>
          <div class="absolute top-0 right-4 z-10 flag-vertical bg-red-600 text-center">
            <span class="font-bold text-blue-100">-20% OFF</span>
          </div>
        </div>
      </swiper-slide>

      <!-- swiper item slider -->
      <swiper-slide>
        <div class="w-full h-full p-1 relative">
          <div
            class="inverted-radius inset-shadow-sm inset-shadow-blue-600 bg-blue-500/50 grid grid-cols-[100px_1fr]"
          >
            <div class="w-[100px] h-[110%] bg-slate-200/20 py-4 flex flex-col">
              <div class="w-full h-[100px] overflow-hidden p-2">
                <img src="/src/assets/promo/wdp.webp" alt="" class="w-full h-full" />
              </div>
              <p class="text-center font-bold leading-[20px]">Weakly Diamond Pass</p>
            </div>
            <!-- text promo -->
            <a href="/" class="w-full h-full pt-3">
              <div class="w-full h-24">
                <h4 class="font-bold tracking-wide text-lg/6">Mobile Legend Bang-Bang</h4>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[5px]">
                  Weakly Diamond Pass (Event TopUp + 200)
                </p>
              </div>
              <div>
                <div class="line-through text-red-600 text-sm">Rp. 267.030</div>
                <div class="font-bold text-xl -mt-1">Rp. 209.000</div>
                <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div class="bg-blue-600 h-1 rounded-full" style="width: 35%"></div>
                </div>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[2px]">12 item tersisa</p>
              </div>
            </a>
          </div>
          <div class="absolute top-0 right-4 z-10 flag-vertical bg-red-600 text-center">
            <span class="font-bold text-blue-100">-20% OFF</span>
          </div>
        </div>
      </swiper-slide>

      <!-- swiper item slider -->
      <swiper-slide>
        <div class="w-full h-full p-1 relative">
          <div
            class="inverted-radius inset-shadow-sm inset-shadow-blue-600 bg-blue-500/50 grid grid-cols-[100px_1fr]"
          >
            <div class="w-[100px] h-[110%] bg-slate-200/20 py-2 flex flex-col justify-start">
              <div class="w-full h-[100px] overflow-hidden p-2">
                <img
                  src="/src/assets/promo/token.webp"
                  alt=""
                  class="w-full h-full object-contain"
                />
              </div>
              <span class="text-center font-bold">Tokens</span>
            </div>
            <!-- text promo -->
            <a href="/" class="w-full h-full pt-3">
              <div class="w-full h-24">
                <h4 class="font-bold tracking-wide text-lg/6">Honor Of Kings of Sunshine</h4>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[5px]">
                  1200 + 108 Tokens gratitute gratitute
                </p>
              </div>
              <div>
                <div class="line-through text-red-600 text-sm">Rp. 267.030</div>
                <div class="font-bold text-xl -mt-1">Rp. 209.000</div>
                <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div class="bg-blue-600 h-1 rounded-full" style="width: 35%"></div>
                </div>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[2px]">12 item tersisa</p>
              </div>
            </a>
          </div>
          <div class="absolute top-0 right-4 z-10 flag-vertical bg-red-600 text-center">
            <span class="font-bold text-blue-100">-20% OFF</span>
          </div>
        </div>
      </swiper-slide>

      <!-- swiper item slider -->
      <swiper-slide>
        <div class="w-full h-full p-1 relative">
          <div
            class="inverted-radius inset-shadow-sm inset-shadow-blue-600 bg-blue-500/50 grid grid-cols-[100px_1fr]"
          >
            <div class="w-[100px] h-[110%] bg-slate-200/20 py-4 flex flex-col">
              <div class="w-full h-[100px] overflow-hidden p-2">
                <img src="/src/assets/promo/wdp.webp" alt="" class="w-full h-full" />
              </div>
              <p class="text-center font-bold leading-[20px]">Weakly Diamond Pass</p>
            </div>
            <!-- text promo -->
            <a href="/" class="w-full h-full pt-3">
              <div class="w-full h-24">
                <h4 class="font-bold tracking-wide text-lg/6">Mobile Legend Bang-Bang</h4>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[5px]">
                  Weakly Diamond Pass (Event TopUp + 200)
                </p>
              </div>
              <div>
                <div class="line-through text-red-600 text-sm">Rp. 267.030</div>
                <div class="font-bold text-xl -mt-1">Rp. 209.000</div>
                <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div class="bg-blue-600 h-1 rounded-full" style="width: 35%"></div>
                </div>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[2px]">12 item tersisa</p>
              </div>
            </a>
          </div>
          <div class="absolute top-0 right-4 z-10 flag-vertical bg-red-600 text-center">
            <span class="font-bold text-blue-100">-20% OFF</span>
          </div>
        </div>
      </swiper-slide>

      <!-- swiper item slider -->
      <swiper-slide>
        <div class="w-full h-full p-1 relative">
          <div
            class="inverted-radius inset-shadow-sm inset-shadow-blue-600 bg-blue-500/50 grid grid-cols-[100px_1fr]"
          >
            <div class="w-[100px] h-[110%] bg-slate-200/20 py-2 flex flex-col justify-start">
              <div class="w-full h-[100px] overflow-hidden p-2">
                <img
                  src="/src/assets/promo/token.webp"
                  alt=""
                  class="w-full h-full object-contain"
                />
              </div>
              <span class="text-center font-bold">Tokens</span>
            </div>
            <!-- text promo -->
            <a href="/" class="w-full h-full pt-3">
              <div class="w-full h-24">
                <h4 class="font-bold tracking-wide text-lg/6">Honor Of Kings of Sunshine</h4>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[5px]">
                  1200 + 108 Tokens gratitute gratitute
                </p>
              </div>
              <div>
                <div class="line-through text-red-600 text-sm">Rp. 267.030</div>
                <div class="font-bold text-xl -mt-1">Rp. 209.000</div>
                <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div class="bg-blue-600 h-1 rounded-full" style="width: 35%"></div>
                </div>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[2px]">12 item tersisa</p>
              </div>
            </a>
          </div>
          <div class="absolute top-0 right-4 z-10 flag-vertical bg-red-600 text-center">
            <span class="font-bold text-blue-100">-20% OFF</span>
          </div>
        </div>
      </swiper-slide>

      <!-- swiper item slider -->
      <swiper-slide>
        <div class="w-full h-full p-1 relative">
          <div
            class="inverted-radius inset-shadow-sm inset-shadow-blue-600 bg-blue-500/50 grid grid-cols-[100px_1fr]"
          >
            <div class="w-[100px] h-[110%] bg-slate-200/20 py-4 flex flex-col">
              <div class="w-full h-[100px] overflow-hidden p-2">
                <img src="/src/assets/promo/wdp.webp" alt="" class="w-full h-full" />
              </div>
              <p class="text-center font-bold leading-[20px]">Weakly Diamond Pass</p>
            </div>
            <!-- text promo -->
            <a href="/" class="w-full h-full pt-3">
              <div class="w-full h-24">
                <h4 class="font-bold tracking-wide text-lg/6">Mobile Legend Bang-Bang</h4>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[5px]">
                  Weakly Diamond Pass (Event TopUp + 200)
                </p>
              </div>
              <div>
                <div class="line-through text-red-600 text-sm">Rp. 267.030</div>
                <div class="font-bold text-xl -mt-1">Rp. 209.000</div>
                <div class="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div class="bg-blue-600 h-1 rounded-full" style="width: 35%"></div>
                </div>
                <p class="font-thin tracking-wide text-[12px]/[16px] pt-[2px]">12 item tersisa</p>
              </div>
            </a>
          </div>
          <div class="absolute top-0 right-4 z-10 flag-vertical bg-red-600 text-center">
            <span class="font-bold text-blue-100">-20% OFF</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const modules = [Pagination, Navigation, Autoplay]
</script>

<style scoped>
.swiper-container {
  padding: 20px 0 20px;
}

.mySwiper {
  width: 100%;
  height: 220px;
}

.swiper-slide {
  width: 320px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-wrapper {
  padding: 5px !important;
}
.inverted-radius {
  height: 100%;
  width: 100%;
  padding: 0 10px;
  aspect-ratio: 1;
  border-radius: 10px;
  mask-repeat: no-repeat;

  gap: 10px;
  --satu: calc(100% - 25px);
  clip-path: polygon(0% 25px, 0% 100%, var(--satu) 100%, 100% var(--satu), 100% 0%, 25px 0%);
}

.flag-vertical {
  --p: 50px;
  width: 50px;
  height: 80px;
  aspect-ratio: 3/2;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%);
}

/* Progress bar styling */
:deep(.swiper-pagination-progressbar) {
  bottom: 0;
  top: auto;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
}

:deep(.swiper-pagination-progressbar-fill) {
  background: #3fb8af;
}
</style>
