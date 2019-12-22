import axios from 'axios'
import { mapGetters } from 'vuex'
import TopSectionContainerComponent from '../../components/top-section-container.vue'

export default {
  components: {
    TopSectionContainerComponent
  },
  computed: {
    ...mapGetters('DarkMode', ['darkTheme']),
    darkThemeFlag() {
      this.counter += 1
      return this.darkTheme
    }
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://jakubgania.io/data/expirience/data.json`)
      .then((res) => {
        return {
          personalData: res.data.expirience.sectionPersonalData,
          fullName: res.data.expirience.sectionPersonalData.fullName,
          description: res.data.expirience.sectionPersonalData.description,
          information: res.data.expirience.information
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
      title: 'Jakub Gania Software | Doświadczenie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Moje doświadczenie, umiejętności oraz certyfikaty. Zbiór informacji o moich osiągnięciach zawodowych, naukowych i używanych przezemnie technologiach.'
        },
        {
          name: 'keywords',
          content:
            'doświadczenie, umiejętności, edukacja, certyfikaty, języki obce, cv'
        }
      ]
    }
  }
}
