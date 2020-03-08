<template>
  <div class="author-container">
    <div class="author-wrapper">
      <div class="author-image">
        <v-avatar :size="80">
          <img :src="profileImage" alt="Jakub Gania" />
        </v-avatar>
      </div>
      <div class="author-description-section">
        <div class="author-fullname">
          {{ fullname }}
        </div>
        <div class="author-description">
          {{ description }}
        </div>
        <div>
          <social-icons-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import profileImage from './../assets/images/profile-min.jpg'
import SocialIcons from './../components/social-icons'

export default {
  components: {
    'social-icons-component': SocialIcons
  },
  data() {
    return {
      profileImage,
      fullname: 'Jakub Gania',
      description:
        'Kiedy tylko przyjdzie mi jakiś temat do głowy to staram się to opisać w formie postu na moim blogu. Zapraszam do zapoznania się z innymi postami oraz całą moją stroną. Staram się być również aktywny na Githubie i tworzyć różne projekty.'
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme'])
  }
}
</script>

<style lang="scss" scoped>
.author-container {
  max-width: 640px;
  width: 100%;
  margin: auto;
  margin-bottom: 120px;
}
.author-wrapper {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
}
.author-image {
  width: 100px;
}
.author-description-section {
  width: calc(100% - 100px);
}
.author-fullname {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.6px;
}
.author-description {
  font-size: 16px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 600px) {
  .author-wrapper {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
