<template>
  <div class="preloader-fullscreen" :class="{ 'pre-loader': loader }">
    <div class="loader-section">
      <div class="loader">
        <div v-for="n in 9" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: false
    }
  },
  mounted() {
    this.loader = true

    if (process.browser) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      document.getElementsByTagName('body')[0].style.overflow = 'unset'
    }
  }
}
</script>

<style lang="scss" scoped>
.preloder-fullscreen {
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
}
.pre-loader {
  display: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  outline: none;
}
.loader-section {
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 9999999;
}
.loader {
  position: relative;
  display: grid;
  grid-template-columns: 8% 8% 8%;
  grid-gap: 38px;
  width: 100px;
  height: 100px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    background: black;
    transform: scale(0);
    transform-origin: center center;
    animation: loader 2s infinite linear;

    // &:nth-of-type(7) {}

    &:nth-of-type(1),
    &:nth-of-type(5),
    &:nth-of-type(9) {
      animation-delay: 0.4s;
    }

    &:nth-of-type(4),
    &:nth-of-type(8) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(2),
    &:nth-of-type(6) {
      animation-delay: 0.6s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.8s;
    }
  }
}

@keyframes loader {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@media only screen and (max-width: 600px) {
  .loader {
    grid-template-columns: 11% 11% 11%;
    grid-gap: 27px;
    width: 80px;
    height: 80px;
  }
}
</style>
