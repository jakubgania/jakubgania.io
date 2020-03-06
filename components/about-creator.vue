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
          social component
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from './../assets/images/profile-min.jpg'

export default {
  data() {
    return {
      profileImage,
      fullname: 'Jakub Gania',
      description:
        'Kiedy tylko przyjdzie mi jakiś temat do głowy to staram się to opisać w formie postu na moim blogu. Zapraszam do zapoznania się z innymi postami oraz całą moją stroną. Staram się być również aktywny na Githubie i tworzyć różne projekty.'
    }
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
}
.author-image {
  width: 100px;
  // background-color: red;
}
.author-description-section {
  // background-color: blue;
  width: calc(100% - 100px);
}
.author-fullname {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.6px;
}
.author-description {
  font-size: 16px;
}
</style>
