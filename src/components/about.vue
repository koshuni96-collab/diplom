<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">Обо мне</h2>

      <div class="about-grid">
        <div class="about-col">
          <p>
            Привет! Меня зовут Алина, и я профессиональный фотограф в создании уникальных и запоминающихся изображений. Моя страсть к фотографии началась с детства, и с тех пор я стремлюсь запечатлеть самые важные моменты в жизни людей.
          </p>
          <p>
            Я верю, что каждая фотография — это не просто изображение, а история, полная эмоций и жизни.
          </p>
          <p>
            Моя цель — создать для вас не просто снимки, а настоящие произведения искусства, которые будут радовать вас долгие годы.
          </p>
        </div>
        
        <div class="about-col">
          <p>
            Я работаю в Саратове и Москве, но готова отправиться в любое место, чтобы запечатлеть ваши особенные моменты. Мой стиль можно охарактеризовать как минималистичный, и я всегда стараюсь передать атмосферу и эмоции каждого события.
          </p>
          <p class="closing">
            Я с нетерпением жду возможности поработать с вами и помочь вам сохранить ваши воспоминания на долгие годы!
          </p>
        </div>
       
        <div class="about-col image">
          <img src="/about-photo.jpg" alt="Алина - фотограф" />
        </div>
      </div>
    </div>
    
    <div class="footer-image">
      <img src="/about-photo1.jpg" alt="Фото подвал" />
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
  padding: 80px 20px 0;
  background: #fff;
  font-family: 'Gilroy', sans-serif;
}
.container { max-width: 1200px; margin: 0 auto; }

.section-title {
  font-size: 80px;
  font-weight: 500;
  color: #000;
  margin: 0 0 40px;
}

.about-grid {
  display: flex;
  gap: 40px;
  align-items: stretch;
  margin-bottom: 60px;
}
.about-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.about-col p {
  font-size: 17px;
  line-height: 1.8;
  color: #000;
  margin: 0;
}
.closing { font-weight: 500; }

.about-col.image {
  flex: 0 0 28%;
  max-width: 28%;
}
.about-col.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-image {
  width: 100%;
  overflow: hidden;
  max-height: 50vh;
}
.footer-image img {
  width: 100%;
  height: 50vh;
  display: block;
  object-fit: cover;
  object-position: center 30%;
}

@media (max-width: 1200px) {
  .section-title { font-size: 60px; }
}
@media (max-width: 992px) {
  .about-grid { flex-wrap: wrap; gap: 30px; }
  .about-col.image { flex: 0 0 40%; max-width: 40%; }
  .about-col { flex: 1 1 45%; min-width: 200px; }
  .section-title { font-size: 48px; }
  .footer-image img { height: 40vh; object-position: center 25%; }
  .footer-image { max-height: 40vh; }
}
@media (max-width: 768px) {
  .about { padding: 50px 16px 0; }
  .section-title { font-size: 40px; margin-bottom: 30px; }
  .about-grid { flex-direction: column; align-items: center; gap: 30px; }
  .about-col.image { flex: 0 0 100%; max-width: 300px; order: -1; }
  .about-col.image img { height: auto; aspect-ratio: 1/1; }
  .about-col { flex: 1 1 100%; width: 100%; }
  .about-col p { font-size: 16px; }
  .footer-image img { height: 35vh; object-position: center 20%; }
  .footer-image { max-height: 35vh; }
}
@media (max-width: 480px) {
  .about { padding: 40px 14px 0; }
  .section-title { font-size: 32px; }
  .about-col.image { max-width: 250px; }
  .about-col p { font-size: 15px; }
  .footer-image img { height: 30vh; object-position: center 15%; }
  .footer-image { max-height: 30vh; }
}
</style>