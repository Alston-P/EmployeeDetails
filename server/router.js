var express = require('express')
var router = express.Router()
var empController= require('./controller/empController')


router.post('/addemployee',empController.addAEmployee)
router.get('/showemployee',empController.showEmployee)
router.post('/deleteemployee/:id',empController.deleteEmployee)
router.get('/fetchemployee/:id',empController.fetchEmployee)
router.post('/updateemployee',empController.updateEmployee)

module.exports = router