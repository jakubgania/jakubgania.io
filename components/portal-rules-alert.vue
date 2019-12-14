<template>
  <div v-if="alertDialog" class="rules-container">
    <div class="content-section">
      <div class="rules-description-section">
        <div class="title-section">
          {{ title }} <br />
          <span style="color: #f2f2f2">
            !important;
          </span>
        </div>
        <div class="description-section">
          {{ message }}
        </div>
      </div>
      <div class="button-section">
        <button type="button" class="accept-rules-button" @click="accept()">
          akceptuję
        </button>
      </div>
    </div>
  </div>
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
  mounted() {
    if (process.browser && this.getConfirm() === true) {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
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
        document.getElementsByTagName('html')[0].style.overflow = 'auto'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rules-container {
  position: absolute;
  z-index: 89999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.content-section {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  padding: 60px;
  min-height: 280px;
}
.rules-description-section {
  width: 80%;
}
.title-section {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 1px;
  padding-bottom: 20px;

  br {
    display: none;
  }
}
.description-section {
  letter-spacing: 0.5px;
}
.button-section {
  width: 20%;
  text-align: center;
}
.accept-rules-button {
  text-transform: uppercase;
  color: #fff;
  outline: none;
  border-radius: 2px;
  width: 100%;
  max-width: 280px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #000;
  border: 2px solid #000;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 64px;
}
.accept-rules-button:hover {
  color: #000;
  background-color: #fff;
  border: 2px solid #000;
  transition: background-color 0.2s ease;
}

@media only screen and (max-width: 600px) {
  .content-section {
    padding: 22px;
    display: block;
  }
  .rules-description-section {
    width: 100%;
  }
  .title-section {
    font-size: 22px;
    padding-bottom: 12px;

    br {
      display: inline;
    }
  }
  .description-section {
    font-size: 12px;
  }
  .button-section {
    width: 100%;
  }
  .accept-rules-button {
    margin-top: 24px;
    min-width: 100%;
    font-size: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
</style>
