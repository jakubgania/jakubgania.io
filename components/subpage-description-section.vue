<template>
  <v-col cols="12" lg="12" xs="12" style="padding: 0;">
    <div class="page-description">
      {{ description }}
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page-description {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
