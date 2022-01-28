let express=require('express');
const { serviciosProductos } = require('../controllers/main-controller');
let router =express.Router();
let mainController = require('../controllers/main-controller')
const path = require("path")

//Router de la aplicación
router.get('/', mainController.index)
router.get('/contacto', mainController.contacto)
router.get('/cotizacion', mainController.cotizacion)
router.get('/servicios-productos/:categoryId?', mainController.serviciosProductos)
router.get('/detalle/:id?', mainController.detail)

module.exports=router