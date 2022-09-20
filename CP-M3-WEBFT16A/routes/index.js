'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;
const model = require('../models/model');

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan


router.get('/families', (req, res) => {  
    return res.status(200).json(model.listFamilies()); 
})

router.post('/families', (req, res) => {
    let {family} = req.body;
    return res.status(200).json(model.addFamily(family))
})

router.get('/characters', (req, res) => {  
    return res.status(200).json(model.listCharacter()); 
})

router.post('/characters', (req, res) => {
    let {name,age,family} = req.body;
    if (!model.listFamilies().includes(family)) {
    return res.status(400).json({ msg: 'La familia ingresada no existe' }) }
    return res.status(200).json(model.addCharacter(name, age, family))
    

})

router.get('/characters/:name', (req, res) => {  // le faltaba el "/"
    let {name} = req.params;
    let {pluck} = req.query
    if (!model.listFamilies().includes(name)) return res.json([]);
    if (pluck) res.json(model.listCharacter(name,pluck));
    res.json(model.listCharacter(name));
    
})


router.get('/quotes', (req, res) => {
    let {name} =req.body
    res.json(model.showQuotes(name))

})

router.post('/quotes', (req, res) => {
    let{name,quote} = req.body
   model.addQuote(name, {text:quote})
   res.status(200).json({ msg: "Frase agregada correctamente" })
   
})