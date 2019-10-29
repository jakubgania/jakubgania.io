import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
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
      ]
    }
  }
}
