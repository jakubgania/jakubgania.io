<template>
  <v-row class="content-container">
    <template v-if="!error">
      <div class="post-content">
        <breadcrumbs-component :items="items" />

        <subpage-title-section-component :title="attributes.title" />

        <div class="post" v-html="$md.render(model)"></div>
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
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: '',
      error: false,
      pageTitle: 'Jakub Gania Software - Projekty',
      errorMessage: 'Wystąpił błąd pobierania lub taki projekt nie istnieje',
      items: [
        {
          text: 'projekty',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/projects'
        }
      ]
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/media/projects/${params.id}.md`
      )

      const frontmatterData = frontmatter(data)

      return {
        model: data,
        attributes: frontmatterData.attributes
      }
    } catch (error) {
      return {
        model: 'Taki projekt nie istnieje',
        error: true,
        attributes: {
          title: '',
          description: '',
          keywords: ''
        }
      }
    }
  },
  mounted() {
    this.items.push({
      text: this.attributes.title.toLowerCase(),
      disabled: true
    })
  },
  head() {
    return {
      title: this.pageTitle + ' | ' + this.attributes.title,
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

<style>
.v-application code {
  background-color: #282c34;
  color: #abb2bf;
  display: block;
  box-shadow: none;
  white-space: unset;
  border-radius: 0;
  font-size: initial;
  font-weight: initial;
}
</style>

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
.post-content {
  max-width: 800px;
  width: 100%;
  padding: 0;
}
.post {
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.5px;
  line-height: 1.8;
  font-size: 16.8px;
  padding-top: 20px;
}
@media only screen and (max-width: 600px) {
  .content-container {
    width: 100%;
    margin-top: 40px;
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-content {
    width: 100%;
  }
}
</style>
