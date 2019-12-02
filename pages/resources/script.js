import axios from 'axios'
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
      title: '{ zasoby }',
      description:
        'Na tej stronie zebrane są różne linki do takich stron jak portale technologiczne, blogi, kanały na Youtube, dokumentacje projektów technologicznych. Obecnie materiały są podzielone z grubsza na kategorie ale strona będzie pod tym względem na pewno ciągle modyfikowana. Cały czas znajduję różne ciekawe artykłu i ta lista będzie aktualizowana żeby zebrać to wszystko centralnie w jednym miejscu.',
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'zasoby',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/zasoby'
        }
      ]
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/data/resources/resources-items.json`
      )

      return {
        linksData: data.resources_items
      }
    } catch (error) {
      //
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Zasoby',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Zasoby'
        },
        {
          name: 'keywords',
          content:
            'programy, strony, portale, portale technologiczne, portale programistyczne, dokumentacje, projekty, blogi, artykuły, kanały youtube'
        }
      ]
    }
  }
}
