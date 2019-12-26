<template>
  <v-row>
    <!-- <breadcrumbs-component /> -->

    <!-- <subpage-title-section-component/> -->
  </v-row>
</template>

<script>
// import axios from 'axios'
import Breadcrumbs from '@/components/breadcrumbs'
import SubpageTileSection from '@/components/subpage-title-section'
import SubpageDescriptionSection from '@/components/subpage-description-section'

export default {
  components: {
    Breadcrumbs,
    SubpageTileSection,
    SubpageDescriptionSection
  },
  data() {
    return {
      title: '',
      items: [
        {
          text: '',
          disabled: false,
          exact: true,
          nuxt: true,
          to: ''
        },
        {
          text: '',
          disabled: true,
          exact: true,
          nuxt: true,
          to: ''
        }
      ]
    }
  },
  head() {
    return {
      title: '',
      meta: [
        {
          hid: '',
          name: '',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          hid: '',
          property: '',
          content: ''
        },
        {
          hid: '',
          property: '',
          content: ''
        },
        {
          hid: '',
          property: '',
          content: ''
        },
        {
          hid: '',
          property: '',
          content: ''
        }
      ]
    }
  }
}
</script>
