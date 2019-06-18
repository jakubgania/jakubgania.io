<template>
    <v-layout row wrap>
        projects subpage
    </v-layout>
</template>

<script>
export default {
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



