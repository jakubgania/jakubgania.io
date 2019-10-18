import axios from 'axios'

function setBaseUrl() {
  // const baseUrlProduction = process.env.API_BASE_URL_PRODUCTION
  // const baseUrlDevelopment = process.env.API_BASE_URL_DEVELOPMENT

  const baseUrlProduction = 'https://jakubgania.io'
  const baseUrlDevelopment = 'http://192.168.0.23:4000'

  if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = baseUrlProduction
  } else {
    axios.defaults.baseURL = baseUrlDevelopment
  }
}

export default { setBaseUrl }
