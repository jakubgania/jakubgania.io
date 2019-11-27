<template>
  <v-row class="content-container">
    <template v-if="!error">
      <breadcrumbs-component :items="items" />

      <subpage-title-section-component :title="title + name" />

      <subpage-description-section-component :description="description" />

      <div lg="12">
        <div style="font-size: 14px;font-weight: 600;letter-spacing: 1px;">
          Source
        </div>
        <template v-if="source">
          <div v-for="item in source" :key="item.id">
            <a :href="item.url" target="_blank" style="text-decoration: none;">
              {{ item.url }}
            </a>
          </div>
        </template>
        <template v-else>
          <div style="font-size: 12px;letter-spacing: 2px;">
            No data
          </div>
        </template>
      </div>

      <div class="shortcuts-list">
        <v-col v-for="item in data" :key="item.id" lg="12" style="padding: 0;">
          <div class="title-section">
            {{ item.sectionName }}
          </div>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr
                  v-for="shrt in item.data"
                  :key="shrt.id"
                  class="shortcut-item-section"
                >
                  <td class="table-shortcut-section">
                    <div class="shortcut-keys">
                      <v-icon v-if="shrt.icon">mdi-windows</v-icon>
                      {{ shrt.shortcut }}
                    </div>
                  </td>
                  <td class="table-description-section">
                    <div class="shortcut-description">
                      {{ shrt.description }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
import Breadcrumbs from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      pageTitle: 'Jakub Gania Software',
      title: 'Skróty klawiaturowe - ',
      error: false,
      items: [
        {
          text: 'skróty klawiaturowe',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/shortcuts'
        }
      ]
    }
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://jakubgania.io/data/shortcuts/${params.id}.json`)
      .then((res) => {
        return {
          id: params.id,
          name: res.data.name,
          description: res.data.description,
          source: res.data.source,
          data: res.data.items
        }
      })
      .catch(() => {
        return {
          error: true
        }
      })
  },
  mounted() {
    this.items.push({
      text: this.name.toLowerCase(),
      disabled: true
    })
  },
  head() {
    return {
      title: this.pageTitle + ' | Skróty klawiaturowe - ' + this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          name: 'keywords',
          content: 'shortcuts'
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
  margin-bottom: 80px;
}
.title-section {
  font-size: 18px;
  letter-spacing: 1px;
  padding-top: 40px;
  padding-bottom: 20px;
  font-weight: 700;
  border-bottom: 1px solid #d9d9d9;
}
.shortcuts-list {
  padding: 0;
  margin-top: 20px;
  width: 100%;
}
.shortcut-item-section {
  letter-spacing: 1px;
  padding-top: 4px;
  padding-bottom: 4px;
}
table tr {
  border-bottom: 1px solid black;
}
.shortcut-item-section:hover {
  background-color: #f0f0f5;
}
.shortcut-keys {
  font-weight: 600;
}
.shortcut-description {
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.table-shortcut-section {
  width: 40%;
}
.table-description-section {
  width: 60%;
}

@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .title-section {
    font-size: 16px;
    letter-spacing: 1px;
  }
  .shortcuts-list {
    margin-top: 10px;
  }
  .shortcut-item-section {
    font-size: 12px;
    letter-spacing: 0.5px;
  }
  .table-shortcut-section {
    padding-left: 0;
    padding-right: 4px;
    width: 50%;
  }
  .table-description-section {
    padding-left: 4px;
    padding-right: 0;
    width: 50%;
  }
  .shortcut-keys {
    font-size: 11px;
  }
  .shortcut-description {
    font-size: 11px;
  }
}
</style>
