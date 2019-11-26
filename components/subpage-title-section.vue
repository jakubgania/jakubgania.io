<template>
  <v-col cols="12" lg="12" xs="12" style="padding: 0;">
    <h1
      id="subpage-title-component"
      :class="{ 'dark-theme-text': darkTheme }"
      :style="{
        'margin-top': titleMarginTop.marginTop + 'px',
        'font-size': titleMarginTop.fontSize + 'px'
      }"
      class="page-title"
    >
      {{ title }}
    </h1>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    marginTop: {
      type: Number,
      default: 120
    },
    fontSize: {
      type: Number,
      default: 40
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    titleMarginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { marginTop: 10, fontSize: 20 }
        default:
          return { marginTop: 40, fontSize: 28 }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  font-weight: 800;
  border-bottom: 2px solid #000;
  padding-bottom: 14px;
}
.dark-theme-text {
  color: #bfbfbf;
  border-bottom: 2px solid #bfbfbf;
}
</style>
