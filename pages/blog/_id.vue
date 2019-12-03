<template>
  <div>
    <div v-if="attributes.topImageSrc">
      <img
        :src="
          'https://jakubgania.io/data/blog/posts/' +
            $route.params.id +
            '/' +
            attributes.topImageSrc
        "
        :alt="'topImageAlt'"
        class="top-image"
      />
    </div>

    <v-row class="content-container">
      <template v-if="!error">
        <div class="post-title">
          {{ attributes.title }}
        </div>

        <div class="post-content">
          <div style="max-width: 640px;margin: auto;">
            <breadcrumbs-component :items="items" />
          </div>

          <div
            :class="{ 'datetime-dark-theme': darkThemeFlag }"
            class="datetime"
          >
            {{ attributes.datetime ? attributes.datetime : 'b/d' }}
          </div>

          <div v-html="$md.render(model)" id="blog-post" class="post" />
        </div>
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

    <other-posts-component :other-posts="otherPosts" />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import frontmatter from 'front-matter'
import Breadcrumbs from '../../components/breadcrumbs'
import OtherPosts from './other-posts-component'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'other-posts-component': OtherPosts
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
      ],
      counter: 0
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.forceUpdate()
      return this.darkTheme
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/data/blog/posts/${params.id}/index.md`
      )

      const otherPostsData = await axios.get(
        `https://jakubgania.io/data/blog/list-of-posts.json`
      )

      const frontmatterData = frontmatter(data)

      return {
        model: data,
        attributes: frontmatterData.attributes,
        otherPosts: otherPostsData.data.posts.slice(0, 3)
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
  methods: {
    forceUpdate() {
      this.counter += 1
    }
  },
  head() {
    return {
      title: this.attributes.title + ' | ' + this.pageTitle,
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

<style lang="scss">
@import '../../assets/styles/markdown-post/style.scss';
</style>

<style lang="scss" scoped>
@import '../../assets/styles/markdown-post/style-scoped.scss';
</style>
