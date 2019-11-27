<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component
      :title="'{ ' + title + ' - ' + images.length + ' }'"
    />

    <subpage-description-section-component :description="description" />

    <v-col cols="12" style="margin-top: 60px;margin-bottom: 100px;">
      <v-row>
        <v-col
          v-for="(item, index) in images"
          :key="item.id"
          cols="4"
          style="padding: 2px;"
        >
          <v-img
            :src="`https://jakubgania.io/data/gallery/thumbnail/${item.id}`"
            @click="setDetailsPhoto(item.id, index)"
            aspect-ratio="1"
            class="image-tile"
          >
            <v-layout
              slot="placeholder"
              align-center
              justify-center
              fill-height
            >
              <v-progress-circular indeterminate color="#0066ff" />
            </v-layout>
            <v-icon class="image-icon">
              mdi-arrow-expand-all
            </v-icon>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
    <!-- <v-col cols="12">
      paging button
    </v-col> -->

    <client-only>
      <v-dialog
        v-if="$vuetify.breakpoint.name != 'xs'"
        v-model="dialogFullSizeImage"
        fullscreen
        hide-overlay
        transition="dialog-transition"
      >
        <v-card>
          <v-toolbar flat>
            <div class="flex-grow-1" />
            <v-btn @click="dialogFullSizeImage = false" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-img
            :src="`https://jakubgania.io/data/gallery/full-size/${fullSizeId}`"
            style="max-width: 1000px;width: auto;height: auto;max-height: 90vh;margin: auto;"
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
        </v-card>
      </v-dialog>
    </client-only>

    <client-only>
      <v-dialog
        v-if="$vuetify.breakpoint.name === 'xs'"
        v-model="dialogFullSizeImage"
        fullscreen
        hide-overlay
        transition="dialog-transition"
      >
        <v-card
          v-touch="{
            left: () => swipe('left'),
            right: () => swipe('right'),
            up: () => swipe('up')
          }"
        >
          <v-toolbar flat>
            <div class="flex-grow-1" />
            <v-btn @click="dialogFullSizeImage = false" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-img
            :src="`https://jakubgania.io/data/gallery/full-size/${fullSizeId}`"
            style="max-width: 1000px;width: auto;height: auto;max-height: 90vh;margin: auto;"
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
        </v-card>
      </v-dialog>
    </client-only>

    <client-only>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        Brak kolejnych zdjęć
        <v-btn @click="snackbar = false" color="pink" text>
          Zamknij
        </v-btn>
      </v-snackbar>
    </client-only>
  </v-row>
</template>

<script>
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
