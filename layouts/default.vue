<template>
  <v-app>
    <preloader-component />

    <client-only>
      <portal-rules-alert-component />
    </client-only>

    <v-content class="app-content-container">
      <navigation-drawer-component
        :drawer="drawer"
        @switchNavigationDrawer="switchNavigationDrawer"
        @updateNavigationDrawerValue="updateNavigationDrawerValue"
      />

      <toolbar-header-component
        @switchNavigationDrawer="switchNavigationDrawer"
      />

      <v-container fluid class="container-nuxt">
        <nuxt />
      </v-container>
    </v-content>

    <footer-component />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import PreloaderComponent from '../components/preloader'
import ToolbarHeaderComponent from '../components/toolbar-header'
import NavigationDrawerComponent from '../components/navigation-drawer'
import FooterComponent from '../components/footer'
import PortalRulesAlertComponent from '../components/portal-rules-alert'

export default {
  components: {
    PreloaderComponent,
    'toolbar-header-component': ToolbarHeaderComponent,
    'navigation-drawer-component': NavigationDrawerComponent,
    'footer-component': FooterComponent,
    'portal-rules-alert-component': PortalRulesAlertComponent
  },
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  methods: {
    switchNavigationDrawer() {
      this.drawer = !this.drawer
    },
    updateNavigationDrawerValue(value) {
      this.drawer = value
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/fonts.scss';

html {
  scroll-behavior: smooth;
}
.theme--light.v-application {
  background-color: #fff;
}
.theme--dark.v-application {
  background-color: #1b1f23;
}
.app-content-container {
  min-height: 100vh;
  padding-top: 0;
}
.container-nuxt {
  padding: 0;
}
.dark-theme {
  background-color: #1a1a1a;
}
$scrollbar-track-color: #f4f4f4;
$scrollbar-thumb-color: #b3b3b3;

::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: $scrollbar-track-color;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: $scrollbar-thumb-color;
}
@media only screen and (max-width: 600px) {
  .container-nuxt {
    padding: unset;
  }
}
</style>
