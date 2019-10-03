<template>
  <v-row>
    <div class="top-image" />

    <v-row class="content-container" no-gutters>
      <subpage-title-section-component :title="title" />

      <v-col cols="12" style="margin-top: 20px;letter-spacing: 2px;">
        <span style="color: #4d4dff;font-weight: 600;">data</span>
        <span style="color: #cc33ff;font-weight: 600;">()</span>
        <span style="color: #cc33ff;font-weight: 600;">{</span>
      </v-col>
      <v-col cols="12" style="letter-spacing: 2px;">
        <span style="color: #6699ff;font-weight: 600;">&nbsp;&nbsp;return</span>
        <span style="color: #6699ff;font-weight: 600;">{</span>
      </v-col>
      <v-col cols="12">
        <div style="letter-spacing: 2px;font-weight: 600;">
          &nbsp;&nbsp;&nbsp;&nbsp;items: <span style="color: orange;">[</span>
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color: #cc33ff;">{</span>
            </div>
            <div class="link-text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color: #8c8c8c;">page:</span>
              {{ "'" + item.title + "'" }}
            </div>
            <div class="link-x">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color: #cc33ff;">
                } <span class="comma">,</span>
              </span>
            </div>
          </nuxt-link>
        </template>
        <template v-if="item.url">
          <a :href="item.url" target="_blank" class="link">
            <div class="link-x">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color: #cc33ff;">{</span>
            </div>
            <div class="link-text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color: #8c8c8c;">page:</span>
              {{ "'" + item.title + "'" }}
            </div>
            <div class="link-x">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color: #cc33ff;">
                }
                <span class="comma" :class="{ 'comma-not': index == 10 }">
                  ,
                </span>
              </span>
            </div>
          </a>
        </template>
      </v-col>

      <v-col cols="12">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style="color: orange;font-weight: 600;">]</span>
      </v-col>
      <v-col cols="12">
        <span style="color: #6699ff;font-weight: 600;">&nbsp;&nbsp;}</span>
      </v-col>
      <v-col cols="12">
        <span style="color: #cc33ff;font-weight: 600;">}</span>
      </v-col>
    </v-row>
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
      title: '{ menu }',
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

<style lang="scss" scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 100px;
  font-size: 12px;
}
.link {
  text-decoration: none;
}
.link-text {
  color: black;
  letter-spacing: 2px;
  font-size: 12px;
  padding-top: 2px;
  padding-bottom: 2px;
}
.link-x {
  padding: 0;
}
.link-section:hover {
  background-color: #e6e6e6;
  // letter-spacing: 4px;
  padding-left: 12px;
  transition: padding-left 0.2s ease;

  // &.link-x {
  //   letter-spacing: 4px;
  //   padding-left: 12px;
  //   transition: padding-left 0.2s ease;
  // }
}
.comma {
  color: #6699ff;
}
.comma-not {
  display: none;
}
.top-image {
  width: 100%;
  height: 30vw;
  max-height: 940px;
  min-height: 200px;
  background-image: url('../assets/images/background2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* margin: 30px; */
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
