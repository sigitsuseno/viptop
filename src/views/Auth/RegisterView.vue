<template>
  <div class="w-full flex flex-col bg-blue-950 text-white">
    <!-- Bagian header tetap sama -->
    <div class="w-full overflow-hidden relative">
      <img src="../../assets/login_head.png" alt="" />
      <div
        class="absolute -bottom-4 -left-24 w-full h-20 bg-gradient-to-r from-blue-900 to-blue-950 skew-x-40 rounded-lg"
      ></div>
      <p
        class="absolute bottom-3 left-0 text-4xl uppercase font-extrabold tracking-wide px-4 text-orange-400"
      >
        Sign Up
      </p>
    </div>

    <div class="p-4">
      <p class="text-2xl uppercase italic font-extrabold tracking-wide">
        Nikmati kemudahan dalam topup!
      </p>
    </div>

    <!-- Tambahkan form untuk email/password jika diperlukan -->
    <div class="p-4">
      <form @submit.prevent="register" class="mb-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-2 mb-2 rounded bg-slate-50/10 text-blue-50 ring-1 ring-blue-900"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-2 mb-4 rounded bg-slate-50/10 text-blue-50 ring-1 ring-blue-900"
        />
        <button
          type="submit"
          class="w-full bg-orange-500 text-white rounded-xl px-2 py-3 hover:bg-orange-600 transition-all duration-300 ease-in-out"
        >
          Sign Up with Email
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully registered!', data)
      router.push('/profile')
    })
    .catch((error) => {
      console.error('Registration error:', error.code, error.message)

      // Pesan error yang lebih user-friendly
      let errorMessage = 'Registration failed. Please try again.'

      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Please enter a valid email address.'
          break
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters.'
          break
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered.'
          break
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection.'
          break
        default:
          errorMessage = error.message
      }

      alert(errorMessage)
    })
}
</script>
