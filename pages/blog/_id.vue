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

          <!-- <subpage-title-section-component :title="attributes.title" /> -->

          <div
            :class="{ 'datetime-dark-theme': darkThemeFlag }"
            class="datetime"
          >
            {{ attributes.datetime ? attributes.datetime : 'b/d' }}
          </div>

          <div v-html="$md.render(model)" class="post" />
        </div>

        <!-- <posts-sidebar-menu-component
          v-if="$vuetify.breakpoint.mdAndUp"
          :key="counter"
          :dark-theme-flag="darkThemeFlag"
        /> -->
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
// import SubpageTitleSection from '../../components/subpage-title-section'
// import PostsSidebarMenu from '../../components/posts-sidebar-menu'
import OtherPosts from './other-posts-component'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    // 'subpage-title-section-component': SubpageTitleSection,
    // 'posts-sidebar-menu-component': PostsSidebarMenu,
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
.v-application div pre {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding-top: 3rem;
  border-radius: 6px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
  background-repeat: no-repeat;
  background-position: 16px 16px;
  box-shadow: 5px 5px 15px 0 rgba(50, 50, 50, 0.75);
  background-color: #1d262f;
}
.v-application code {
  background-color: #1d262f;
  color: #abb2bf;
  display: block;
  box-shadow: none;
  white-space: unset;
  border-radius: 0;
  font-size: initial;
  font-weight: initial;
  padding-left: 40px;
  padding-right: 40px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.v-application .post p {
  max-width: 640px;
  margin: auto;
  margin-bottom: 20px;
}
.v-application .post h2 {
  max-width: 640px;
  margin: auto;
  margin-bottom: 10px;
}
.v-application ul {
  max-width: 640px;
  margin: auto;
  margin-bottom: 10px;
}
.post-content p img {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .v-application .post h2 {
    font-size: 18px;
  }
}
</style>

<style lang="scss" scoped>
.top-image {
  display: block;
  width: 100%;
  height: 600px;
  object-fit: cover;
}
.content-container {
  max-width: 1000px;
  width: 100%;
  margin: auto;
}
.post-title {
  font-size: 52px;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  width: 100%;
}
.datetime {
  margin-top: 14px;
  color: #000;
  font-size: 12px;
  letter-spacing: 0.4px;
  font-weight: 600;
  max-width: 640px;
  margin: auto;
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
  max-width: 800px;
  width: 100%;
  padding: 0;
  margin: auto;
  margin-bottom: 100px;
}
.post {
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.2px;
  line-height: 2;
  font-size: 16.8px;
  padding-top: 20px;
  max-width: 800px;
}

@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-content {
    margin: auto;
    margin-bottom: 60px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    width: 100%;
    margin-top: 40px;
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-title {
    margin-top: 0;
    font-size: 32px;
  }
  .post-content {
    width: 100%;
  }
}
</style>
