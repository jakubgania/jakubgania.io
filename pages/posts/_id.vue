<template>
  <v-row class="content-container">
    <template v-if="!error">
      <subpage-title-section-component :title="attributes.title" />

      <v-col lg="12" style="padding: 0;">
        <div v-html="$md.render(model)"></div>
      </v-col>
    </template>
    <template v-else>
      <div style="margin-top: 80px;">fetch error</div>
    </template>
  </v-row>
</template>

<script>
import axios from 'axios'
// import markdown from 'markdown-it'
// import meta from 'markdown-it-meta'
import frontmatter from 'front-matter'
import SubpageTitleSection from '../../components/subpage-title-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: '',
      error: false
    }
  },
  async asyncData({ params }) {
    try {
      // const { data } = await axios.get(`/posts/${params.id}.md`)
      const { data } = await axios.get(`http://127.0.0.1:8000/${params.id}.md`)
      const frontmatterData = frontmatter(data)

      return {
        model: data,
        attributes: frontmatterData.attributes
      }
    } catch (error) {
      return {
        model: 'Taki post nie istnieje',
        error: true
      }
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Post - ' + this.attributes.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.attributes.description
        },
        {
          name: 'keywords',
          content: this.attributes.keywords
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
}
</style>
