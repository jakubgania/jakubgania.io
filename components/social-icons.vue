<template>
  <div>
    <a
      v-for="item in socialLinks"
      :key="item.id"
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
    >
      <v-icon :class="{ 'icon-dark-theme': darkTheme }" class="icon">
        {{ item.icon }}
      </v-icon>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import socialLinksItems from '../json/social-links.json'

export default {
  data() {
    return {
      socialLinks: socialLinksItems.data,
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
  },
}
</script>

<style lang="scss" scoped>
.social-icon {
  margin-right: 10px;
  text-decoration: none;
}
.icon {
  color: #000;

  &:hover {
    transform: scale(1.1);
  }
}
.icon-dark-theme {
  color: #fff;
}
</style>
