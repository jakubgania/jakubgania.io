<template>
  <v-row class="content-container">
    <div class="expirience-container">
      <div class="top-section-container">
        <client-only>
          <div v-if="$vuetify.breakpoint.name == 'xs'">
            <div style="display: flex;">
              <div class="img-section">
                <img :src="profileImage" alt="" class="profile-image" />
              </div>
              <div class="full-name">
                {{ sectionPersonalData.fullName }}
              </div>
            </div>
            <div class="two-column">
              <div class="left-column">
                <div
                  v-for="item in sectionPersonalData.additionalInformation
                    .leftColumn"
                  :key="item.id"
                  class="item-section"
                >
                  <span class="personal-data-title-section">
                    {{ item.keyName + ' - ' }} <br />
                  </span>
                  <template v-if="item.href">
                    <a
                      :href="item.href"
                      target="_blank"
                      class="personal-data-link"
                    >
                      {{ item.keyValue }}
                    </a>
                  </template>
                  <template v-else>
                    {{ item.keyValue }}
                  </template>
                </div>
              </div>
              <div class="right-column">
                <div
                  v-for="item in sectionPersonalData.additionalInformation
                    .rightColumn"
                  :key="item.id"
                  class="item-section"
                >
                  <span class="personal-data-title-section">
                    {{ item.keyName + ' - ' }} <br />
                  </span>
                  <template v-if="item.href">
                    <a
                      :href="item.href"
                      target="_blank"
                      class="personal-data-link"
                    >
                      {{ item.keyValue }}
                    </a>
                  </template>
                  <template v-else>
                    {{ item.keyValue }}
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div v-if="$vuetify.breakpoint.name !== 'xs'" class="top-section">
            <div class="img-section">
              <img :src="profileImage" alt="" class="profile-image" />
            </div>
            <div class="personal-data-section">
              <div class="full-name">
                {{ sectionPersonalData.fullName }}
              </div>
              <div class="two-column">
                <div class="left-column">
                  <div
                    v-for="item in sectionPersonalData.additionalInformation
                      .leftColumn"
                    :key="item.id"
                    class="item-section"
                  >
                    <span class="personal-data-title-section">
                      {{ item.keyName + ' - ' }}
                    </span>
                    <template v-if="item.href">
                      <a
                        :href="item.href"
                        target="_blank"
                        class="personal-data-link"
                      >
                        {{ item.keyValue }}
                      </a>
                    </template>
                    <template v-else>
                      {{ item.keyValue }}
                    </template>
                  </div>
                </div>
                <div class="right-column">
                  <div
                    v-for="item in sectionPersonalData.additionalInformation
                      .rightColumn"
                    :key="item.id"
                    class="item-section"
                  >
                    <span class="personal-data-title-section">
                      {{ item.keyName + ' - ' }}
                    </span>
                    <template v-if="item.href">
                      <a
                        :href="item.href"
                        target="_blank"
                        class="personal-data-link"
                      >
                        {{ item.keyValue }}
                      </a>
                    </template>
                    <template v-else>
                      {{ item.keyValue }}
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </client-only>
      </div>
      <div class="information-section">
        <div class="main-description">
          <div>
            {{ myDescription }}
          </div>
        </div>
        <template v-for="item in data">
          <div :key="item.id" class="head-section">
            <h2 class="head-title">
              {{ item.titleSection }}
            </h2>
          </div>
          <div :key="item.id" class="color-line" />
          <template v-for="(itemSection, index) in item.sectionData">
            <div
              :key="itemSection.id"
              class="section"
              :class="{ 'border-bottom': index < item.sectionData.length - 1 }"
            >
              <div class="title-section">
                <div class="title-text">
                  {{ itemSection.date }}
                </div>
              </div>
              <div class="description-section">
                <div class="title-description-section">
                  {{ itemSection.title }}
                </div>
                <div class="subtitle-description-section">
                  {{ itemSection.subtitle }}
                </div>
                <div class="description" v-html="itemSection.description" />
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
