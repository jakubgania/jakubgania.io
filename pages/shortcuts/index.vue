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
      list of subpages
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Skróty klawiaturowe',
      description: 'page description'
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Skróty klawiaturowe',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Skróty klawiaturowe'
        },
        {
          name: 'keywords',
          content: 'Skróty klawiaturowe'
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
