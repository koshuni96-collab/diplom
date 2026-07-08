<!-- src/components/contact.vue -->
<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="contact-wrapper">
        <!-- Левая колонка: Понравились мои работы? -->
        <div class="contact-content">
          <div class="contact-header">
            <h2 class="section-title">Понравились мои работы?</h2>
            
            <p class="section-description">
              Давайте вместе создадим воспоминания, которые будут радовать вас на протяжении многих лет!<br>
              Заполните форму ниже, и я свяжусь с вами в ближайшее время. Жду с нетерпением возможности поработать с вами!
            </p>
          </div>

          <!-- Форма -->
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="Имя"
                  required
                />
              </div>

              <div class="form-group">
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  placeholder="Номер телефона"
                  required
                />
              </div>

              <button type="submit" class="btn-submit">Оставить заявку</button>
            </div>
          </form>

          <p class="form-note">
            Нажимая кнопку, вы даете согласие на обработку ваших персональных данных.<br>
            <a href="#" class="privacy-link">Политика конфиденциальности</a>
          </p>
        </div>

        <!-- Правая колонка: Контакты -->
        <div class="contact-info">
          <h3 class="info-title">Контакты</h3>
          <p class="info-subtitle">
            Свяжитесь со мной, если у вас возникли вопросы или предложения
          </p>
          <div class="contact-phone">
            <span class="phone-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <a href="tel:+77777777777" class="phone-link">+7 (777) 777-77-77</a>
          </div>
          
          <!-- Социальные сети -->
          <div class="social-links">
            <a href="#" class="social-link" aria-label="ВКонтакте">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-.3.3-.7.3-1.1.3-.7 0-1.4-.3-2-.7-.8-.5-1.6-1.2-2.4-2-.8-.8-1.5-1.6-2-2.4-.4-.6-.7-1.3-.7-2.1 0-.4.2-.8.6-1.2.4-.4.8-.6 1.2-.6.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.8.2-.2.4-.4.7-.4h2.5c.3 0 .6.1.8.3.2.2.4.5.4.8v2.5c0 .3.1.5.3.7.2.2.4.3.6.3.3 0 .5-.1.7-.3.2-.2.4-.5.4-.8v-2.5c0-.3-.1-.5-.3-.7-.2-.2-.4-.3-.7-.3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 4h2c.6 0 1 .4 1 1s-.4 1-1 1h-2c-.6 0-1-.4-1-1s.4-1 1-1zm1 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-2 5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1h-2c-.6 0-1-.4-1-1z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Telegram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 8.3c-.2 1.3-.8 4.4-1.2 5.9-.2.7-.5.9-.9.9-.8 0-1.4-.6-2.2-1.1-1.2-.8-1.9-1.4-3-2.2-.8-.6-.3-1 .3-1.2.4-.1.7-.2 1.1-.4 1.2-.5 2.1-1.1 3.1-1.7.4-.2.7-.3.9-.4.2-.1.4-.2.4.1 0 .1 0 .3-.1.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
      form: {
        name: '',
        phone: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Форма отправлена:', this.form)
      alert('Спасибо! Я свяжусь с вами в ближайшее время.')
      this.form.name = ''
      this.form.phone = ''
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 80px 20px;
  background: #ffffff;
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-wrapper {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}

/* ===== ЛЕВАЯ КОЛОНКА ===== */
.contact-content {
  flex: 0 0 700px;
  max-width: 700px;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 110%;
  letter-spacing: 0%;
  color: #1a1a2e;
  margin: 0 0 20px 0;
}

.section-description {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.8;
  color: #4a4a5a;
  margin: 0;
}

/* ===== ФОРМА В ОДНУ СТРОКУ ===== */
.contact-form {
  max-width: 100%;
}

.form-row {
  display: flex;
  gap: 16px;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 150px;
  max-width: 250px;
}

.form-group input {
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  font-family: 'Gilroy', sans-serif;
  font-size: 16px;
  color: #3f3f45;
  transition: border-color 0.3s ease;
  background: #fafafa;
  width: 100%;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #c4c6cb;
  background: #ffffff;
}

.form-group input::placeholder {
  color: #a0a0b0;
}

.btn-submit {
  padding: 14px 32px;
  background: #606068;
  color: #ffffff;
  border: none;
  border-radius: 0;
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  height: 50px;
  min-width: 180px;
}

.btn-submit:hover {
  background: #2a2a4e;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26, 26, 46, 0.15);
}

/* ===== ПРИМЕЧАНИЕ О КОНФИДЕНЦИАЛЬНОСТИ ===== */
.form-note {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #7a7a8a;
  margin: 20px 0 0 0;
  line-height: 1.6;
  text-align: left;
}

.privacy-link {
  color: #d2d5df;
  text-decoration: none;
  transition: color 0.3s ease;
}

.privacy-link:hover {
  color: #babcc6;
  text-decoration: underline;
}

/* ===== ПРАВАЯ КОЛОНКА: КОНТАКТЫ ===== */
.contact-info {
  flex: 1;
  padding: 40px;
  background: #f8f9fc;
  border-radius: 0;
  min-width: 280px;
}

.info-title {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 28px;
  color: #1a1a2e;
  margin: 0 0 12px 0;
}

.info-subtitle {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #4a4a5a;
  margin: 0 0 30px 0;
  line-height: 1.6;
}

.contact-phone {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #ffffff;
  border-radius: 0;
  border: 1px solid #e8e8ee;
  margin-bottom: 24px;
}

.phone-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-icon svg {
  width: 24px;
  height: 24px;
  stroke: black;
}

.phone-link {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #1a1a2e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.phone-link:hover {
  color: #4a6cf7;
}

/* ===== СОЦИАЛЬНЫЕ СЕТИ ===== */
.social-links {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  margin-top: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 0;
  border: 1px solid #e8e8ee;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #4a6cf7;
}

.social-link svg {
  width: 28px;
  height: 28px;
  fill: black;
}

.social-link:hover svg {
  transform: scale(1.05);
}

/* ===== АДАПТИВ ===== */
@media (max-width: 1024px) {
  .contact-wrapper {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .section-title {
    font-size: 48px;
  }

  .contact-content {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .contact-info {
    width: 100%;
    min-width: auto;
  }
  
  .form-row {
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    max-width: 100%;
    width: 100%;
  }
  
  .btn-submit {
    width: 100%;
    white-space: normal;
  }
  
  .social-links {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 50px 16px;
  }

  .section-title {
    font-size: 40px;
  }

  .section-description {
    font-size: 16px;
  }

  .contact-info {
    padding: 30px 20px;
  }

  .info-title {
    font-size: 24px;
  }
  
  .form-row {
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    max-width: 100%;
    width: 100%;
  }
  
  .btn-submit {
    width: 100%;
  }
  
  .social-link {
    width: 44px;
    height: 44px;
  }
  
  .social-link svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 32px;
  }

  .section-description {
    font-size: 15px;
  }

  .phone-link {
    font-size: 17px;
  }
  
  .social-links {
    gap: 12px;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
  }
  
  .social-link svg {
    width: 20px;
    height: 20px;
  }
}
</style>