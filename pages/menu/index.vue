<template>
  <v-row style="width: 100%;margin: 0;">
    <div class="top-image" />

    <v-row class="content-container" no-gutters>
      <subpage-title-section-component
        :title="title"
        :margin-top="titleMarginTop.marginTop"
        :font-size="titleMarginTop.fontSize"
      />

      <v-col cols="12" style="margin-top: 20px;letter-spacing: 2px;">
        <span style="color: #4d4dff;font-weight: 600;">
          data
        </span>
        <span style="color: #cc33ff;font-weight: 600;">
          ()
        </span>
        <span style="color: #cc33ff;font-weight: 600;">
          {
        </span>
      </v-col>
      <v-col cols="12" style="letter-spacing: 2px;">
        <span style="color: #6699ff;font-weight: 600;">
          &nbsp;&nbsp;return
        </span>
        <span style="color: #6699ff;font-weight: 600;">
          {
        </span>
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
              <span style="color: #8c8c8c;">
                page:
              </span>
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
              <span style="color: #cc33ff;">
                {
              </span>
            </div>
            <div class="link-text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color: #8c8c8c;">
                page:
              </span>
              {{ "'" + item.title + "'" }}
            </div>
            <div class="link-x">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color: #cc33ff;">
                }
                <span
                  class="comma"
                  :class="{ 'comma-not': index == items.length - 1 }"
                >
                  ,
                </span>
              </span>
            </div>
          </a>
        </template>
      </v-col>

      <v-col cols="12">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style="color: orange;font-weight: 600;">
          ]
        </span>
      </v-col>
      <v-col cols="12">
        <span style="color: #6699ff;font-weight: 600;">
          &nbsp;&nbsp;}
        </span>
      </v-col>
      <v-col cols="12">
        <span style="color: #cc33ff;font-weight: 600;">
          }
        </span>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import script from './script.js'

export default script
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
