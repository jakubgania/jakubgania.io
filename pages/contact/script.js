import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: '{ kontakt }',
      description: 'E-mail do kontaktu.',
      email: 'contact@jakubgania.io'
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Kontakt',
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
