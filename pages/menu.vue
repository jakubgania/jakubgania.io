<template>
  <v-row class="content-container">
    <v-col v-for="item in links" :key="item.id" lg="12">
      {{ item.title }}
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
