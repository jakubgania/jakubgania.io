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
      <template v-for="item in items">
        <v-list-item v-if="item.path" :key="item.title" :to="item.path">
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="item.url" :key="item.title" :href="item.url">
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
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
