<template>
  <v-row class="content-container">
    <template v-if="!error">
      <subpage-title-section-component :title="title + name" />

      <v-col v-for="item in data" :key="item.id" lg="12">
        <div>
          {{ item.shortcut }}
        </div>
      </v-col>
    </template>
    <template v-else>
      <div style="margin-top: 80px;">fetch error</div>
    </template>
  </v-row>
</template>

<script>
import axios from 'axios'
import SubpageTitleSection from '../../components/subpage-title-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: 'Skróty klawiaturowe - ',
      error: false
    }
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://jakubgania.io/shortcuts/${params.id}.json`)
      .then((res) => {
        return {
          id: params.id,
          name: res.data.name,
          data: res.data.items
        }
      })
      .catch(() => {
        return {
          error: true
        }
      })
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
