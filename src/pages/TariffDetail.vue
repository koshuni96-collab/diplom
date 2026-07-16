
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
import HeaderComponent from '@/components/Header.vue'
import TariffDetailComponent from '@/components/TariffDetail.vue'
import ContactComponent from '@/components/Contact.vue'
import FooterComponent from '@/components/Footer.vue'

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