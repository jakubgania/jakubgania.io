<template>
  <div class="flex-center position-ref full-height container-index">
    <div class="content">
      <div class="main-title">
        {{ myName }}
      </div>
      <div class="my-name">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myName: 'Jakub Gania',
      title: 'Full Stack Web Developer'
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
  @import './assets/scss/index/lg.scss';
</style>
