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
      title: '{ kontakt }',
      description: 'E-mail do kontaktu.',
      email: 'contact@jakubgania.io',
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'kontakt',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/contact'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Kontakt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kontakt'
        },
        {
          name: 'keywords',
          content: 'Kontakt'
        }
      ]
    }
  }
}
