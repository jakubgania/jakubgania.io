<template>
  <v-row class="content-container">
    <subpage-title-section-component
      :title="title"
      :margin-top="titleMarginTop.marginTop"
      :font-size="titleMarginTop.fontSize"
    />

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
      title: '{ komendy i polecenia }',
      description:
        'Na tej stronie będzie lista programów z odnośnikami do opisów komend i poleceń jakie można zastosować w danym programie.'
    }
  },
  computed: {
    titleMarginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { marginTop: 30, fontSize: 22 }
        default:
          return { marginTop: 120, fontSize: 28 }
      }
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

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
