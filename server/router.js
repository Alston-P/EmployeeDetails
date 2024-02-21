var express = require('express')
var router = express.Router()
var empController= require('./controller/empController')


router.post('/addemployee',empController.display)

module.exports = router