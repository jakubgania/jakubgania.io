import Breadcrumbs from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'
import linksData from '../../json/resources-items.json'

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
        'Na tej stronie zebrane są różne linki do takich stron jak portale technologiczne, blogi, kanały na Youtube, dokumentacje projektów technologicznych. Obecnie materiały są podzielone z grubsza na kategorie ale strona będzie pod tym względem na pewno ciągle modyfikowana. Cały czas znaujduję różne ciekawe artykłu i  ta lista będzie aktualizowana żeby zebrać to wszystko centralnie w jednym miejscu.',
      linksData: linksData.resources_items,
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
  computed: {
    titleMarginTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return { marginTop: 30, fontSize: 22 }
        default:
          return { marginTop: 120, fontSize: 28 }
      }
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Zasoby',
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
