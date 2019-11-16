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
            </h2>
          </div>
          <div :key="item.id" class="color-line" />
          <template v-for="(itemSection, index2) in item.sectionData">
            <div
              :key="itemSection.id"
              class="section"
              :class="{ 'border-bottom': index2 < item.sectionData.length - 1 }"
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
import script from './script.js'

export default script
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
