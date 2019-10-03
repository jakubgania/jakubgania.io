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
  font-size: 20px;
  margin-top: 10px;
  font-weight: 800;
  border-bottom: 2px solid #000;
}
</style>