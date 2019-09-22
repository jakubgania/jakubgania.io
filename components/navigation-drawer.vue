<template>
  <v-navigation-drawer
    v-model="showDrawerFlag"
    fixed
    app
    right
    temporary
    width="300"
  >
    <div class="close-icon-section">
      <v-btn
        large
        icon
        class="close-icon-button"
        @click.native="$emit('switchNavigationDrawer')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.path">
        <v-list-item-icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menuItems from '../json/menu.json'

export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: menuItems.menu
    }
  },
  computed: {
    showDrawerFlag: {
      get() {
        return this.drawer
      },
      set(value) {
        this.$emit('updateNavigationDrawerValue', value)
      }
    }
  }
}
</script>

<style scoped>
.close-icon-section {
  text-align: right;
  height: 64px;
  line-height: 64px;
  background-color: aliceblue;
}
.close-icon-button {
  margin-right: 10px;
}
</style>