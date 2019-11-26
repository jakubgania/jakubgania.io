<template>
  <div class="other-posts-section">
    <div class="other-posts-section__container">
      <div class="other-posts-section__title-section">
        Inne posty
      </div>
      <div class="other-posts-section__grid">
        <div
          v-for="post in otherPosts"
          :key="post.id"
          class="other-posts-section__grid-item"
        >
          <div style="margin-bottom: 16px;">
            <span class="other-posts-section__datetime-text">
              {{ post.creationDate }}
            </span>
          </div>
          <nuxt-link
            :to="post.id"
            class="other-posts-section__grid-item--title"
          >
            {{ post.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    otherPosts: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.other-posts-section {
  background-color: #0052cc;

  &__container {
    max-width: 1200px;
    margin: auto;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-bottom: -80px;
  }

  &__title-section {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    // color: #586069;
    color: #f2f2f2;
    font-size: 20px;
    background-image: linear-gradient(
      90deg,
      #d1d5da 50%,
      hsla(0, 0%, 100%, 0) 0
    );
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 10px 2px;
    display: inline;
    padding-bottom: 4px;
  }

  &__grid {
    display: flex;
    margin-top: 40px;
  }

  &__grid-item {
    width: 33.33%;
    padding-right: 20px;

    &--title {
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 1.4px;
      color: #f2f2f2;

      &:hover {
        color: #000;
      }
    }
  }

  &__datetime-text {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    font-weight: normal;
    color: #b3b3b3;
  }
}
</style>
