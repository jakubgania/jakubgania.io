<template>
  <v-layout row wrap>
    <v-flex xs12 sm12 md12 lg8 offset-lg2>
      <div class="title-page">
        {{ titlePage }}
      </div>
    </v-flex>

    <v-flex xs12 sm12 md12 lg8 offset-lg2 style="text-align: center;">
      <v-chip class="email-tag">
        <v-icon style="margin-right:14px;">
          alternate_email
        </v-icon>
        <a :href="mailto" class="email-link">
          {{ email }}
        </a>
      </v-chip>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      titlePage: 'Kontakt',
      email: 'contact@jakubgania.io',
      mailto: 'mailto:contact@jakubgania.io'
    }
  },
  head() {
    return {
      title: 'Jakub Gania - Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jakub Gania - Kontakt'
        },
        {
          name: 'keywords',
          content: 'contact, contact form, message, email'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/scss/contact/lg.scss';
</style>
