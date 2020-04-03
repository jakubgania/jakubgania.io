<template>
  <v-row style="width: 100%; margin: 0;">
    <div
      id="top-image"
      class="top-image"
      data-type="parallax"
      data-speed="-2"
    />

    <v-row class="content-container" no-gutters>
      <subpage-title-section-component :title="title" />

      <v-col cols="12" style="margin-top: 20px; letter-spacing: 2px;">
        <span style="color: #4d4dff; font-weight: 600;">
          &nbsp;<span class="number-line">1</span>&nbsp;&nbsp;data
        </span>
        <span style="color: #cc33ff; font-weight: 600;">
          ()
        </span>
        <span style="color: #cc33ff; font-weight: 600;">
          {
        </span>
      </v-col>
      <v-col cols="12" style="letter-spacing: 2px;">
        <span style="color: #6699ff; font-weight: 600;">
          &nbsp;<span class="number-line">2</span>&nbsp;&nbsp;&nbsp;&nbsp;return
        </span>
        <span style="color: #6699ff; font-weight: 600;">
          {
        </span>
      </v-col>
      <v-col cols="12">
        <div style="letter-spacing: 2px; font-weight: 600;">
          &nbsp;<span class="number-line">3</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items:
          <span style="color: orange;">[</span>
        </div>
      </v-col>

      <v-col
        v-for="(item, index) in items"
        :key="item.id"
        cols="12"
        class="link-section"
        style="font-weight: 600;"
      >
        <template v-if="item.path">
          <nuxt-link :to="item.path" class="link">
            <div class="link-x">
              <template v-if="index * 3 + 1 + 3 < 10">
                &nbsp;
              </template>
              <span class="number-line">{{ index * 3 + 1 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="xpo" style="color: #cc33ff;">{</span>
            </div>
            <div class="">
              <template v-if="index * 3 + 2 + 3 < 10">
                &nbsp;
              </template>
              <span class="number-line">{{ index * 3 + 2 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="link-text xpo" style="color: #8c8c8c;">
                page:
              </span>
              <span
                :key="counter"
                :class="{ 'link-text-dark-theme': darkThemeFlag }"
                class="link-text"
                style="font-family: 'Roboto Mono', monospace;"
              >
                {{ "'" + item.title + "'" }}
              </span>
            </div>
            <div class="link-x">
              <template v-if="index * 3 + 3 + 3 < 10">
                &nbsp;
              </template>
              <span class="number-line">{{ index * 3 + 3 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="xpo" style="color: #cc33ff;">
                } <span class="comma">,</span>
              </span>
            </div>
          </nuxt-link>
        </template>
        <template v-if="item.url">
          <a :href="item.url" target="_blank" class="link">
            <div class="link-x">
              <span class="number-line">{{ index * 3 + 1 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="xpo" style="color: #cc33ff;">
                {
              </span>
            </div>
            <div class="">
              <span class="number-line">{{ index * 3 + 2 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="link-text xpo" style="color: #8c8c8c;">
                page:
              </span>
              <span
                :key="counter"
                :class="{ 'link-text-dark-theme': darkThemeFlag }"
                class="link-text"
              >
                {{ "'" + item.title + "'" }}
              </span>
            </div>
            <div class="link-x">
              <span class="number-line">{{ index * 3 + 3 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="xpo" style="color: #cc33ff;">
                }
                <span
                  :class="{ 'comma-not': index == items.length - 1 }"
                  class="comma"
                >
                  ,
                </span>
              </span>
            </div>
          </a>
        </template>
      </v-col>

      <v-col cols="12">
        <span class="number-line" style="font-weight: 600;">
          43
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style="color: orange; font-weight: 600;">
          ]
        </span>
      </v-col>
      <v-col cols="12">
        <span class="number-line" style="font-weight: 600;">
          44
        </span>
        &nbsp;&nbsp;
        <span style="color: #6699ff; font-weight: 600;">
          &nbsp;&nbsp;&nbsp;}
        </span>
      </v-col>
      <v-col cols="12">
        <span class="number-line" style="font-weight: 600;">
          45
        </span>
        &nbsp;
        <span style="color: #cc33ff; font-weight: 600;">
          }
        </span>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import SubpageTitleSection from '../../components/subpage-title-section'
import menuItems from '../../json/menu.json'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
  },
  data() {
    return {
      title: '{ menu }',
      items: menuItems.menu,
      counter: 0,
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.refresh()
      return this.darkTheme
    },
  },
  methods: {
    refresh() {
      this.counter++
    },
  },
  mounted() {
    const topImageElement = document.querySelector('#top-image')

    window.addEventListener('scroll', function () {
      const yPosition = -(window.pageYOffset / topImageElement.dataset.speed)
      const coordinate = '50% ' + yPosition + 'px'

      document.getElementById('top-image').style.backgroundPosition = coordinate
    })
  },
  head() {
    return {
      title: 'Jakub Gania Software | Menu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Menu - spis stron dostępnych w ramach całej witryny jakubgania.io .',
        },
        {
          name: 'keywords',
          content: 'menu, spis stron, podstrony',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jakub Gania Software | Menu',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/menu',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Menu - spis stron dostępnych w ramach całej witryny jakubgania.io .',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
