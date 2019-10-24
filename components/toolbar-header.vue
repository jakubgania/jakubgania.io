<template>
  <div v-if="displayHeader()">
    <v-app-bar app clipped-left flat fixed :class="{ 'dark-theme': darkTheme }">
      <v-toolbar-title>
        <nuxt-link
          to="/"
          class="link-title"
          :class="{ 'link-title-dark-theme': darkTheme }"
        >
          <div>
            Jakub Gania Software
          </div>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        class="nav-icon"
        :class="{ 'nav-icon-dark-theme': darkTheme }"
        @click.native="$emit('switchNavigationDrawer')"
      />
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
  font-family: 'Audiowide', cursive;
  color: #000;
  font-size: 24px;
}
.nav-icon {
  color: #000;
}
.nav-icon-dark-theme {
  color: #fff !important;
}
.dark-theme {
  background-color: #0d0d0d;
}
.link-title-dark-theme {
  color: #fff;
}

@media only screen and (max-width: 600px) {
  .link-title {
    font-size: 12px;
  }
}
</style>
