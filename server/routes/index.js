const StatusController = require('../controllers/StatusController')

module.exports = (app) => {
  app.get('/api/status', StatusController.index)
  app.post('/api/status', StatusController.post)
}
