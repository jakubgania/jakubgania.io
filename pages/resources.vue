<template>
  <v-row class="content-container">
    <subpage-title-section-component
      :title="title"
      :margin-top="titleMarginTop.marginTop"
      :font-size="titleMarginTop.fontSize"
    />

    <subpage-description-section-component :description="description" />

    <v-row no-gutters>
      <v-col lg="12" class="title-category">
        Kategorie
      </v-col>

      <v-col v-for="item in linksData" :key="item.id" lg="12" cols="12">
        <a :href="'#' + item.section_id" style="text-decoration: none;">
          <div class="listing-link">
            {{ item.section_name }}
          </div>
        </a>
      </v-col>

      <v-col v-for="item in linksData" :key="item.id" lg="12" cols="12">
        <div :id="item.section_id" class="link-section-title">
          {{ item.section_name }}
        </div>

        <v-row>
          <v-col
            v-for="(resource, index) in item.resource_addresses"
            :key="resource.id"
            lg="12"
            cols="12"
            class="link-item"
          >
            <div class="">
              <a :href="resource.url" target="_blank" class="link-resource">
                {{
                  resource.title
                    ? index + 1 + '. ' + resource.title
                    : index + 1 + '. ' + resource.url
                }}
              </a>
            </div>
            <div v-if="resource.description">
              <div class="resource-description">
                {{ resource.description }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import SubpageTitleSection from '../components/subpage-title-section'
import SubpageDescriptionSection from '../components/subpage-description-section'
import linksData from '../json/resources-items.json'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: '{ zasoby }',
      description:
        'Na tej stronie zebrane są różne linki do takich stron jak portale technologiczne, blogi, kanały na Youtube, dokumentacje projektów technologicznych. Obecnie materiały są podzielone z grubsza na kategorie ale strona będzie pod tym względem na pewno ciągle modyfikowana. Cały czas znaujduję różne ciekawe artykłu i  ta lista będzie aktualizowana żeby zebrać to wszystko centralnie w jednym miejscu.',
      linksData: linksData.resources_items
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
      title: 'Jakub Gania Software - Zasoby',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Zasoby'
        },
        {
          name: 'keywords',
          content:
            'programy, strony, portale, portale technologiczne, portale programistyczne, dokumentacje, projekty, blogi, artykuły, kanały youtube'
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
.title-category {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 14px;
  letter-spacing: 2px;
}
.listing-link {
  color: #1a8cff;
  letter-spacing: 2px;
  font-size: 14px;
  margin-bottom: 8px;

  &:hover {
    color: #ff6b00;
  }
}
.link-section-title {
  font-size: 20px;
  font-weight: 800;
  padding-top: 20px;
  padding-bottom: 20px;
  letter-spacing: 4px;
  border-top: 1px solid #d9d9d9;
}
.link-resource {
  color: #1a8cff;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.5px;

  &:hover {
    color: #01aca7;
  }
}
.resource-description {
  font-size: 14px;
  padding-top: 4px;
  letter-spacing: 1px;
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .link-section-title {
    font-size: 18px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  .link-item {
    padding-top: 2px;
    padding-bottom: 2px;
  }
}
</style>
