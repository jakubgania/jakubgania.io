<template>
  <v-navigation-drawer
    v-model="showDrawerFlag"
    :class="{ 'dark-theme': darkTheme }"
    fixed
    app
    right
    temporary
    :width="$vuetify.breakpoint.name !== 'xs' ? '320px' : '100%'"
    style="flex-direction: column; display: flex;"
  >
    <div
      class="close-icon-section"
      :class="{ 'close-icon-section--dark-theme': darkTheme }"
    >
      <dark-mode-switch-component
        style="margin-top: 22px; margin-left: 14px;"
      />
      <div
        large
        icon
        class="close-icon-button"
        :class="{ 'close-icon-button--dark-theme': darkTheme }"
        @click="$emit('switchNavigationDrawer')"
      />
    </div>
    <v-list dense nav style="flex-grow: 1; display: block;">
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
      </template>
    </v-list>
    <div
      class="social-icons-xb"
      :class="{ 'social-icons-xb--dark-theme': darkTheme }"
    >
      <div
        class="social-links"
        :class="{ 'social-links--dark-theme': darkTheme }"
      >
        <a
          v-for="item in socialLinks"
          :key="item.id"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link-item"
          :class="{ 'social-link-item--dark-theme': darkTheme }"
        >
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </a>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import menuItems from '../json/menu.json'
import socialLinksItems from '../json/social-links.json'
import DarkModeSwitch from './dark-mode-switch.vue'

export default {
  components: {
    'dark-mode-switch-component': DarkModeSwitch,
  },
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: menuItems.menu,
      menuIcon: 'mdi-chevron-right',
      socialLinks: socialLinksItems.data,
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
      },
    },
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
    },
  },
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
.v-navigation-drawer--temporary:not(.navigation-drawer-close) {
  box-shadow: none;
}
.v-navigation-drawer__content {
  flex-direction: column;
  display: flex;
}
</style>

<style lang="scss" scoped>
.close-icon-section {
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #f2f2f2;
  justify-content: space-between;
}
.close-icon-section--dark-theme {
  border-bottom: 1px solid #2f363d;
}
.list-item-title {
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
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
  font-size: 12.8px;
  font-weight: 500;
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
.social-icons-xb {
  width: 100%;
  display: block;
  border-top: 1px solid #f2f2f2;
}
.social-icons-xb--dark-theme {
  border-top: 1px solid #2f363d;
}
.social-links {
  display: flex;

  a + a {
    border-left: 1px solid #f2f2f2;
  }

  &--dark-theme {
    a + a {
      border-left: 1px solid #2f363d;
    }
  }
}
.social-link-item {
  width: 33.333%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 48px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
    transition: background-color 0.2s ease;
  }

  &--dark-theme {
    &:hover {
      background-color: #424b54;
    }
  }
}

.close-icon-button {
  position: absolute;
  right: 14px;
  top: 15px;
  width: 32px;
  height: 32px;

  &--dark-theme {
    &.close-icon-button:before,
    &.close-icon-button:after {
      background-color: #bfbfbf;
    }
  }
}
.close-icon-button:hover {
  &:after,
  &:before {
    background-color: #8c8c8c;
    transition: background-color 0.2s ease;
  }
}
.close-icon-button:before,
.close-icon-button:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #000;
}
.close-icon-button:before {
  transform: rotate(45deg);
}
.close-icon-button:after {
  transform: rotate(-45deg);
}

@media only screen and (max-width: 600px) {
  .close-icon-section {
    height: 56px;
    line-height: 56px;
  }
  .text-menu {
    font-size: 12px;
  }
}
</style>
