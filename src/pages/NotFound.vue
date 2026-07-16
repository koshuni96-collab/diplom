<template>
  <div class="not-found">
    <HeaderComponent />
    <div class="not-found-content">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, но запрашиваемая страница не существует</p>
      <router-link to="/" class="btn-home">Вернуться на главную</router-link>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: 'NotFound',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fcfaf8;
}

.not-found-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
}

.not-found-content h1 {
  font-size: 120px;
  font-weight: 700;
  color: #d4b8a8;
  margin: 0;
  line-height: 1;
}

.not-found-content h2 {
  font-size: 32px;
  color: #2c2420;
  margin: 0 0 12px 0;
}

.not-found-content p {
  font-size: 18px;
  color: #6b5f58;
  margin-bottom: 30px;
}

.btn-home {
  display: inline-block;
  padding: 14px 40px;
  background: #2c2420;
  color: #fff;
  text-decoration: none;
  border-radius: 40px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-home:hover {
  background: #4a3f3a;
  transform: translateY(-2px);
}
</style>