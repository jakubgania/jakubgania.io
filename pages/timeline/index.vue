<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <v-timeline style="margin-top: 80px; margin-bottom: 80px;">
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
          <div v-html="item.description" />
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-row>
</template>

<script>
import axios from 'axios'
import BreadcrumbsComponent from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    BreadcrumbsComponent,
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection,
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://jakubgania.io/data/timeline/list-of-timeline-posts.json`)
      .then((res) => {
        return {
          posts: res.data.posts,
        }
      })
      .catch(() => {
        return {
          error: true,
        }
      })
  },
  data() {
    return {
      title: '{ timeline }',
      description:
        'Mój timeline - różne wydarzenia z mojego życia oznaczone na osi czasu. Sekcja w przygotowaniu.',
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu',
        },
        {
          text: 'timeline',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/timeline',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Timeline',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Timeline - różne wydarzenia z mojego życia oznaczone na osi czasu.',
        },
        {
          name: 'keywords',
          content: 'timeline, oś czasu, historia',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
