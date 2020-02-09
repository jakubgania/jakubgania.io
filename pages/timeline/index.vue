<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <v-timeline style="margin-top: 80px;margin-bottom: 80px;">
      <v-timeline-item
        v-for="item in posts"
        :key="item.id"
        small
        fill-dot
        right
      >
        <template v-slot:opposite>
          <span v-text="item.date"></span>
        </template>
        <div class="py-4" style="">
          <h2 class="headline font-weight-light mb-6 red--text">
            {{ item.title }}
          </h2>
          <div>
            {{ item.description }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-row>
</template>

<script>
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
