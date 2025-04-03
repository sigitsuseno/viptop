<template>
  <div class="swip mt-4">
    <Swiper
      :effect="'coverflow'"
      :loop="true"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
        el: '.custom-pagination',
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
        renderBullet: null,
      }"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img
          :src="typeof image === 'string' ? image.src : image.src"
          :alt="image.alt || `Slide ${index + 1}`"
        />
        {{ image }}
      </SwiperSlide>

      <!-- Custom Navigation -->
      <div class="custom-navigation">
        <button class="custom-prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
          </svg>
        </button>
        <button class="custom-next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </button>
      </div>

      <!-- Custom Pagination (Line Style) -->
      <div class="custom-pagination"></div>
    </Swiper>
  </div>
</template>

<script setup>
// Import core styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
// Import required modules
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Pagination, Navigation, EffectCoverflow, Autoplay]

defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped>
/* Main container */
.swip {
  position: relative;
  padding-bottom: 30px; /* Space for pagination */
}

.custom-navigation {
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  transform: translateY(-55%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
  pointer-events: none;
}

.custom-prev,
.custom-next {
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s ease;
  opacity: 0;
}

.custom-prev svg,
.custom-next svg {
  width: 24px;
  height: 24px;
}

.mySwiper:hover .custom-prev,
.mySwiper:hover .custom-next {
  opacity: 1;
}

.custom-prev {
  transform: translateX(40px);
}

.custom-next {
  transform: translateX(-40px);
}

.mySwiper:hover .custom-prev {
  transform: translateX(0);
}

.mySwiper:hover .custom-next {
  transform: translateX(0);
}

/* Custom Pagination (Line Style) */
:deep(.custom-pagination) {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 10;
}

:deep(.custom-bullet) {
  width: 20px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
}
:deep(.custom-bullet:hover) {
  background-color: oklch(0.707 0.165 254.624);
}

:deep(.custom-bullet-active) {
  width: 30px;
  background-color: oklch(0.707 0.165 254.624);
}

@media (max-width: 1023.99px) {
  .swiper {
    width: 100%;
    height: 280px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    max-width: 450px;
    max-height: 244px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 20px 0px #000;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .custom-navigation {
    padding: 0 10px;
  }

  .custom-prev,
  .custom-next {
    width: 36px;
    height: 36px;
  }

  :deep(.custom-bullet) {
    width: 15px;
    height: 5px;
    cursor: pointer;
  }

  :deep(.custom-bullet-active) {
    width: 20px;
    background-color: oklch(0.707 0.165 254.624);
  }
  :deep(.custom-bullet:hover) {
    background-color: oklch(0.707 0.165 254.624);
  }
}

@media (min-width: 1024px) {
  .swiper {
    width: 100%;
    height: 440px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 729px;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 20px 0px #000;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
