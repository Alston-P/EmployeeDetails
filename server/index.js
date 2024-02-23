var express = require('express')
var router = require('./router')
var app = express()
var bodyParser = require('body-parser')
var db= require('./dbconnect')
var cors= require('cors')


app.use(cors)
app.use(bodyParser.json())
app.use('/', router)
app.listen(5010, () => { console.log("connected"); })
