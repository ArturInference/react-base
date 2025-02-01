var express    = require('express')
var router     = express.Router()
var fs         = require('fs')

router.post('/', function(req, res, next) {

  const { value, type, comment } = req.body
  const dataFile = './dataBase/data.json'

  const line = { value }

  const data = JSON.parse(fs.readFileSync('./dataBase/data.json', 'utf8'))
  const dataArray = data.data

  dataArray.push(value)

  const newData = {
    data: dataArray
  }

  fs.writeFile(dataFile, JSON.stringify(newData), error => {

    if (error) throw error
  
  })

  res.send(line)

})

module.exports = router
