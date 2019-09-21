<template>
  <v-app>
    <v-content style="padding-top: 0;">
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
  </v-app>
</template>

<script>
import ToolbarHeaderComponent from '../components/toolbar-header'
import NavigationDrawerComponent from '../components/navigation-drawer'

export default {
  components: {
    'toolbar-header-component': ToolbarHeaderComponent,
    'navigation-drawer-component': NavigationDrawerComponent
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
