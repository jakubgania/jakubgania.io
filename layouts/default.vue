<template>
  <v-app>
    <v-content class="app-content-container" style="padding-top: 0;">
      <navigation-drawer-component
        :drawer="drawer"
        @switchNavigationDrawer="switchNavigationDrawer"
        @updateNavigationDrawerValue="updateNavigationDrawerValue"
      />

      <toolbar-header-component
        @switchNavigationDrawer="switchNavigationDrawer"
      />

      <v-container fluid style="padding: 0;">
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
  src: local('Nunito Light'),
    url(../assets/fonts/nunito/Nunito-Light.ttf) format('truetype');
}
.app-content-container {
  min-height: 100vh;
}
</style>
