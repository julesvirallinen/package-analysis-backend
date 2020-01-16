const packagesRouter = require('express').Router()
var fs = require('fs')
var handler = require('../modules/parser')

packagesRouter.get('/sample', (request, response) => {
  try {
    var data = fs.readFileSync('./sample.txt', 'utf8')
    response.json(JSON.parse(data))
  } catch (e) {
    console.log('Error:', e.stack)
  }
})

packagesRouter.post('/parse', (request, response) => {
  const body = request.body
    console.log(handler(body.content + ''))
    response.json(handler(body.content))
})

module.exports = packagesRouter
