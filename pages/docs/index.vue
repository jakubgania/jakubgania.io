<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <template v-if="posts.length">
      <v-col
        v-for="item in posts"
        :key="item.id"
        class="post-link-item"
        cols="12"
        lg="12"
        xs="12"
      >
        <nuxt-link
          :to="`/docs/` + item.id"
          :class="{ 'post-link-dark-theme': darkThemeFlag }"
          class="post-link"
        >
          <div class="post-main-title">
            <div class="post-title">
              {{ item.title }}
            </div>
          </div>
          <div class="creation-date">
            {{ item.creationDate }}
          </div>
        </nuxt-link>
      </v-col>
    </template>
    <template v-else>
      <v-col lg="12">
        <v-alert dense type="info">
          Sekcja w przygotowaniu
        </v-alert>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import axios from 'axios'
import BreadcrumbsComponent from '@/components/breadcrumbs'
import SubpageTitleSectionComponent from '@/components/subpage-title-section'
import SubpageDescriptionSectionComponent from '@/components/subpage-description-section'

export default {
  components: {
    BreadcrumbsComponent,
    SubpageTitleSectionComponent,
    SubpageDescriptionSectionComponent
  },
  async asyncData() {
    try {
      const { data } = await axios.get(
        'https://jakubgania.io/data/docs/list-of-docs.json'
      )

      return {
        posts: data.posts
      }
    } catch (error) {
      //
    }
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

<style lang="scss" scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 80px;
}
.post-link-item {
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Roboto Mono', monospace;
}
.post-link {
  text-decoration: none;
  color: #000;
}
.post-link-dark-theme {
  color: #bfbfbf;
}
.post-main-title {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.4px;
  display: flex;
  padding-top: 2px;
  padding-bottom: 4px;
}
.post-main-title:hover {
  color: #0066ff;
}
.post-title {
  font-size: 16px;
}
.creation-date {
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  color: #8c8c8c;
  padding-top: 4px;
}
</style>
