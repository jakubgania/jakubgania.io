<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component :title="title" />

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
        <div
          class="shortcuts-title"
          :class="{ 'shortcuts-title-dark-theme': darkThemeFlag }"
        >
          {{ item.title }}
        </div>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumbs from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'
import shortcutsListItems from '../../json/list-of-shortcuts.json'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: '{ skróty klawiaturowe }',
      description:
        'Lista programów i systemów zebranych w jednym miejscu do których są skróty klawiaturowe w formie wypisanej listy lub odnośników. Skórty klawiaturowe są bardzo pomocne i przydatne, ponieważ przyspieszają pracę i pozwalają zminimalizować odrywanie rąk od klawiatury. Dlatego uważam, że powinno się je opanować w danym programie/systemie do perfekcji.',
      shortcuts: shortcutsListItems.data,
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'skróty klawiaturowe',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/shortcuts'
        }
      ],
      darkThemeFlag: false
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  mounted() {
    this.darkThemeFlag = this.darkTheme
  },
  head() {
    return {
      title: 'Jakub Gania Software | Skróty klawiaturowe',
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

<style lang="scss" scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
.sctn {
  padding: 0;
}
.sctn:hover {
  background-color: #f2f2f2;
  padding-left: 12px;
  transition: padding-left 0.2s ease;

  .shortcuts-title {
    color: #0066ff;
  }
}
.link {
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
}
.shortcuts-title {
  color: #000;
  font-size: 14px;
  letter-spacing: 1px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.shortcuts-title-dark-theme {
  color: #bfbfbf;
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
