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

    <div class="social-icons-section">
      <div>
        <a
          v-for="item in socialLinks"
          :key="item.id"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
        >
          <v-icon :class="{ 'icon-dark-theme': darkTheme }" class="icon">
            {{ item.icon }}
          </v-icon>
        </a>
      </div>
    </div>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      subpageTitle: 'Jakub Gania Software',
      head: {
        description:
          'Jakub Gania Software - Full Stack Web Developer. Vue.js, Vuex, Vuetify, TypeScript, NUXT, HTML, CSS, Node.js, PHP, Laravel, Symfony, Nginx, Docker.',
        keywords:
          'software, developer, it, programmer, coder, www, web, website, frontend, backend, full stack, software engineer, fullstack web developer ,vue.js, vuex, vuetify, typescript, nuxt.js, html, css, node.js, php, laravel, symfony, nginx, apache, server, blog, docker, github'
      },
      socialLinks: [
        {
          link: 'https://github.com/jakubgania',
          icon: 'mdi-github-circle'
        },
        {
          link: 'https://www.linkedin.com/in/jakubgania/',
          icon: 'mdi-linkedin'
        },
        {
          link: 'https://twitter.com/jakubgania',
          icon: 'mdi-twitter'
        },
        {
          link: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
          icon: 'mdi-youtube'
        }
      ]
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
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
