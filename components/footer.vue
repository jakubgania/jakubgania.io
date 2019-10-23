<template>
  <v-row v-if="displayFooter()" class="footer-container">
    <v-col sm="2" lg="6" cols="4">
      <a :href="links.github.url" target="_blank" class="link">
        {{ links.github.title }}
      </a>
      <a :href="links.linkedin.url" target="_blank" class="link">
        {{ links.linkedin.title }}
      </a>
    </v-col>
    <v-col sm="10" lg="6" cols="8" style="text-align: right;">
      <div v-html="copyrightText" />
    </v-col>
  </v-row>
</template>

<script>
export default {
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
  mounted() {
    this.displayFooter()
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
  height: 80px;
  line-height: 80px;
  margin-bottom: 20px;
}
.link {
  text-decoration: none;
  color: black;
}
.link:hover {
  color: blue;
}
</style>
