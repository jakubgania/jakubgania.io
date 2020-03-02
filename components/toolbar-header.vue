<template>
  <div v-if="displayHeader()">
    <v-app-bar :class="{ 'dark-theme': darkTheme }" app clipped-left flat fixed>
      <v-toolbar-title>
        <nuxt-link
          :class="{ 'link-title-dark-theme': darkTheme }"
          to="/"
          class="link-title"
        >
          <logo-component :normal-font-size="true" :dark-theme="darkTheme" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <div class="d-none d-sm-flex" style="margin-right: 20px;">
        <nuxt-link to="/menu">
          <span
            :class="{ 'link-text--dark-theme': darkTheme }"
            class="link-text"
          >
            menu
          </span>
        </nuxt-link>
        <nuxt-link to="/blog">
          <span
            :class="{ 'link-text--dark-theme': darkTheme }"
            class="link-text"
          >
            blog
          </span>
        </nuxt-link>
        <nuxt-link to="/contact">
          <span
            :class="{ 'link-text--dark-theme': darkTheme }"
            class="link-text"
          >
            kontakt
          </span>
        </nuxt-link>
        <a
          v-for="item in socialLinks"
          :key="item.id"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
        >
          <v-icon :class="{ 'icon-dark-theme': darkTheme }" class="icon">
            {{ item.icon }}
          </v-icon>
        </a>
      </div>
      <div
        :class="{ 'nav-icon--dark-theme': darkTheme }"
        class="nav-icon"
        @click="$emit('switchNavigationDrawer')"
      >
        <div class="menu-icon-hamburger" />
        <div class="menu-icon-hamburger" />
        <div class="menu-icon-hamburger" />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '../components/logo'

export default {
  components: {
    'logo-component': Logo
  },
  data() {
    return {
      socialLinks: [
        {
          link: 'https://github.com/jakubgania',
          icon: 'mdi-github-circle'
        },
        {
          link: 'https://www.linkedin.com/in/jakubgania/',
          icon: 'mdi-linkedin'
        },
        {
          link: 'https://twitter.com/jakubgania',
          icon: 'mdi-twitter'
        },
        {
          link: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
          icon: 'mdi-youtube'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  mounted() {
    this.displayHeader()
  },
  methods: {
    displayHeader() {
      return this.$route.name !== 'home'
    }
  }
}
</script>

<style lang="scss" scoped>
.link-title {
  text-decoration: none;
  color: #000;
}
.nav-icon {
  &:hover {
    .menu-icon-hamburger {
      background-color: #8c8c8c;
      transition: background-color 0.2s ease;
    }
  }
}
.menu-icon-hamburger {
  width: 34px;
  height: 2px;
  background-color: #000;
  transition: background-color 0.2s ease;
  margin: 6px 0;
}
.nav-icon--dark-theme {
  .menu-icon-hamburger {
    background-color: #b3b3b3;
  }

  &:hover {
    .menu-icon-hamburger {
      background-color: #8c8c8c;
    }
  }
}
.dark-theme {
  background-color: #1b1f23;
}
.link-title-dark-theme {
  color: #fff;
}
.link-text {
  color: #000;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin-right: 10px;
  letter-spacing: 2px;
  transition: color 0.2s ease;

  &:hover {
    color: #0066ff;
    transition: color 0.2s ease;
  }

  &--dark-theme {
    color: #fff;
  }
}
.social-icon {
  margin-right: 10px;
}
.icon {
  color: #000;
}
.icon-dark-theme {
  color: #fff;
}
@media only screen and (max-width: 960px) {
  .social-icon {
    margin-right: 6px;
  }
}

@media only screen and (max-width: 600px) {
  .menu-icon-hamburger {
    width: 28px;
    height: 2px;
    margin: 6px 0;
  }
}
</style>
