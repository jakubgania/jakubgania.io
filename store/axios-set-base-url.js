import axios from 'axios'

function setBaseUrl() {
  const baseUrlProduction = process.env.API_BASE_URL_PRODUCTION
  const baseUrlDevelopment = process.env.API_BASE_URL_DEVELOPMENT

  if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = baseUrlProduction
  } else {
    axios.defaults.baseURL = baseUrlDevelopment
  }
}

export default { setBaseUrl }
