<template>
  <v-app>
    <v-content>
      <toolbar-header-component @switchNavigationDrawer="switchNavigationDrawer"/>
      <v-container fluid style="padding: 0px;">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolbarHeader from '../components/toolbar-header.vue';
export default {
	components: {
		'toolbar-header-component': ToolbarHeader,
	},
	data() {
		return {
			drawer: false
		}
	},
	methods: {
		switchNavigationDrawer() {
			this.drawer = !this.drawer;
		},
		updateNavigationDrawerValue(value) {
      		this.drawer = value;
    	}
	}
}
</script>
