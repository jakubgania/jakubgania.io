<template>
  <v-row class="container-index">
    <div class="content-section">
      <div>
        <div class="section">
          <logo-component :big-font-size="true" :dark-theme="darkTheme" />
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
              <span class="hkk" style="color: #cc33ff;">
                ()
              </span>
              <span class="bgg" style="color: #cc33ff;">
                (click!)
              </span>
              <span>;</span>
            </nuxt-link>
          </div>
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
