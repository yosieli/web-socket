var express = require('express')
var socket = require('socket.io')

// App setup

var app = express()
var server = app.listen(3000, function (){
    console.log('listening on port 3000')
})

//static files
app.use(express.static('public'))

//npm install socket.io --save

//socket setup
var io = socket(server)
 io.on('connection', function(socket){
     console.log('made socket connection',socket.id)
 })