<template>
  <div>
    <!-- <div v-if="attributes.topImageSrc">
      <img
        :src="getTopImageFullPath(attributes.topImageSrc)"
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

          <div id="blog-post" class="post" v-html="$md.render(model)" />
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

    <other-posts-component :other-posts="otherPosts" /> -->

    <post-component
      :post-object="postObject"
      :other-posts="true"
      :top-image-param-value="'id'"
      :top-image-path="'blog/posts'"
      :breadCrumbsItems="items"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import frontmatter from 'front-matter'
// import BreadcrumbsComponent from '@/components/breadcrumbs'
// import OtherPostsComponent from '@/components/other-posts-component'
import postComponent from '@/components/post'

export default {
  components: {
    // BreadcrumbsComponent,
    // OtherPostsComponent
    postComponent
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

      // return {
      //   model: data,
      //   attributes: frontmatterData.attributes,
      //   otherPosts: otherPostsData.data.posts.slice(0, 3)
      // }

      return {
        postObject: {
          model: data,
          attributes: frontmatterData.attributes,
          otherPosts: otherPostsData.data.posts.slice(0, 3)
        }
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
      counter: 0,
      postObject: {}
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.forceUpdate()
      return this.darkTheme
    }
  },
  // mounted() {
  //   this.items.push({
  //     text: this.attributes.title.toLowerCase(),
  //     disabled: true
  //   })
  // },
  methods: {
    forceUpdate() {
      this.counter += 1
    },
    getTopImageFullPath(imagesSrc) {
      return (
        'https://jakubgania.io/' +
        'data/blog/posts/' +
        this.$route.params.id +
        '/' +
        imagesSrc
      )
    }
  }
  // head() {
  //   return {
  //     title: this.attributes.title + ' | ' + this.pageTitle,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.attributes.description
  //       },
  //       {
  //         name: 'keywords',
  //         content: this.attributes.keywords
  //       },
  //       {
  //         hid: 'og:title',
  //         property: 'og:title',
  //         content: this.attributes.title + ' | ' + this.pageTitle
  //       },
  //       {
  //         hid: 'og:url',
  //         property: 'og:url',
  //         content: 'https://jakubgania.io' + this.$route.path
  //       },
  //       {
  //         hid: 'og:description',
  //         property: 'og:description',
  //         content: this.attributes.description
  //       },
  //       {
  //         hid: 'og:image',
  //         property: 'og:image',
  //         content: this.attributes.topImageSrc
  //           ? this.getTopImageFullPath(this.attributes.topImageSrc)
  //           : 'https://jakubgania.io/jakub-gania-software-logo-img.png'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss">
@import '../../assets/styles/markdown-post/style.scss';
</style>

<style lang="scss" scoped>
@import '../../assets/styles/markdown-post/style-scoped.scss';
</style>
