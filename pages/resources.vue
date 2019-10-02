<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <v-row>
      <v-col lg="12" class="title-category">
        Kategorie
      </v-col>

      <v-col v-for="item in linksData" :key="item.id" lg="12">
        <a :href="'#' + item.section_id" style="text-decoration: none;">
          <div class="listing-link">
            {{ item.section_name }}
          </div>
        </a>
      </v-col>

      <v-col v-for="item in linksData" :key="item.id" lg="12">
        <div class="link-section-title" :id="item.section_id">
          {{ item.section_name }}
        </div>

        <v-row>
          <v-col
            v-for="(resource, index) in item.resource_addresses"
            :key="resource.id"
            lg="12"
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
import linksData from '../json/resources-items.json'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: 'Zasoby',
      linksData: linksData.resources_items
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
          content: 'Zasoby'
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
  padding-bottom: 24px;
  letter-spacing: 2px;
}
.listing-link {
  color: #1a8cff;
  letter-spacing: 2px;

  &:hover {
    color: #ff6b00;
  }
}
.link-section-title {
  font-size: 20px;
  font-weight: 800;
  padding-top: 20px;
  padding-bottom: 20px;
  letter-spacing: 2px;
  border-top: 1px solid #d9d9d9;
}
.link-resource {
  color: #1a8cff;
  text-decoration: none;

  &:hover {
    color: #01aca7;
  }
}
</style>
