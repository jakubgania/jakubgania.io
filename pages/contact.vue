<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <v-col lg="12">
      <div class="email">
        {{ email }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
import SubpageTitleSection from '../components/subpage-title-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: 'Kontakt',
      email: 'contact@jakubgania.io'
    }
  },
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
.email {
  padding-top: 80px;
  text-align: center;
  color: black;
  letter-spacing: 2px;
  font-size: 12px;
}
</style>
