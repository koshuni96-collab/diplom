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
import HeaderComponent from '@/components/Header.vue'
import HeroComponent from '@/components/Hero.vue'
import AboutComponent from '@/components/About.vue'
import MyPortfolioComponent from '@/components/MyPortfolio.vue'
import StepComponent from '@/components/Step.vue'
import TarifComponent from '@/components/Tarif.vue'
import ContactComponent from '@/components/Contact.vue'
import FooterComponent from '@/components/Footer.vue'

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
      photographerImage: null  
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