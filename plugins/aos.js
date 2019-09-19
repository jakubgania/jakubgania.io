import AOS from 'aos'

export default ({ app }, inject) => {
  // eslint-disable-next-line
  app.AOS = new AOS.init()
}
