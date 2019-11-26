<template>
  <v-col cols="12" lg="12" xs="12" class="page-description-container">
    <div
      :key="counter"
      :class="{ 'page-description-dark-theme': darkThemeFlag }"
      class="page-description"
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
  data() {
    return {
      counter: 0
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.forceUpdate()
      return this.darkTheme
    }
  },
  methods: {
    forceUpdate() {
      this.counter += 1
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
.page-description-dark-theme {
  color: #bfbfbf;
}
</style>
