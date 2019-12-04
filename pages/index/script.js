import { mapGetters } from 'vuex'
import Logo from '../../components/logo'

export default {
  components: {
    'logo-component': Logo
  },
  data() {
    return {
      subpageTitle: 'Jakub Gania Software',
      head: {
        description:
          'Jakub Gania Software - Full Stack Web Developer. Vue.js, Vuex, Vuetify, TypeScript, NUXT, HTML, CSS, Node.js, PHP, Laravel, Symfony, Nginx, Docker.',
        keywords:
          'software, developer, it, programmer, coder, www, web, website, frontend, backend, full stack, software engineer, fullstack web developer ,vue.js, vuex, vuetify, typescript, nuxt.js, html, css, node.js, php, laravel, symfony, nginx, apache, server, blog, docker, github'
      }
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  head() {
    return {
      title: this.subpageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.head.description
        },
        {
          name: 'keywords',
          content: this.head.keywords
        }
      ]
    }
  }
}
