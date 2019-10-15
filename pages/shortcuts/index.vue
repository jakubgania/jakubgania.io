<template>
  <v-row class="content-container">
    <subpage-title-section-component
      :title="title"
      :marginTop="titleMarginTop.marginTop"
      :fontSize="titleMarginTop.fontSize"
    />

    <subpage-description-section-component :description="description" />

    <v-col
      v-for="item in shortcuts"
      :key="item.id"
      cols="12"
      lg="12"
      xs="12"
      class="sctn"
    >
      <nuxt-link :to="`/shortcuts` + item.path" class="link">
        <div class="dfg">
          {{ item.title }}
        </div>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'
import shortcutsListItems from '../../json/list-of-shortcuts.json'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: 'Skróty klawiaturowe',
      description:
        'Lista programów i systemów zebranych w jednym miejscu do których są skróty klawiaturowe w formie wypisanej listy lub odnośników. Skórty klawiaturowe są bardzo pomocne i przydatne, ponieważ przyspieszają pracę i pozwalają zminimalizować odrywanie rąk od klawiatury. Dlatego uważam, że powinno się je opanować w danym programie/systemie do perfekcji.',
      shortcuts: shortcutsListItems.data
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
.sctn {
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}
.sctn:hover {
  background-color: #e6e6e6;
  padding-left: 12px;
  transition: padding-left 0.2s ease;
  color: blue;
}
.link {
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 14px;
  color: black;
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
