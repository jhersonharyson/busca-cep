const express = require('express')
const router = express.Router()
const Correios = require('node-correios')
const correios = new Correios()

router.post('/', (req, res) => {
    const {
        nCdServico, // 40010 -> Código sedex
        sCepOrigem, // Cep de origrm 03980150
        sCepDestino, // Cep de destino 822200530
        nVlPeso, // 1 -> Valor máximo 1kg
        nCdFormato, // 1 - caixa , 2 - rolo, 3 - envelope
        nVlComprimento, // em cm
        nVlLargura, // em cm 
        nVlDiametro // em cm
    } = req.body

    // {
    //     "nCdServico": "40010",
    //         "sCepOrigem": "03980150",
    //             "sCepDestino": "66085005",
    //                 "nVlPeso": 1,
    //                     "nCdFormato": 1,
    //                         "nVlComprimento": 30,
    //                             "nVlAltura": 5,
    //                                 "nVlLargura": 15,
    //                                     "nVlDiametro": 20
    // }

    correios.calcPreco(req.body, (err, result) => {
        return res.json(result)
    })
})

module.exports = router