<template>
  <v-row class="container-index">
    <div class="content-section">
      <div
        data-aos="zoom-in"
        data-aos-dealy="200"
        data-aos-duration="1200"
        data-aos-once="true"
        class="section"
      >
        <div
          :class="{ 'company-name-dark-theme': darkTheme }"
          class="company-name"
        >
          {{ subpageTitle }}
        </div>
        <div class="link-section">
          <nuxt-link to="/menu" class="link">
            <span style="color: #ff0000;">
              this
            </span>
            <span style="color: #000000;">
              .
            </span>
            <span style="color: #0066ff;">
              showMenu
            </span>
            <span style="color: #cc33ff;">
              ()
            </span>
            <span>;</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
