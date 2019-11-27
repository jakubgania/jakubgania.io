<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />
  </v-row>
</template>

<script>
import Breadcrumbs from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: '{ komendy i polecenia }',
      description:
        'Na tej stronie będzie lista programów z odnośnikami do opisów komend i poleceń jakie można zastosować w danym programie.',
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'komendy i polecenia',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/commands'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Komendy i polecenia',
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

@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
