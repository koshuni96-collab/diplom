import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home-page.vue'
import PortfolioPage from '@/pages/portfolio-page.vue'
import TariffsPage from '@/pages/tariffs-page.vue'
import ContactPage from '@/pages/contact-page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioPage
  },
  {
    path: '/tariffs',
    name: 'Tariffs',
    component: TariffsPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  // 👇 НОВАЯ СТРАНИЦА ДЕТАЛЬНОГО ТАРИФА
  {
    path: '/tariff-detail',
    name: 'TariffDetail',
    component: () => import('@/pages/tariff-detail.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router