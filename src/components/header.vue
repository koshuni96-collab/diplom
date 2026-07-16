<!-- src/components/header.vue -->
<template>
  <header class="header">
    <div class="container">
      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <router-link to="/#about" @click="closeMenu">Обо мне</router-link>
        <router-link to="/portfolio" @click="closeMenu">Портфолио</router-link>
        <router-link to="/#steps" @click="closeMenu">Этапы работы</router-link>
        <router-link to="/#tariffs" @click="closeMenu">Тарифы</router-link>
        <router-link to="/#contact" @click="closeMenu">Вопросы</router-link>
        <router-link to="/#contact" @click="closeMenu">Контакты</router-link>
      </nav>

      <button class="burger-btn" @click="toggleMenu" aria-label="Меню">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  padding: 20px 20px;
  background: transparent !important;
  border-bottom: none;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  pointer-events: none;
}

.nav {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.nav a {
  font-family: 'Gilroy', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff !important;
  text-decoration: none !important;
  transition: color 0.3s ease;
  padding: 4px 0;
  position: relative;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.nav a::after,
.nav a::before {
  display: none !important;
}

.nav a:hover {
  color: #eeebe9 !important;
}

.nav a.router-link-active {
  color: #eae8e7 !important;
}

/* =МЕНЮ = */
.burger-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: auto;
}

.burger-btn span {
  display: block;
  width: 25px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger-btn.active span:nth-child(2) {
  opacity: 0;
}

.burger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .header {
    padding: 16px 16px;
    background: transparent !important;
  }

  .container {
    justify-content: flex-start;
    pointer-events: none;
  }

  .burger-btn {
    display: flex;
    pointer-events: auto;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(26, 26, 46, 0.95) !important;
    flex-direction: column;
    padding: 80px 30px 30px;
    gap: 20px;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
    transition: right 0.3s ease;
    overflow-y: auto;
    align-items: flex-start;
    justify-content: flex-start;
    pointer-events: auto;
  }

  .nav.nav-open {
    right: 0;
  }

  .nav a {
    font-family: 'Gilroy', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    padding: 12px 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff !important;
    text-shadow: none !important;
  }

  .nav a:hover {
    color: #d4b8a8 !important;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 14px 14px;
  }

  .nav {
    width: 240px;
    padding: 70px 20px 20px;
  }

  .nav a {
    font-size: 18px;
    padding: 10px 0;
  }
}
</style>