import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBAxcLUH3raX2cdOkaoKqRJZzSYvmr-1uc',
  authDomain: 'viptop-32695.firebaseapp.com',
  projectId: 'viptop-32695',
  storageBucket: 'viptop-32695.firebasestorage.app',
  messagingSenderId: '838675768416',
  appId: '1:838675768416:web:db956d5f5ff70eb2174f05',
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
