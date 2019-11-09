<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <v-col lg="12">
      <div class="email">
        <a
          :key="counter"
          :href="`mailto:${email}`"
          class="email-link"
          :class="{ 'email-link-dark-theme': darkThemeFlag }"
        >
          {{ email }}
        </a>
      </div>
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
