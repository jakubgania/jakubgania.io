<template>
  <div class="container-about">
    <div class="content">
      <div class="information-section">
        <v-layout row wrap>
          <v-flex lg4>
            img
          </v-flex>
          <v-flex lg8>
            fullname
          </v-flex>
        </v-layout>
        Information section
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: ''
    }
  },
  head() {
    return {
      title: '',
      meta: [
        {
          hid: '',
          name: '',
          content: ''
        },
        {
          name: '',
          content: ''
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  @import './assets/scss/about/lg.scss';
</style>
