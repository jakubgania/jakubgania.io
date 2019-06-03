<template>
  <v-layout row wrap>
    <div style="width: 100%;max-width:640px;margin-left:auto;margin-right:auto;">
      <v-layout row wrap>
        <v-flex v-for="page in arrayOfAllPages" :key="page.id" lg12>
          <div style="font-size: 14px;padding-top: 8px;padding-bottom: 8px;letter-spacing: 1px;">
            <a v-if="page.path" :href="page.path" style="text-decoration: none;color: black;">
              {{ page.title }}
            </a>
            <a v-else :href="page.link" target="_blank" style="text-decoration: none;color: black;">
              {{ page.title }}
            </a>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      arrayOfAllPages: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'O mnie',
          path: '/about'
        },
        {
          title: 'Projekty',
          path: '/projects'
        },
        {
          title: 'Kontakt',
          path: '/contact'
        },
        {
          title: 'Shortcuts',
          path: '/shortcuts'
        },
        {
          title: 'Polecenia',
          path: '/commands'
        },
        {
          title: 'Inne',
          path: '/other-resources'
        },
        {
          title: 'Zdjęcia',
          path: '/images'
        },
        {
          title: 'Inne informacje o mnie',
          path: '/older-information-about-me'
        },
        {
          title: 'Github',
          link: 'https://github.com/jakubgania'
        },
        {
          title: 'Linkedin',
          link: 'https://pl.linkedin.com/in/jakubgania'
        }
      ]
    }
  }
}
</script>
