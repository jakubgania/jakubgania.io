<template>
  <v-col cols="12" lg="12" xs="12" class="page-description-container">
    <div
      class="page-description"
      :class="{ 'page-description-dark-theme': darkTheme }"
    >
      <p>
        {{ description }}
      </p>
    </div>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  },
  created() {
    console.log(this.darkTheme)
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
.page-description-dark-theme {
  color: #bfbfbf;
}
</style>
