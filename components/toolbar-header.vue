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
      <div
        @click="$emit('switchNavigationDrawer')"
        :class="{ 'nav-icon--dark-theme': darkTheme }"
        class="nav-icon"
      >
        <div class="menu-icon-hamburger" />
        <div class="menu-icon-hamburger" />
        <div class="menu-icon-hamburger" />
      </div>
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

<style lang="scss" scoped>
.link-title {
  text-decoration: none;
  color: #000;
}
.nav-icon {
  &:hover {
    .menu-icon-hamburger {
      background-color: #8c8c8c;
      transition: background-color 0.2s ease;
    }
  }
}
.menu-icon-hamburger {
  width: 34px;
  height: 2px;
  background-color: #000;
  transition: background-color 0.2s ease;
  margin: 6px 0;
}
.nav-icon--dark-theme {
  .menu-icon-hamburger {
    background-color: #b3b3b3;
  }

  &:hover {
    .menu-icon-hamburger {
      background-color: #8c8c8c;
    }
  }
}
.dark-theme {
  background-color: #1b1f23;
}
.link-title-dark-theme {
  color: #fff;
}

@media only screen and (max-width: 600px) {
  .menu-icon-hamburger {
    width: 28px;
    height: 2px;
    margin: 6px 0;
  }
}
</style>
