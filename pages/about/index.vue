<template>
  <v-row class="content-container">
    <v-col
      :class="{ 'title-text-dark-theme': darkTheme }"
      xs="12"
      sm="12"
      lg="12"
      cols="12"
      class="title-text"
      data-aos="fade-down"
      data-aos-dealy="400"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      {{ aboutText }}
    </v-col>
    <v-row class="section-bottom-title" no-gutters>
      <v-col
        lg="6"
        offset-lg="0"
        md="8"
        offset-md="2"
        sm="12"
        cols="12"
        class="image-section"
        data-aos="fade-right"
        data-aos-dealy="800"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <img :src="profileImage" alt="" class="profile-image" />
      </v-col>
      <v-col
        lg="6"
        offset-lg="0"
        md="6"
        offset-md="3"
        sm="10"
        offset-sm="1"
        cols="12"
        class="information-section"
        data-aos="fade-up"
        data-aos-dealy="1200"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div>
          <h1 :class="{ 'full-name-dark-theme': darkTheme }" class="full-name">
            {{ fullname }}
          </h1>
          <div
            :class="{ 'vertical-section-dark-theme': darkTheme }"
            class="vertical-section"
          >
            <span>
              {{ aboutText }}
            </span>
          </div>
          <div style="padding-left: 50px;">
            <div
              :class="{ 'description-dark-theme': darkTheme }"
              class="description"
            >
              <p>
                {{ description }}
              </p>
            </div>
            <div class="icons-section">
              <a :href="link.github" target="_blank" class="icon-link">
                <v-icon
                  :class="{ 'icon-link-dark-theme': darkTheme }"
                  class="icon"
                >
                  mdi-github-circle
                </v-icon>
              </a>
              <a :href="link.linkedin" target="_blank" class="icon-link">
                <v-icon
                  :class="{ 'icon-link-dark-theme': darkTheme }"
                  class="icon"
                >
                  mdi-linkedin
                </v-icon>
              </a>
              <v-btn
                :color="darkTheme ? 'white' : 'black'"
                text
                small
                class="link-button"
                to="/contac"
              >
                kontakt
              </v-btn>
              <v-btn
                :color="darkTheme ? 'white' : 'black'"
                text
                small
                class="link-button"
                to="/experience"
              >
                doświadczenie
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
