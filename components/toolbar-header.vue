<template>
  <div v-if="displayHeader()">
    <v-app-bar :class="{ 'dark-theme': darkTheme }" app clipped-left flat fixed>
      <v-toolbar-title>
        <nuxt-link
          :class="{ 'link-title-dark-theme': darkTheme }"
          to="/"
          class="link-title"
        >
          <logo-component :normal-font-size="true" :dark-theme="darkTheme" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.native="$emit('switchNavigationDrawer')"
        :class="{ 'nav-icon-dark-theme': darkTheme }"
        class="nav-icon"
      />
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '../components/logo'

export default {
  components: {
    'logo-component': Logo
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  mounted() {
    this.displayHeader()
  },
  methods: {
    displayHeader() {
      return this.$route.name !== 'home'
    }
  }
}
</script>

<style scoped>
.link-title {
  text-decoration: none;
  color: #000;
}
.nav-icon {
  color: #000;
}
.nav-icon-dark-theme {
  color: #fff !important;
}
.dark-theme {
  background-color: #1b1f23;
}
.link-title-dark-theme {
  color: #fff;
}
</style>
