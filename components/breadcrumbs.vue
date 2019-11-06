<template>
  <div id="breadcrumbs">
    <v-breadcrumbs :items="items" divider="/" class="breadcrumbs" />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return {
          text: 'default',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/default'
        }
      }
    }
  }
}
</script>

<style lang="scss">
#breadcrumbs .breadcrumbs {
  padding-left: 0;
  letter-spacing: 1px;
}
.v-application a {
  color: #0066ff;
}
</style>
