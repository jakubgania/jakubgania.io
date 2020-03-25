<template>
  <v-row class="content-container">
    <template v-if="!error">
      <div class="post-content">
        <div style="max-width: 640px; margin: auto;">
          <breadcrumbs-component :items="items" />

          <subpage-title-section-component :title="attributes.title" />
        </div>

        <div class="post" v-html="$md.render(model)" />
      </div>
    </template>
    <template v-else>
      <v-col lg="12">
        <div class="error-message">
          {{ errorMessage }}
        </div>
        <div>
          <nuxt-link to="/projects" class="link">
            Zobacz inne projekty
          </nuxt-link>
        </div>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import axios from 'axios'
import frontmatter from 'front-matter'
import Breadcrumbs from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'subpage-title-section-component': SubpageTitleSection,
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/data/projects/${params.id}/index.md`
      )

      const frontmatterData = frontmatter(data)

      return {
        model: data,
        attributes: frontmatterData.attributes,
      }
    } catch (error) {
      return {
        model: 'Taki projekt nie istnieje',
        error: true,
        attributes: {
          title: '',
          description: '',
          keywords: '',
        },
      }
    }
  },
  data() {
    return {
      title: '',
      error: false,
      pageTitle: 'Jakub Gania Software | Projekty',
      errorMessage: 'Wystąpił błąd pobierania lub taki projekt nie istnieje',
      items: [
        {
          text: 'projekty',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/projects',
        },
      ],
    }
  },
  mounted() {
    this.items.push({
      text: this.attributes.title.toLowerCase(),
      disabled: true,
    })
  },
  head() {
    return {
      title: this.pageTitle + ' - ' + this.attributes.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.attributes.description,
        },
        {
          name: 'keywords',
          content: this.attributes.keywords,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/markdown-post/style.scss';
</style>

<style scoped>
@import '../../assets/styles/markdown-post/style-scoped.scss';
</style>
