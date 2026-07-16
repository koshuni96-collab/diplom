<template>
  <section class="tarif-section" id="tariffs">
    <div class="container">
      <h2 class="section-title">Мои тарифы</h2>

      <div class="carousel-container">
        <button class="carousel-btn" @click="prevSlide">‹</button>
        
        <div class="carousel-track-wrapper">
          <div class="carousel-track" :style="trackStyle">
            <div 
              v-for="tariff in tariffs" 
              :key="tariff.id"
              class="tarif-card"
              @click="goToDetail(tariff.id)"
            >
              <div class="tarif-header">
                <h3>{{ tariff.name }}</h3>
                <div class="price">{{ tariff.price }}</div>
              </div>
              
              <ul class="tarif-features">
                <li v-for="(f, i) in tariff.features" :key="i">
                  <span>{{ f.label }}</span>
                  <span>{{ f.value }}</span>
                </li>
              </ul>
              
              <button class="btn-detail" @click.stop="goTo404(tariff.name)">
                Подробнее
              </button>
            </div>
          </div>
        </div>
        
        <button class="carousel-btn" @click="nextSlide">›</button>
      </div>

      <div class="carousel-indicators">
        <button 
          v-for="(_, i) in tariffs" 
          :key="i"
          class="dot-indicator"
          :class="{ active: currentSlide === i }"
          @click="goToSlide(i)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TarifComponent',
  data: () => ({
    currentSlide: 0,
    tariffs: [
      {
        id: '1',
        name: 'Женский портрет',
        price: '25 000 ₽',
        features: [
          { label: 'Продолжительность', value: '2 часа' },
          { label: 'Количество фото', value: '30-40' },
          { label: 'Прическа и макияж', value: 'Да' },
          { label: 'Прокат образа', value: 'Нет' }
        ]
      },
      {
        id: '2',
        name: 'Прогулочная съёмка',
        price: '15 000 ₽',
        features: [
          { label: 'Продолжительность', value: '1 час' },
          { label: 'Количество фото', value: '20-30' },
          { label: 'Прическа и макияж', value: 'Да' },
          { label: 'Прокат образа', value: 'Да' }
        ]
      },
      {
        id: '3',
        name: 'Семейная съёмка',
        price: '35 000 ₽',
        features: [
          { label: 'Продолжительность', value: '2 часа' },
          { label: 'Количество фото', value: '40-50' },
          { label: 'Прическа и макияж', value: 'Да' },
          { label: 'Прокат образа', value: 'Нет' }
        ]
      }
    ]
  }),
  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.currentSlide * 33.333}%)`,
        transition: 'transform 0.5s ease'
      }
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.tariffs.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 
        ? this.tariffs.length - 1 
        : this.currentSlide - 1
    },
    goToSlide(i) { this.currentSlide = i },
    goTo404(name) {
      console.log(`404: ${name}`)
      this.$router.push({ name: 'NotFound' })
    },
    goToDetail(id) {
      console.log(`Детали: ${id}`)
      this.$router.push(`/tariff-detail/${id}`)
    }
  }
}
</script>

<style scoped>
.tarif-section {
  padding: 80px 20px;
  background: #fcfaf8;
  font-family: 'Gilroy', sans-serif;
}
.container { max-width: 1200px; margin: 0 auto; }
.section-title {
  font-size: 80px;
  font-weight: 500;
  color: #2c2420;
  margin: 0 0 50px;
}

.carousel-container {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}
.carousel-track-wrapper { flex: 1; overflow: hidden; }
.carousel-track {
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease;
}

.tarif-card {
  flex: 0 0 calc(33.333% - 20px);
  background: #fff;
  padding: 40px 30px 30px;
  box-shadow: 0 4px 20px rgba(44,36,32,0.06);
  transition: all .3s;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  cursor: pointer;
}
.tarif-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(44,36,32,0.1);
}

.tarif-header {
  text-align: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0ebe7;
}
.tarif-header h3 {
  font-size: 24px;
  font-weight: 500;
  color: #2c2420;
  margin: 0 0 4px;
}
.price {
  font-size: 28px;
  font-weight: 500;
  color: #2c2420;
}

.tarif-features {
  list-style: none;
  padding: 20px 0;
  margin: 0;
  flex: 1;
}
.tarif-features li {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
  color: #4f4540;
  padding: 4px 0;
}
.tarif-features li span:last-child { color: #2c2420; }

.btn-detail {
  width: 100%;
  max-width: 296px;
  height: 50px;
  margin: 0 auto;
  background: transparent;
  color: #2c2420;
  border: 1px solid #2c2420;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all .3s;
}
.btn-detail:hover {
  background: #2c2420;
  color: #fff;
  transform: translateY(-2px);
}

.carousel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #d4c5bc;
  background: transparent;
  color: #2c2420;
  font-size: 28px;
  cursor: pointer;
  transition: all .3s;
  flex-shrink: 0;
}
.carousel-btn:hover {
  background: #2c2420;
  color: #fff;
  border-color: #2c2420;
  transform: scale(1.1);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
}
.dot-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #d4c5bc;
  background: transparent;
  cursor: pointer;
  transition: all .3s;
  padding: 0;
}
.dot-indicator.active {
  background: #2c2420;
  border-color: #2c2420;
  transform: scale(1.2);
}
.dot-indicator:hover { transform: scale(1.1); }

@media (max-width: 1024px) {
  .section-title { font-size: 60px; }
  .tarif-card { flex: 0 0 calc(50% - 15px); }
  .carousel-btn { width: 40px; height: 40px; font-size: 22px; }
}
@media (max-width: 700px) {
  .tarif-section { padding: 50px 16px; }
  .section-title { font-size: 48px; }
  .tarif-card { flex: 0 0 100%; min-height: 350px; padding: 30px 20px; }
  .price { font-size: 24px; }
  .tarif-header h3 { font-size: 20px; }
  .btn-detail { max-width: 100%; }
  .carousel-btn { width: 36px; height: 36px; font-size: 18px; }
}
@media (max-width: 480px) {
  .section-title { font-size: 36px; }
  .carousel-container { gap: 10px; }
  .carousel-btn { width: 32px; height: 32px; font-size: 16px; }
}
</style>