<template>
  <v-app>
    <div class="pre-loader-fullscreen" :class="{ 'pre-loader': loader }">
      <div class="loader-section">
        <div class="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

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
      drawer: false,
      loader: false
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  mounted() {
    this.loader = true
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

.pre-loader-fullscreen {
  background-color: white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
}
.pre-loader {
  display: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  outline: none;
}

.loader-section {
  font-size: 16px;
  font-smooth: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.loader {
  position: relative;
  display: grid;
  grid-template-columns: 8% 8% 8%;
  grid-gap: 38px;
  width: 100px;
  height: 100px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    background: black;
    transform: scale(0);
    transform-origin: center center;
    animation: loader 2s infinite linear;

    // &:nth-of-type(7) {}

    &:nth-of-type(1),
    &:nth-of-type(5),
    &:nth-of-type(9) {
      animation-delay: 0.4s;
    }

    &:nth-of-type(4),
    &:nth-of-type(8) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(2),
    &:nth-of-type(6) {
      animation-delay: 0.6s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.8s;
    }
  }
}

@keyframes loader {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

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
  .loader {
    grid-template-columns: 11% 11% 11%;
    grid-gap: 27px;
    width: 80px;
    height: 80px;
  }
}
</style>
