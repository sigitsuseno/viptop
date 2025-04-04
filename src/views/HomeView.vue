<script setup>
import { ref } from 'vue'
import HeroSlider from './Home/HeroSlider.vue'

import HeadingTemplate from '@/components/HeadingTemplate.vue'
import ItemCard from '@/components/ItemCard.vue'
import CardHolder from '@/components/CardHolder.vue'

// gambar
import gambarFF from '@/assets/promo/compressed/ff.png'
import mlbb from '@/assets/promo/compressed/mlbb.png'
import apex from '@/assets/promo/compressed/apex.png'
import pubg from '@/assets/promo/compressed/pubg.png'
import cod from '@/assets/promo/compressed/slider-cod.png'
import steam from '@/assets/promo/compressed/steam-mh.png'
import headingBest from '@/assets/h-image.webp'
import headingPromo from '@/assets/bg-3.jpg'
import flashSale from '@/assets/tag.png'
import bestSeler from '@/assets/best.png'
import AlertNotif from '@/components/AlertNotif.vue'
import PromoSlider from './Home/PromoSlider.vue'
import TestemoniSlider from './Home/TestemoniSlider.vue'

const imageList = ref([
  { src: gambarFF, alt: 'Free Fire' },
  { src: mlbb, alt: 'Mobile Legends' },
  { src: apex, alt: 'Apex Legends' },
  { src: pubg, alt: 'PUBG' },
  { src: cod, alt: 'Call of Duty' },
  { src: steam, alt: 'Steam' },
])

const testemoni = ref([
  {
    name: 'The Marveric',
    game: 'MAV-GOO',
    avatar: 'https://testweb.imatechcom.com/viptop/unnamed.webp',
    testimonial:
      'Rekomendasi tempat topup terpercaya andalan gue, karena Viptop tempat top up yg dapat menyediakan berbagai jenis game mobile. fast response, dan harganya yg murah, Fasilitas VIP harga murah, dan banyak promo menarik lainnya. Pokoknya',
  },
  {
    name: 'Girl Gamer',
    game: 'GALVtOP',
    avatar: 'https://testweb.imatechcom.com/viptop/avatar-1.jpg',
    testimonial:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
  {
    name: 'The Marveric',
    game: 'MetroGamer',
    avatar: 'https://testweb.imatechcom.com/viptop/avatar-2.jpg',
    testimonial:
      'ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, Fasilitas VIP harga murah, dan banyak promo menarik lainnya. Pokoknya.',
  },
  {
    name: 'The Marveric',
    game: 'KensRETRO',
    avatar: 'https://testweb.imatechcom.com/viptop/avatar-3.jpg',
    testimonial:
      'Rekomendasi tempat topup terpercaya andalan gue, karena Viptop tempat top up yg dapat menyediakan berbagai jenis game mobile. fast response, dan harganya yg murah, Fasilitas VIP harga murah, dan banyak promo menarik lainnya. Pokoknya',
  },
])
</script>

<template>
  <div class="flex flex-col justify-start relative">
    <!-- Notification Alert -->
    <AlertNotif page-key="home" message="Login sekarang untuk mendapatkan promo eksklusif!" />

    <!-- Main Content -->
    <section class="flex flex-col">
      <!-- Hero Slider -->
      <HeroSlider :images="imageList" />
    </section>
    <!-- Additional Content -->
    <section class="flex flex-col items-start">
      <div class="container m-auto p-4 lg:p-0">
        <HeadingTemplate
          headingName="PROMO"
          :themeImage="flashSale"
          color="bg-purple-600"
          :headingImage="headingPromo"
        />
      </div>
      <div class="bg-blue-800/30 w-full mb-4 lg:mt-2">
        <div class="container m-auto bg-blue lg:px-0">
          <PromoSlider />
        </div>
      </div>
    </section>

    <section class="container mx-auto flex flex-col items-start p-4 lg:p-0 mt-2">
      <HeadingTemplate
        headingName="Best Seller"
        :themeImage="bestSeler"
        :headingImage="headingBest"
      />
      <CardHolder>
        <ItemCard
          href="/pembelian-nama-game"
          title="AFK Journey"
          src="https://testweb.imatechcom.com/viptop/item/afk.webp"
          disc="-10%"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="Free Fire"
          src="https://testweb.imatechcom.com/viptop/item/ff.webp"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="GI Cristal"
          src="https://testweb.imatechcom.com/viptop/item/gi.webp"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="Honor of Kings"
          src="https://testweb.imatechcom.com/viptop/item/hoc.webp"
          disc="-10%"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="Honkai Star Rail"
          src="https://testweb.imatechcom.com/viptop/item/hsr.webp"
          disc="-10%"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="Mobile Legend Bang-bang"
          src="https://testweb.imatechcom.com/viptop/item/mlbb.webp"
          disc="-10%"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="P.U.B.G Mobile"
          src="https://testweb.imatechcom.com/viptop/item/pubg.webp"
          disc="-10%"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="VALORAN"
          src="https://testweb.imatechcom.com/viptop/item/valoran.webp"
          disc="-10%"
        />
      </CardHolder>
    </section>

    <section class="container m-auto flex flex-col items-start p-4 lg:p-0">
      <HeadingTemplate
        headingName="Item Terbaru"
        :themeImage="flashSale"
        color="bg-purple-600"
        :headingImage="headingPromo"
      />
      <CardHolder>
        <ItemCard
          href="/pembelian-nama-game"
          title="P.U.B.G Mobile"
          src="https://testweb.imatechcom.com/viptop/item/pubg.webp"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="Mobile Legend Bang-bang"
          src="https://testweb.imatechcom.com/viptop/item/mlbb.webp"
        />
        <ItemCard
          href="/pembelian-nama-game"
          title="Ragnarok M"
          src="https://testweb.imatechcom.com/viptop/item/ragnarok.webp"
        />
      </CardHolder>
    </section>

    <!-- testimoni -->
    <section class="container mx-auto flex flex-col items-start p-4 lg:p-0">
      <HeadingTemplate
        headingName="Customer Happy"
        themeImage="https://testweb.imatechcom.com/viptop/tt-icon.webp"
        color="bg-purple-600"
        headingImage="https://testweb.imatechcom.com/viptop/faq.png"
      />
      <div class="mb-8 mt-4 bg-blue-200/10 w-full px-4 rounded-xl">
        <TestemoniSlider :testimonials="testemoni" />
      </div>
    </section>

    <!-- q & a -->
    <section class="container m-auto flex flex-col items-start p-4 lg:p-0">
      <HeadingTemplate
        headingName="F A Q"
        themeImage="https://testweb.imatechcom.com/viptop/faq-head.png"
        color="bg-purple-600"
        headingImage="https://testweb.imatechcom.com/viptop/faq.png"
      />
      <div></div>
    </section>
  </div>
</template>

<style scoped>
/* Custom transitions for notification */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
