<!-- src/components/tarif.vue -->
<template>
  <section class="tarif-section" id="tariffs">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Мои тарифы</h2>
      </div>

      <div class="tarif-grid">
        <!-- Тариф 1: Женский портрет -->
        <div class="tarif-card">
          <div class="tarif-header">
            <h3 class="tarif-name">Женский портрет</h3>
            <div class="tarif-price">
              <span class="price">25 000 ₽</span>
            </div>
          </div>
          
          <div class="tarif-body">
            <ul class="tarif-features">
              <li><span class="feature-label">Продолжительность:</span> <span class="feature-value">2 часа</span></li>
              <li><span class="feature-label">Количество фото:</span> <span class="feature-value">30-40</span></li>
              <li><span class="feature-label">Прическа и макияж:</span> <span class="feature-value">Да</span></li>
              <li><span class="feature-label">Прокат образа:</span> <span class="feature-value">Нет</span></li>
            </ul>
          </div>
          
          <div class="tarif-footer">
            <button class="btn-order" @click="goToDetail('женский-портрет')">Подробнее</button>
          </div>
        </div>

        <!-- Тариф 2: Прогулочная съёмка -->
        <div class="tarif-card">
          <div class="tarif-header">
            <h3 class="tarif-name">Прогулочная съёмка</h3>
            <div class="tarif-price">
              <span class="price">15 000 ₽</span>
            </div>
          </div>
          
          <div class="tarif-body">
            <ul class="tarif-features">
              <li><span class="feature-label">Продолжительность:</span> <span class="feature-value">1 час</span></li>
              <li><span class="feature-label">Количество фото:</span> <span class="feature-value">20-30</span></li>
              <li><span class="feature-label">Прическа и макияж:</span> <span class="feature-value">Да</span></li>
              <li><span class="feature-label">Прокат образа:</span> <span class="feature-value">Да</span></li>
            </ul>
          </div>
          
          <div class="tarif-footer">
            <button class="btn-order" @click="goToDetail('прогулочная-съёмка')">Подробнее</button>
          </div>
        </div>

        <!-- Тариф 3: Семейная съёмка -->
        <div class="tarif-card">
          <div class="tarif-header">
            <h3 class="tarif-name">Семейная съёмка</h3>
            <div class="tarif-price">
              <span class="price">35 000 ₽</span>
            </div>
          </div>
          
          <div class="tarif-body">
            <ul class="tarif-features">
              <li><span class="feature-label">Продолжительность:</span> <span class="feature-value">2 часа</span></li>
              <li><span class="feature-label">Количество фото:</span> <span class="feature-value">40-50</span></li>
              <li><span class="feature-label">Прическа и макияж:</span> <span class="feature-value">Да</span></li>
              <li><span class="feature-label">Прокат образа:</span> <span class="feature-value">Нет</span></li>
            </ul>
          </div>
          
          <div class="tarif-footer">
            <button class="btn-order" @click="goToDetail('семейная-съёмка')">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TarifComponent',
  methods: {
    goToDetail(tariff) {
      // Переход на страницу детального тарифа
      this.$router.push({
        path: '/tariff-detail',
        query: { tariff: tariff }
      })
    }
  }
}
</script>

<style scoped>
.tarif-section {
  padding: 80px 20px;
  background: #fcfaf8;
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Заголовок - выравнивание по левому краю */
.section-header {
  text-align: left;
  margin-bottom: 50px;
}

.section-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #2c2420;
  margin: 0;
}

/* Сетка тарифов */
.tarif-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

/* Карточка тарифа - без скругления */
.tarif-card {
  background: #fff;
  border-radius: 0;
  padding: 40px 30px 30px;
  box-shadow: 0 4px 20px rgba(44, 36, 32, 0.06);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.tarif-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(44, 36, 32, 0.1);
}

/* Заголовок тарифа - по центру */
.tarif-header {
  text-align: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0ebe7;
}

.tarif-name {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #2c2420;
  margin: 0 0 4px 0;
}

.tarif-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}

.tarif-price .price {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 28px;
  color: #2c2420;
}

/* Тело тарифа - характеристики */
.tarif-body {
  flex: 1;
  padding: 20px 0;
}

.tarif-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tarif-features li {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #4f4540;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.4;
}

.feature-label {
  color: #4f4540;
}

.feature-value {
  color: #2c2420;
  font-weight: 500;
}

/* Футер тарифа - кнопка */
.tarif-footer {
  padding-top: 20px;
  border-top: 1px solid #f0ebe7;
  display: flex;
  justify-content: center;
}

.btn-order {
  width: 296px;
  height: 50px;
  padding: 0;
  background: transparent;
  color: #2c2420;
  border: 1px solid #2c2420;
  border-radius: 10px;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-order:hover {
  background: #2c2420;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(44, 36, 32, 0.15);
}

/* Адаптив */
@media (max-width: 1024px) {
  .tarif-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .section-title {
    font-size: 60px;
  }
  
  .btn-order {
    width: 100%;
    max-width: 296px;
  }
}

@media (max-width: 700px) {
  .tarif-section {
    padding: 50px 16px;
  }
  
  .section-title {
    font-size: 48px;
  }
  
  .tarif-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .tarif-card {
    padding: 30px 20px 24px;
  }
  
  .tarif-price .price {
    font-size: 24px;
  }
  
  .tarif-name {
    font-size: 20px;
  }
  
  .btn-order {
    width: 100%;
    max-width: 296px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 36px;
  }
  
  .btn-order {
    width: 100%;
    max-width: 100%;
  }
}
</style>