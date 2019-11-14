import axios from 'axios'
import profileImage from '../../assets/images/profile.jpg'

export default {
  data() {
    return {
      profileImage
    }
  },
  mounted() {
    // console.log(this.data)
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://jakubgania.io/data/expirience/data.json`)
      .then((res) => {
        console.log(res)
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
          content: 'Doświadczenie, Umiejętności, Edukacja, Certyfikaty'
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
