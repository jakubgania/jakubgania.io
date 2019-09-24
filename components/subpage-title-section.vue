<template>
  <v-col lg="12" style="padding: 0;">
    <div class="page-title">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  font-size: 40px;
  margin-top: 80px;
  font-weight: 800;
  border-bottom: 2px solid #000;
}
</style>