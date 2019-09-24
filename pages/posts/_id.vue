<template>
  <v-row class="content-container">
    <template v-if="!error">
      <v-col lg="12" style="padding: 0;">
        <div class="page-title">
          {{ pageTitle }}
        </div>
      </v-col>
    </template>
    <template v-else>
      <div style="margin-top: 80px;">fetch error</div>
    </template>
  </v-row>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      pageTitle: 'Example post title',
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
.page-title {
  font-size: 40px;
  border-bottom: 2px solid black;
  margin-top: 80px;
  font-weight: 800;
}
</style>
