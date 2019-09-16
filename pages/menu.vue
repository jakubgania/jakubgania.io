<template>
  <v-row class="content-container">
    <v-col v-for="item in links" :key="item.id" lg="12">
      <nuxt-link :to="item.path">
        {{ item.title }}
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'O mnie',
          path: '/about'
        },
        {
          title: 'Strona główna',
          path: '/'
        },
        {
          title: 'Zdjęcia',
          path: '/images'
        },
        {
          title: 'Projekty',
          path: '/projects'
        },
        {
          title: 'Skróty',
          path: '/shortcuts'
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
  background-color: azure;
  margin: auto;
}
</style>
