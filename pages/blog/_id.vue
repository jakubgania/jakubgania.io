<template>
  <v-row class="content-container">
    <template v-if="!error">
      <div class="post-content">
        <breadcrumbs-component :items="items" />

        <subpage-title-section-component :title="attributes.title" />

        <div class="post" v-html="$md.render(model)"></div>
      </div>

      <posts-sidebar-menu-component />
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
import Breadcrumbs from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import PostsSidebarMenu from '../../components/posts-sidebar-menu'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'subpage-title-section-component': SubpageTitleSection,
    'posts-sidebar-menu-component': PostsSidebarMenu
  },
  data() {
    return {
      title: '',
      error: false,
      pageTitle: 'Jakub Gania Software',
      errorMessage: 'Wystąpił błąd pobierania lub taki post nie istnieje',
      items: [
        {
          text: 'blog',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/blog'
        }
      ]
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/media/posts/${params.id}.md`
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
  mounted() {
    this.items.push({
      text: this.attributes.title.toLowerCase(),
      disabled: true
    })
  },
  head() {
    return {
      title: this.attributes.title + ' - ' + this.pageTitle,
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
  max-width: 1020px;
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
  max-width: 600px;
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
