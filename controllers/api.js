const packagesRouter = require('express').Router()
var fs = require('fs')

packagesRouter.get('/sample', (request, response) => {
  try {
    var data = fs.readFileSync('./sample.txt', 'utf8')
    response.json(JSON.parse(data))
  } catch (e) {
    console.log('Error:', e.stack)
  }
})

module.exports = packagesRouter
