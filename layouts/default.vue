<template>
  <v-app>
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

    <client-only>
      <portal-rules-alert-component />
    </client-only>
  </v-app>
</template>

<script>
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

<style scoped>
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
.app-content-container {
  min-height: 100vh;
  padding-top: 0;
}
.container-nuxt {
  padding: 0;
}
@media only screen and (max-width: 600px) {
  .container-nuxt {
    padding: unset;
  }
}
</style>
