<template>
  <div class="container mx-auto flex flex-col items-start p-4 lg:p-0">
    <div
      class="frame rounded-2xl overflow-hidden w-full md:w-[720px] m-auto mt-4 bg-blue-200/40 p-[3px]"
    >
      <div
        class="frame_in bg-blue-900/70 rounded-2xl overflow-hidden w-full h-full px-6 md:px-12 pt-4 pb-6"
      >
        <div
          class="md:text-lg lg:text-xl font-bold w-full bg-gradient-to-r from-green-600 to-amber-300 mb-3 relative rounded-t-lg overflow-hidden"
          :class="{ 'bg-red-500': order?.status === 'failed' }"
        >
          <div v-if="order?.status === 'success'">
            <img
              src="https://testweb.imatechcom.com/viptop/berhasil2.webp"
              alt=""
              class="w-full h-full object-contain"
            />
          </div>
          <div v-else-if="order?.status === 'failed'">
            <img
              src="https://testweb.imatechcom.com/viptop/gagal.webp"
              alt=""
              class="w-full h-full object-contain"
            />
          </div>
          <div v-else>STATUS TRANSAKSI TIDAK DIKETAHUI</div>
        </div>

        <div v-if="order" class="bg-orange-50 rounded-lg overflow-hidden">
          <table class="w-full text-left border-collapse text-blue-950 mb-4">
            <tbody>
              <tr class="bg-blue-950">
                <td class="align-middle text-center py-2 text-blue-50">
                  <span>Invoice #{{ order.no_invoice }}</span>
                </td>
              </tr>
              <tr>
                <td class="text-xl font-bold tracking-wider px-4 py-2 border-b border-slate-300">
                  1. Detail Pembayaran
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Metode Pembayaran</span>
                  <span class="font-medium">{{ order.metode }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Tipe Transaksi</span>
                  <span class="font-medium">{{ order.tipe }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-[] bg-amber-400/40 font-bold">
                  <span>TOTAL PEMBAYARAN</span>
                  <div class="flex flex-row items-center gap-1">
                    Rp {{ formatNumber(order.harga) }}
                    <button
                      class="cursor-pointer focus:font-bold"
                      @click="copyToClipboard(order.harga)"
                    >
                      <Icon icon="solar:copy-broken" class="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-xl font-bold tracking-wider px-4 py-2 border-b border-slate-300">
                  2. Detail Pesanan
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>No. Invoice</span>
                  <div class="flex flex-row items-center gap-1">
                    #{{ order.no_invoice }}
                    <button class="cursor-pointer" @click="copyToClipboard(order.no_invoice)">
                      <Icon icon="solar:copy-broken" class="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Tgl Pemesanan</span>
                  <span class="font-medium">{{ formatDate(order.tanggal) }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Status Transaksi</span>
                  <span class="font-medium capitalize">{{ order.status }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Game</span>
                  <span class="font-medium">{{ order.game }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Produk</span>
                  <span class="font-medium">Rp {{ formatNumber(order.produk) }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Harga Satuan</span>
                  <span class="font-medium">Rp {{ formatNumber(order.harga) }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Jumlah Pembelian</span>
                  <span class="font-medium">{{ order.jumlah }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Sub Total</span>
                  <span class="font-medium">Rp {{ formatNumber(order.sub_total) }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Diskon</span>
                  <span class="font-medium">Rp {{ formatNumber(order.diskon) }}</span>
                </td>
              </tr>
              <tr>
                <td class="flex justify-between px-4 py-1 text-sm">
                  <span>Payment Fee</span>
                  <span class="font-medium">Rp {{ formatNumber(order.fee) }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="py-8 text-center text-red-500 font-bold">
          Invoice tidak ditemukan atau data tidak tersedia
        </div>
        <div class="flex flex-col items-center justify-center gap-4 mt-4" v-if="order">
          <RouterLink
            to="/"
            class="w-full p-3 flex flex-row justify-center items-center gap-2 rounded-xl text-blue-900 font-bold border border-amber-200 bg-gradient-to-bl from-amber-500 via-amber-300 to-amber-200 hover:font-bold relative overflow-hidden group"
          >
            <Icon icon="solar:copy-broken" class="text-lg z-10" />
            <span class="z-10">BELANJA LAGI</span>
            <div
              class="absolute w-full h-full bg-amber-500/30 inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"
            ></div>
          </RouterLink>
          <RouterLink
            to="/track-order"
            class="w-full p-3 flex flex-row justify-center items-center gap-2 rounded-xl text-blue-900 font-bold border border-indigo-400 bg-gradient-to-b from-10% from-indigo-500 via-40% via-indigo-300 to-70% to-indigo-200 hover:font-bold relative overflow-hidden group"
          >
            <Icon icon="solar:copy-broken" class="text-lg z-10" />
            <span class="z-10">PERIKSA STATUS PEMBAYARAN</span>
            <div
              class="absolute w-full h-full bg-indigo-500/30 inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"
            ></div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import orderData from '@/assets/order.json'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  invoiceNumber: {
    type: String,
    required: true,
  },
})

const order = ref(null)

const formatNumber = (num) => {
  return parseInt(num).toLocaleString('id-ID')
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text.toString())
    .then(() => alert('Teks berhasil disalin'))
    .catch(() => alert('Gagal menyalin teks'))
}

onMounted(() => {
  // Cari order yang sesuai dengan invoiceNumber
  order.value = orderData.find(
    (item) => item.no_invoice.toLowerCase() === props.invoiceNumber.toLowerCase(),
  )

  if (!order.value) {
    router.push('/track-order')
  }
})
</script>

<style scoped>
.frame {
  --a: 1.8rem;
  --b: calc(100% - var(--a));
  clip-path: polygon(0 var(--a), 0 100%, var(--b) 100%, 100% var(--b), 100% 0, var(--a) 0);
}
.frame_in {
  --a: 1.6rem;
  --b: calc(100% - var(--a));
  clip-path: polygon(0 var(--a), 0 100%, var(--b) 100%, 100% var(--b), 100% 0, var(--a) 0);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .frame_in {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
