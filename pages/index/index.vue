<template>
  <v-row class="container-index">
    <div class="split split--left">
      <div class="centered left-part">
        <div class="section">
          <div class="fullname">
            Jakub Gania
          </div>
          <div class="link-section">
            <nuxt-link to="/menu" class="link">
              <span style="color: #ff0000;">
                this
              </span>
              <span style="color: #000000;">
                .
              </span>
              <span style="color: #0066ff;">
                showMenu
              </span>
              <span class="parenthesis_empty">
                ()
              </span>
              <span class="parenthesis_with_text">
                (click!)
              </span>
              <span>;</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="split split--right">
      <div class="centered right-part">
        <div class="words-section">
          <div
            data-aos="fade-up"
            data-aos-dealy="200"
            data-aos-duration="400"
            data-aos-once="true"
          >
            <span class="technical-word">
              Software
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-dealy="300"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <span class="technical-word">
              Engineering
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-dealy="600"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <span class="technical-word">
              Code
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-dealy="800"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <span class="technical-word">
              Development
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-dealy="1000"
            data-aos-duration="1600"
            data-aos-once="true"
          >
            <span class="technical-word">
              Web
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-dealy="1200"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <span class="technical-word">
              Apps
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="false" class="terminal">
      <div style="display: flex; font-weight: 900;">
        <span style="color: #ccc; padding-left: 10px;">
          $ &nbsp;
        </span>
        <span style="color: 4d4d4d;">
          select social icon &nbsp;
        </span>
        <social-icons-component />
      </div>
    </div>

    <div v-else class="social-icons-section">
      <social-icons-component />
    </div>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import SocialIcons from '../../components/social-icons'

export default {
  components: {
    'social-icons-component': SocialIcons,
  },
  data() {
    return {
      subpageTitle: 'Jakub Gania Software',
      head: {
        description:
          'Jakub Gania Software - Full Stack Web Developer. Vue.js, Vuex, Vuetify, TypeScript, NUXT, HTML, CSS, Node.js, PHP, Laravel, Symfony, Nginx, Docker.',
        keywords:
          'software, developer, it, programmer, coder, www, web, website, frontend, backend, full stack, software engineer, fullstack web developer ,vue.js, vuex, vuetify, typescript, nuxt.js, html, css, node.js, php, laravel, symfony, nginx, apache, server, blog, docker, github',
      },
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
  },
  head() {
    return {
      title: this.subpageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.head.description,
        },
        {
          name: 'keywords',
          content: this.head.keywords,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.subpageTitle,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          conent: 'https://jakubgania.io',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.head.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          conent: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
