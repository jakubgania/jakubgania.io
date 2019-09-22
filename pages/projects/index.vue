<template>
  <v-row class="content-container">
    <v-col lg="12" style="padding: 0;">
      <div class="page-title">
        {{ pageTitle }}
      </div>
    </v-col>
    <v-col v-if="description" lg="12" style="padding: 0;">
      <div>
        {{ description }}
      </div>
    </v-col>
    <v-col lg="12">
      list of projects
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Projekty',
      description: 'page description'
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Projekty',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projekty'
        },
        {
          name: 'keywords',
          content: 'Projekty'
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
