<template>
  <div>
    <v-breadcrumbs
      :items="items"
      divider="/"
      style="padding-left: 0;letter-spacing: 1px;"
    />
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
