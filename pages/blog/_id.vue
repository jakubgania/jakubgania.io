<template>
  <div>
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
import postComponent from '@/components/post'

export default {
  components: {
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
}
</script>

<style lang="scss">
@import '../../assets/styles/markdown-post/style.scss';
</style>

<style lang="scss" scoped>
@import '../../assets/styles/markdown-post/style-scoped.scss';
</style>
