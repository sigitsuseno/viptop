<template>
  <footer class="mb-20 lg:mb-0 mt-12 flex flex-col">
    <div class="bg-blue-950 py-6">
      <div class="container m-auto flex flex-col lg:flex-row gap-8 lg:gap-4 py-6">
        <!-- footer row 1 -->
        <div class="w-full lg:w-1/3 flex flex-col items-center justify-center lg:items-start px-4">
          <div class="text-2xl font-bold bg-amber-50/20 px-2 pt-2 pb-3 rounded-md">
            <span class="bg-linear-65 from-purple-500 to-pink-500 px-2 pb-1 rounded-md">VIP</span>
            <span
              class="font-bold bg-gradient-to-r from-blue-50 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >Top</span
            >
          </div>
          <p class="lg:text[1rem] text-blue-100 text-center lg:text-left mt-2 mb-4">
            Viptop merupakan penyedia layanan pembayaran (PSP) terkemuka yang memfokuskan layanannya
            untuk game online dan produk digital lainnya yang tersebar di seluruh dunia.
          </p>
          <div
            class="w-full flex flex-col items-center justify-center lg:items-start mt-4 text-blue-100"
          >
            <h5 class="mb-2 font-medium tracking-wide">Ikuti VipTop :</h5>
            <div class="flex flex-row items-center justify-center gap-3">
              <a href="" class="w-8 h-8 flex items-center justify-center">
                <img
                  src="../../assets/medsos/facebook-square.svg"
                  alt=""
                  class="w-full h-full object-contain"
                />
              </a>
              <a href="" class="w-8 h-8 flex items-center justify-center">
                <img
                  src="../../assets/medsos/instagram-square.svg"
                  alt=""
                  class="w-full h-full object-contain"
                />
              </a>
              <a href="" class="w-8 h-8 flex items-center justify-center">
                <img
                  src="../../assets/medsos/youtube-square.svg"
                  alt=""
                  class="w-full h-full object-contain"
                />
              </a>
              <a href="" class="w-8 h-8 flex items-center justify-center">
                <img
                  src="../../assets/medsos/tiktok-square.svg"
                  alt=""
                  class="w-full h-full object-contain"
                />
              </a>
              <a href="" class="w-8 h-8 flex items-center justify-center">
                <img
                  src="../../assets/medsos/sosmed-icon-discord.svg"
                  alt=""
                  class="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- footer row 2 -->
        <div
          class="w-full lg:w-1/3 flex flex-row items-start justify-between gap-4 text-blue-100 font-light px-4 lg:px-0"
        >
          <div class="w-1/2">
            <div class="mb-6">
              <h6 class="font-bold tracking-wider text-[1.1rem]">Bantuan</h6>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Pusat bantuan</a>
            </div>

            <div class="flex flex-col">
              <h6 class="font-bold tracking-wider text-[1.1rem]">VIPTOP</h6>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Tentang Viptop</a>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Viptop Blog</a>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Identitas Brand</a>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Hubungi Kami</a>
              <RouterLink
                to="/website-terms-conditions"
                class="text-sm text-blue-400 hover:underline"
              >
                Website Terms & Conditions
              </RouterLink>
              <RouterLink to="/user-terms-conditions" class="text-sm text-blue-400 hover:underline">
                User Terms & Conditions
              </RouterLink>
              <RouterLink to="/privacy-policy" class="text-sm text-blue-400 hover:underline">
                Privacy Policy
              </RouterLink>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Karir</a>
            </div>
          </div>
          <div class="w-1/2">
            <div class="mb-6 flex flex-col">
              <h6 class="font-bold tracking-wider text-[1.1rem]">Pembeli</h6>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Cara Belanja</a>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Cara trading</a>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Cara Pembayaran</a>
            </div>

            <div class="flex flex-col">
              <h6 class="font-bold tracking-wider text-[1.1rem]">Penjual</h6>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Cara Menjadi Penjual</a>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm"
                >Metode Pengiriman Produk</a
              >
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Biaya Penjualan</a>
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm"
                >Metode Pencairan Saldo</a
              >
              <a href="#" class="text-blue-200 hover:text-blue-300 text-sm">Testemoni Penjual</a>
            </div>
          </div>
        </div>

        <!-- footer row 3 -->
        <div class="w-full lg:w-1/3">
          <div
            class="w-full flex flex-col items-center justify-center lg:items-start text-blue-100"
          >
            <h5 class="text-2xl font-medium tracking-wide mb-2">Saluran Pembayaran :</h5>
            <MarquePembayaran :speed="0.5" class="lg:hidden" />
            <div class="hidden lg:flex flex-row justify-start flex-wrap">
              <img
                v-for="(image, index) in [...paymentImages]"
                :key="index"
                :src="image"
                :alt="`Payment method ${(index % paymentImages.length) + 1}`"
                class="inline-block mx-2 my-2 h-6 w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- © Copyright -->
    <div
      class="bg-[var(--bg-field-color)] text-blue-100 py-4 focus:outline-none focus:ring-1 focus:ring-blue-400 ring-1 ring-[var(--ring-color)] w-full"
    >
      <div class="flex flex-row items-center justify-center gap-1">
        <span class="font-light"> ©{{ tahun }} Ceria Persada All rights reserved.</span>
      </div>
      <p class="text-sm text-center font-thin">
        All other trademarks belong to their respective owners.
      </p>
    </div>
  </footer>
</template>

<script setup>
import MarquePembayaran from '@/components/MarquePembayaran.vue'

// Import semua gambar
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

const tahun = new Date().getFullYear()
</script>
