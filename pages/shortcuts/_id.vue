<template>
  <v-row class="content-container">
    <v-col lg="12" style="padding: 0;">
      <div class="page-title">
        {{ pageTitle + ' ' + id }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Skrt'
    }
  },
  asyncData({ params }) {
    return { id: params.id }
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
