<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

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
import SubpageTitleSection from '../../components/subpage-title-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: 'Skróty klawiaturowe',
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
</style>
