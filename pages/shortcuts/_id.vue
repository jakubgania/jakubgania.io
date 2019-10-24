<template>
  <v-row class="content-container">
    <template v-if="!error">
      <subpage-title-section-component
        :title="title + name"
        :margin-top="titleMarginTop.marginTop"
        :font-size="titleMarginTop.fontSize"
      />

      <subpage-description-section-component :description="description" />

      <div class="shortcuts-list">
        <v-col v-for="item in data" :key="item.id" lg="12" style="padding: 0;">
          <div class="title-section">
            {{ item.sectionName }}
          </div>
          <div
            v-for="xdf in item.data"
            :key="xdf.id"
            class="shortcut-item-section"
          >
            <div class="shortcut-keys">
              <v-icon v-if="xdf.icon">mdi-windows</v-icon> {{ xdf.shortcut }}
            </div>
            <div class="shortcut-description">
              {{ xdf.description }}
            </div>
          </div>
        </v-col>
      </div>
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
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      pageTitle: 'Jakub Gania Software',
      title: 'Skróty klawiaturowe - ',
      error: false
    }
  },
  computed: {
    titleMarginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { marginTop: 30, fontSize: 22 }
        default:
          return { marginTop: 120, fontSize: 28 }
      }
    }
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://jakubgania.io/media/data/${params.id}.json`)
      .then((res) => {
        return {
          id: params.id,
          name: res.data.name,
          description: res.data.description,
          data: res.data.items
        }
      })
      .catch(() => {
        return {
          error: true
        }
      })
  },
  head() {
    return {
      title: this.pageTitle + ' - Skróty klawiaturowe - ' + this.name
    }
  }
}
</script>

<style scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 80px;
}
.title-section {
  font-size: 20px;
  letter-spacing: 2px;
  padding-top: 40px;
  padding-bottom: 20px;
  font-weight: 900;
  border-bottom: 1px solid #d9d9d9;
}
.shortcuts-list {
  padding: 0;
  margin-top: 60px;
  width: 100%;
}
.shortcut-item-section {
  display: flex;
  letter-spacing: 1px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid #d9d9d9;
}
.shortcut-item-section:hover {
  background-color: #f0f0f5;
}
.shortcut-keys {
  width: 40%;
  font-weight: 600;
}
.shortcut-description {
  width: 60%;
  padding-left: 10px;
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .shortcut-item-section {
    font-size: 12px;
  }
}
</style>
