const express = require('express')
const router = express.Router()
const Correios = require('node-correios')
const correios = new Correios()

router.post('/', (req, res) => {
    console.log(req.body.cep)
    correios.consultaCEP({cep: req.body.cep}, (err, result)=>{
       return res.json(result)
    })
})

module.exports = router