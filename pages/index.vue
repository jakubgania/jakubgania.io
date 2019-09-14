<template>
  <v-row class="container-index">
    <div class="content-section">
      <div class="company-name">
        Jakub Gania Software
      </div>
      <div class="link-section">
        <nuxt-link to="/menu" class="link">
          menu
        </nuxt-link>
      </div>
    </div>
  </v-row>
</template>

<style scoped>
.container-index::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../assets/background-index.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.2;
}
.content-container {
  max-width: 800px;
  width: 100%;
}
.content-section {
  max-width: 800px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10;
  padding: 14px;
}
.company-name {
  font-family: 'Audiowide', cursive;
  font-size: 40px;
  border-bottom: 2px solid #f2f2f2;
  text-align: center;
}
.link-section {
  text-align: center;
  margin-top: 10px;
}
.link {
  text-decoration: none;
  color: #999999;
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
.link:hover {
  color: #0066ff;
}
</style>
