<template>
  <v-row class="content-container">
    <subpage-title-section-component
      :title="title"
      :margin-top="titleMarginTop.marginTop"
      :font-size="titleMarginTop.fontSize"
    />

    <subpage-description-section-component :description="description" />

    <v-col cols="12" style="padding-left: 0px;">
      <a href="https://github.com/jakubgania?tab=repositories" class="link">
        Pełna lista projektów na platformie Github
      </a>
    </v-col>
    <v-col
      v-for="item in projects"
      :key="item.id"
      cols="12"
      lg="12"
      xs="12"
      class="sctn"
    >
      <nuxt-link :to="`project/` + item.path" class="link">
        <div class="">
          {{ item.title }}
        </div>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
