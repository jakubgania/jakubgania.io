<template>
  <v-layout row wrap>
    <div class="container">
      <v-layout row wrap>
        <v-flex v-for="page in arrayOfAllPages" :key="page.id" lg12>
          <div class="links-section">
            <a v-if="page.path" :href="page.path" class="link">
              {{ page.title }}
            </a>
            <a v-else :href="page.link" target="_blank" class="link">
              {{ page.title }}
            </a>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      arrayOfAllPages: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'O mnie',
          path: '/about'
        },
        {
          title: 'Projekty',
          path: '/projects'
        },
        {
          title: 'Kontakt',
          path: '/contact'
        },
        {
          title: 'Shortcuts',
          path: '/shortcuts'
        },
        {
          title: 'Polecenia',
          path: '/commands'
        },
        {
          title: 'Ciekawe strony',
          path: '/other-resources'
        },
        {
          title: 'Zdjęcia',
          path: '/images'
        },
        {
          title: 'Inne informacje o mnie',
          path: '/older-information-about-me'
        },
        {
          title: 'Github',
          link: 'https://github.com/jakubgania'
        },
        {
          title: 'Linkedin',
          link: 'https://pl.linkedin.com/in/jakubgania'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  @import './assets/scss/menu/lg.scss';
</style>
