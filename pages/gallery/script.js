import axios from 'axios'
import BreadcrumbsComponent from '@/components/breadcrumbs'
import SubpageTitleSectionComponent from '@/components/subpage-title-section'
import SubpageDescriptionSectionComponent from '@/components/subpage-description-section'

export default {
  components: {
    BreadcrumbsComponent,
    SubpageTitleSectionComponent,
    SubpageDescriptionSectionComponent
  },
  data() {
    return {
      title: 'galeria',
      description:
        'W galerii będę czasami  umieszczał jakieś zdjęcia lub grafiki.',
      dialog: false,
      dialogFullSizeImage: false,
      fullSizeId: null,
      index: null,
      swipeDirection: null,
      snackbar: false,
      timeout: 2000,
      items: [
        {
          text: 'menu',
          disabled: false,
          exact: true,
          nuxt: true,
          to: '/menu'
        },
        {
          text: 'galeria',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/gallery'
        }
      ]
    }
  },
  methods: {
    setDetailsPhoto(id, index) {
      this.index = index
      this.fullSizeId = id
      this.dialogFullSizeImage = true
    },
    swipe(direction) {
      if (direction === 'left') {
        this.swipeLeft()
      }

      if (direction === 'right') {
        this.swipeRight()
      }

      if (direction === 'up') {
        this.swipeUp()
      }
    },
    swipeLeft() {
      if (this.index <= this.images.length) {
        this.fullSizeId = this.images[this.index++].id
      } else {
        this.snackbar = true
      }
    },
    swipeRight() {
      if (this.index >= 0) {
        this.fullSizeId = this.images[this.index--].id
      } else {
        this.snackbar = true
      }
    },
    swipeUp() {
      this.dialogFullSizeImage = false
    }
  },
  async asyncData({ params }) {
    try {
      const { data } = await axios.get(
        `https://jakubgania.io/data/gallery/list-of-images.json`
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
      title: 'Jakub Gania Software | Galeria',
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
