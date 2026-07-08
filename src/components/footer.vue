<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Левая колонка: Навигация -->
        <div class="footer-col footer-col-left">
          <h4 class="footer-title">Навигация</h4>
          <nav class="footer-nav">
            <router-link to="/about" class="footer-link">Обо мне</router-link>
            <router-link to="/" class="footer-link">Портфолио</router-link>
          </nav>
        </div>

        <!-- Центральная колонка: Этапы работы + Тарифы -->
        <div class="footer-col footer-col-center">
          <h4 class="footer-title">Этапы работы</h4>
          <nav class="footer-nav">
            <router-link to="/tariffs" class="footer-link">Тарифы</router-link>
            <router-link to="/contact" class="footer-link">Контакты</router-link>
          </nav>
        </div>

        <!-- Правая колонка: Контакты -->
        <div class="footer-col footer-col-right">
          <h4 class="footer-title">Контакты</h4>
          <div class="footer-contacts">
            <a href="tel:+77777777777" class="footer-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +7 (777) 777-77-77
            </a>
          </div>
          
          <!-- Социальные сети -->
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="ВКонтакте">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-.3.3-.7.3-1.1.3-.7 0-1.4-.3-2-.7-.8-.5-1.6-1.2-2.4-2-.8-.8-1.5-1.6-2-2.4-.4-.6-.7-1.3-.7-2.1 0-.4.2-.8.6-1.2.4-.4.8-.6 1.2-.6.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 4h2c.6 0 1 .4 1 1s-.4 1-1 1h-2c-.6 0-1-.4-1-1s.4-1 1-1zm1 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-2 5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1h-2c-.6 0-1-.4-1-1z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 8.3c-.2 1.3-.8 4.4-1.2 5.9-.2.7-.5.9-.9.9-.8 0-1.4-.6-2.2-1.1-1.2-.8-1.9-1.4-3-2.2-.8-.6-.3-1 .3-1.2.4-.1.7-.2 1.1-.4 1.2-.5 2.1-1.1 3.1-1.7.4-.2.7-.3.9-.4.2-.1.4-.2.4.1 0 .1 0 .3-.1.4z"/>
              </svg>
            </a>
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
/* ✅ @font-face УДАЛЕН - шрифт подключается глобально */

.footer {
  background: #ffffff;
  color: #4a4a5a;
  padding: 60px 20px 20px;
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border-top: 1px solid #e8e8ee;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  gap: 80px;
  justify-content: space-between;
  padding-bottom: 40px;
  border-bottom: 1px solid #e8e8ee;
}

.footer-col {
  flex: 0 0 auto;
  min-width: 140px;
}

.footer-col-left {
  text-align: left;
}

.footer-col-center {
  text-align: left;
}

.footer-col-right {
  text-align: right;
  margin-left: auto;
}

.footer-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #1a1a2e;
  margin: 0 0 14px 0;
  letter-spacing: 0.3px;
}

/* ===== НАВИГАЦИЯ ===== */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-col-right .footer-nav {
  align-items: flex-end;
}

.footer-link {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #4a4a5a;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #1a1a2e;
}

/* ===== КОНТАКТЫ ===== */
.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
}

.footer-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #4a4a5a;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-phone:hover {
  color: #1a1a2e;
}

.footer-phone svg {
  flex-shrink: 0;
  stroke: #4a4a5a;
  transition: stroke 0.3s ease;
}

.footer-phone:hover svg {
  stroke: #1a1a2e;
}

/* ===== СОЦИАЛЬНЫЕ СЕТИ ===== */
.footer-social {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f8f9fc;
  border: 1px solid #e8e8ee;
  border-radius: 0;
  transition: all 0.3s ease;
  color: #4a4a5a;
  text-decoration: none;
}

.social-link:hover {
  background: #1a1a2e;
  color: #ffffff;
  border-color: #1a1a2e;
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 768px) {
  .footer {
    padding: 40px 16px 16px;
  }

  .footer-content {
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;
    align-items: flex-start;
  }

  .footer-col {
    flex: 1;
    min-width: auto;
    width: 100%;
  }

  .footer-col-left,
  .footer-col-center,
  .footer-col-right {
    text-align: left;
  }

  .footer-col-right {
    margin-left: 0;
  }

  .footer-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px 16px;
  }

  .footer-col-right .footer-nav {
    align-items: flex-start;
  }

  .footer-contacts {
    align-items: flex-start;
  }

  .footer-social {
    justify-content: flex-start;
  }

  .footer-link {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 30px 14px 14px;
  }

  .footer-content {
    gap: 24px;
  }

  .footer-title {
    font-size: 15px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 6px;
  }

  .footer-phone {
    font-size: 13px;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .social-link svg {
    width: 18px;
    height: 18px;
  }
}
</style>