<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <v-col lg="12">
      Strona w przygotowaniu
    </v-col>
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
      title: 'Komeny i polecenia'
    }
  },
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
</style>
