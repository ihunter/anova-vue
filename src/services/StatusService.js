import Api from './Api'

export default {
  index () {
    return Api().get('/api/status')
  },
  post (config) {
    console.log(config)
    return Api().post('/api/status', config)
  }
}
