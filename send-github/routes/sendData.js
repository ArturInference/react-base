var express    = require('express')
var router     = express.Router()
var fs         = require('fs')

router.post('/', function(req, res, next) {

  res.send(fs.readFileSync('./dataBase/data.json', 'utf-8'))

})

module.exports = router
