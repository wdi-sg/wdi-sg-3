var express = require('express')
var path = require('path')
var logger = require('morgan')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
// change package.json scripts

var Candy = require('./models/Candy')
let test = new Candy({
  name: 'Candy',
  color: 'Red'
})
test.save(function (error, candy) {
  console.log('created!', test)
})

var routes = require('./config/routes')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)
app.get('/candies', function getAll (req, res) {
  //
})

app.listen(port)
