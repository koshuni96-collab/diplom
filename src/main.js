// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ Импорт стилей ДО создания приложения
import './assets/styles/global.css'

const app = createApp(App)
app.use(router)
app.mount('#app')