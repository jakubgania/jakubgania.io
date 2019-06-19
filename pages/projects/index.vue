<template>
    <v-layout row wrap>
    <div class="container">
      <v-layout row wrap>
        <v-flex v-for="project in model.projects" :key="project.id" lg12>
          <div class="links-section">
            <nuxt-link :to="'/projects/' + project.path" class="link">
              {{ project.title }}
            </nuxt-link>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData({params}) {
        try {
            let {data} = await axios.get(`http://192.168.0.19:3000/projects-list/all`)

            return {model: data}
        } catch (error) {
            return {model: 'Taki post nie istnieje.', error: true}
        }
    },
    data() {
        return {
            title: 'projekty'
        }
    },
    head() {
        return {
            title: 'JG projekty',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Moje projekty'
                },
                {
                    name: 'keywords',
                    content: 'projects'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/projects/index.scss';
</style>



