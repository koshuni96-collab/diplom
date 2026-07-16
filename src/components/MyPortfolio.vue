<template>
  <div class="portfolio-page">
    <header class="header">
      <h1>Мое портфолио</h1>
    </header>

    <section class="works-section">
      <div class="works-grid">
        <!-- Карточка работы 1 -->
        <div class="work-card">
          <div class="card-image" style="background-image: url('/portfolio-1.jpg')"></div>
        </div>

        <!-- Карточка работы 2 -->
        <div class="work-card">
          <div class="card-image" style="background-image: url('/portfolio-2.jpg')"></div>
        </div>

        <!-- Карточка работы 3 -->
        <div class="work-card">
          <div class="card-image" style="background-image: url('/portfolio-33.jpg')"></div>
        </div>

        <!-- Карточка работы 4 -->
        <div class="work-card">
          <div class="card-image" style="background-image: url('/portfolio-3.jpg')"></div>
        </div>

        <!-- Карточка работы 5 -->
        <div class="work-card">
          <div class="card-image" style="background-image: url('/portfolio-4.jpg')"></div>
        </div>

        <!-- Карточка работы 6 -->
        <div class="work-card">
          <div class="card-image" style="background-image: url('/portfolio-5.jpg')"></div>
        </div>

        <!-- Карточка работы 7 - ссылка "Мои работы" -->
        <div class="work-card work-card-link">
          <a href="/portfolio" class="card-link">
            <div class="card-image-link">
              <span class="link-text">Мои работы</span>
              <div class="play-button">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="black">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <!-- Карточка работы 8 -->
        <div class="work-card">
          <div class="card-image" style="background-image: url('/portfolio-6.jpg')"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage'
}
</script>

<style scoped>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio-page {
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f8f9fc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: transparent;
  color: #000000;
  padding: 2rem 2rem 0.5rem 2rem;
  text-align: left;
}

.header h1 {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: 0%;
  text-shadow: none;
  color: #000000;
  margin: 0;
}

.works-section {
  max-width: 1488px;
  margin: 0 auto;
  padding: 2rem 0 3rem 0;
  flex: 1;
  width: 100%;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(4, 372px);
  gap: 0;
  justify-content: center;
}

.work-card {
  background: transparent;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  border-radius: 0;
  width: 372px;
  height: 522px;
  flex-shrink: 0;
}

.work-card:hover {
  transform: scale(1.02);
  z-index: 1;
}

.card-image {
  width: 372px;
  height: 522px;
  background-size: cover;
  background-position: center;
  background-color: #e0e5ec;
  border-radius: 0;
  transition: transform 0.5s ease;
}

.work-card:hover .card-image {
  transform: scale(1.03);
}

.work-card-link {
  cursor: pointer;
  border-radius: 0;
  width: 372px;
  height: 522px;
  flex-shrink: 0;
}

.work-card-link:hover {
  transform: scale(1.02);
  z-index: 1;
}

.card-link {
  display: block;
  text-decoration: none;
  width: 372px;
  height: 522px;
}

.card-image-link {
  width: 372px;
  height: 522px;
  background: #4F4F4F;
  border: 2px solid #4F4F4F;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease, background 0.3s ease, border-color 0.3s ease;
  position: relative;
}

.work-card-link:hover .card-image-link {
  transform: scale(1.03);
  background: #3a3a3a;
  border-color: #3a3a3a;
}

.link-text {
  font-family: 'Gilroy', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: #000000;
  z-index: 1;
  letter-spacing: 0%;
  line-height: 100%;
  margin-bottom: 0.8rem;
}

.play-button {
  width: 48px;
  height: 48px;
  background: transparent;
  border: 2.5px solid #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;
}

.work-card-link:hover .play-button {
  transform: scale(1.1);
  background: rgba(0, 0, 0, 0.1);
}

.play-button svg {
  margin-left: 3px;
}

/* Адаптивность  */
@media (max-width: 1200px) {
  .header h1 {
    font-size: 60px;
  }
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 48px;
  }
}

@media (max-width: 480px) {
  .header h1 {
    font-size: 36px;
  }
}

@media (max-width: 1488px) {
  .works-grid {
    grid-template-columns: repeat(4, 372px);
  }
}

@media (max-width: 1200px) {
  .works-grid {
    grid-template-columns: repeat(3, 372px);
  }
  .works-section {
    max-width: 1116px;
  }
}

@media (max-width: 900px) {
  .works-grid {
    grid-template-columns: repeat(2, 372px);
  }
  .works-section {
    max-width: 744px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 1rem 1rem 0.5rem 1rem;
  }

  .works-grid {
    grid-template-columns: 1fr;
    justify-content: center;
  }

  .works-section {
    padding: 1rem 0 2rem 0;
    max-width: 372px;
  }

  .work-card,
  .work-card-link,
  .card-link,
  .card-image,
  .card-image-link {
    width: 372px;
    height: 522px;
    margin: 0 auto;
  }

  .link-text {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  .play-button {
    width: 40px;
    height: 40px;
    border-width: 2px;
  }

  .play-button svg {
    width: 20px;
    height: 20px;
  }
}
</style>