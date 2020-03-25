<template>
  <div v-if="postObject">
    <div v-if="postObject.attributes.topImageSrc">
      <img
        :src="getTopImageFullPath(postObject.attributes.topImageSrc)"
        :alt="'topImageAlt'"
        class="top-image"
      />
    </div>

    <v-row class="content-container">
      <template v-if="!error">
        <div class="post-title">
          {{ postObject.attributes.title }}
        </div>

        <div class="post-content">
          <div style="max-width: 640px; margin: auto;">
            <breadcrumbs-component :items="breadCrumbsItems" />
          </div>

          <div
            :class="{ 'datetime-dark-theme': darkThemeFlag }"
            class="datetime"
          >
            {{
              postObject.attributes.datetime
                ? postObject.attributes.datetime
                : 'b/d'
            }}
          </div>

          <div
            id="blog-post"
            class="post"
            v-html="$md.render(postObject.model)"
          />
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

    <about-creator />

    <component
      :is="otherPostsComponent"
      :other-posts="postObject.otherPosts"
      :number-of-posts="postObject.numberOfPosts"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BreadcrumbsComponent from '@/components/breadcrumbs'
import AboutCreator from '@/components/about-creator'

export default {
  components: {
    BreadcrumbsComponent,
    AboutCreator,
  },
  props: {
    postObject: {
      type: Object,
      default: () => {
        return {}
      },
    },
    otherPosts: {
      type: Boolean,
      default: false,
    },
    topImageParamValue: {
      type: String,
      default: '',
    },
    topImagePath: {
      type: String,
      default: '',
    },
    breadCrumbsItems: {
      type: Array,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      pageTitle: 'Jakub Gania Software',
      error: false,
      errorMessage: 'Error',
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.forceUpdate()
      return this.darkTheme
    },
    otherPostsComponent() {
      if (this.otherPosts) {
        return () => import('@/components/other-posts-component')
      }

      return false
    },
  },
  mounted() {
    this.breadCrumbsItems.push({
      text: this.postObject.attributes.title.toLowerCase(),
      disabled: true,
    })
  },
  methods: {
    forceUpdate() {
      this.counter += 1
    },
    getTopImageFullPath(imagesSrc) {
      return (
        'https://jakubgania.io/' +
        'data/' +
        this.topImagePath +
        '/' +
        this.$route.params[this.topImageParamValue] +
        '/' +
        imagesSrc
      )
    },
  },
  head() {
    return {
      title: this.postObject.attributes.title + ' | ' + this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.postObject.attributes.description,
        },
        {
          name: 'keywords',
          content: this.postObject.attributes.keywords,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.postObject.attributes.title + ' | ' + this.pageTitle,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Jakub Gania Software',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io' + this.$route.path,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.postObject.attributes.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.postObject.attributes.topImageSrc
            ? this.getTopImageFullPath(this.postObject.attributes.topImageSrc)
            : 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '../assets/styles/markdown-post/style.scss';
</style>

<style lang="scss" scoped>
@import '../assets/styles/markdown-post/style-scoped.scss';
</style>
