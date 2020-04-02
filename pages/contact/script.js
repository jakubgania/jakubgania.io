import { mapGetters } from 'vuex'
import BreadcrumbsComponent from '@/components/breadcrumbs'
import SubpageTitleSectionComponent from '@/components/subpage-title-section'
import SubpageDescriptionSectionComponent from '@/components/subpage-description-section'

export default {
  components: {
    BreadcrumbsComponent,
    SubpageTitleSectionComponent,
    SubpageDescriptionSectionComponent,
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
          to: '/menu',
        },
        {
          text: 'kontakt',
          disabled: true,
          exact: true,
          nuxt: true,
          to: '/contact',
        },
      ],
      counter: 0,
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.forceUpdate()
      return this.darkTheme
    },
  },
  methods: {
    forceUpdate() {
      this.counter += 1
    },
  },
  head() {
    return {
      title: 'Jakub Gania Software | Kontakt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kontakt',
        },
        {
          name: 'keywords',
          content: 'Kontakt',
        },
      ],
    }
  },
}
