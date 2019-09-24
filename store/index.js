import axios from 'axios'

const baseUrlProduction = 'https://api.jakubgania.io'
const baseUrlDevelopment = 'http://localhost/5000'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = baseUrlProduction
} else {
  axios.defaults.baseURL = baseUrlDevelopment
}
