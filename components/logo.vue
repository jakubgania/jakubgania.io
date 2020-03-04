<template>
  <div
    :class="{
      'logo--big-font': bigFontSize,
      'logo--normal-font': normalFontSize,
      'logo--dark-theme': darkTheme
    }"
    class="logo"
  >
    {{ logo }}
  </div>
</template>

<script>
export default {
  props: {
    darkTheme: {
      type: Boolean,
      default: false
    },
    bigFontSize: {
      type: Boolean,
      default: false
    },
    normalFontSize: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: 'Jakub Gania Software'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-family: 'MaisonNeueExtended';
  letter-spacing: 0.6px;

  &--big-font {
    font-size: 60px;
  }

  &--normal-font {
    font-size: 22px;
  }

  &--dark-theme {
    color: #fff;
  }
}
@media only screen and (max-width: 960px) {
  .logo {
    &--normal-font {
      font-size: 20px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .logo {
    &--big-font {
      font-size: 36px;
    }

    &--normal-font {
      font-size: 12px;
    }
  }
}
</style>
