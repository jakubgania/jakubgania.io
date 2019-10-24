<template>
  <v-col cols="12" lg="12" xs="12" style="padding: 0;">
    <div
      class="page-title"
      :class="{ 'dark-theme-text': darkTheme }"
      :style="{ 'margin-top': marginTop + 'px', 'font-size': fontSize + 'px' }"
    >
      {{ title }}
    </div>
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
    ...mapGetters('DarkMode', ['darkTheme'])
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
