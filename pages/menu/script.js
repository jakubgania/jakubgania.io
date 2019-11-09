import { mapGetters } from 'vuex'
import SubpageTitleSection from '../../components/subpage-title-section'
import menuItems from '../../json/menu.json'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection
  },
  data() {
    return {
      title: '{ menu }',
      items: menuItems.menu,
      counter: 0
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.counter += 1
      return this.darkTheme
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Menu',
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
