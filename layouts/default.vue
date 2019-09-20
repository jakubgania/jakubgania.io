<template>
  <v-app>
    <v-content style="padding-top: 0;">
      <toolbar-header-component />

      <v-container fluid style="padding: 0;">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolbarHeaderComponent from '../components/toolbar-header'

export default {
  components: {
    'toolbar-header-component': ToolbarHeaderComponent
  },
  data() {
    return {
      //
    }
  }
}
</script>
