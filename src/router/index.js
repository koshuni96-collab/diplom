import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PortfolioPage from '@/pages/PortfolioPage.vue'
import TariffsPage from '@/pages/TariffsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

// Временные данные для проверки
const tariffs = [
  { id: '1', name: 'Женский портрет' },
  { id: '2', name: 'Прогулочная съёмка' },
  { id: '3', name: 'Семейная съёмка' }
]

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
  {
    path: '/tariff-detail/:id',
    name: 'TariffDetail',
    component: () => import('@/pages/TariffDetail.vue'),
    beforeEnter: (to, from, next) => {
      const exists = tariffs.some(t => String(t.id) === String(to.params.id))
      exists ? next() : next({ name: 'NotFound' })
    }
  },
  // ВАЖНО: маршрут 404 должен быть ПОСЛЕДНИМ!
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return savedPosition || { top: 0 }
  }
})

export default router