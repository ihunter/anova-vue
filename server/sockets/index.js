const axios = require('axios')

const url = 'https://api.anovaculinary.com/cookers/anova%20f56-a83cf3cd7b0?secret=np1ht2mjkf'

let status = {}

let connections = 0

module.exports = (io) => {
  io.on('connection', function (socket) {
    console.log(`${socket.id}: Connected`)
    connections++
    const update = getUpdate(io, 1000)

    socket.on('disconnect', () => {
      console.log('User disconnected')
      connections--
      if (connections <= 0) {
        clearInterval(update)
      }
    })
  })
}

function getUpdate (io, interval = 1000) {
  if (connections > 1 || connections === 0) return
  return setInterval(() => {
    console.log('GETTING UPDATE', connections)
    axios.get(url)
      .then(data => {
        const statusJSON = JSON.stringify(status)
        const dataJSON = JSON.stringify(data.data)

        if (dataJSON !== statusJSON) {
          io.emit('update', data.data)
          status = data.data
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, interval)
}
