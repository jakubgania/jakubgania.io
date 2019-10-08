<template>
  <v-row class="content-container">
    <template v-if="!error">
      <subpage-title-section-component :title="title + name" :fontSize="28" />

      <v-col v-for="item in data" :key="item.id" lg="12" style="padding: 0;">
        <div class="shortcut-item-section">
          <div class="shortcut-keys">
            <v-icon v-if="item.icon">mdi-windows</v-icon> {{ item.shortcut }}
          </div>
          <div class="shortcut-description">
            {{ item.description }}
          </div>
        </div>
      </v-col>
    </template>
    <template v-else>
      <div style="margin-top: 80px;">
        fetch error
      </div>
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
      .get(`http://192.168.0.16:4000/shortcuts/${params.id}.json`)
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
.shortcut-item-section {
  display: flex;
  margin-top: 14px;
}
.shortcut-keys {
  width: 40%;
  background-color: orange;
}
.shortcut-description {
  width: 60%;
  background-color: azure;
}
</style>
