<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <div>
      Tutaj lista postów
    </div>
  </v-row>
</template>

<script>
// import axios from 'axios'
import BreadcrumbsComponent from '@/components/breadcrumbs'
import SubpageTitleSectionComponent from '@/components/subpage-title-section'
import SubpageDescriptionSectionComponent from '@/components/subpage-description-section'

export default {
  components: {
    BreadcrumbsComponent,
    SubpageTitleSectionComponent,
    SubpageDescriptionSectionComponent
  },
  data() {
    return {
      title: '{ artykuły }',
      description:
        'Z czasem będą pojawiać się tutaj różne artykuły powiązane głównie z programowaniem i developmentem. Poza tematami czysto technicznymi chciałbym tutaj poruszać kwestie związane z oprogramowaniem pomocnym w procesie tworzenia aplikacji czyli jakieś narzędzia i środowiska. Będę tutaj również opisywał w formie arytkułów pytania i odpowiedzi jakie sobie stawiam lub zagadnienia i problemy z jakimi się spotkałem programując coś nowego. Mam nadzieję, że z czasem wykształtuje się z tego pewnego rodzaju baza wiedzy z różnorodnymi i wartościowymi opisanymi zagadnieniami, które będą pomocne lub ciekawe dla innych osób.',
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'docs',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/artykuły'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Artykuły',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Artykuły'
        },
        {
          name: 'keywords',
          content:
            'artykły, posty, programowanie, development, it, software, komputery, framework, technologie, informatyka, frontend, backend'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jakub Gania Software | Artykuły'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/docs'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Artykuły na tematy programistyczne.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 80px;
}
</style>
