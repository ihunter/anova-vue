const axios = require('axios')

module.exports = {
  async index (req, res, next) {
    try {
      const { status } = (await axios.get('https://api.anovaculinary.com/cookers/anova%20f56-a83cf3cd7b0?secret=np1ht2mjkf')).data
      res.send(status)
    } catch (error) {
      next(error)
    }
  },
  async post (req, res) {
    try {
      const { status } = (await axios.post('https://api.anovaculinary.com/cookers/anova%20f56-a83cf3cd7b0?secret=np1ht2mjkf', req.body)).data
      res.send(status)
    } catch (error) {
      res.sendStatus(404).send({
        error
      })
    }
  }
}
