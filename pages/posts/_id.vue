<template>
  <v-row class="content-container">
    <template v-if="!error">
      <subpage-title-section-component :title="title" />
    </template>
    <template v-else>
      <div style="margin-top: 80px;">fetch error</div>
    </template>
  </v-row>
</template>

<script>
import SubpageTitleSection from '../../components/subpage-title-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: 'Example post title  ',
      error: false
    }
  },
  asyncData({ params, error }) {
    // axios call
  },
  head() {
    return {
      title: 'Jakub Gania Software - Post',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Post'
        },
        {
          name: 'keywords',
          content: 'Post'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
</style>
