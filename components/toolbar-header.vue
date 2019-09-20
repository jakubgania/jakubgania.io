<template>
  <div v-if="displayHeader()">
    <v-app-bar absolute app clipped-left flat>
      <v-toolbar-title>
        <nuxt-link to="/" class="link-title">
          <div>
            Jakub Gania Software
          </div>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    displayHeader() {
      return this.$route.name !== 'index'
    }
  },
  mounted() {
    this.displayHeader()
  }
}
</script>

<style scoped>
.link-title {
  text-decoration: none;
  font-family: 'Audiowide', cursive;
  color: black;
  font-size: 24px;
}
</style>
