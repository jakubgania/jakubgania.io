import { mapGetters } from 'vuex'
import profileImage from '../../assets/images/profile.jpg'

export default {
  data() {
    return {
      profileImage,
      aboutText: 'About',
      fullname: 'Jakub Gania',
      description:
        'Nazywam się Jakub Gania. Mieszkam we Wrocławiu. W 2018 roku uzyskałem tytuł inżyniera informatki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Cały czas się uczę i poszerzam swoją wiedzę w różnych obszarach powiązanych z programowaniem. Moje projekty udostępniam na platformie GitHub. Rozwijam się w kierunku Full Stack Web Developer.',
      link: {
        github: 'https://github.com/jakubgania',
        linkedin: 'https://pl.linkedin.com/in/jakubgania'
      },
      counter: 0
    }
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.counter += 1
      return this.darkTheme
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | O mnie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kilka zdań o mnie.'
        },
        {
          name: 'keywords',
          content: 'o mnie, opis'
        }
      ]
    }
  }
}
