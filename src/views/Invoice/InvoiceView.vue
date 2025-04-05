<template>
  <div class="container mx-auto flex flex-col items-start p-4 lg:p-0">
    <div
      class="frame rounded-2xl overflow-hidden w-full md:w-[720px] m-auto mt-4 bg-blue-200/40 p-[3px]"
    >
      <div class="frame_in bg-blue-900/70 rounded-2xl overflow-hidden w-full h-full px-6 md:px-12">
        <div class="flex flex-row justify-center items-center bg-indigo-950/20">
          <img src="https://testweb.imatechcom.com/viptop/jempol.png" alt="" class="w-32 h-32" />
          <img
            src="https://testweb.imatechcom.com/viptop/berhasil.png"
            alt=""
            class="w-auto h-20"
          />
        </div>
        <div
          class="text-center text-xl font-bold tracking-wider w-full bg-green-500 py-2 px-4 mb-3"
          :class="{ 'bg-red-500': order?.status === 'failed' }"
        >
          <p v-if="order?.status === 'success'">SELAMAT, TRANSAKSI KAMU SUDAH BERHASIL</p>
          <p v-else-if="order?.status === 'failed'">MAAF, TRANSAKSI KAMU GAGAL</p>
          <p v-else>STATUS TRANSAKSI TIDAK DIKETAHUI</p>
        </div>

        <div v-if="order" class="py-4 bg-blue-100">
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
                      <Icon icon="solar:copy-broken" class="text-lg lg:hidden" />
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
                    {{ order.no_invoice }}
                    <button class="cursor-pointer" @click="copyToClipboard(order.no_invoice)">
                      <Icon icon="solar:copy-broken" class="text-lg lg:hidden" />
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
          <RouterLink to="/" class="w-full p-2 bg-green-900 rounded-xl text-center text-white">
            BELANJA LAGI
          </RouterLink>
          <RouterLink
            to="/track-order"
            class="w-full p-2 bg-green-900 rounded-xl text-center text-white"
          >
            PERIKSA STATUS PEMBAYARAN
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
