const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))

const packagesRouter = require('./controllers/api')
app.use('/api/', packagesRouter)



app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

module.exports = app
