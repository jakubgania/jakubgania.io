<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <v-col cols="12" style="padding-left: 0px;">
      <a href="https://github.com/jakubgania?tab=repositories" class="link">
        Pełna lista projektów na platformie Github
      </a>
    </v-col>
    <v-col
      v-for="item in projects"
      :key="item.id"
      cols="12"
      lg="12"
      xs="12"
      class="sctn"
    >
      <nuxt-link :to="`project/` + item.path" class="link">
        <div class="">
          {{ item.title }}
        </div>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: '{ projekty }',
      description:
        'Lista moich projektów z odnośnikami do szczegółowych opisów. Obecnie strona w przygotowaniu.',
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
          title: 'retnal-property',
          path: 'retnal-property'
        }
      ]
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
</script>

<style scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 80px;
}
.sctn {
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}
.sctn:hover {
  background-color: #e6e6e6;
  padding-left: 12px;
  transition: padding-left 0.2s ease;
  color: blue;
}
.link {
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 14px;
  color: black;
}
</style>
