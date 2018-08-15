// server.js
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

require('./server/routes')(app)

const port = process.env.PORT || 5000
app.listen(port)

console.log('server started ', port)
