//cargando los paquetes que necesitamos
const express = require('express');
const path = require("path")
const rutaMain =require('./src/routes/main.js')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./config/config')

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

const app = express();

//creando una dirección estática
app.use(express.static(path.join(__dirname + '/public')))

//morgan nos permite debuguear
app.use(morgan('dev'))

//Body parser hace que el servidor entienda peticiones POST
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//Configurar ejs como el template engine de la app
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')

//Seteamos un puerto para el momento de subir a producción
app.set('port', process.env.PORT || 80)

// index page
if (process.env.NODE_ENV === 'development'){
    app.use('/', rutaMain)
}else{
    app.use('/site/site2/', rutaMain)
}

//404
app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(app.get('port'));
console.log(`${app.get('port')} is the magic port`);
console.log(__dirname); 