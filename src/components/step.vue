<template>
  <section class="steps-section" id="steps">   
    <h2 class="steps-title">Этапы работы</h2>
       
    <div class="steps-wrapper">
      <!-- Левая часть: сетка 2x2 с этапами -->
      <div class="steps-grid">
        <!-- Шаг 1 -->
        <div class="step-card">
          <div class="step-header">
            <span class="step-number">1.</span>
            <h3 class="step-name">Знакомство</h3>
          </div>
          <p class="step-description">
            На этом этапе мы обсуждаем с клиентом детали фотосессии: цели, предпочтения, стиль, локации и возможные идеи. Это помогает установить доверие и понять ожидания клиента.
          </p>
        </div>

        <!-- Шаг 2 -->
        <div class="step-card">
          <div class="step-header">
            <span class="step-number">2.</span>
            <h3 class="step-name">Концепция</h3>
          </div>
          <p class="step-description">
            Мы разрабатываем концепцию съемки, выбираем подходящие локации, время суток для съемки и собираем необходимое оборудование. Также продумываем образы и реквизит.
          </p>
        </div>

        <!-- Шаг 3 -->
        <div class="step-card">
          <div class="step-header">
            <span class="step-number">3.</span>
            <h3 class="step-name">Съемка</h3>
          </div>
          <p class="step-description">
            Проводим саму фотосессию. Я помогаю с позами, выражениями и взаимодействиями, чтобы запечатлеть естественные моменты и эмоции.
          </p>
        </div>

        <!-- Шаг 4 -->
        <div class="step-card">
          <div class="step-header">
            <span class="step-number">4.</span>
            <h3 class="step-name">Фото</h3>
          </div>
          <p class="step-description">
            Готовые фотографии передаются клиенту через неделю в согласованном формате (цифровые файлы, печатные версии) и обработанные в авторской ретуши.
          </p>
        </div>
      </div>

      <!-- Правая часть: фото на всю высоту -->
      <div class="steps-image">
        <img 
          src="/rabota.jpg" 
          alt="Этапы работы" 
          class="steps-photo"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StepSection'
}
</script>

<style scoped>
/* ✅ @font-face УДАЛЕН - шрифт подключается глобально через global.css */

.steps-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.steps-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #1a1a2e;
  margin-bottom: 3rem;
  text-align: left;
  /* Убрано подчеркивание */
}

/* ===== ОСНОВНОЙ КОНТЕЙНЕР ===== */
.steps-wrapper {
  display: flex;
  gap: 2rem;
  align-items: stretch;
}

/* ===== ЛЕВАЯ ЧАСТЬ: СЕТКА 2x2 ===== */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  flex: 2;
}

/* ===== ПРАВАЯ ЧАСТЬ: ФОТО ===== */
.steps-image {
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: stretch;
}

.steps-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0; /* Убрано скругление */
}

/* ===== КАРТОЧКИ ЭТАПОВ ===== */
.step-card {
  background: white;
  border-radius: 0; /* Убрано скругление */
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0f0f0;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

/* ===== ЗАГОЛОВОК В ОДНУ СТРОКУ ===== */
.step-header {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.step-number {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  color: #000000; /* Черный цвет */
  line-height: 100%;
}

.step-name {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  color: #000000; /* Черный цвет */
  line-height: 100%;
  margin: 0;
}

.step-description {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5a6a7e;
  margin: 0;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 1024px) {
  .steps-title {
    font-size: 60px;
  }
  
  .steps-wrapper {
    flex-direction: column;
  }
  
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
    flex: 1;
  }
  
  .steps-image {
    flex: 0 0 300px;
    min-width: 100%;
  }
  
  .steps-photo {
    height: 300px;
    object-fit: cover;
  }
}

@media (max-width: 768px) {
  .steps-section {
    padding: 3rem 1.5rem;
  }

  .steps-title {
    font-size: 48px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .step-card {
    padding: 1.5rem;
  }

  .step-number {
    font-size: 1.1rem;
  }

  .step-name {
    font-size: 1.1rem;
  }
  
  .steps-image {
    flex: 0 0 250px;
  }
  
  .steps-photo {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .steps-section {
    padding: 2rem 1rem;
  }

  .steps-title {
    font-size: 36px;
  }

  .step-card {
    padding: 1.2rem;
  }
  
  .steps-image {
    flex: 0 0 200px;
  }
  
  .steps-photo {
    height: 200px;
  }
}
</style>