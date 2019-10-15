<template>
  <v-row class="container-index">
    <div class="content-section">
      <div
        data-aos="zoom-in"
        data-aos-dealy="200"
        data-aos-duration="1200"
        data-aos-once="true"
        class="section"
      >
        <div class="company-name">
          {{ subpageTitle }}
        </div>
        <div class="link-section">
          <nuxt-link to="/menu" class="link">
            <span style="color: #ff0000;">
              this
            </span>
            <span style="color: #000000;">
              .
            </span>
            <span style="color: #0066ff;">
              showMenu
            </span>
            <span style="color: #cc33ff;">
              ()
            </span>
            <span>;</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      subpageTitle: 'Jakub Gania Software',
      head: {
        description:
          'Jakub Gania Software - Full Stack Web Developer. Vue.js, Vuex, Vuetify, TypeScript, NUXT, HTML, CSS, Node.js, PHP, Laravel, Symfony, Nginx, Docker.',
        keywords:
          'software, developer, it, programmer, coder, www, web, website, frontend, backend, full stack, software engineer, fullstack web developer ,vue.js, vuex, vuetify, typescript, nuxt.js, html, css, node.js, php, laravel, symfony, nginx, apache, server, blog, docker, github'
      }
    }
  },
  head() {
    return {
      title: this.subpageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.head.description
        },
        {
          name: 'keywords',
          content: this.head.keywords
        }
      ]
    }
  }
}
</script>

<style scoped>
.container-index::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../assets/images/background-index.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}
.content-container {
  max-width: 800px;
  width: 100%;
}
.content-section {
  max-width: 1000px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 14px;
}
.section {
  border-top: 2px solid #0066ff;
  border-bottom: 2px solid #0066ff;
  padding-top: 80px;
  padding-bottom: 80px;
}
.company-name {
  font-family: 'Audiowide', cursive;
  font-size: 60px;
  text-align: center;
}
.link-section {
  text-align: center;
  margin-top: 10px;
}
.link {
  text-decoration: none;
  color: #000;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;
}
.link:hover {
  opacity: 0.7;
}

@media only screen and (max-width: 600px) {
  .section {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .company-name {
    font-size: 40px;
  }
}
</style>
