<template>
  <v-navigation-drawer
    v-model="showDrawerFlag"
    :class="{ 'dark-theme': darkTheme }"
    fixed
    app
    right
    temporary
    :width="$vuetify.breakpoint.name !== 'xs' ? '320px' : '100%'"
  >
    <div class="close-icon-section">
      <dark-mode-switch-component
        style="width: 140px; display: inline-block;margin-top: 22px;margin-left: 16px;"
      />
      <v-btn
        @click.native="$emit('switchNavigationDrawer')"
        large
        icon
        class="close-icon-button"
      >
        <v-icon :class="{ 'close-icon-dark-theme': darkTheme }">
          mdi-close
        </v-icon>
      </v-btn>
    </div>
    <v-list dense nav>
      <template v-for="item in items">
        <v-list-item v-if="item.path" :key="item.title" :to="item.path">
          <v-list-item-content>
            <v-list-item-title class="list-item-title">
              <span
                :class="{ 'dark-theme-text': darkTheme }"
                class="title-page text-menu"
              >
                {{ item.title }}
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="item.url" :key="item.title" :href="item.url">
          <v-list-item-content>
            <v-list-item-title class="list-item-title">
              <span
                :class="{ 'dark-theme-text': darkTheme }"
                class="title-page text-menu"
              >
                {{ item.title }}
              </span>
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
        this.toggleScrollbar(this.drawer)
        return this.drawer
      },
      set(value) {
        this.$emit('updateNavigationDrawerValue', value)
      }
    }
  },
  methods: {
    toggleScrollbar(drawer) {
      if (process.browser) {
        if (drawer) {
          document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        } else {
          document.getElementsByTagName('html')[0].style.overflow = 'auto'
        }
      }
    }
  }
}
</script>

<style>
.v-list--nav {
  padding-left: 0;
  padding-right: 0;
}
.v-list--nav .v-list-item {
  border-radius: 0;
}
.v-list--nav.v-list--dense .v-list-item:not(:last-child):not(:only-child) {
  margin-bottom: 0;
}
.v-list--nav .v-list-item:before {
  border-radius: 0;
}
</style>

<style scoped>
.close-icon-section {
  text-align: right;
  height: 64px;
  line-height: 64px;
  display: inline;
}
.close-icon-button {
  float: right;
  margin-top: 16px;
  margin-right: 16px;
}
.list-item-title {
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 1px;
  color: #8c8c8c;
  padding-left: 10px;
}
.list-item-icon {
  color: #8c8c8c;
}
.non-list-element {
  letter-spacing: 2px;
  color: #8c8c8c;
}
.title-page {
  color: #000;
  font-size: 12px;
}
.dark-theme {
  background-color: #1b1f23;
}
.dark-theme-text {
  color: #bfbfbf;
}
.close-icon-dark-theme {
  color: #bfbfbf !important;
}
.navigation-drawer-item {
  width: 100%;
  max-width: 320px;
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
