<!-- About.vue -->
<template>
  <section id="about" class="about">
    <div class="container">
      <!-- Заголовок -->
      <div class="about-header">
        <h2 class="section-title">Обо мне</h2>
      </div>

      <div class="about-grid">
                <div class="about-col about-col-text">
          <p class="about-text">
            Привет! Меня зовут Алина, и я профессиональный фотограф в создании уникальных и запоминающихся изображений. Моя страсть к фотографии началась с детства, и с тех пор я стремлюсь запечатлеть самые важные моменты в жизни людей.
          </p>
          <p class="about-text">
            Я верю, что каждая фотография — это не просто изображение, а история, полная эмоций и жизни.
          </p>
          <p class="about-text">
            Моя цель — создать для вас не просто снимки, а настоящие произведения искусства, которые будут радовать вас долгие годы.
          </p>
        </div>
        <div class="about-col about-col-text">
          <p class="about-text">
            Я работаю в Саратове и Москве, но готова отправиться в любое место, чтобы запечатлеть ваши особенные моменты. Мой стиль можно охарактеризовать как минималистичный, и я всегда стараюсь передать атмосферу и эмоции каждого события.
          </p>
          <p class="about-text closing">
            Я с нетерпением жду возможности поработать с вами и помочь вам сохранить ваши воспоминания на долгие годы!
          </p>
        </div>
       
        <div class="about-col about-col-image">
          <img 
            src="/about-photo.jpg" 
            alt="Алина - фотограф" 
            class="about-photo"
          />
        </div>
      </div>
    </div>
    <div class="about-footer-image">
      <img 
        src="/about-photo1.jpg" 
        alt="Фото подвал" 
        class="footer-photo"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style scoped>
.about {
  padding: 80px 20px 0 20px;
  background: #ffffff;
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-header {
  text-align: left;
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 80px;
  line-height: 100%;
  color: #000000;
  margin: 0;
}

.about-grid {
  display: flex;
  gap: 40px;
  align-items: stretch;
  margin-bottom: 60px;
}

.about-col {
  flex: 1;
  min-width: 0;
}

.about-col-text {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.about-text {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.8;
  color: #000000;
  margin: 0;
}

.closing {
  font-weight: 500;
}

.about-col-image {
  flex: 0 0 28%;
  max-width: 28%;
  display: flex;
  align-items: stretch;
}

.about-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-footer-image {
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  max-height: 50vh;
}

.footer-photo {
  width: 100%;
  height: 50vh;
  display: block;
  object-fit: cover;
  object-position: center 30%;
}


/* 1200px */
@media (max-width: 1200px) {
  .section-title {
    font-size: 60px;
  }
}

/* 992px */
@media (max-width: 992px) {
  .about-grid {
    flex-wrap: wrap;
    gap: 30px;
  }

  .about-col-image {
    flex: 0 0 40%;
    max-width: 40%;
  }

  .about-col-text {
    flex: 1 1 45%;
    min-width: 200px;
  }

  .section-title {
    font-size: 48px;
  }

  .footer-photo {
    height: 40vh;
    object-position: center 25%;
  }
  .about-footer-image {
    max-height: 40vh;
  }
}

/* 768px */
@media (max-width: 768px) {
  .about {
    padding: 50px 16px 0 16px;
  }

  .about-header {
    margin-bottom: 30px;
  }

  .section-title {
    font-size: 40px;
  }

  .about-grid {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .about-col-image {
    flex: 0 0 100%;
    max-width: 300px;
    order: -1;
    height: auto;
  }

  .about-col-image .about-photo {
    height: auto;
    aspect-ratio: 1/1;
  }

  .about-col-text {
    flex: 1 1 100%;
    width: 100%;
  }

  .about-text {
    font-size: 16px;
  }

  .footer-photo {
    height: 35vh;
    object-position: center 20%;
  }
  .about-footer-image {
    max-height: 35vh;
  }
}

/* 480px */
@media (max-width: 480px) {
  .about {
    padding: 40px 14px 0 14px;
  }

  .section-title {
    font-size: 32px;
  }

  .about-col-image {
    max-width: 250px;
  }

  .about-text {
    font-size: 15px;
  }

  .footer-photo {
    height: 30vh;
    object-position: center 15%;
  }
  .about-footer-image {
    max-height: 30vh;
  }
}
</style>