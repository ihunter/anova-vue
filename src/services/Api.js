import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://api.anovaculinary.com/cookers/`
  })
}
