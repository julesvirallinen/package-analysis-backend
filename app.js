const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json({limit: '200mb'}))



const packagesRouter = require('./controllers/api')
app.use('/api/', packagesRouter)



app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

module.exports = app
