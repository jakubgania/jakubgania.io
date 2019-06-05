<template>
  <div class="container-about">
    <div class="content">
      <div class="information-section">
        <v-layout row wrap>
          <v-flex lg4>
            img
          </v-flex>
          <v-flex lg8>
            {{ fullname }}
          </v-flex>
        </v-layout>
        Information section
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: 'Jakub Gania'
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
