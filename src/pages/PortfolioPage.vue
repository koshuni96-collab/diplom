<template>
  <div class="portfolio-page">
    <HeaderComponent />
    
    <!-- Секция портфолио -->
    <section class="portfolio-section">
      <div class="container">
        <div 
          v-for="row in portfolioRows" 
          :key="row.id"
          class="portfolio-row"
          :class="row.type"
        >
          <div 
            class="portfolio-card" 
            v-for="item in getItems(row.start, row.end)" 
            :key="item.id" 
            @click="openModal(item.image)"
          >
            <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <div v-if="modalImage" class="modal" @click="modalImage = null">
      <span class="close" @click.stop="modalImage = null">✕</span>
      <img :src="modalImage" alt="Полное изображение" @click.stop />
    </div>

    <ContactPage />
    
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
import ContactPage from '@/pages/ContactPage.vue'

export default {
  name: 'PortfolioPage',
  components: { 
    HeaderComponent, 
    FooterComponent,
    ContactPage 
  },
  data() {
    return {
      modalImage: null,
      portfolioItems: [
        { id: 1, image: '/portfolio-11.jpg' },
        { id: 2, image: '/portfolio-12.jpg' },
        { id: 3, image: '/portfolio-13.jpg' },
        { id: 4, image: '/portfolio-14.jpg' },
        { id: 5, image: '/portfolio-15.jpg' },
        { id: 6, image: '/portfolio-16.jpg' },
        { id: 7, image: '/portfolio-17.jpg' },
        { id: 8, image: '/portfolio-18.jpg' },
        { id: 9, image: '/portfolio-19.jpg' },
        { id: 10, image: '/portfolio-20.jpg' },
        { id: 11, image: '/portfolio-21.jpg' },
        { id: 12, image: '/portfolio-22.jpg' },
        { id: 13, image: '/portfolio-23.jpg' },
        { id: 14, image: '/portfolio-24.jpg' },
        { id: 15, image: '/portfolio-25.jpg' },
        { id: 16, image: '/portfolio-26.jpg' },
        { id: 17, image: '/portfolio-27.jpg' },
        { id: 18, image: '/portfolio-28.jpg' },
        { id: 19, image: '/portfolio-29.jpg' },
        { id: 20, image: '/portfolio-30.jpg' },
        { id: 21, image: '/portfolio-31.jpg' }
      ],
      portfolioRows: [
        { id: 1, start: 0, end: 3, type: 'full' },
        { id: 2, start: 3, end: 5, type: 'half' },
        { id: 3, start: 5, end: 7, type: 'half' },
        { id: 4, start: 7, end: 10, type: 'full' },
        { id: 5, start: 10, end: 12, type: 'half' },
        { id: 6, start: 12, end: 14, type: 'half' },
        { id: 7, start: 14, end: 17, type: 'full' },
        { id: 8, start: 17, end: 19, type: 'half' },
        { id: 9, start: 19, end: 21, type: 'half' }
      ]
    }
  },
  methods: {
    getItems(start, end) {
      return this.portfolioItems.slice(start, end)
    },
    openModal(image) {
      this.modalImage = image
      document.body.style.overflow = 'hidden'
    }
  },
  watch: {
    modalImage(val) {
      if (!val) document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.portfolio-page {
  min-height: 100vh;
  background: #fcfaf8;
  font-family: 'Gilroy', sans-serif;
}

.portfolio-section {
  padding: 115px 0 0;
  background: #fcfaf8;
}

.container {
  max-width: 1596px;
  margin: 0 auto;
  width: 100%;
}

.portfolio-row {
  display: grid;
  gap: 0;
  margin-bottom: 0;
}

.full { grid-template-columns: repeat(3, 1fr); }
.half { grid-template-columns: repeat(2, 1fr); }

.portfolio-card {
  background: none;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 16 / 9;
  position: relative;
}

.portfolio-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: none;
}

/* Модальное окно */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn .3s;
}

.modal img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  animation: scaleIn .3s;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  transition: transform .3s;
}

.close:hover { transform: rotate(90deg); }

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (max-width: 1600px) {
  .portfolio-section { padding: 80px 0 0; }
}

@media (max-width: 1024px) {
  .portfolio-section { padding: 60px 0 0; }
  .full { grid-template-columns: repeat(2, 1fr); }
  .half { grid-template-columns: repeat(2, 1fr); }
  .portfolio-card { aspect-ratio: 3 / 4; }
}

@media (max-width: 768px) {
  .portfolio-section { padding: 40px 0 0; }
  .row-full, .row-half { grid-template-columns: repeat(2, 1fr); gap: 0; }
  .portfolio-card { aspect-ratio: 3 / 4; }
  .close { top: 10px; right: 20px; font-size: 30px; }
}

@media (max-width: 480px) {
  .portfolio-section { padding: 30px 0 0; }
  .row-full, .row-half { grid-template-columns: repeat(2, 1fr); gap: 0; }
  .portfolio-card { aspect-ratio: 3 / 4; }
  .close { top: 5px; right: 15px; font-size: 26px; }
}
</style>