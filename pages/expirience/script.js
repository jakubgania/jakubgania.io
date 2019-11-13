import profileImage from '../../assets/images/profile.jpg'

export default {
  data() {
    return {
      profileImage,
      myDescription:
        'Pasjonują mnie technologie webowe i cały czas poszerzam więdzę w tym zakresie (zarówno z frontendu jak i backendu). Posiadam już pierwsze doświadczenie zawodowe. Poza pracą, stale realizuję swoje projekty oraz uczęszczam na branżowe meetupy. Jestem otwarty na nowe wyzwania. Zachęcam do zapoznania z moim profilem na platformie Github.'
    }
  },
  mounted() {
    console.log(this.data)
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
