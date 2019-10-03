<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />
  </v-row>
</template>

<script>
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: 'Projekty',
      description:
        'Lista moich projektów z odnośnikami do szczegółowych opisów. Obecnie strona w przygotowaniu.'
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
</style>
