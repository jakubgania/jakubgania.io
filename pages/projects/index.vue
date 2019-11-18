<template>
  <v-row style="width: 100%;margin: 0;">
    <div class="top-image-section">
      <div class="top-image">
        <div class="content-section">
          <div
            data-aos="fade-in"
            data-aos-dealy="100"
            data-aos-duration="1200"
            data-aos-once="true"
            class="projects-text"
          >
            [ projekty ]
          </div>
        </div>
        <div class="scroll-down-container">
          <a href="#contentContainer" class="scroll-down-anchor">
            <div class="chevron" />
            <div class="chevron" />
            <div class="chevron" />
          </a>
        </div>
      </div>
    </div>

    <div class="content-container" id="contentContainer">
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
            :key="counter"
            class="project-title"
            :class="{ 'project-title-dark-theme': darkThemeFlag }"
          >
            {{ index + 1 + '. ' + item.title }}
          </div>
        </nuxt-link>
      </v-col>
    </div>
  </v-row>
</template>

<script>
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
