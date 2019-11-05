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
      title: 'Timeline',
      description:
        'Mój timeline - różne wydarzenia z mojego życia oznaczone na osi czasu. Sekcja w przygotowaniu.',
      posts: [
        {
          date: '00/00/0000',
          title: 'example title',
          description: 'example post description'
        }
      ],
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'timeline',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/timeline'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Timeline',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Timeline - różne wydarzenia z mojego życia oznaczone na osi czasu.'
        },
        {
          name: 'keywords',
          content: 'timeline, oś czasu, historia'
        }
      ]
    }
  }
}
