<template>
  <v-col cols="12" lg="12" xs="12" style="padding: 0;">
    <div class="page-title" :style="{ 'margin-top': marginTop + 'px' }">
      {{ title }}
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    marginTop: {
      type: Number,
      default: 120
    }
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  font-size: 40px;
  font-weight: 800;
  border-bottom: 2px solid #000;
}
</style>
