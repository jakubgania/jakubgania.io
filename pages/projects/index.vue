<template>
  <v-row class="content-container">
    <div class="top-image-container">
      <div class="top-image-container__section">
        <div class="top-image-container__content-section">
          <div
            data-aos="fade-in"
            data-aos-dealy="100"
            data-aos-duration="1200"
            data-aos-once="true"
            class="top-image-container__title"
          >
            [ projekty ]
          </div>
        </div>
        <div class="top-image-container__scroll-down-container">
          <a
            href="#list-projects"
            class="top-image-container__scroll-down-anchor"
          >
            <div class="top-image-container__cheveron" />
            <div class="top-image-container__cheveron" />
            <div class="top-image-container__cheveron" />
          </a>
        </div>
      </div>
    </div>

    <div id="list-projects" class="list-projects-container">
      <breadcrumbs-component :items="items" />

      <subpage-title-section-component
        :title="'{ ' + title + ' - ' + projects.length + ' }'"
      />

      <subpage-description-section-component :description="description" />

      <v-col cols="12" style="padding-left: 0px;">
        <img
          :src="GithubContributionsImage"
          style="width: 100%;"
          alt="Jakub Gania - Github contributions"
        />
      </v-col>

      <v-col cols="12" style="padding-left: 0px;">
        <span style="font-size: 14px; letter-spacing: 1px;">
          Pełna lista projektów na platformie
        </span>
        <a :href="githubRepositoriesLink" class="link" style="color: #3385ff;">
          Github
        </a>
      </v-col>
      <v-col cols="12" style="padding-left: 0;">
        <github-button
          href="https://github.com/jakubgania"
          data-size="large"
          data-show-count="true"
          aria-label="Follow @jakubgania on GitHub"
        >
          Follow @jakubgania
        </github-button>
      </v-col>

      <v-col
        v-for="item in projects"
        :key="item.id"
        cols="12"
        lg="12"
        xs="12"
        class="list-projects"
      >
        <nuxt-link :to="`projects/` + item.path" class="list-projects__link">
          <div
            :key="counter"
            :class="{ 'list-projects__title--dark-theme': darkThemeFlag }"
            class="list-projects__title"
          >
            {{ item.title }}
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
