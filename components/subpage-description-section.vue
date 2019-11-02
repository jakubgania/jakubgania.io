<template>
  <v-col cols="12" lg="12" xs="12" class="page-description-container">
    <div class="page-description">
      <p>
        {{ description }}
      </p>
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
.page-description-container {
  padding: 0;
}
.page-description {
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>
