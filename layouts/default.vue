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
import PreloaderComponent from '@/components/preloader'
import ToolbarHeaderComponent from '@/components/toolbar-header'
import NavigationDrawerComponent from '@/components/navigation-drawer'
import FooterComponent from '@/components/footer'
import PortalRulesAlertComponent from '@/components/portal-rules-alert'

export default {
  components: {
    PreloaderComponent,
    ToolbarHeaderComponent,
    NavigationDrawerComponent,
    FooterComponent,
    PortalRulesAlertComponent,
  },
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
  },
  mounted() {
    this.loader = false
  },
  methods: {
    switchNavigationDrawer() {
      this.drawer = !this.drawer
    },
    updateNavigationDrawerValue(value) {
      this.drawer = value
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/fonts.scss';

html {
  scroll-behavior: smooth;
}
body {
  overflow: hidden;
  height: 100vh;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: saturate(180%) blur(14px);
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background: rgba(27, 31, 35, 0.6);
  backdrop-filter: saturate(180%) blur(14px);
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
$scrollbar-thumb-color: #262626;

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
