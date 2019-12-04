<template>
  <footer
    v-if="displayFooter()"
    :class="{ 'footer-container--dark-theme': darkThemeFlag }"
    class="footer-container"
  >
    <div class="footer-container__sitemap-section">
      <div class="footer-container__logo-section">
        <logo-component :normal-font-size="true" :dark-theme="darkTheme" />
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
                    <nuxt-link
                      :to="element.link"
                      :class="{
                        'footer-container__site-column-link--dark-theme': darkTheme
                      }"
                      class="footer-container__site-column-link"
                    >
                      {{ element.name }}
                    </nuxt-link>
                  </template>
                  <template v-if="element.href">
                    <a
                      :href="element.href"
                      :class="{
                        'footer-container__site-column-link--dark-theme': darkTheme
                      }"
                      class="footer-container__site-column-link"
                      target="_blank"
                    >
                      {{ element.name }}
                    </a>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-container__other-elements">
          <div class="footer-container__dark-theme-switch-section">
            <template v-if="$store.state.showDarkModeSwitch">
              <dark-mode-switch-component />
            </template>
          </div>
          <div class="footer-container__github-button-section">
            <github-button
              href="https://github.com/jakubgania"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @jakubgania on GitHub"
            >
              Follow @jakubgania
            </github-button>
          </div>
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
import Logo from '../components/logo'
import GithubButton from '../node_modules/vue-github-button'
import DarkModeSwitch from './dark-mode-switch.vue'

export default {
  components: {
    'logo-component': Logo,
    'dark-mode-switch-component': DarkModeSwitch,
    'github-button': GithubButton
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
            },
            {
              name: 'Doświadczenie',
              link: '/experience'
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
          elements: [
            {
              name: 'jakubgania.io',
              href: 'https://github.com/jakubgania/jakubgania.io'
            },
            {
              name: 'yourcity-frontend',
              href: 'https://github.com/jakubgania/yourcity-frontend'
            }
          ]
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
            },
            {
              name: 'Twitter',
              href: 'https://twitter.com/jakubgania'
            }
          ]
        }
      ],
      counter: 0
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      return this.darkTheme
    }
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
  margin-top: 80px;

  &--dark-theme {
    background-color: #101214;
  }

  &__logo-section {
    width: 40%;
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

  &__site-column-link {
    color: #8a929c;

    &:hover {
      color: #000;
      transition: color 0.2s ease;
    }

    &--dark-theme {
      &:hover {
        color: #b3b3b3;
      }
    }
  }

  &__other-elements {
    display: flex;
    flex-direction: row;
  }

  &__github-button-section {
    width: 50%;
    text-align: right;
    margin-top: 18px;
    order: 2;
  }

  &__dark-theme-switch-section {
    width: 50%;
    order: 1;
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

@media only screen and (max-width: 1264px) {
  .footer-container {
    &__sitemap-section {
      padding-left: 20px;
      padding-right: 20px;
    }

    &__copyright-section {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

@media only screen and (max-width: 960px) {
  .footer-container {
    &__logo-section {
      width: 100%;
    }

    &__x {
      width: 100%;
      padding-left: 0;
    }

    &__sitemap-section {
      display: block;
      padding-left: 20px;
      padding-right: 20px;
    }

    &__site-column-section {
      padding-left: 0;
      padding-right: 10px;
    }

    &__copyright-section {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .footer-container {
    &__logo-section {
      width: 100%;
    }

    &__x {
      width: 100%;
      padding-left: 0;
    }

    &__sitemap-section {
      display: block;
      padding-left: 14px;
      padding-right: 14px;
    }

    &__sites-section {
      flex-wrap: wrap;
    }

    &__site-column-section {
      padding-left: 0;
      width: 50%;
    }

    &__site-column-title {
      font-size: 14px;
    }

    &__other-elements {
      display: inline-block;
    }

    &__copyright-section {
      padding-left: 14px;
      padding-right: 14px;
    }

    &__copyright-text {
      letter-spacing: 1px;
    }

    &__github-button-section {
      width: 100%;
      text-align: left;
      margin-top: 18px;
    }

    &__dark-theme-switch-section {
      width: 100%;
    }
  }
}
</style>
