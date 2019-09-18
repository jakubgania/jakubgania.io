<template>
  <v-row class="content-container">
    <v-col lg="12" class="exmp">
      About
    </v-col>
    <v-row style="margin-top: -200px;">
      <v-col lg="6" class="image-section">
        <img :src="profileImage" alt="" class="profile-image" />
      </v-col>
      <v-col lg="6">
        <div>
          <div class="full-name">
            Jakub Gania
          </div>
          <div class="xmd">
            <span>ABOUT</span>
          </div>
          <div style="padding-left: 50px;">
            <div class="description">
              {{ description }}
            </div>
            <div class="icons-section">
              <v-icon>mdi-github-circle</v-icon>
              <v-icon>mdi-linkedin</v-icon>
            </div>
            <div class="contact-button-section">
              contact button
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
      description:
        'Nazywam się Jakub Gania. Mieszkam we Wrocławiu. W 2018 roku uzyskałem tytuł inżyniera informatki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Cały czas się uczę i poszerzam swoją wiedzę w różnych obszarach powiązanych z programowaniem. Moje projekty udostępniam na platformie GitHub. Rozwijam się w kierunku Full Stack Web Developer.'
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
  top: 442px;
}
.xmd span {
  background-color: #fafafa;
  padding: 0 10px;
}
.full-name {
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 2px;
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
</style>
