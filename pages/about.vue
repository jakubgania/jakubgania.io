<template>
  <div class="container-about">
    <div class="content">
      <div class="information-section">
        <v-layout row wrap>
          <v-flex lg4>
            <div class="image-section">
              <v-avatar :size="photoSize">
                <img :src="profileImage" alt="Jakub Gania - profile photo">
              </v-avatar>
            </div>
          </v-flex>
          <v-flex lg8 class="description-name-section">
            <div class="description-name">
              {{ fullname }}
            </div>
          </v-flex>
          <v-flex lg12 style="padding-top: 20px;">
            <div class="description">
              {{ description1 }}
            </div>
          </v-flex>
          <v-flex lg12 style="padding-top: 20px;">
            <div class="description">
              {{ description2 }}
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '../assets/images/profile.jpg';

export default {
  data() {
    return {
      profileImage,
      fullname: 'Jakub Gania',
      description1: 'Nazywam się Jakub Gania. Mieszkam we Wrocławiu. W 2018 roku uzyskałem tytuł inżyniera informatki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Cały czas się uczę i poszerzam swoją wiedzę w różnych obszarach powiązanych z programowaniem. Moje projekty udostępniam na platformie GitHub. Rozwijam się w kierunku Full Stack Web Developer.',
      description2: 'Prywatnie interesują mnie nowe technologie, startupy, rozwój osobisty i bardzo lubię fotografować.'
    }
  },
  computed: {
    photoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '120'
        case 'sm': return '120'
        case 'md': return '120'
        case 'lg': return '140'
        case 'xl': return '160'
        default: return '160'
      }
    }
  },
  head() {
    return {
      title: 'Jakub Gania - Full Stack Web Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jakub Gania - Full Stack Web Developer. Vue.js, Vuex, Vuetify, TypeScript, NUXT, HTML, CSS, Node.js, PHP, Laravel, Symfony, Nginx, Docker.'
        },
        {
          name: 'keywords',
          content: 'software, developer, it, programmer, coder, www, web, website, frontend, backend, full stack, software engineer'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  @import './assets/scss/about/lg.scss';
</style>
