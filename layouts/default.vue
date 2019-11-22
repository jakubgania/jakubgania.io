<template>
  <v-app>
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
import ToolbarHeaderComponent from '../components/toolbar-header'
import NavigationDrawerComponent from '../components/navigation-drawer'
import FooterComponent from '../components/footer'
import PortalRulesAlertComponent from '../components/portal-rules-alert'

export default {
  components: {
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
@font-face {
  font-family: 'Audiowide';
  font-style: normal;
  font-weight: 400;
  src: local('Audiowide Regular'),
    url(../assets/fonts/audiowide/Audiowide-Regular.ttf) format('truetype');
}
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local('Nunito Regular'),
    url(../assets/fonts/nunito/Nunito-Regular.ttf) format('truetype');
}
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: local('Nunito Bold'),
    url(../assets/fonts/nunito/Nunito-Bold.ttf) format('truetype');
}
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  src: local('Nunito Black'),
    url(../assets/fonts/nunito/Nunito-Black.ttf) format('truetype');
}
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  src: local('RobotoMono Regular'),
    url(../assets/fonts/roboto_mono/RobotoMono-Regular.ttf) format('truetype');
}
html {
  scroll-behavior: smooth;
}
.theme--light.v-application {
  background-color: #fff;
}
.theme--dark.v-application {
  background-color: #1a1a1a;
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
