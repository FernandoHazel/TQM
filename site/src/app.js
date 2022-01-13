// load the things we need
var express = require('express');
var app = express();
var port = 80
const path = require("path")
const rutaMain =require('./routes/main.js')

// creando una dirección estática
app.use("/", express.static(__dirname+'/../public'))

//Configurar ejs como el template engine de la app
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));



// index page
app.use('/', rutaMain)

//404
app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(port);
console.log(port + ' is the magic port');