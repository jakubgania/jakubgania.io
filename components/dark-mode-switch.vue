<template>
  <v-switch v-model="switchDarkModeModel" color="#0066ff" flat>
    <template v-slot:label>
      <span class="switch-label">
        Tryb ciemny
      </span>
    </template>
  </v-switch>
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
        this.$vuetify.theme.dark = value
        this.$store.dispatch('DarkMode/toogleDarkThemeValue')
      }
    }
  },
  created() {
    console.log(this.switchDarkModeModel)
    this.$vuetify.theme.dark = this.switchDarkModeModel
  }
}
</script>

<style lang="scss" scoped>
.switch-label {
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
