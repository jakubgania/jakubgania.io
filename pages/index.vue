<template>
  <div class="flex-center position-ref full-height container-index">
    <div class="content">
      <div class="main-title">
        {{ mainTitle }}
      </div>
      <div class="my-name">
        {{ myName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainTitle: 'Full Stack Web Developer',
      myName: 'Jakub Gania'
    }
  }
}
</script>

<style lang="sass" scoped>
  @import './assets/scss/index/lg.scss';
</style>
