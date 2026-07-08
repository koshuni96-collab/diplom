<template>
  <div class="card" :class="cardClass">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div class="card-body">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiCard',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: value => ['default', 'outlined', 'elevated'].includes(value)
    }
  },
  computed: {
    cardClass() {
      return {
        'card-outlined': this.variant === 'outlined',
        'card-elevated': this.variant === 'elevated'
      }
    }
  }
}
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.card-outlined {
  border: 2px solid #f0ebe7;
}

.card-elevated {
  box-shadow: 0 4px 20px rgba(44, 36, 32, 0.06);
}

.card-elevated:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(44, 36, 32, 0.1);
}

.card-header {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0ebe7;
}

.card-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f0ebe7;
}
</style>