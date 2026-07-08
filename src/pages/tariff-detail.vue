
<!-- src/pages/tariff-detail.vue -->
<template>
  <div>
    <HeaderComponent />
    <TariffDetailComponent />
    <ContactComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header.vue'
import TariffDetailComponent from '@/components/tariff-detail.vue'
import ContactComponent from '@/components/contact.vue'
import FooterComponent from '@/components/footer.vue'

export default {
  name: 'TariffDetailPage',
  components: {
    HeaderComponent,
    TariffDetailComponent,
    ContactComponent,
    FooterComponent
  }
}
</script>