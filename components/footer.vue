<template>
  <footer v-if="displayFooter()" class="footer-container">
    <div class="footer-container__sitemap-section">
      <div class="footer-container__logo-section">
        <div class="footer-container__logo">
          Jakub Gania Software
        </div>
      </div>
      <div class="footer-container__x">
        <div class="footer-container__sites-section">
          <div
            v-for="item in sites"
            :key="item.id"
            class="footer-container__site-column-section"
          >
            <div class="footer-container__site-column-title">
              {{ item.titleColumn }}
            </div>
            <div class="footer-container__site-column-list-section">
              <ul style="list-style-type:none;padding-left: 0;">
                <li
                  v-for="element in item.elements"
                  :key="element.id"
                  class=""
                  style="font-size: 12px;letter-spacing: 0.6px;margin-bottom: 10px;"
                >
                  <template v-if="element.link">
                    <nuxt-link :to="element.link">
                      {{ element.name }}
                    </nuxt-link>
                  </template>
                  <template v-if="element.href">
                    <a :href="element.href" target="_blank">
                      {{ element.name }}
                    </a>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <template v-if="$store.state.showDarkModeSwitch">
            <dark-mode-switch-component />
          </template>
        </div>
      </div>
    </div>
    <div class="footer-container__copyright-wrapper">
      <div class="footer-container__copyright-section">
        <div class="footer-container__copyright-text">
          <div v-html="copyrightText" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import DarkModeSwitch from './dark-mode-switch.vue'

export default {
  components: {
    'dark-mode-switch-component': DarkModeSwitch
  },
  data() {
    return {
      copyrightText: '&copy; 2018 - 2019 Jakub Gania Software',
      sites: [
        {
          titleColumn: 'Strony',
          elements: [
            {
              name: 'O mnie',
              link: '/about'
            },
            {
              name: 'Projekty',
              link: '/projects'
            },
            {
              name: 'Kontakt',
              link: '/contact'
            },
            {
              name: 'Zasoby',
              link: '/resources'
            },
            {
              name: 'Blog',
              link: '/blog'
            },
            {
              name: 'Komendy i polecenia',
              link: '/commands'
            },
            {
              name: 'Skróty klawiaturowe',
              link: '/shortcuts'
            },
            {
              name: 'Galeria',
              link: '/gallery'
            },
            {
              name: 'Timeline',
              link: '/timeline'
            }
          ]
        },
        {
          titleColumn: 'Posty',
          elements: [
            {
              name:
                'Optymalizacja i refaktoryzacja kodu, nowa podstrona, metodologia BEM',
              link:
                '/blog/21-11-2019-optymalizacja-i-refaktoryzacja-kodu-nowa-podstrona-metodologia-bem'
            },
            {
              name: 'Przemyślenia',
              link: '/blog/13-11-2019-przemyslenia'
            },
            {
              name: 'Timeline, Dark Theme',
              link: '/blog/12-11-2019-timeline-dark-theme'
            },
            {
              name: 'Miesiąc',
              link: '/blog/05-11-2019-miesiac'
            }
          ]
        },
        {
          titleColumn: 'Projekty',
          elements: []
        },
        {
          titleColumn: 'Social',
          elements: [
            {
              name: 'GitHub',
              href: 'https://github.com/jakubgania'
            },
            {
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/in/jakubgania'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  mounted() {
    this.displayFooter()
  },
  methods: {
    displayFooter() {
      return this.$route.name !== 'home'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: #fafbfc;

  &__logo-section {
    width: 40%;
  }

  &__logo {
    font-family: 'Audiowide', cursive;
    color: #000;
    font-size: 24px;
  }

  &__x {
    padding-left: 20px;
    width: 60%;
  }

  &__sitemap-section {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  &__sites-section {
    display: flex;
    width: 100%;
  }

  &__site-column-section {
    width: 25%;
    padding-left: 10px;
  }

  &__site-column-title {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #808080;
  }

  &__copyright-wrapper {
    border-top: 1px solid #e6e6e6;
  }

  &__copyright-section {
    max-width: 1200px;
    width: 100%;
    margin: auto;
  }

  &__copyright-text {
    text-align: left;
    padding-top: 24px;
    padding-bottom: 24px;
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 12px;
  }
}

@media only screen and (max-width: 600px) {
  .footer-container {
    &__logo-section {
      width: 100%;
    }

    &__x {
      width: 100%;
    }

    &__sitemap-section {
      display: block;
    }

    &__sites-section {
      flex-wrap: wrap;
    }

    &__site-column-section {
      // display: inline-block;
      width: 50%;
    }
  }
}
/* .footer-container {
  max-width: 1400px;
  width: 100%;
  font-size: 12px;
  letter-spacing: 1px;
  border-top: 1px solid #e6e6e6;
  margin: auto;
  line-height: 80px;
  margin-bottom: 20px;
}
.link {
  text-decoration: none;
  color: #0066ff;
  padding-right: 10px;
}
.link:hover {
  color: #0000ff;
}
.dark-theme-text {
  color: #fff;
}
.footer-container-dark-theme {
  border-top: 1px solid #bfbfbf;
}
.links-section {
  padding: 0;
}
.copyright-text {
  text-align: right;
  padding: 0;
}
.fbc {
  background-color: #fff;
}
.dark-theme {
  background-color: #1a1a1a;
}

@media only screen and (max-width: 600px) {
  .footer-container {
    padding-top: 20px;
    line-height: 40px;
  }
  .links-section {
    text-align: center;
  }
  .copyright-text {
    text-align: center;
  }
} */
</style>
