import SubpageTitleSection from '../../components/subpage-title-section'
import menuItems from '../../json/menu.json'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: '{ menu }',
      items: menuItems.menu
    }
  },
  computed: {
    titleMarginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { marginTop: 30, fontSize: 22 }
        default:
          return { marginTop: 120, fontSize: 30 }
      }
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Menu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Menu - spis stron dostępnych w ramach całej witryny jakubgania.io .'
        },
        {
          name: 'keywords',
          content: 'menu, spis stron, podstrony'
        }
      ]
    }
  }
}
