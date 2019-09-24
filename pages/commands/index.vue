<template>
  <v-row class="content-container">
    <v-col lg="12" style="padding: 0;">
      <div class="page-title">
        Komeny i polecenia
      </div>
    </v-col>
    <v-col lg="12">
      Strona w przygotowaniu
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jakub Gania Software - Komendy i polecenia',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Komendy i polecenia'
        },
        {
          name: 'keywords',
          content: 'Komendy i polecenia'
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
