<template>
  <post-component
    :post-object="postObject"
    :other-posts="false"
    :top-image-param-value="'article'"
    :top-image-path="'docs/articles'"
    :breadCrumbsItems="items"
  />
</template>

<script>
import axios from 'axios'
import frontmatter from 'front-matter'
import postComponent from '@/components/post'

export default {
  components: {
    postComponent
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/data/docs/articles/${params.article}/index.md`
      )

      const frontmatterData = frontmatter(data)

      return {
        postObject: {
          model: data,
          attributes: frontmatterData.attributes
        }
      }
    } catch (error) {
      return {
        postObject: null
      }
    }
  },
  data() {
    return {
      postObject: {},
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
  }
}
</script>
