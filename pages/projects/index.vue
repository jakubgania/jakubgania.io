<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component
      :title="'{ ' + title + ' - ' + projects.length + ' }'"
    />

    <subpage-description-section-component :description="description" />

    <v-col cols="12" style="padding-left: 0px;">
      <span style="font-size: 14px;letter-spacing: 1px;">
        Pełna lista projektów na platformie
      </span>
      <a :href="githubRepositoriesLink" class="link" style="color: #3385ff;">
        Github
      </a>
    </v-col>
    <v-col
      v-for="(item, index) in projects"
      :key="item.id"
      cols="12"
      lg="12"
      xs="12"
      class="sctn"
    >
      <nuxt-link :to="`projects/` + item.path" class="link">
        <div
          class="project-title"
          :class="{ 'project-title-dark-theme': darkThemeFlag }"
          :key="counter"
        >
          {{ index + 1 + '. ' + item.title }}
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
