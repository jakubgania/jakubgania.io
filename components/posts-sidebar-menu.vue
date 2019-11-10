<template>
  <div class="sidebar">
    <div class="sidebar-menu">
      <div
        class="sidebar-title"
        :class="{ 'sidebar-title-dark-theme': darkThemeFlag }"
      >
        ostatnie posty
      </div>
      <div class="sidebar-section">
        brak
      </div>
      <div v-if="$vuetify.breakpoint.name !== 'xs'" class="sidebar-section">
        <div v-for="item in social" :key="item.id">
          <a :href="item.url" class="social-link" target="_blank">
            <div
              class="social-link-text"
              :class="{ 'social-link-text-dark-theme': darkThemeFlag }"
            >
              {{ item.title }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    darkThemeFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
  }
}
</script>

<style>
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
  margin-top: 138px;
}
.social-link {
  text-decoration: none;
}
.social-link-text {
  width: 100%;
  letter-spacing: 1px;
  color: #000;
  padding-top: 4px;
  padding-bottom: 4px;
}
.social-link-text-dark-theme {
  color: #bfbfbf;
}
.social-link-text:hover {
  color: #0066ff;
  padding-left: 12px;
  background-color: #e6e6e6;
  transition: padding-left 0.2s ease;
}
.social-link-text-dark-theme:hover {
  background-color: #404040;
}
.sidebar-title {
  border-top: 2px solid #000;
  padding-top: 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700;
}
.sidebar-title-dark-theme {
  border-top: 2px solid #bfbfbf;
}
.sidebar-section {
  padding-top: 10px;
  padding-bottom: 20px;
}

@media only screen and (max-width: 600px) {
  .sidebar {
    width: 100%;
  }
  div.sidebar-menu {
    margin-left: auto;
  }
}
</style>
