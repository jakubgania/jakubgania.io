<template>
    <div v-if="displayToolbar()">
        <v-toolbar color="white" absolute class="toolbar-header">
			<v-toolbar-title>
				<nuxt-link to="/" class="logo-link">
					Jakub Gania
				</nuxt-link>
			</v-toolbar-title>
			<v-spacer/>
			<v-toolbar-side-icon @click.native="$emit('switchNavigationDrawer')" class="hidden-xl-only hidden-lg-only"/>
			<v-toolbar-items class="hidden-md-and-down">
				<v-btn v-for="page in pages" :key="page.id" :to="page.path" flat class="link-button-section">
					<div class="link-text">
						{{ page.name }}
					</div>
				</v-btn>
			</v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
	data() {
		return {
			pages: [
				{
					name: 'Home',
					path: '/'
				},
				{
					name: 'O mnie',
					path: '/about' 
				},
				{
					name: 'Projekty',
					path: '/projects' 
				},
				{
					name: 'Kontakt',
					path: '/contact' 
				},
				{
					name: 'Shortcuts',
					path: '/shortcuts' 
				},
				{
					name: 'Inne',
					path: '/other-resources' 
				},
				{
					name: 'Zdjęcia',
					path: '/photos' 
				},
				{
					name: 'Github',
					link: 'https://github.com/jakubgania' 
				},
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com/in/jakubgania'
				}
			]
		}
	},
	methods: {
		displayToolbar() {
			return this.$route.name !== 'index'
		}
	},
}
</script>

<style lang="scss">
	@import '../assets/scss/toolbar-header.scss';
</style>