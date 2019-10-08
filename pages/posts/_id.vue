<template>
  <v-row class="content-container">
    <template v-if="!error">
      <div class="post-content">
        <subpage-title-section-component
          :title="attributes.title"
          :marginTop="marginTop"
          :fontSize="28"
        />

        <div class="post" v-html="$md.render(model)"></div>
      </div>

      <div class="sidebar">
        <div class="sidebar-menu">
          <div class="sidebar-title">
            ostatnie posty
          </div>
          <div class="sidebar-section">
            brak
          </div>
          <div class="sidebar-section">
            <div v-for="item in social" :key="item.id">
              <a :href="item.url" class="social-link" target="_blank">
                <div class="social-link-text">
                  {{ item.title }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <v-col lg="12">
        <div class="error-message">
          {{ errorMessage }}
        </div>
        <div>
          <nuxt-link to="/posts" class="link">
            Zobacz inne posty
          </nuxt-link>
        </div>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import axios from 'axios'
import frontmatter from 'front-matter'
import SubpageTitleSection from '../../components/subpage-title-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: '',
      error: false,
      ht: 'Jakub Gania Software - Post - ',
      errorMessage: 'Wystąpił błąd pobierania lub taki post nie istnieje',
      marginTop: 0,
      social: [
        {
          title: 'github',
          url: 'https://github.com/jakubgania'
        },
        {
          title: 'linkedin',
          url: 'https://linkedin.com/in/jakubgania/'
        }
      ]
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/media/posts/${params.id}.md`
      )

      const frontmatterData = frontmatter(data)

      return {
        model: data,
        attributes: frontmatterData.attributes
      }
    } catch (error) {
      return {
        model: 'Taki post nie istnieje',
        error: true,
        attributes: {
          title: '',
          description: '',
          keywords: ''
        }
      }
    }
  },
  head() {
    return {
      title: this.ht + this.attributes.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.attributes.description
        },
        {
          name: 'keywords',
          content: this.attributes.keywords
        }
      ]
    }
  }
}
</script>

<style scoped>
.content-container {
  max-width: 1020px;
  width: 100%;
  margin: auto;
  margin-top: 120px;
}
.link {
  text-decoration: none;
  color: #b3b3b3;
}
.link:hover {
  color: #000;
}
.error-message {
  margin-top: 80px;
  color: red;
  font-weight: 800;
}
.post-content {
  max-width: 600px;
  padding: 0;
}
.post {
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.5px;
  line-height: 1.8;
  font-size: 16.8px;
  padding-top: 20px;
}
.sidebar {
  max-width: 400px;
  width: 100%;
  font-family: 'Nunito', sans-serif;
}
div.sidebar-menu {
  top: 60px;
  position: sticky;
  height: auto;
  margin-left: 40px;
  margin-top: 42px;
}
.social-link {
  text-decoration: none;
}
.social-link-text {
  width: 100%;
  letter-spacing: 1px;
  color: black;
  padding-top: 4px;
  padding-bottom: 4px;
}
.social-link-text:hover {
  color: #0066ff;
  padding-left: 12px;
  background-color: #e6e6e6;
  transition: padding-left 0.2s ease;
}
.sidebar-title {
  border-top: 2px solid black;
  padding-top: 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700;
}
.sidebar-section {
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
