<template>
  <div>
    <v-row class="content-container">
      <template v-if="!error">
        <div class="post-content">
          <breadcrumbs-component :items="items" />

          <subpage-title-section-component :title="attributes.title" />

          <div
            :class="{ 'datetime-dark-theme': darkThemeFlag }"
            class="datetime"
          >
            {{ attributes.datetime ? attributes.datetime : 'b/d' }}
          </div>

          <div v-html="$md.render(model)" class="post" />
        </div>

        <posts-sidebar-menu-component
          :key="counter"
          :dark-theme-flag="darkThemeFlag"
        />
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
import SubpageTitleSection from '../../components/subpage-title-section'
import PostsSidebarMenu from '../../components/posts-sidebar-menu'
import OtherPosts from './other-posts-component'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'subpage-title-section-component': SubpageTitleSection,
    'posts-sidebar-menu-component': PostsSidebarMenu,
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
.post-content p img {
  width: 100%;
}
</style>

<style lang="scss" scoped>
.content-container {
  max-width: 1040px;
  width: 100%;
  margin: auto;
}
.datetime {
  margin-top: 14px;
  color: #000;
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 600;
}
.datetime-dark-theme {
  color: #b3b3b3;
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
  max-width: 620px;
  padding: 0;
  margin-bottom: 80px;
}
.post {
  // font-family: 'Nunito', sans-serif;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.4px;
  line-height: 2;
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
