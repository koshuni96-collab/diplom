<!-- src/components/tariff-detail.vue -->
<template>
  <section class="tariff-detail-section">
    <div class="container">
      <div class="tariff-detail-wrapper">
        <!-- Левая колонка: Фото -->
        <div class="tariff-detail-image">
          <img 
            src="/tariff-detail.jpg" 
            alt="Женский портрет" 
            class="tariff-photo"
          />
        </div>

        <!-- Правая колонка: Описание тарифа -->
        <div class="tariff-detail-content">
          <h1 class="tariff-detail-title">Женский портрет</h1>
          <div class="tariff-detail-price">25 000 ₽</div>

          <p class="tariff-detail-description">
            Каждая женщина уникальна, и каждая история заслуживает быть рассказанной. 
            Услуга женского портрета — это возможность запечатлеть вашу индивидуальность, 
            внутреннюю силу и естественную красоту. Мы предлагаем вам создать не просто 
            фотографию, а произведение искусства, которое будет отражать ваш характер 
            и настроение.
          </p>

          <div class="tariff-detail-features">
            <h3>Что включает в себя услуга:</h3>
            <ul>
              <li>Индивидуальная консультация</li>
              <li>Профессиональный макияж и прическа</li>
              <li>Выбор локации</li>
              <li>Постобработка</li>
            </ul>
          </div>

          <div class="tariff-detail-action">
            <a href="#contact" class="btn-primary">Записаться на съемку</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TariffDetailComponent'
}
</script>

<style scoped>
.tariff-detail-section {
  padding: 120px 20px 80px;
  background: #fcfaf8;
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* ===== ДВЕ КОЛОНКИ ===== */
.tariff-detail-wrapper {
  display: flex;
  gap: 60px;
  align-items: stretch;
}

/* ===== ЛЕВАЯ КОЛОНКА: ФОТО ===== */
.tariff-detail-image {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: stretch;
}

.tariff-photo {
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 0;
  display: block;
}

/* ===== ПРАВАЯ КОЛОНКА: ОПИСАНИЕ ===== */
.tariff-detail-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  text-align: center;
}

.tariff-detail-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #1a1a2e;
  margin: 0 0 8px 0;
}

.tariff-detail-price {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 32px;
  color: #1a1a2e;
  margin-bottom: 24px;
}

.tariff-detail-description {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.8;
  color: #4a4a5a;
  margin-bottom: 32px;
  text-align: justify; /* Выравнивание по ширине */
  text-justify: inter-word; /* Для лучшего распределения слов */
}

.tariff-detail-features {
  margin-bottom: 40px;
  text-align: center;
}

.tariff-detail-features h3 {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #1a1a2e;
  margin: 0 0 16px 0;
  text-align: center;
}

.tariff-detail-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  text-align: left;
}

.tariff-detail-features ul li {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: #4a4a5a;
  padding: 8px 0 8px 32px;
  position: relative;
  line-height: 1.6;
}

/* Кружки вместо галочек */
.tariff-detail-features ul li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #1a1a2e;
  font-weight: 400;
  font-size: 14px;
}

.tariff-detail-action {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}

.btn-primary {
  display: inline-block;
  padding: 14px 48px;
  background: transparent !important;
  color: #1a1a2e !important;
  border: 2px solid #1a1a2e !important;
  border-radius: 0;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 17px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #1a1a2e !important;
  color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26, 26, 46, 0.15);
}

/* ===== АДАПТИВ ===== */
@media (max-width: 1024px) {
  .tariff-detail-wrapper {
    gap: 40px;
  }

  .tariff-detail-title {
    font-size: 40px;
  }

  .tariff-detail-price {
    font-size: 28px;
  }

  .tariff-photo {
    max-height: 500px;
  }
}

@media (max-width: 768px) {
  .tariff-detail-section {
    padding: 100px 16px 60px;
    min-height: auto;
  }

  .tariff-detail-wrapper {
    flex-direction: column;
    gap: 30px;
  }

  .tariff-detail-image {
    order: -1;
  }

  .tariff-photo {
    max-height: 400px;
    width: 100%;
  }

  .tariff-detail-title {
    font-size: 36px;
  }

  .tariff-detail-price {
    font-size: 26px;
  }

  .tariff-detail-description {
    font-size: 16px;
    text-align: justify;
  }

  .tariff-detail-features h3 {
    font-size: 18px;
  }

  .tariff-detail-features ul li {
    font-size: 15px;
  }

  .btn-primary {
    padding: 12px 32px;
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .tariff-detail-title {
    font-size: 28px;
  }

  .tariff-detail-price {
    font-size: 22px;
  }

  .tariff-detail-description {
    font-size: 15px;
    text-align: justify;
  }

  .tariff-photo {
    max-height: 300px;
  }

  .btn-primary {
    padding: 12px 24px;
    font-size: 14px;
  }
}
</style>