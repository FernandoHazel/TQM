let express=require('express')
let router =express.Router();

//Router de la aplicación
router.get('/', (req,res)=>{
    res.render('index')
})
router.get('/contacto', (req,res)=>{
    res.render('contacto')
})
router.get('/cotizacion', (req,res)=>{
    res.render('solicite-su-cotizacion')
})

module.exports=router