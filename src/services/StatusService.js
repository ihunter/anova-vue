import Api from './Api'

export default {
  index () {
    return Api().get('/status')
  },
  post (config) {
    console.log(config)
    return Api().post('/status', config)
  }
}
