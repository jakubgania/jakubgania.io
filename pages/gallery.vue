<template>
  <v-row class="content-container">
    <subpage-title-section-component :title="title" />

    <subpage-description-section-component :description="description" />

    <v-col cols="12" style="margin-top: 60px;margin-bottom: 100px;">
      <v-row>
        <v-col
          v-for="item in images"
          :key="item.id"
          cols="4"
          style="padding: 2px;"
        >
          <v-img
            :src="`https://jakubgania.io/media/image/thumbnail/${item.id}`"
            aspect-ratio="1"
            @click="setDetailsPhoto(item.id)"
          >
            <v-layout
              slot="placeholder"
              align-center
              justify-center
              fill-height
            >
              <v-progress-circular indeterminate color="#0066ff" />
            </v-layout>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
    <!-- <v-col cols="12">
      paging button
    </v-col> -->

    <v-dialog
      v-model="dialogFullSizeImage"
      fullscreen
      hide-overlay
      transition="dialog-transition"
    >
      <v-card>
        <v-toolbar flat>
          <div class="flex-grow-1" />
          <v-btn icon @click="dialogFullSizeImage = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-img
          :src="`https://jakubgania.io/media/image/full-size/${fullSizeId}`"
          style="max-width: 1000px;width: auto;height: auto;max-height: 90vh;margin: auto;"
        >
          <v-layout slot="placeholder" align-center justify-center fill-height>
            <v-progress-circular indeterminate color="#0066ff" />
          </v-layout>
        </v-img>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
import SubpageTitleSection from '../components/subpage-title-section'
import SubpageDescriptionSection from '../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: 'Galeria',
      description:
        'W galerii będę czasami  umieszczał jakieś zdjęcia lub grafiki. Obecnie ta sekcja jest jeszcze niegotowa dlatego wyświetla zdjęcia zastępcze.',
      dialog: false,
      dialogFullSizeImage: false,
      fullSizeId: null
    }
  },
  methods: {
    setDetailsPhoto(id) {
      this.fullSizeId = id
      this.dialogFullSizeImage = true
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/media/data/list-of-images.json`
      )

      return {
        images: data.listOfImages
      }
    } catch (error) {
      //
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
  border-bottom: 2px solid #000;
  margin-top: 80px;
  font-weight: 800;
}
</style>
