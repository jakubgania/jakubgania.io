<template>
  <div :class="{ 'dark-theme': switchDarkModeModel }">
    <v-switch v-model="switchDarkModeModel" color="#0066ff" flat>
      <template v-slot:label>
        <span
          class="switch-label"
          :class="{ 'dark-theme-text': switchDarkModeModel }"
        >
          Tryb ciemny
        </span>
      </template>
    </v-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchLabel: 'Ciemny motyw'
    }
  },
  computed: {
    switchDarkModeModel: {
      get() {
        return this.$store.state.DarkMode.darkTheme
      },
      set(value) {
        this.$store.dispatch('DarkMode/toogleDarkThemeValue')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dark-theme {
  background-color: #1a1a1a;
}
.dark-theme-text {
  color: #fff;
}
.switch-label {
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
