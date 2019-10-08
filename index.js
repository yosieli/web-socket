var express = require('express')

// App setup

var app = express()
var server = app.listen(3000, function (){
    console.log('listening on port 3000')
})

//static files
app.use(express.static('public'))