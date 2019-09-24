<template>
  <v-row class="content-container">
    <v-col lg="12" style="padding: 0;">
      <div class="page-title">
        Kontakt
      </div>
    </v-col>
    <v-col lg="12">
      <div class="email">
        contact@jakubgania.io
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jakub Gania Software - Kontakt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kontakt'
        },
        {
          name: 'keywords',
          content: 'Kontakt'
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
.email {
  padding-top: 80px;
  text-align: center;
  color: black;
  letter-spacing: 2px;
  font-size: 12px;
}
</style>
