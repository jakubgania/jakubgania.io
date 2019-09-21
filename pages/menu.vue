<template>
  <v-row class="content-container" no-gutters>
    <v-col lg="12" style="padding: 0;">
      <div class="page-title">
        Menu
      </div>
    </v-col>
    <v-col lg="12" v-for="item in items" :key="item.id" class="link-section">
      <nuxt-link :to="item.path" class="link">
        <div class="link-text">
          {{ item.title }}
        </div>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import menuItems from '../json/menu.json'

export default {
  data() {
    return {
      items: menuItems.menu
    }
  }
}
</script>

<style scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
.page-title {
  font-size: 40px;
  border-bottom: 2px solid black;
  margin-top: 80px;
  font-weight: 800;
}
.link {
  text-decoration: none;
}
.link-text {
  color: black;
  letter-spacing: 2px;
  font-size: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
}
.link-section:hover {
  background-color: #e6e6e6;
  letter-spacing: 4px;
  padding-left: 12px;
  transition: padding-left 0.2s ease;
}
</style>
