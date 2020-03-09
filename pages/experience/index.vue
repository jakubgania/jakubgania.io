<template>
  <v-row class="content-container">
    <div class="expirience-container">
      <div class="top-experionce-text">
        <div
          data-aos="fade-right"
          data-aos-dealy="800"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <span class="bracket">[</span>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-dealy="400"
          data-aos-duration="1200"
          data-aos-once="true"
          style="width: 100%;"
        >
          Experience
        </div>
        <div
          data-aos="fade-left"
          data-aos-dealy="800"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <span class="bracket">]</span>
        </div>
      </div>

      <top-section-container-component
        :full-name="fullName"
        :personal-data="personalData"
        :dark-theme="darkTheme"
      />

      <div class="information-section">
        <div class="main-description">
          <div>
            {{ description }}
          </div>
        </div>
        <template v-for="item in information">
          <div :key="item.id" class="head-section">
            <h2 class="head-title">
              {{ item.titleSection }}
              <v-icon
                v-if="item.titleSectionIcon"
                style="margin-top: -4px;font-size: 36px;margin-left: 10px;"
                :style="darkTheme ? 'color: #fff;' : 'color: #000;'"
              >
                {{ 'mdi-' + item.titleSectionIcon }}
              </v-icon>
            </h2>
          </div>
          <div :key="item.id" class="color-line" />
          <template v-for="(itemSection, index2) in item.sectionData">
            <div
              :key="itemSection.id"
              :class="{ 'border-bottom': index2 < item.sectionData.length - 1 }"
              class="section"
            >
              <div class="title-section">
                <div class="title-text">
                  {{ itemSection.date }}
                </div>
              </div>
              <div class="description-section">
                <div style="margin-bottom: 10px;">
                  <div class="title-description-section">
                    {{ itemSection.title }}
                  </div>
                  <div class="subtitle-description-section">
                    {{ itemSection.subtitle }}
                  </div>
                </div>
                <div class="description" v-html="itemSection.description" />
                <div v-if="itemSection.tags" class="tags-container">
                  <v-chip
                    v-for="tagItem in itemSection.tags"
                    :key="tagItem.id"
                    class="tag-item"
                  >
                    {{ tagItem.title }}
                  </v-chip>
                </div>
                <div v-if="itemSection.icons" class="images-container">
                  <div
                    v-for="imageItem in itemSection.icons"
                    :key="imageItem.id"
                    class="image-tile"
                  >
                    <div class="image-section">
                      <img
                        :src="
                          `https://jakubgania.io/data/expirience/technology-icons/${imageItem.path}`
                        "
                        :alt="imageItem.alt"
                        class="xghp"
                      />
                    </div>
                    <div class="image-description">
                      {{ imageItem.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </v-row>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import TopSectionContainerComponent from '@/components/top-section-container.vue'

export default {
  components: {
    TopSectionContainerComponent
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.refresh()
      return this.darkTheme
    }
  },
  methods: {
    refresh() {
      this.counter += 1
    }
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://jakubgania.io/data/expirience/data.json`)
      .then((res) => {
        return {
          personalData: res.data.expirience.sectionPersonalData,
          fullName: res.data.expirience.sectionPersonalData.fullName,
          description: res.data.expirience.sectionPersonalData.description,
          information: res.data.expirience.information
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
      title: 'Jakub Gania Software | Doświadczenie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Moje doświadczenie, umiejętności oraz certyfikaty. Zbiór informacji o moich osiągnięciach zawodowych, naukowych i używanych przezemnie technologiach.'
        },
        {
          name: 'keywords',
          content:
            'doświadczenie, umiejętności, edukacja, certyfikaty, języki obce, cv'
        }
      ]
    }
  }
}
</script>

<style>
div .section .description p {
  margin-bottom: 2px;
}
div .section .description img {
  width: 100%;
  margin-top: 20px;
}
</style>

<style lang="scss" scoped>
@import 'style.scss';
</style>
