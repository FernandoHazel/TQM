// load the things we need
var express = require('express');
var app = express();
var port = 3000
const path = require("path")
const rutaMain =require('./routes/main.js')

// creando una dirección estática
app.use("/", express.static(__dirname+'/../public'))

//Configurar ejs como el template engine de la app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


// index page
app.use('/', rutaMain)
/*app.get('/', function(req, res) {
    res.render('index');
});*/

app.listen(port);
console.log(port + ' is the magic port');