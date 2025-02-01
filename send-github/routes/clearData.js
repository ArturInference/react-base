var express    = require('express')
var router     = express.Router()
var fs         = require('fs')

router.post('/', function(req, res, next) {

  const dataFile = './dataBase/data.json'

  const newData = {
    data: []
  }

  fs.writeFile(dataFile, JSON.stringify(newData), error => {

    if (error) throw error
  
  })

  res.send({'answer': 'данные в базе очищены'})

})

module.exports = router
