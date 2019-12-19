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
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.subpageTitle
        },
        {
          hid: 'og:url',
          property: 'og:url',
          conent: 'https://jakubgania.io'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.head.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          conent: 'https://jakubgania.io/jakub-gania-software-logo-img.png'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png'
        }
      ]
    }
  }
}
