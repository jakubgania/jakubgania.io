<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <v-col lg="12" style="padding: 0;">
      <div>
        description
      </div>
    </v-col>
    <v-col cols="12" style="margin-top: 60px;">
      <v-row>
        <v-col v-for="n in 12" :key="n" cols="4" style="padding: 1px;">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            aspect-ratio="1"
          >
            <!-- <v-progress-circular indeterminate color="grey lighten-5" /> -->
          </v-img>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      paging button
    </v-col>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-transition"
    >
      <v-card>
        <v-toolbar flat>
          <div class="flex-grow-1" />
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import SubpageTitleSection from '../components/subpage-title-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: 'Galeria',
      dialog: false
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Galeria',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Galeria'
        },
        {
          name: 'keywords',
          content: 'Galeria'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
.page-title {
  font-size: 40px;
  border-bottom: 2px solid black;
  margin-top: 80px;
  font-weight: 800;
}
</style>
