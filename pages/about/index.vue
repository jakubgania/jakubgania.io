<template>
  <v-row class="content-container">
    <v-col
      cols="12"
      lg="12"
      xs="12"
      class="title-text"
      :class="{ 'title-text-dark-theme': darkTheme }"
      data-aos="fade-down"
      data-aos-dealy="400"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      {{ aboutText }}
    </v-col>
    <v-row class="section-bottom-title">
      <v-col
        cols="12"
        lg="6"
        xs="12"
        class="image-section"
        data-aos="fade-right"
        data-aos-dealy="800"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <img :src="profileImage" alt="" class="profile-image" />
      </v-col>
      <v-col
        cols="12"
        lg="6"
        xs="12"
        class="information-section"
        data-aos="fade-up"
        data-aos-dealy="1200"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div>
          <div class="full-name" :class="{ 'full-name-dark-theme': darkTheme }">
            {{ fullname }}
          </div>
          <div class="vertical-section">
            <span>
              {{ aboutText }}
            </span>
          </div>
          <div style="padding-left: 50px;">
            <div
              class="description"
              :class="{ 'description-dark-theme': darkTheme }"
            >
              {{ description }}
            </div>
            <div class="icons-section">
              <a :href="link.github" target="_blank" class="icon-link">
                <v-icon
                  class="icon"
                  :class="{ 'icon-link-dark-theme': darkTheme }"
                >
                  mdi-github-circle
                </v-icon>
              </a>
              <a :href="link.linkedin" target="_blank" class="icon-link">
                <v-icon
                  class="icon"
                  :class="{ 'icon-link-dark-theme': darkTheme }"
                >
                  mdi-linkedin
                </v-icon>
              </a>
              <v-btn
                text
                small
                color="black"
                class="contact-button"
                to="/contact"
              >
                kontakt
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
