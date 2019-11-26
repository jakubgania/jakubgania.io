<template>
  <div v-if="displayHeader()">
    <v-app-bar :class="{ 'dark-theme': darkTheme }" app clipped-left flat fixed>
      <v-toolbar-title>
        <nuxt-link
          :class="{ 'link-title-dark-theme': darkTheme }"
          to="/"
          class="link-title"
        >
          <div>
            Jakub Gania Software
          </div>
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
  background-color: #1b1f23;
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
