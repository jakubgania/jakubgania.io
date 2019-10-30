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
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
