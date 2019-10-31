<template>
  <v-navigation-drawer
    v-model="showDrawerFlag"
    fixed
    app
    right
    temporary
    width="320"
    :class="{ 'dark-theme': darkTheme }"
  >
    <div class="close-icon-section">
      <v-btn
        large
        icon
        class="close-icon-button"
        @click.native="$emit('switchNavigationDrawer')"
      >
        <v-icon :class="{ 'close-icon-dark-theme': darkTheme }">
          mdi-close
        </v-icon>
      </v-btn>
    </div>
    <v-list dense nav>
      <v-list-item style="margin-bottom: 0;">
        <v-list-item-content style="padding-bottom: 0;">
          <v-list-item-title class="non-list-element">
            <span class="text-menu" style="color: #ff0066;">
              switch
            </span>
            <span class="text-menu">
              ($menu) {
            </span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <template v-for="item in items">
        <v-list-item v-if="item.path" :key="item.title" :to="item.path">
          <v-list-item-content>
            <v-list-item-title class="list-item-title">
              <span style="display: block;">
                &nbsp;&nbsp;
                <span class="text-menu" style="color: #ff0066;">
                  case
                </span>
                <span class="text-menu">{{ "'" + item.path + "'" }}:</span>
              </span>
              <span class="xdp">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-menu" style="color: #005ce6;">
                  echo:
                </span>
                <span
                  class="title-page text-menu"
                  :class="{ 'dark-theme-text': darkTheme }"
                >
                  {{ "'" + item.title + "'" }}
                </span>
              </span>
              <span style="display: block;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-menu" style="color: #ff0066;">
                  break;
                </span>
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="item.url" :key="item.title" :href="item.url">
          <v-list-item-content>
            <v-list-item-title class="list-item-title">
              <span style="display: block;">
                &nbsp;&nbsp;
                <span class="text-menu" style="color: #ff0066;">
                  case
                </span>
                <span class="text-menu">{{ "'" + item.name + "'" }}:</span>
              </span>
              <span class="echo-item">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-menu" style="color: #005ce6;">
                  echo:
                </span>
                <span
                  class="title-page text-menu"
                  :class="{ 'dark-theme-text': darkTheme }"
                >
                  {{ "'" + item.title + "'" }}
                </span>
              </span>
              <span style="display: block;">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-menu" style="color: #ff0066;">
                  break;
                </span>
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list-item style="margin-top: 0;">
        <v-list-item-content style="padding-top: 0;">
          <v-list-item-title class="non-list-element">
            <span class="text-menu">
              }
            </span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <template v-if="$store.state.showDarkModeSwitch">
        <v-list-item style="margin-top: 0;">
          <v-list-item-content style="padding-top: 0;">
            <v-list-item-title class="non-list-element">
              <dark-mode-switch-component />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import menuItems from '../json/menu.json'
import DarkModeSwitch from './dark-mode-switch.vue'

export default {
  components: {
    'dark-mode-switch-component': DarkModeSwitch
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: menuItems.menu,
      menuIcon: 'mdi-chevron-right'
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    showDrawerFlag: {
      get() {
        return this.drawer
      },
      set(value) {
        this.$emit('updateNavigationDrawerValue', value)
      }
    }
  }
}
</script>

<style scoped>
.close-icon-section {
  text-align: right;
  height: 64px;
  line-height: 64px;
}
.close-icon-button {
  margin-right: 10px;
}
.list-item-title {
  letter-spacing: 2px;
  color: #8c8c8c;
}
.list-item-icon {
  color: #8c8c8c;
}
.echo-item {
  display: block;
  color: black;
  padding-top: 4px;
  padding-bottom: 4px;
}
.non-list-element {
  letter-spacing: 2px;
  color: #8c8c8c;
}
.title-page {
  color: #000;
}
.dark-theme {
  background-color: #262626;
}
.dark-theme-text {
  color: #bfbfbf;
}
.close-icon-dark-theme {
  color: #bfbfbf !important;
}

@media only screen and (max-width: 600px) {
  .close-icon-section {
    height: 56px;
    line-height: 56px;
  }
  .text-menu {
    font-size: 11px;
  }
}
</style>
