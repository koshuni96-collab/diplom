<template>
  <div class="tariffs-page">
    <HeaderComponent />
    <TarifComponent @order-click="handleOrder" />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import TarifComponent from '@/components/Tarif.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: 'TariffsPage',
  components: {
    HeaderComponent,
    TarifComponent,
    FooterComponent
  },
  methods: {
    handleOrder(tarif) {
      console.log('Выбран тариф:', tarif)
      this.$router.push('/contact')
    }
  }
}
</script>

<style scoped>
.tariffs-page {
  min-height: 100vh;
  background: #fcfaf8;
}
</style>