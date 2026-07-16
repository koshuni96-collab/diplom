<!-- src/pages/portfolio-page.vue -->
<template>
  <div class="portfolio-page">
    <HeaderComponent />
    
    <section class="portfolio-section">
      <div class="container">
        <!-- Ряд 1: 1, 2, 3 -->
        <div class="portfolio-row row-full">
          <div class="portfolio-card" v-for="item in getItems(0, 3)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Ряд 2: 4, 5 -->
        <div class="portfolio-row row-half">
          <div class="portfolio-card" v-for="item in getItems(3, 5)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Ряд 3: 6, 7 -->
        <div class="portfolio-row row-half">
          <div class="portfolio-card" v-for="item in getItems(5, 7)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Ряд 4: 8, 9, 10 -->
        <div class="portfolio-row row-full">
          <div class="portfolio-card" v-for="item in getItems(7, 10)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Ряд 5: 11, 12 -->
        <div class="portfolio-row row-half">
          <div class="portfolio-card" v-for="item in getItems(10, 12)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Ряд 6: 13, 14 -->
        <div class="portfolio-row row-half">
          <div class="portfolio-card" v-for="item in getItems(12, 14)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Ряд 7: 15, 16, 17 -->
        <div class="portfolio-row row-full">
          <div class="portfolio-card" v-for="item in getItems(14, 17)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Ряд 8: 18, 19 -->
        <div class="portfolio-row row-half">
          <div class="portfolio-card" v-for="item in getItems(17, 19)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Ряд 9: 20, 21 -->
        <div class="portfolio-row row-half">
          <div class="portfolio-card" v-for="item in getItems(19, 21)" :key="item.id" @click="openPortfolioItem(item)">
            <div class="portfolio-card-image">
              <img :src="item.image" :alt="'Работа ' + item.id" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция контактов перед подвалом -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-content">
            <div class="contact-header">
              <h2 class="section-title">Понравились мои работы?</h2>
              <p class="section-description">
                Давайте вместе создадим воспоминания, которые будут радовать вас на протяжении многих лет!<br>
                Заполните форму ниже, и я свяжусь с вами в ближайшее время. Жду с нетерпением возможности поработать с вами!
              </p>
            </div>

            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    placeholder="Имя"
                    required
                  />
                </div>
                <div class="form-group">
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    placeholder="Номер телефона"
                    required
                  />
                </div>
                <button type="submit" class="btn-submit">Оставить заявку</button>
              </div>
            </form>

            <p class="form-note">
              Нажимая кнопку, вы даете согласие на обработку ваших персональных данных.<br>
              <a href="#" class="privacy-link">Политика конфиденциальности</a>
            </p>
          </div>

          <div class="contact-info">
            <h3 class="info-title">Контакты</h3>
            <p class="info-subtitle">
              Свяжитесь со мной, если у вас возникли вопросы или предложения
            </p>
            <div class="contact-phone">
              <span class="phone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <a href="tel:+77777777777" class="phone-link">+7 (777) 777-77-77</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: 'PortfolioPage',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      form: {
        name: '',
        phone: ''
      },
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
      ]
    }
  },
  methods: {
    openPortfolioItem(item) {
      console.log('Открыть работу:', item.id)
    },
    getItems(start, end) {
      return this.portfolioItems.slice(start, end)
    },
    handleSubmit() {
      console.log('Форма отправлена:', this.form)
      alert('Спасибо! Я свяжусь с вами в ближайшее время.')
      this.form.name = ''
      this.form.phone = ''
    }
  }
}
</script>

<style scoped>
.portfolio-page {
  min-height: 100vh;
  background: #fcfaf8;
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.portfolio-section {
  padding: 115px 162px 80px;
  background: #fcfaf8;
}

.container {
  max-width: 1596px;
  margin: 0 auto;
  width: 100%;
}

/* ===== РЯДЫ ===== */
.portfolio-row {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

/* Полный ряд (3 колонки) */
.row-full {
  grid-template-columns: repeat(3, 1fr);
}

/* Половина ряда (2 колонки) */
.row-half {
  grid-template-columns: repeat(2, 1fr);
}

/* ===== КАРТОЧКА ПОРТФОЛИО ===== */
.portfolio-card {
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(44, 36, 32, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  aspect-ratio: 16 / 9;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(44, 36, 32, 0.12);
}

.portfolio-card-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #e0e5ec;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio-card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
  display: block;
  background: #e0e5ec;
}

.portfolio-card:hover .portfolio-card-image img {
  transform: scale(1.04);
}

/* ===== СЕКЦИЯ КОНТАКТОВ ===== */
.contact-section {
  padding: 80px 20px;
  background: #ffffff;
}

.contact-wrapper {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-content {
  flex: 0 0 700px;
  max-width: 700px;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 56px;
  line-height: 110%;
  letter-spacing: 0%;
  color: #1a1a2e;
  margin: 0 0 20px 0;
}

.section-description {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.8;
  color: #4a4a5a;
  margin: 0;
}

.contact-form {
  max-width: 100%;
}

.form-row {
  display: flex;
  gap: 16px;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 150px;
  max-width: 250px;
}

.form-group input {
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  color: #1a1a2e;
  transition: border-color 0.3s ease;
  background: #fafafa;
  width: 100%;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #4a6cf7;
  background: #ffffff;
}

.form-group input::placeholder {
  color: #a0a0b0;
}

.btn-submit {
  padding: 14px 32px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 0;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  height: 50px;
  min-width: 180px;
}

.btn-submit:hover {
  background: #2a2a4e;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26, 26, 46, 0.15);
}

.form-note {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #7a7a8a;
  margin: 20px 0 0 0;
  line-height: 1.6;
  text-align: left;
}

.privacy-link {
  color: #c6c9d3;
  text-decoration: none;
  transition: color 0.3s ease;
}

.privacy-link:hover {
  color: #b5b7bf;
  text-decoration: underline;
}

.contact-info {
  flex: 1;
  padding: 40px;
  background: #f8f9fc;
  border-radius: 0;
  min-width: 280px;
}

.info-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 28px;
  color: #1a1a2e;
  margin: 0 0 12px 0;
}

.info-subtitle {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #4a4a5a;
  margin: 0 0 30px 0;
  line-height: 1.6;
}

.contact-phone {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #ffffff;
  border-radius: 0;
  border: 1px solid #e8e8ee;
}

.phone-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-icon svg {
  width: 24px;
  height: 24px;
  stroke: black;
}

.phone-link {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #1a1a2e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.phone-link:hover {
  color: #4a6cf7;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 1600px) {
  .portfolio-section {
    padding: 80px 60px 60px;
  }
}

@media (max-width: 1200px) {
  .portfolio-section {
    padding: 80px 40px 60px;
  }
  
  .container {
    max-width: 100%;
  }
  
  .contact-wrapper {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .contact-content {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .contact-info {
    width: 100%;
    min-width: auto;
  }
}

@media (max-width: 1024px) {
  .portfolio-section {
    padding: 80px 30px 60px;
  }
  
  .row-full {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .row-half {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .portfolio-card {
    aspect-ratio: 3 / 4;
  }
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 80px 20px 60px;
    min-height: auto;
  }

  .row-full,
  .row-half {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  
  .portfolio-card {
    aspect-ratio: 3 / 4;
  }
  
  .contact-section {
    padding: 50px 16px;
  }

  .section-title {
    font-size: 40px;
  }

  .section-description {
    font-size: 16px;
  }

  .contact-info {
    padding: 30px 20px;
  }

  .info-title {
    font-size: 24px;
  }
  
  .form-row {
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    max-width: 100%;
    width: 100%;
  }
  
  .btn-submit {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .portfolio-section {
    padding: 60px 14px 40px;
  }

  .row-full,
  .row-half {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  .portfolio-card {
    aspect-ratio: 3 / 4;
  }
  
  .section-title {
    font-size: 32px;
  }

  .section-description {
    font-size: 15px;
  }

  .phone-link {
    font-size: 17px;
  }
}
</style>