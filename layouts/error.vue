<template>
  <v-row class="error-container">
    <v-col lg="12">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/" class="return-to-home-link">
        Home page
      </NuxtLink>
      <span>/</span>
      <NuxtLink to="/menu" class="return-to-home-link">
        Menu
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
.error-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-top: 80px;
}
h1 {
  font-size: 80px;
}
.return-to-home-link {
  text-decoration: none;
  color: black;
  font-size: 12px;
  letter-spacing: 2px;
}
.return-to-home-link:hover {
  color: blue;
}
</style>
