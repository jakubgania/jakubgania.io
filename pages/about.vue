<template>
  <v-row class="content-container">
    <v-col
      lg="12"
      class="exmp"
      data-aos="fade-down"
      data-aos-dealy="400"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      {{ aboutText }}
    </v-col>
    <v-row style="margin-top: -200px;">
      <v-col
        lg="6"
        class="image-section"
        data-aos="fade-right"
        data-aos-dealy="800"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <img :src="profileImage" alt="" class="profile-image" />
      </v-col>
      <v-col
        lg="6"
        data-aos="fade-up"
        data-aos-dealy="1200"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div>
          <div class="full-name">
            {{ fullname }}
          </div>
          <div class="xmd">
            <span>
              {{ aboutText }}
            </span>
          </div>
          <div style="padding-left: 50px;">
            <div class="description">
              {{ description }}
            </div>
            <div class="icons-section">
              <a :href="link.github" target="_blank" class="icon-link">
                <v-icon class="icon">mdi-github-circle</v-icon>
              </a>
              <a :href="link.linkedin" target="_blank" class="icon-link">
                <v-icon class="icon">mdi-linkedin</v-icon>
              </a>
            </div>
            <div class="contact-button-section">
              <v-btn text small color="blue-grey darken-1">
                kontakt
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import profileImage from '../assets/profile.jpg'

export default {
  data() {
    return {
      profileImage,
      aboutText: 'About',
      fullname: 'Jakub Gania',
      description:
        'Nazywam się Jakub Gania. Mieszkam we Wrocławiu. W 2018 roku uzyskałem tytuł inżyniera informatki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Cały czas się uczę i poszerzam swoją wiedzę w różnych obszarach powiązanych z programowaniem. Moje projekty udostępniam na platformie GitHub. Rozwijam się w kierunku Full Stack Web Developer.',
      link: {
        github: 'https://github.com/jakubgania',
        linkedin: 'https://pl.linkedin.com/in/jakubgania'
      }
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - O mnie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'O mnie'
        },
        {
          name: 'keywords',
          content: 'O mnie'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content-container {
  width: 1200px;
  margin: auto;
  /* background-color: red; */
  position: relative;
  z-index: 0;
}
.exmp {
  text-align: center;
  position: relative;
  z-index: -10;
  font-size: 280px;
  font-weight: 500;
  letter-spacing: 10px;
  color: #f2f2f2;
}
.image-section {
  text-align: center;
}
.profile-image {
  max-width: 80%;
  background-color: blue;
  position: relative;
  z-index: 0;
}
.poi {
  position: relative;
  /* z-index: 0; */
}
.xmd {
  transform: translateX(-48%) rotate(90deg);
  max-width: 220px;
  width: 100%;
  letter-spacing: 10px;
  font-size: 12px;
  font-weight: 800;
  border-bottom: 2px solid #000;
  line-height: 0.01em;
  margin: 10px 0 20px;
  position: absolute;
  top: 200px;
}
.xmd span {
  background-color: #fafafa;
  padding: 0 10px;
  text-transform: uppercase;
}
.full-name {
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 4px;
}
.description {
  font-size: 14px;
  line-height: 1.8;
}
.icons-section {
  margin-top: 20px;
}
.contact-button-section {
  margin-top: 20px;
}
.icon-link {
  text-decoration: none;
}
.icon:hover {
  color: black;
}
</style>
