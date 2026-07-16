<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Навигация -->
        <div class="footer-col">
          <h4>Навигация</h4>
          <nav>
            <router-link to="/about">Обо мне</router-link>
            <router-link to="/">Портфолио</router-link>
          </nav>
        </div>

        <!-- Этапы работы + Тарифы -->
        <div class="footer-col">
          <h4>Этапы работы</h4>
          <nav>
            <router-link to="/tariffs">Тарифы</router-link>
            <router-link to="/contact">Контакты</router-link>
          </nav>
        </div>

        <!-- Контакты -->
        <div class="footer-col">
          <h4>Контакты</h4>
          <a href="tel:+77777777777" class="phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +7 (777) 777-77-77
          </a>
          
          <div class="social">
            <a href="#" aria-label="VK">VK</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Telegram">TG</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background: #fff;
  color: #4a4a5a;
  padding: 60px 20px 20px;
  font-family: 'Gilroy', sans-serif;
  border-top: 1px solid #e8e8ee;
}
.container { max-width: 1200px; margin: 0 auto; }
.footer-content {
  display: flex;
  gap: 80px;
  justify-content: space-between;
  padding-bottom: 40px;
  border-bottom: 1px solid #e8e8ee;
}
.footer-col {
  flex: 1;
  min-width: 140px;
}
.footer-col:last-child { text-align: right; }
.footer-col h4 {
  font-weight: 500;
  font-size: 16px;
  color: #1a1a2e;
  margin: 0 0 14px;
}
.footer-col nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-col nav a {
  font-size: 14px;
  color: #4a4a5a;
  text-decoration: none;
  transition: color .3s;
}
.footer-col nav a:hover { color: #1a1a2e; }

.phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #4a4a5a;
  text-decoration: none;
  transition: color .3s;
}
.phone:hover { color: #1a1a2e; }
.phone svg { flex-shrink: 0; }

.social {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  justify-content: flex-end;
}
.social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f8f9fc;
  border: 1px solid #e8e8ee;
  font-weight: 500;
  font-size: 13px;
  color: #4a4a5a;
  text-decoration: none;
  transition: all .3s;
}
.social a:hover {
  background: #1a1a2e;
  color: #fff;
  border-color: #1a1a2e;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer { padding: 40px 16px 16px; }
  .footer-content {
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;
  }
  .footer-col { flex: 1; width: 100%; }
  .footer-col:last-child { text-align: left; }
  .footer-col nav { flex-direction: row; flex-wrap: wrap; gap: 8px 16px; }
  .social { justify-content: flex-start; }
}
@media (max-width: 480px) {
  .footer { padding: 30px 14px 14px; }
  .footer-content { gap: 24px; }
  .footer-col nav { flex-direction: column; gap: 6px; }
  .social a { width: 36px; height: 36px; font-size: 12px; }
}
</style>