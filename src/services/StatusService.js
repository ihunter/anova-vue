import Api from './Api'
import store from '@/store'

const id = store.getters.id
const secret = store.getters.secret

export default {
  index () {
    return Api().get(`${id}?secret=${secret}`)
  },
  post (config) {
    return Api().post(`${id}?secret=${secret}`, {
      ...config
    })
  }
}
