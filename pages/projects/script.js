import axios from 'axios'
import { mapGetters } from 'vuex'
import Breadcrumbs from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'breadcrumbs-component': Breadcrumbs,
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: 'projekty',
      description:
        'Lista moich projektów z odnośnikami do szczegółowych opisów. Część projektów z poniższej listy nie jest jeszcze rozpoczęta lub jest tylko zaczęta w jakimś niewielkim stopniu. Z czasem będą pojawiać się opisy repozytoriów i projektów. Obecnie strona w przygotowaniu.',
      githubRepositoriesLink: 'https://github.com/jakubgania?tab=repositories',
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'projekty',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/projekty'
        }
      ],
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
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/data/projects/list-of-projects.json`
      )

      return {
        projects: data.projects
      }
    } catch (error) {
      //
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Projekty',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projekty'
        },
        {
          name: 'keywords',
          content: 'Projekty'
        }
      ]
    }
  }
}
