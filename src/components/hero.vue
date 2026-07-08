<!-- src/components/hero.vue -->
<template>
  <section class="hero" id="hero">
    <div class="hero-bg">
      <div class="hero-bg-wrapper">
        <img src="/fon.jpg" alt="Фон" class="hero-bg-image" />
      </div>
      <div class="hero-overlay"></div>
    </div>

    <!-- Блок с текстом поверх фона -->
    <div class="hero-text-block">
      <div class="hero-content">
        <h1 class="hero-title">
          Запечатлевая мгновения, создавая<br>воспоминания!
        </h1>

        <p class="hero-subtitle">
          Профессиональный фотограф <span class="author-name">Алина Акчурина</span>
        </p>

        <div class="hero-actions">
          <a href="#contact" class="btn-primary">
            Записаться на съемку
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent'
}
</script>

<style scoped>
/* ===== ОСНОВНЫЕ СТИЛИ ===== */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 0;
  background: #1a1a1a;
}

/* ===== КОНТЕЙНЕР ДЛЯ ФОНА ===== */
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-bg-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  overflow: hidden;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
}


.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  pointer-events: none;
}

/* ===== БЛОК С ТЕКСТОМ ===== */
.hero-text-block {
  position: relative;
  z-index: 2;
  max-width: 520px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 40px 30px 50px;
  margin-left: 60px;
  background: transparent !important;
  backdrop-filter: none !important;
  border: none !important;
  box-shadow: none !important;
}

.hero-content {
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}


.hero-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: justify;
  color: #ffffff !important;
  margin: 0 0 12px 0;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  padding-bottom: 12px;
  width: 100%;
}


.hero-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ffffff;
  border-radius: 1px;
}

.hero-subtitle {
  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff !important;
  margin: 14px 0 20px 0;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.hero-subtitle .author-name {
  font-weight: 600;
  color: #ffffff !important;
  text-decoration: none !important;
}

.hero-actions {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-primary {
  display: inline-block;
  padding: 10px 32px;
  background: transparent !important;
  color: #ffffff !important;
  border: 2px solid #ffffff !important;
  border-radius: 0 !important;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease;
  letter-spacing: 0.3px;
}

.btn-primary:hover {
  background: #ffffff !important;
  color: #2c2420 !important;
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
}

/* ===== АДАПТИВ ===== */
@media (max-width: 1024px) {
  .hero-text-block {
    margin-left: 40px;
    padding: 25px 30px 25px 40px;
    max-width: 460px;
  }
}

@media (max-width: 768px) {
  .hero {
    justify-content: center;
  }
  
  .hero-text-block {
    max-width: 90%;
    margin-left: 0;
    padding: 24px 20px;
    justify-content: center;
  }
  
  .hero-content {
    text-align: center;
    align-items: center;
  }
  
  .hero-title {
    width: 100%;
    text-align: center;
    font-size: 18px;
  }
  
  .hero-title::after {
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
  }
  
  .hero-subtitle {
    font-size: 14px;
    margin: 12px 0 16px 0;
  }

  .btn-primary {
    padding: 10px 28px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero-text-block {
    max-width: 95%;
    padding: 18px 14px;
  }
  
  .hero-title {
    font-size: 16px;
  }

  .hero-subtitle {
    font-size: 13px;
    margin: 10px 0 14px 0;
  }

  .btn-primary {
    padding: 10px 20px;
    font-size: 13px;
    width: 100%;
    text-align: center;
  }
}
</style>