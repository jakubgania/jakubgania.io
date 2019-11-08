<template>
  <div>
    <v-row v-if="displayFooter()" class="footer-container">
      <v-col sm="2" lg="6" cols="12" class="links-section">
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
      <v-col sm="10" lg="6" cols="12" class="copyright-text">
        <div :class="{ 'dark-theme-text': darkTheme }" v-html="copyrightText" />
      </v-col>

      <template v-if="$store.state.showDarkModeSwitch">
        <v-col cols="12">
          <dark-mode-switch-component />
        </v-col>
      </template>
    </v-row>
  </div>
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
    // console.log(this.darkTheme)
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
  border-top: 1px solid #e6e6e6;
  margin: auto;
  line-height: 80px;
  margin-bottom: 20px;
}
.link {
  text-decoration: none;
  color: #0066ff;
  padding-right: 10px;
}
.link:hover {
  color: #0000ff;
}
.dark-theme-text {
  color: #fff;
}
.footer-container-dark-theme {
  border-top: 1px solid #bfbfbf;
}
.links-section {
  padding: 0;
}
.copyright-text {
  text-align: right;
  padding: 0;
}
.fbc {
  background-color: #fff;
}
.dark-theme {
  background-color: #1a1a1a;
}

@media only screen and (max-width: 600px) {
  .footer-container {
    padding-top: 20px;
    line-height: 40px;
  }
  .links-section {
    text-align: center;
  }
  .copyright-text {
    text-align: center;
  }
}
</style>
