const fs = require('fs');
const path = require("path");

/* Obtenemos los datos de la categoría*/
let categoryData = path.join(__dirname + "../../../data/category.json")
let categoryFile = fs.readFileSync(categoryData, 'utf-8');
let categoryArray = JSON.parse(categoryFile);

/* Obtenemos los datos de la sección*/
let sectionData = path.join(__dirname + "../../../data/section.json")
let sectionFile = fs.readFileSync(sectionData, 'utf-8');
let sectionArray = JSON.parse(sectionFile);

/* Obtenemos los datos del producto*/
let detailData = path.join(__dirname + "../../../data/detail.json")
let detailFile = fs.readFileSync(detailData, 'utf-8');
let detailArray = JSON.parse(detailFile);

const mainController={
    index: (req,res)=>{
        res.render('index', {categoryArray})
    },
    contacto: (req,res)=>{
        res.render('contacto')
    },
    cotizacion: (req,res)=>{
        res.render('solicite-su-cotizacion')
    },
    serviciosProductos: (req,res)=>{
        let categoryId = req.params.categoryId
        let category = {}

        categoryArray.forEach(element => {
            if (element.categoryId == categoryId){
                category = element
            }
        });
        res.render('vista-de-productos-y-servicios', {category, detailArray, sectionArray})
    },
    detail: (req,res)=>{
        let detailId = req.params.id
        let detail = {}

        detailArray.forEach(element => {
            if (element.id == detailId){
                detail = element
            }
        });

        res.render('detalle', {detail})
    }
}

module.exports=mainController;