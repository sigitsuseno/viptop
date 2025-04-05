<template>
  <div class="container flex flex-col m-auto pt-4">
    <div
      class="mb-3 bg-blue-900/90 rounded-xl w-full md:w-[720px] lg:w-[1024px] m-auto overflow-hidden mt-4"
    >
      <img
        src="https://testweb.imatechcom.com/viptop/bg-atas.jpg"
        alt=""
        class="w-full h-full object-contain"
      />
    </div>
    <div class="w-full md:w-[720px] lg:w-[1024px] h-auto m-auto relative">
      <div
        class="absolute top-0 left-0 w-full h-full -z-10 bg-blue-900/90 overflow-hidden rounded-2xl"
      >
        <img
          src="https://testweb.imatechcom.com/viptop/bg-tp.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="flex flex-col items-center justify-center bg-blue-200/10 rounded-xl px-4 py-8 w-full gap-3"
      >
        <div class="text-3xl font-bold tracking-wider">
          CEK <span class="italic text-amber-400">PESANAN</span>MU
        </div>
        <p class="px-4 text-3xl font-bold tracking-wider garis relative">DISINI</p>

        <!-- Error message -->
        <div
          v-if="errorMessage"
          class="text-red-500 font-medium text-center w-2/3 bg-amber-400 py-2 px-4 rounded-lg"
        >
          {{ errorMessage }}
        </div>

        <input
          type="text"
          v-model="invoiceNumber"
          @keyup.enter="checkOrder"
          class="bg-slate-200 rounded-lg py-2 px-4 w-2/3 text-blue-950"
          placeholder="Masukkan nomor Invoice"
        />
        <button
          @click="checkOrder"
          class="bg-blue-500 font-bold tracking-widest text-white rounded-lg p-4 mt-2 w-2/3 hover:bg-blue-600/50 transition duration-300 cursor-pointer shadow-lg shadow-slate-900/20"
        >
          CEK PESANAN
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import orderData from '@/assets/order.json'

const router = useRouter()
const invoiceNumber = ref('')
const errorMessage = ref('')
const orders = ref([])

onMounted(() => {
  orders.value = orderData
})

const checkOrder = () => {
  errorMessage.value = ''

  if (!invoiceNumber.value) {
    errorMessage.value = 'Masukkan nomor invoice yang valid.'
    return
  }

  // Check if invoice exists
  const foundOrder = orders.value.find(
    (order) => order.no_invoice.toLowerCase() === invoiceNumber.value.toLowerCase().trim(),
  )

  if (foundOrder) {
    router.push(`/invoice/${encodeURIComponent(invoiceNumber.value)}`)
  } else {
    errorMessage.value = 'Data yang Anda masukkan tidak ada'
  }
}
</script>

<style scoped>
.garis::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -50%;
  width: 70px;
  height: 4px;
  background-color: #d18521;
}
.garis::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -50%;
  width: 70px;
  height: 4px;
  background-color: #d18521;
}
</style>
