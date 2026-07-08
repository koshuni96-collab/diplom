<template>
  <div class="contact-page">
    <HeaderComponent />
    <ContactComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header.vue'
import ContactComponent from '@/components/contact.vue'
import FooterComponent from '@/components/footer.vue'

export default {
  name: 'ContactPage',
  components: {
    HeaderComponent,
    ContactComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #fcfaf8;
}
</style>