<template>
  <v-dialog v-model="alertDialog" width="400" class="rules-dialog" persistent>
    <v-card>
      <v-card-title
        class="subtitle-1 font-weight-black grey lighten-2"
        primary-title
      >
        {{ title }} &nbsp;&nbsp; <span style="color: #f2f2f2">!important;</span>
        <div class="flex-grow-1" />
        <v-icon @click="accept()">mdi-close</v-icon>
      </v-card-title>

      <v-card-text style="padding-top: 15px;letter-spacing: 1px;">
        {{ message }}
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <div class="flex-grow-1" />

        <v-btn small color="primary" text @click="accept()">
          Akceptuję
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import LocalStorage from './../services/local-storage.service.js'

export default {
  data() {
    return {
      alertDialog: false,
      title: 'Polityka prywatności',
      message:
        'Klikając przycisk „Akceptuję” lub zamykając okno przez kliknięcie w znaczek X, zgadzasz się na poniższe warunki. Strona wykorzystuje pliki cookie oraz usługę Google Analytics jedynie w celach statystycznych do analizowania ruchu sieciowego. Wykorzystywany jest również mechanizm local storage do poprawnego działania aplikacji. ',
      localStorageObject: new LocalStorage()
    }
  },
  created() {
    if (this.getConfirm() === true) {
      this.alertDialog = true
    }
  },
  methods: {
    getConfirm() {
      if (process.browser) {
        return this.localStorageObject.checkConfirmationRules()
      }
    },
    accept() {
      if (process.browser) {
        this.localStorageObject.setDataByKey('confirmation', true)
        this.alertDialog = false
      }
    }
  }
}
</script>

<style>
.rules-dialog .v-dialog {
  border-radius: 0px;
}
.rules-dialog .v-sheet {
  border-radius: 0px;
}
</style>
