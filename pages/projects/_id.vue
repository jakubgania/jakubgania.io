<template>
    <v-layout row wrap>
        <div class="container">
            <v-layout row wrap>
                <!-- project id page {{ model }} -->

                <!-- <div v-html="$md.render(model)" class="" :class="{ 'page-not-found': error }"></div> -->
                <div v-html="$md.render(content)" class="posts-section" :class="{ 'page-not-found': error }"></div>
            </v-layout>
        </div>
    </v-layout>
</template>

<script>
import axios from 'axios'
import markdown from 'markdown-it'
import meta from 'markdown-it-meta'
import frontmatter from 'front-matter'

export default {
    async asyncData({params}) {
        try {
            // let {data} = await axios.get(`http://192.168.0.19:3000/projects/${ params.id }`)
            let {data} = await axios.get(`http://jakubgania.io/test/${ params.id }.md`)

            let frontmatterData = frontmatter(data);


            // return {model: data, error: false}
            return { attributes: frontmatterData.attributes, content: data, error: false }
        } catch (error) {
            return {model: 'Taki post nie istnieje.', error: true}
        }
    },
    data() {
        return {
            
        }
    },
    head() {
        return {
            title: this.attributes.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.attributes.description
                },
                {
                    name: 'keywords',
                    content: this.attributes.keywords
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
    @import '../../assets/scss/projects/id.scss';
</style>

