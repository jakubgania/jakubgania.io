<template>
  <v-row
    v-if="displayFooter()"
    class="footer-container"
    :class="{ 'footer-container-dark-theme': darkTheme }"
  >
    <v-col sm="2" lg="6" cols="4">
      <a
        :href="links.github.url"
        target="_blank"
        class="link"
        :class="{ 'dark-theme-text': darkTheme }"
      >
        {{ links.github.title }}
      </a>
      <a
        :href="links.linkedin.url"
        target="_blank"
        class="link"
        :class="{ 'dark-theme-text': darkTheme }"
      >
        {{ links.linkedin.title }}
      </a>
    </v-col>
    <v-col sm="10" lg="6" cols="8" style="text-align: right;">
      <div v-html="copyrightText" :class="{ 'dark-theme-text': darkTheme }" />
    </v-col>

    <v-col cols="12">
      <dark-mode-switch-component />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import DarkModeSwitch from './dark-mode-switch.vue'

export default {
  components: {
    'dark-mode-switch-component': DarkModeSwitch
  },
  data() {
    return {
      links: {
        github: {
          title: 'Github',
          url: 'https://github.com/jakubgania'
        },
        linkedin: {
          title: 'Linkedin',
          url: 'https://www.linkedin.com/in/jakubgania'
        }
      },
      copyrightText: 'Jakub Gania Software &copy; 2018 - 2019'
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  mounted() {
    this.displayFooter()

    console.log(this.darkTheme)
  },
  methods: {
    displayFooter() {
      return this.$route.name !== 'home'
    }
  }
}
</script>

<style scoped>
.footer-container {
  max-width: 1400px;
  width: 100%;
  font-size: 12px;
  letter-spacing: 1px;
  border-top: 1px solid #000;
  margin: auto;
  line-height: 80px;
  margin-bottom: 20px;
}
.link {
  text-decoration: none;
  color: #000;
}
.link:hover {
  color: blue;
}
.dark-theme-text {
  color: #fff;
}
.footer-container-dark-theme {
  border-top: 1px solid #bfbfbf;
}
</style>
