import axios from 'axios'

function setBaseUrl() {
  const baseUrlProduction = 'https://api.jakubgania.io'
  const baseUrlDevelopment = 'http://localhost/5000'

  if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = baseUrlProduction
  } else {
    axios.defaults.baseURL = baseUrlDevelopment
  }
}

export default { setBaseUrl }
