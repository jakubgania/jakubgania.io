<template>
  <div>
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
          <div style="max-width: 640px;margin: auto;">
            <breadcrumbs-component :items="items" />
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

    <!-- <other-posts-component :other-posts="otherPosts" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BreadcrumbsComponent from '@/components/breadcrumbs'

export default {
  props: {
    postObject: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    BreadcrumbsComponent
  },
  data() {
    return {
      error: false,
      items: [
        {
          text: 'artykuły',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/docs'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.forceUpdate()
      return this.darkTheme
    }
  },
  mounted() {
    this.items.push({
      text: this.postObject.attributes.title.toLowerCase(),
      disabled: true
    })
  },
  methods: {
    forceUpdate() {
      this.counter += 1
    },
    getTopImageFullPath(imagesSrc) {
      return (
        'https://jakubgania.io/' +
        'data/blog/posts/' +
        this.$route.params.article +
        '/' +
        imagesSrc
      )
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/markdown-post/style.scss';
</style>

<style lang="scss" scoped>
@import '../assets/styles/markdown-post/style-scoped.scss';
</style>
