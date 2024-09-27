const express = require('express')
const app = express()

app.get('/loquesea', function(req, res){
    res.send('Clase de Backend')
})

app.get('/', function(req, res){
    res.send('Lo que sea')
})

app.listen(3000)