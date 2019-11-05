<template>
  <v-row class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component
      :title="'{ ' + title + ' - ' + posts.length + ' }'"
    />

    <subpage-description-section-component :description="description" />

    <template v-if="posts.length">
      <v-col
        v-for="item in posts"
        :key="item.id"
        cols="12"
        lg="12"
        xs="12"
        class="post-link-item"
      >
        <nuxt-link :to="`/blog/` + item.id" class="post-link">
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
import axios from 'axios'
import Breadcrumbs from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: 'posty',
      description:
        'Na tej stronie będzie lista postów/wpisów. Obecnie jest tutaj testowo jeden odnośnik. Funkcjonalność nie działa jeszcze w płeni stabilnie i wymaga dopracowania dlatego system postów może działać jeszcze niepoprawnie.',
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'blog',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/zasoby'
        }
      ]
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/media/data/list-of-posts.json`
      )

      return {
        posts: data.posts
      }
    } catch (error) {
      //
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog'
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
  background-color: #fafafa;
  margin-top: 10px;
}
.post-link {
  text-decoration: none;
  color: #000;
}
.post-main-title {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  display: flex;
  padding-top: 2px;
  padding-bottom: 4px;
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
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-main-title {
    font-size: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .post-title {
    padding-left: 0px;
  }
  .creation-date {
    padding-left: 0px;
  }
}
</style>
