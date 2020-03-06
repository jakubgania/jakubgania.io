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
          <div class="other-posts-section__datetime-section">
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
      <div class="other-posts-section__button-section">
        <nuxt-link to="/blog" class="other-posts-section__button-link">
          wszystkie posty - {{ numberOfPosts }}
        </nuxt-link>
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
    },
    numberOfPosts: {
      type: Number,
      default: 0
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
    flex-wrap: wrap;
    margin-top: 40px;
  }

  &__grid-item {
    width: 25%;
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

  &__datetime-section {
    margin-bottom: 16px;
  }

  &__datetime-text {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    font-weight: bold;
    color: #b3b3b3;
  }

  &__button-section {
    text-align: center;
    margin-top: 60px;
  }

  &__button-link {
    text-decoration: none;
    color: #000;
    letter-spacing: 1px;
    transition: letter-spacing 0.2s ease;
    font-size: 14px;
    font-weight: bold;
    background-color: #fff;
    padding-left: 44px;
    padding-right: 44px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 20px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;

    &:hover {
      letter-spacing: 1.2px;
      transition: letter-spacing 0.2s ease;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .other-posts-section {
    &__title-section {
      margin-left: 20px;
    }

    &__grid-item {
      padding-left: 20px;
      padding-right: 20px;
      width: 50%;
    }
  }
}

@media only screen and (max-width: 960px) {
  .other-posts-section {
    padding-left: 14px;
    padding-right: 14px;

    &__container {
      max-width: 620px;
    }

    &__grid {
      display: inline;
    }

    &__grid-item {
      width: 100%;
      padding-right: 0;
      margin-top: 24px;
    }

    &__datetime-section {
      margin-bottom: 6px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .other-posts-section {
    &__title-section {
      font-size: 16px;
    }

    &__grid-item {
      &--title {
        font-size: 14px;
      }
    }
  }
}
</style>
