<template>
  <v-dialog v-model="dialog" width="400" class="rules-dialog" persistent>
    <v-card>
      <v-card-title
        class="subtitle-1 font-weight-black grey lighten-2"
        primary-title
      >
        {{ title }}
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
      dialog: true,
      title: 'Polityka prywatności',
      message:
        'Klikając przycisk „Akceptuję” lub zamykając okno przez kliknięcie w znaczek X, zgadzasz się na poniższe warunki. Strona wykorzystuje pliki cookie oraz usługę Google Analytics jedynie w celach statystycznych do analizowania ruchu sieciowego. Wykorzystywany jest również mechanizm local storage do poprawnego działania aplikacji. ',
      localStorageObject: new LocalStorage()
    }
  },
  created() {
    this.dialog = this.localStorageObject.checkConfirmationRules()
  },
  methods: {
    accept() {
      this.localStorageObject.setDataByKey('confirmation', true)
      this.dialog = false
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
