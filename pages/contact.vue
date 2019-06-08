<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12 lg8 offset-lg2>
      <div class="title-page">
        Kontakt
      </div>
    </v-flex>

    <v-flex xs12 sm12 md12 lg8 offset-lg2>
      <v-chip class="email-tag">
        <v-icon style="margin-right:14px;">
          alternate_email
        </v-icon>
        <a href="mailto:contact@jakubgania.io" class="email-link">contact@jakubgania.io</a>
      </v-chip>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
  @import './assets/scss/contact/lg.scss';
</style>
