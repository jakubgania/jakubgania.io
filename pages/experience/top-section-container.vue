<template>
  <div
    class="top-section-container"
    :class="{ 'top-section-container-dark-theme': darkTheme }"
  >
    <div class="top-section">
      <div class="mobile-version">
        <div style="display: flex;">
          <div class="img-section">
            <img :src="profileImage" alt="" class="profile-image" />
          </div>
          <div class="full-name">
            {{ fullName }}
          </div>
        </div>
      </div>
      <div class="img-section desktop-version">
        <img :src="profileImage" alt="" class="profile-image" />
      </div>
      <div class="personal-data-section">
        <div class="full-name desktop-version">
          {{ fullName }}
        </div>
        <div class="two-column">
          <div class="left-column">
            <div
              v-for="item in personalData.additionalInformation.leftColumn"
              :key="item.id"
              class="item-section"
            >
              <span class="personal-data-title-section">
                <v-icon class="personal-data-icon">
                  {{ item.icon }}
                </v-icon>
                {{ item.keyName }}
                <span class="dash">{{ ' - ' }}</span> <br />
              </span>
              <template v-if="item.href">
                <a :href="item.href" target="_blank" class="personal-data-link">
                  {{ item.keyValue }}
                </a>
              </template>
              <template v-else>
                {{ item.keyValue }}
              </template>
            </div>
          </div>
          <div class="right-column">
            <div
              v-for="item in personalData.additionalInformation.rightColumn"
              :key="item.id"
              class="item-section"
            >
              <span class="personal-data-title-section">
                <v-icon class="personal-data-icon">
                  {{ item.icon }}
                </v-icon>
                {{ item.keyName }}
                <span class="dash">{{ ' - ' }}</span> <br />
              </span>
              <template v-if="item.href">
                <a :href="item.href" target="_blank" class="personal-data-link">
                  {{ item.keyValue }}
                </a>
              </template>
              <template v-else>
                {{ item.keyValue }}
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '../../assets/images/profile.jpg'

export default {
  props: {
    fullName: {
      type: String,
      default: ''
    },
    personalData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    darkTheme: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      profileImage,
      counter: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.top-section-container {
  font-family: 'Nunito', sans-serif;
  background-color: #f2f2f2;
  margin-top: 80px;
  margin-bottom: 80px;
  position: relative;
  z-index: 0;
}
.top-section-container-dark-theme {
  background-color: #343b42;
}
.img-section {
  width: 30%;
  margin-bottom: -6px;
}
.profile-image {
  width: 90%;
}
.full-name {
  font-size: 44px;
  text-align: left;
  margin-top: 20px;
}
.two-column {
  display: flex;
  margin-top: 25px;
}
.left-column {
  width: 50%;
}
.right-column {
  width: 50%;
}
.personal-data-section {
  width: 70%;
}
.personal-data-title-section {
  font-weight: 600;
  letter-spacing: 0.5px;

  br {
    display: none;
  }
}
.personal-data-link {
  text-decoration: none;
}
.personal-data-icon {
  font-size: 20px;
  margin-top: -4px;
  padding-right: 10px;
}
.top-section {
  display: flex;
}
.mobile-version {
  display: none;
}
.desktop-version {
  display: inline-block;
}
.dash {
  display: inline;
}
.item-section {
  padding-bottom: 14px;
  font-size: 14px;
}

@media only screen and (max-width: 600px) {
  .top-section-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .img-section {
    width: 34%;
  }
  .profile-image {
    width: 100%;
  }
  .full-name {
    width: 66%;
    font-size: 8vw;
    padding-left: 12px;
    text-align: center;
  }
  .top-section-container {
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .two-column {
    padding-bottom: 14px;
  }
  .mobile-version {
    display: inline;
  }
  .desktop-version {
    display: none;
  }
  .top-section {
    display: inline;
  }
  .personal-data-section {
    width: 100%;
  }
  .dash {
    display: none;
  }
  .personal-data-title-section {
    br {
      display: inline;
    }
  }
}
</style>
