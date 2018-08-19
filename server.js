// server.js
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const errorHandler = require('./server/util/errorHandler')

const app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

require('./server/routes')(app)

app.use(errorHandler)

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

const io = require('socket.io')(server)

// socket io
require('./server/sockets')(io)
