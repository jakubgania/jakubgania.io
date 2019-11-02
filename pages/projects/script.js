import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: 'projekty',
      description:
        'Lista moich projektów z odnośnikami do szczegółowych opisów. Obecnie strona w przygotowaniu.',
      githubRepositoriesLink: 'https://github.com/jakubgania?tab=repositories',
      projects: [
        {
          title: 'jakubgania.io',
          path: 'jakubgania.io'
        },
        {
          title: 'bash-scripts',
          path: 'bash-scripts'
        },
        {
          title: 'jakubgania.io-api',
          path: 'jakubgania.io-api'
        },
        {
          title: 'yourcity-frontend',
          path: 'yourcity-frontend'
        },
        {
          title: 'javascript-scripts',
          path: 'javascript-scripts'
        },
        {
          title: 'dockermanager-frontend',
          path: 'dockermanager-frontend'
        },
        {
          title: 'yourcity-backend-laravel',
          path: 'yourcity-backend-laravel'
        },
        {
          title: 'dockermanager-backend',
          path: 'dockermanager-backend'
        },
        {
          title: 'yourcity-app-frontend',
          path: 'yourcity-app-frontend'
        },
        {
          title: 'php-scripts',
          path: 'php-scripts'
        },
        {
          title: 'python-scripts',
          path: 'python-scripts'
        },
        {
          title: 'yourcity-app-backend',
          path: 'yourcity-app-backend'
        },
        {
          title: 'jakubgania-app-environment-setup',
          path: 'jakubgania-app-environment-setup'
        },
        {
          title: 'cutdown-timer-page',
          path: 'cutdown-timer-page'
        },
        {
          title: 'yourcity-app-environment-setup',
          path: 'yourcity-app-environment-setup'
        },
        {
          title: 'jakubgania.io-old-version',
          path: 'jakubgania.io-old-version'
        },
        {
          title: 'vue-infinite-scroll',
          path: 'vue-infinite-scroll'
        },
        {
          title: 'coding-conventions',
          path: 'coding-conventions'
        },
        {
          title: 'angular-6-examples-app',
          path: 'angular-6-examples-app'
        },
        {
          title: 'typescript-examples-from-tutorial',
          path: 'typescript-examples-from-tutorial'
        },
        {
          title: 'powershell-scripts',
          path: 'powershell-scripts'
        },
        {
          title: 'toggle-features-platform',
          path: 'toggle-features-platform'
        },
        {
          title: 'yourcity-admin-panel',
          path: 'yourcity-admin-panel'
        },
        {
          title: 'yourcity-backend-express',
          path: 'yourcity-backend-express'
        },
        {
          title: 'projects-of-arduino-for-college',
          path: 'projects-of-arduino-for-college'
        },
        {
          title: 'prototype-social-portal-backend',
          path: 'prototype-social-portal-backend'
        },
        {
          title: 'prototype-social-portal-frontend',
          path: 'prototype-social-portal-backend'
        },
        {
          title: 'rental-property',
          path: 'rental-property'
        }
      ]
    }
  },
  computed: {
    titleMarginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { marginTop: 30, fontSize: 22 }
        default:
          return { marginTop: 120, fontSize: 28 }
      }
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Projekty',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projekty'
        },
        {
          name: 'keywords',
          content: 'Projekty'
        }
      ]
    }
  }
}
