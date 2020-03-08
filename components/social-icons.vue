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

export default {
  data() {
    return {
      socialLinks: [
        {
          link: 'https://github.com/jakubgania',
          icon: 'mdi-github-circle'
        },
        {
          link: 'https://www.linkedin.com/in/jakubgania/',
          icon: 'mdi-linkedin'
        },
        {
          link: 'https://twitter.com/jakubgania',
          icon: 'mdi-twitter'
        },
        {
          link: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
          icon: 'mdi-youtube'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  }
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

// for toolbar header
// @media only screen and (max-width: 960px) {
//   .social-icon {
//     margin-right: 6px;
//   }
// }
</style>
