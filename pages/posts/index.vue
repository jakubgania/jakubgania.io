<template>
  <v-row class="content-container">
    <v-col lg="12" style="padding: 0;">
      <div class="page-title">
        Posty
      </div>
    </v-col>
    <template v-if="posts.length">
      <v-col
        v-for="(item, index) in posts"
        :key="item.id"
        lg="12"
        class="post-link-item"
      >
        <a :href="item.url" class="post-link">
          <div class="post-main-title">
            <div>
              {{ posts.length - index + '.' }}
            </div>
            <div class="post-title">
              {{ item.title }}
            </div>
          </div>
          <div class="creation-date">
            {{ item.creationDate }}
          </div>
        </a>
      </v-col>
    </template>
    <template v-else>
      <v-col lg="12">
        <v-alert dense type="info">
          Brak postów
        </v-alert>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'Example post title',
          url: '/posts/232214',
          creationDate: ' 14:06 22/09/2019'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Posty',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Posty'
        },
        {
          name: 'keywords',
          content: 'Posty'
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
.post-link-item {
  background-color: white;
  margin-top: 10px;
}
.post-link-item:hover {
  background-color: #c1f0f0;
}
.post-link {
  text-decoration: none;
  color: black;
}
.post-main-title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  display: flex;
}
.post-title {
  padding-left: 10px;
}
.creation-date {
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  color: #8c8c8c;
  padding-top: 4px;
}
</style>
