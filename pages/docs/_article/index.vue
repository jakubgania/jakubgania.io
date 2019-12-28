<template>
  <post-component :post-object="postObject" />
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
        `https://jakubgania.io/data/blog/posts/29-09-2019-start/index.md`
      )

      const otherPostsData = await axios.get(
        `https://jakubgania.io/data/blog/list-of-posts.json`
      )

      const frontmatterData = frontmatter(data)

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
      postObject: {}
    }
  },
  mounted() {
    console.log(this.postObject)
  }
}
</script>
