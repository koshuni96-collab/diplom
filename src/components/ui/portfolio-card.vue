<template>
  <div class="portfolio-card" @click="handleClick">
    <div class="card-image" :style="imageStyle">
      <div v-if="!image" class="placeholder">
        <span>📸</span>
      </div>
      <div class="card-overlay">
        <span class="view-btn">Смотреть</span>
      </div>
    </div>
    
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
      <span class="card-category">{{ category }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: 'Фотография'
    },
    image: {
      type: String,
      default: null
    }
  },
  computed: {
    imageStyle() {
      if (this.image) {
        return {
          backgroundImage: `url(${this.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }
      return {}
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.portfolio-card {
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 20px rgba(44, 36, 32, 0.06);
  transition: all 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(44, 36, 32, 0.12);
}

.card-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #e8e0d8;
  position: relative;
  overflow: hidden;
}

.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  background: linear-gradient(145deg, #e8e0d8, #d6cdc4);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 36, 32, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  padding: 8px 24px;
  background: #fff;
  color: #2c2420;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.view-btn:hover {
  background: #2c2420;
  color: #fff;
}

.card-content {
  padding: 16px 20px 20px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #2c2420;
  margin: 0 0 4px 0;
}

.card-description {
  font-size: 14px;
  color: #6b5f58;
  margin: 0 0 8px 0;
}

.card-category {
  font-size: 12px;
  color: #b8a69b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>