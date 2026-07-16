<template>
  <section class="tariff-detail">
    <div class="container">
      <div class="wrapper">
        <div class="image">
          <img src="/tariff-detail.jpg" alt="Женский портрет" />
        </div>

        <div class="content">
          <h1>Женский портрет</h1>
          <div class="price">25 000 ₽</div>

          <p class="description">
            Каждая женщина уникальна, и каждая история заслуживает быть рассказанной. 
            Услуга женского портрета — это возможность запечатлеть вашу индивидуальность, 
            внутреннюю силу и естественную красоту.
          </p>

          <div class="features">
            <h3>Что включает в себя услуга:</h3>
            <ul>
              <li>Индивидуальная консультация</li>
              <li>Профессиональный макияж и прическа</li>
              <li>Выбор локации</li>
              <li>Постобработка</li>
            </ul>
          </div>

          <a href="#contact" class="btn">Записаться на съемку</a>
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
.tariff-detail {
  padding: 120px 20px 80px;
  background: #fcfaf8;
  font-family: 'Gilroy', sans-serif;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
}
.container { max-width: 1200px; margin: 0 auto; width: 100%; }

.wrapper {
  display: flex;
  gap: 60px;
  align-items: stretch;
}
.image { flex: 1; display: flex; align-items: stretch; }
.image img {
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
  display: block;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.content h1 {
  font-size: 48px;
  font-weight: 500;
  color: #1a1a2e;
  margin: 0 0 8px;
}
.price {
  font-size: 32px;
  font-weight: 500;
  color: #1a1a2e;
  margin-bottom: 24px;
}
.description {
  font-size: 18px;
  line-height: 1.8;
  color: #4a4a5a;
  margin-bottom: 32px;
  text-align: justify;
}
.features { margin-bottom: 40px; }
.features h3 {
  font-size: 20px;
  font-weight: 500;
  color: #1a1a2e;
  margin: 0 0 16px;
}
.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  text-align: left;
}
.features ul li {
  font-size: 17px;
  color: #4a4a5a;
  padding: 8px 0 8px 32px;
  position: relative;
  line-height: 1.6;
}
.features ul li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #1a1a2e;
  font-size: 14px;
}
.btn {
  display: inline-block;
  padding: 14px 48px;
  background: transparent;
  color: #1a1a2e;
  border: 2px solid #1a1a2e;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all .3s;
}
.btn:hover {
  background: #1a1a2e;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26,26,46,0.15);
}

@media (max-width: 1024px) {
  .wrapper { gap: 40px; }
  .content h1 { font-size: 40px; }
  .price { font-size: 28px; }
  .image img { max-height: 500px; }
}
@media (max-width: 768px) {
  .tariff-detail { padding: 100px 16px 60px; min-height: auto; }
  .wrapper { flex-direction: column; gap: 30px; }
  .image { order: -1; }
  .image img { max-height: 400px; width: 100%; }
  .content h1 { font-size: 36px; }
  .price { font-size: 26px; }
  .description { font-size: 16px; }
  .features h3 { font-size: 18px; }
  .features ul li { font-size: 15px; }
  .btn { padding: 12px 32px; font-size: 15px; width: 100%; text-align: center; }
}
@media (max-width: 480px) {
  .content h1 { font-size: 28px; }
  .price { font-size: 22px; }
  .description { font-size: 15px; }
  .image img { max-height: 300px; }
  .btn { padding: 12px 24px; font-size: 14px; }
}
</style>