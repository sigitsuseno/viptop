<template>
  <div class="w-full flex flex-col bg-blue-950 text-white">
    <div class="w-full overflow-hidden relative">
      <img src="../../assets/login_head.png" alt="" />
      <div
        class="absolute -bottom-4 -left-24 w-full h-20 bg-gradient-to-r from-blue-900 to-blue-950 skew-x-40 rounded-lg"
      ></div>
      <p
        class="absolute bottom-3 left-0 text-4xl uppercase font-extrabold tracking-wide px-4 text-orange-400"
      >
        {{ isLoginMode ? 'Sign In' : 'Sign Up' }}
      </p>
    </div>

    <div class="p-4">
      <p class="text-2xl uppercase italic font-extrabold tracking-wide">
        Nikmati kemudahan dalam topup!
      </p>
    </div>

    <div class="p-4">
      <form @submit.prevent="handleAuth" class="mb-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="w-full p-2 mb-2 rounded bg-slate-50/10 text-blue-50 ring-1 ring-blue-900"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          minlength="6"
          class="w-full p-2 mb-4 rounded bg-slate-50/10 text-blue-50 ring-1 ring-blue-900"
        />
        <button
          type="submit"
          class="w-full bg-orange-500 text-white rounded-xl px-2 py-3 hover:bg-orange-600 transition-all duration-300 ease-in-out"
        >
          {{ isLoginMode ? 'Log in' : 'Register' }}
        </button>
      </form>

      <div class="text-center">
        <span class="text-sm">{{ isLoginMode ? 'Belum Punya Akun?' : 'Sudah Punya Akun?' }}</span>
        <button
          @click="toggleAuthMode"
          class="text-sm ml-2 px-2 py-1 border border-blue-500 rounded-lg hover:bg-blue-900 transition-colors"
        >
          {{ isLoginMode ? 'Register' : 'Login' }}
        </button>
      </div>

      <div class="relative w-full border-t border-blue-800 my-8">
        <div class="absolute left-0 right-0 text-center -mt-3">
          <span class="text-base bg-blue-950 px-2">ATAU</span>
        </div>
      </div>

      <button
        @click="signInWithGoogle"
        class="w-full flex flex-row items-center justify-center gap-2 bg-blue-100 text-blue-950 rounded-xl px-2 py-3 hover:bg-blue-300 transition-all duration-300 ease-in-out cursor-pointer"
      >
        <div class="w-6 h-6">
          <img src="../../assets/google.svg" alt="Google logo" />
        </div>
        <span class="text-[1.1rem]">Sign-in dengan Google</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const isLoginMode = ref(true) // true for login, false for register
const isLoading = ref(false)

const router = useRouter()
const emit = defineEmits(['close'])

const toggleAuthMode = () => {
  isLoginMode.value = !isLoginMode.value
}

const handleAuth = async () => {
  if (!email.value || !password.value) {
    alert('Please fill in all fields')
    return
  }

  if (password.value.length < 6) {
    alert('Password must be at least 6 characters')
    return
  }

  isLoading.value = true
  try {
    const auth = getAuth()

    if (isLoginMode.value) {
      // Login with email/password
      await signInWithEmailAndPassword(auth, email.value, password.value)
    } else {
      // Register new user
      await createUserWithEmailAndPassword(auth, email.value, password.value)
    }

    // On success
    emit('close') // Close the modal
    router.push('/profile') // Redirect to profile
  } catch (error) {
    console.error('Authentication error:', error.code, error.message)

    let errorMessage = isLoginMode.value
      ? 'Login failed. Please try again.'
      : 'Registration failed. Please try again.'

    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Please enter a valid email address.'
        break
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email.'
        break
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password.'
        break
      case 'auth/email-already-in-use':
        errorMessage = 'This email is already registered.'
        break
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters.'
        break
    }

    alert(errorMessage)
  } finally {
    isLoading.value = false
  }
}

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(getAuth(), provider)

    // On success
    emit('close') // Close the modal
    router.push('/profile') // Redirect to profile
  } catch (error) {
    console.error('Google sign in error:', error)
    alert('Google sign in failed: ' + error.message)
  }
}
</script>
