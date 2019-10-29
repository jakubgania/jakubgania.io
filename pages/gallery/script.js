import axios from 'axios'
import SubpageTitleSection from '../../components/subpage-title-section'
import SubpageDescriptionSection from '../../components/subpage-description-section'

export default {
  components: {
    'subpage-title-section-component': SubpageTitleSection,
    'subpage-description-section-component': SubpageDescriptionSection
  },
  data() {
    return {
      title: '{ galeria }',
      description:
        'W galerii będę czasami  umieszczał jakieś zdjęcia lub grafiki. Obecnie ta sekcja jest jeszcze niegotowa dlatego wyświetla zdjęcia zastępcze.',
      dialog: false,
      dialogFullSizeImage: false,
      fullSizeId: null
    }
  },
  methods: {
    setDetailsPhoto(id) {
      this.fullSizeId = id
      this.dialogFullSizeImage = true
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
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/media/data/list-of-images.json`
      )

      return {
        images: data.listOfImages
      }
    } catch (error) {
      //
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software - Galeria',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Galeria'
        },
        {
          name: 'keywords',
          content: 'Galeria'
        }
      ]
    }
  }
}
