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
  </v-app>
</template>

<script>
import ToolbarHeaderComponent from '../components/toolbar-header'
import NavigationDrawerComponent from '../components/navigation-drawer'
import FooterComponent from '../components/footer'

export default {
  components: {
    'toolbar-header-component': ToolbarHeaderComponent,
    'navigation-drawer-component': NavigationDrawerComponent,
    'footer-component': FooterComponent
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
.app-content-container {
  min-height: 100vh;
}
</style>
