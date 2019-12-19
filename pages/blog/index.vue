<template>
  <v-row :key="counter" class="content-container">
    <breadcrumbs-component :items="items" />

    <subpage-title-section-component
      :title="'{ ' + title + ' - ' + posts.length + ' }'"
    />

    <subpage-description-section-component :description="description" />

    <template v-if="posts.length">
      <v-col
        v-for="item in posts"
        :key="item.id"
        class="post-link-item"
        cols="12"
        lg="12"
        xs="12"
      >
        <nuxt-link
          :to="`/blog/` + item.id"
          :class="{ 'post-link-dark-theme': darkThemeFlag }"
          class="post-link"
        >
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
import { mapGetters } from 'vuex'
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
        'Zapraszam do czytania postów w ramach mojego bloga. Będę tutaj opisywał tematy techniczne jak i różne przemyślenia. Blog jest jeszcze we wczesnej fazie rozwoju także staram się eliminować wszelkie błędy a posty pisać systematycznie. Jest to dla mnie nowe doświadczenie dlatego mogę popełniać błędy, których nie widzę od razu lub nie jestem świadomy. W przypadku wątpliwości lub pytań proszę o kontakt ze mną.',
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
      ],
      counter: 0
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.forceUpdate()
      return this.darkTheme
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/data/blog/list-of-posts.json`
      )

      return {
        posts: data.posts
      }
    } catch (error) {
      //
    }
  },
  methods: {
    forceUpdate() {
      this.counter += 1
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog'
        },
        {
          name: 'keywords',
          content: 'posty, wpisy, notatki, blog'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jakub Gania Software | Blog'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/blog'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Zapraszam do czytania postów w ramach mojego bloga.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png'
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
  margin-bottom: 80px;
}
.post-link-item {
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Roboto Mono', monospace;
}
.post-link {
  text-decoration: none;
  color: #000;
}
.post-link-dark-theme {
  color: #bfbfbf;
}
.post-main-title {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.4px;
  display: flex;
  padding-top: 2px;
  padding-bottom: 4px;
}
.post-main-title:hover {
  color: #0066ff;
}
.post-title {
  font-size: 20px;
}
.creation-date {
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  color: #8c8c8c;
  padding-top: 4px;
}

@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-main-title {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .post-title {
    font-size: 16px;
    padding-left: 0px;
  }
  .creation-date {
    padding-left: 0px;
  }
}
</style>
