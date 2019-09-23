<template>
  <v-row class="content-container">
    <template v-if="!error">
      <v-col lg="12" style="padding: 0;">
        <div class="page-title">
          {{ pageTitle + ' ' + id }}
        </div>
      </v-col>
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

export default {
  data() {
    return {
      pageTitle: 'Skrt',
      error: false
    }
  },
  asyncData({ params, error }) {
    // import shortcuts from `../json/shortcuts/${params.id}.json`

    // const { data } = await axios.get(
    //   'http://localhost:3000/json/shortcuts/chrome.json'
    // )

    return axios
      .get(`http://127.0.0.1:3000/shortcuts/${params.id}.json`)
      .then((res) => {
        return {
          id: params.id,
          data: res.data.items
        }
      })
      .catch(() => {
        return {
          error: true
        }
      })

    // return { shortcuts: data }
  }
}
</script>

<style scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
.page-title {
  font-size: 40px;
  border-bottom: 2px solid black;
  margin-top: 80px;
  font-weight: 800;
}
</style>
