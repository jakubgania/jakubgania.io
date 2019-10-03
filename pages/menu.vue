<template>
  <v-row class="content-container" no-gutters>
    <subpage-title-section-component :title="title" />

    <v-col v-for="item in items" :key="item.id" cols="12" class="link-section">
      <template v-if="item.path">
        <nuxt-link :to="item.path" class="link">
          <div class="link-text">
            {{ item.title }}
          </div>
        </nuxt-link>
      </template>
      <template v-if="item.url">
        <a :href="item.url" target="_blank" class="link">
          <div class="link-text">
            {{ item.title }}
          </div>
        </a>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import SubpageTitleSection from '../components/subpage-title-section'
import menuItems from '../json/menu.json'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: 'Menu',
      items: menuItems.menu
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Menu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Menu'
        },
        {
          name: 'keywords',
          content: 'menu'
        }
      ]
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

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
