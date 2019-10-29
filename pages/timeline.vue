<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <v-timeline style="margin-top: 80px;">
      <v-timeline-item
        v-for="item in posts"
        :key="item.id"
        small
        fill-dot="true"
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
import SubpageTitleSection from '../components/subpage-title-section'
import SubpageDescriptionSection from '../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: 'Timeline',
      description:
        'Mój timeline - różne wydarzenia z mojego życia oznaczone na osi czasu.',
      posts: [
        {
          date: '00/00/0000',
          title: 'example title',
          description: 'example post description'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
</style>
