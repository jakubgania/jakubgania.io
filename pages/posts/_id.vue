<template>
  <v-row class="content-container">
    <template v-if="!error">
      <subpage-title-section-component :title="attributes.title" />

      <v-col lg="12" style="padding: 0; padding-top: 40px;">
        <div v-html="$md.render(model)" style="letter-spacing: 0.5px;"></div>
      </v-col>
    </template>
    <template v-else>
      <v-col lg="12">
        <div class="error-message">
          {{ errorMessage }}
        </div>
        <div>
          <nuxt-link to="/posts" class="link">
            Zobacz inne posty
          </nuxt-link>
        </div>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import axios from 'axios'
import frontmatter from 'front-matter'
import SubpageTitleSection from '../../components/subpage-title-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: '',
      error: false,
      ht: 'Jakub Gania Software - Post - ',
      errorMessage: 'Wystąpił błąd pobierania lub taki post nie istnieje'
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://api.jakubgania.io/posts/${params.id}.md`
      )

      const frontmatterData = frontmatter(data)

      return {
        model: data,
        attributes: frontmatterData.attributes
      }
    } catch (error) {
      return {
        model: 'Taki post nie istnieje',
        error: true,
        attributes: {
          title: '',
          description: '',
          keywords: ''
        }
      }
    }
  },
  head() {
    return {
      title: this.ht + this.attributes.title,
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
.link {
  text-decoration: none;
  color: #b3b3b3;
}
.link:hover {
  color: #000;
}
.error-message {
  margin-top: 80px;
  color: red;
  font-weight: 800;
}
</style>
