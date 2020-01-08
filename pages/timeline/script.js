import axios from 'axios'
import BreadcrumbsComponent from '../../components/breadcrumbs'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    BreadcrumbsComponent,
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: '{ timeline }',
      description:
        'Mój timeline - różne wydarzenia z mojego życia oznaczone na osi czasu. Sekcja w przygotowaniu.',
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
  asyncData({ params, error }) {
    return axios
      .get(`https://jakubgania.io/data/timeline/list-of-timeline-posts.json`)
      .then((res) => {
        return {
          posts: res.data.posts
        }
      })
      .catch(() => {
        return {
          error: true
        }
      })
  },
  head() {
    return {
      title: 'Jakub Gania Software | Timeline',
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
