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
export default {
  props: {
    postObject: {
      type: Array,
      default: () => {
        return {
          test: 2
        }
      }
    }
  },
  methods: {
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
}
</script>
