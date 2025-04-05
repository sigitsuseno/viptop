import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import PromoView from '../views/PromoView.vue'
import WebsiteTerm from '@/views/WebsiteTerm.vue'
import UserTerms from '@/views/UserTerms.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TrackOrderView from '../views/TrackOrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/pembelian-nama-game',
      name: 'pembelian',
      component: () => import('@/views/PembelianItem.vue'),
    },
    {
      path: '/invoice/:invoiceNumber',
      name: 'invoice',
      component: () => import('@/views/Invoice/InvoiceView.vue'),
      props: true,
    },
    {
      path: '/track-order',
      name: 'order',
      component: TrackOrderView,
    },
    {
      path: '/promo',
      name: 'promo',
      component: PromoView,
    },
    {
      path: '/website-terms-conditions',
      name: 'website-terms',
      component: WebsiteTerm,
    },
    {
      path: '/user-terms-conditions',
      name: 'user-terms',
      component: UserTerms,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
    },
  ],
})

export default router
