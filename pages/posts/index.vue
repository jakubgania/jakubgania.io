<template>
  <v-row class="content-container">
    <subpage-title-section-component
      :title="title + ' - ' + posts.length"
      :marginTop="titleMarginTop.marginTop"
      :fontSize="titleMarginTop.fontSize"
    />

    <subpage-description-section-component :description="description" />

    <template v-if="posts.length">
      <v-col
        v-for="item in posts.reverse()"
        :key="item.id"
        cols="12"
        lg="12"
        xs="12"
        class="post-link-item"
      >
        <nuxt-link :to="item.url" class="post-link">
          <div class="post-main-title">
            <div class="post-title">
              {{ item.title }}
            </div>
          </div>
          <div class="creation-date">
            {{ item.creationDate }}
          </div>
        </nuxt-link>
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
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: 'Posty',
      description:
        'Na tej stronie będzie lista postów/wpisów. Obecnie jest tutaj testowo jeden odnośnik. Funkcjonalność nie działa jeszcze w płeni stabilnie i wymaga dopracowania dlatego system postów może działać jeszcze niepoprawnie.',
      posts: [
        {
          title: 'Start',
          url: '/posts/1',
          creationDate: '23:58 29/09/2019'
        },
        {
          title: 'Ciągłe zmiany',
          url: '/posts/2',
          creationDate: '23:08 10/10/2019'
        }
      ]
    }
  },
  computed: {
    titleMarginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { marginTop: 30, fontSize: 22 }
        default:
          return { marginTop: 120, fontSize: 28 }
      }
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
          content: 'posty, wpisy, notatki, blog'
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
.post-link-item {
  background-color: white;
  margin-top: 10px;
}
.post-link {
  text-decoration: none;
  color: black;
}
.post-main-title {
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 2px;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
}
.post-main-title:hover {
  color: #3399ff;
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
  padding-left: 10px;
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
