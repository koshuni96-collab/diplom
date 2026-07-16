<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-content">
          <h2 class="section-title">Понравились мои работы?</h2>
          <p class="section-description">
            Давайте вместе создадим воспоминания, которые будут радовать вас на протяжении многих лет!<br>
            Заполните форму ниже, и я свяжусь с вами в ближайшее время.
          </p>

          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <input v-model="form.name" placeholder="Имя" required />
              <input v-model="form.phone" placeholder="Номер телефона" required />
              <button type="submit" :disabled="loading">
                {{ loading ? 'Отправка...' : 'Оставить заявку' }}
              </button>
            </div>
          </form>

          <div v-if="success" class="msg success">✅ Спасибо! Я свяжусь с вами.</div>
          <div v-if="error" class="msg error">❌ {{ error }}</div>

          <p class="form-note">
            Нажимая кнопку, вы даете согласие на обработку персональных данных.<br>
            <a href="#" class="privacy-link">Политика конфиденциальности</a>
          </p>
        </div>

        <div class="contact-info">
          <h3>Контакты</h3>
          <p>Свяжитесь со мной, если у вас возникли вопросы</p>
          <div class="contact-phone">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="tel:+77777777777">+7 (777) 777-77-77</a>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link">VK</a>
            <a href="#" class="social-link">IG</a>
            <a href="#" class="social-link">TG</a>
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
      form: { name: '', phone: '' },
      loading: false,
      success: false,
      error: ''
    }
  },
  methods: {
    async handleSubmit() {
      // Валидация
      if (!this.form.name.trim() || !this.form.phone.trim()) {
        this.error = 'Заполните все поля'
        setTimeout(() => this.error = '', 3000)
        return
      }

      this.loading = true
      this.success = false
      this.error = ''

      // Замените на ваш ключ от Formspree
      const FORM_KEY = 'ваш_ключ_formspree'

      try {
        const response = await fetch(`https://formspree.io/f/${FORM_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.form.name,
            phone: this.form.phone,
            source: 'Контакты'
          })
        })

        if (response.ok) {
          this.success = true
          this.form.name = ''
          this.form.phone = ''
          
          setTimeout(() => {
            this.success = false
          }, 5000)
        } else {
          throw new Error('Ошибка отправки')
        }
      } catch (err) {
        this.error = 'Ошибка отправки. Попробуйте позже.'
        console.error('Ошибка:', err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 80px 20px;
  background: #fff;
  font-family: 'Gilroy', sans-serif;
}
.container { max-width: 1200px; margin: 0 auto; }
.contact-wrapper {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}
.contact-content {
  flex: 0 0 700px;
  max-width: 700px;
}
.section-title {
  font-weight: 300;
  font-size: 30px;
  color: #1a1a2e;
  margin: 0 0 20px;
  text-align: center;
}
.section-description {
  font-size: 18px;
  line-height: 1.8;
  color: #4a4a5a;
  margin: 0 0 40px;
  text-align: center;
}
.form-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
.form-row input {
  flex: 1;
  min-width: 150px;
  max-width: 250px;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  background: #fafafa;
  font-size: 16px;
  font-family: inherit;
}
.form-row input:focus {
  outline: none;
  border-color: #c4c6cb;
  background: #fff;
}
.form-row button {
  padding: 14px 32px;
  background: #606068;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  height: 50px;
  min-width: 180px;
  transition: all .3s;
}
.form-row button:hover:not(:disabled) {
  background: #2a2a4e;
  transform: translateY(-2px);
}
.form-row button:disabled { opacity: .7; cursor: not-allowed; }

.msg {
  margin-top: 16px;
  padding: 12px 16px;
  text-align: center;
}
.success { background: #e8f5e9; color: #2e7d32; }
.error { background: #ffebee; color: #c62828; }

.form-note {
  font-size: 14px;
  color: #7a7a8a;
  margin: 20px 0 0;
  line-height: 1.6;
}
.privacy-link {
  color: #d2d5df;
  text-decoration: none;
}
.privacy-link:hover { text-decoration: underline; }

.contact-info {
  flex: 1;
  padding: 40px;
  background: #f8f9fc;
  min-width: 280px;
}
.contact-info h3 {
  font-size: 28px;
  font-weight: 500;
  color: #1a1a2e;
  margin: 0 0 12px;
}
.contact-info p {
  font-size: 16px;
  color: #4a4a5a;
  margin: 0 0 30px;
  line-height: 1.6;
}
.contact-phone {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #fff;
  border: 1px solid #e8e8ee;
  margin-bottom: 24px;
}
.contact-phone svg { flex-shrink: 0; }
.contact-phone a {
  font-size: 20px;
  font-weight: 500;
  color: #1a1a2e;
  text-decoration: none;
}
.contact-phone a:hover { color: #4a6cf7; }

.social-links {
  display: flex;
  gap: 16px;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #fff;
  border: 1px solid #e8e8ee;
  text-decoration: none;
  font-weight: 500;
  color: #1a1a2e;
  transition: all .3s;
}
.social-link:hover {
  transform: translateY(-3px);
  border-color: #4a6cf7;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

@media (max-width: 1024px) {
  .contact-wrapper { flex-direction: column; gap: 40px; align-items: center; }
  .contact-content { flex: 0 0 100%; max-width: 100%; }
  .contact-info { width: 100%; min-width: auto; }
  .form-row { flex-direction: column; align-items: center; }
  .form-row input { max-width: 100%; width: 100%; }
  .form-row button { width: 100%; min-width: unset; }
}
@media (max-width: 768px) {
  .contact { padding: 50px 16px; }
  .section-title { font-size: 40px; }
  .section-description { font-size: 16px; }
  .contact-info { padding: 30px 20px; }
}
@media (max-width: 480px) {
  .section-title { font-size: 32px; }
  .section-description { font-size: 15px; }
  .contact-phone a { font-size: 17px; }
  .social-link { width: 40px; height: 40px; }
}
</style>