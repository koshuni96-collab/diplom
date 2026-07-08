<template>
  <div class="home-page">
    <HeaderComponent />
    <HeroComponent />
    <AboutComponent 
      :photographerImage="photographerImage"
      @contact-click="scrollToContact"
    />
        <MyPortfolioComponent />
    <StepComponent />
    <TarifComponent />
    <ContactComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header.vue'
import HeroComponent from '@/components/hero.vue'
import AboutComponent from '@/components/about.vue'
import MyPortfolioComponent from '@/components/my-portfolio.vue'
import StepComponent from '@/components/step.vue'
import TarifComponent from '@/components/tarif.vue'
import ContactComponent from '@/components/contact.vue'
import FooterComponent from '@/components/footer.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    StepComponent,
    MyPortfolioComponent,
    TarifComponent,
    ContactComponent,
    FooterComponent
  },
  data() {
    return {
      photographerImage: null // или require('@/assets/images/photographer.jpg')
    }
  },
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #fcfaf8;
}
</style>