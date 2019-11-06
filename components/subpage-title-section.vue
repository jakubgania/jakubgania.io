<template>
  <v-col cols="12" lg="12" xs="12" style="padding: 0;">
    <h1
      class="page-title"
      :class="{ 'dark-theme-text': darkTheme }"
      :style="{
        'margin-top': titleMarginTop.marginTop + 'px',
        'font-size': titleMarginTop.fontSize + 'px'
      }"
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
          return { marginTop: 30, fontSize: 22 }
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
}
.dark-theme-text {
  color: #bfbfbf;
  border-bottom: 2px solid #bfbfbf;
}
</style>
