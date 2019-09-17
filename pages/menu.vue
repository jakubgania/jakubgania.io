<template>
  <v-row class="content-container" no-gutters>
    <v-col lg="12" style="padding: 0;">
      <div class="page-title">
        Menu
      </div>
    </v-col>
    <v-col lg="12" v-for="item in links" :key="item.id" class="link-section">
      <nuxt-link :to="item.path" class="link">
        <div class="link-text">
          {{ item.title }}
        </div>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Strona główna',
          path: '/'
        },
        {
          title: 'O mnie',
          path: '/about'
        },
        {
          title: 'Zdjęcia',
          path: '/images'
        },
        {
          title: 'Projekty',
          path: '/projects'
        },
        {
          title: 'Skróty klawiaturowe',
          path: '/shortcuts'
        },
        {
          title: 'Zasoby',
          path: '/resources'
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
  padding: 12px;
}
.link-section:hover {
  background-color: #e6e6e6;
}
</style>
