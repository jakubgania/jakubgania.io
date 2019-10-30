<template>
  <v-row class="content-container">
    <subpage-title-section-component
      :title="title"
      :margin-top="titleMarginTop.marginTop"
      :font-size="titleMarginTop.fontSize"
    />

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
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
