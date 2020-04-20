const express = require('express');
const router = express.Router();
const fs = require('fs');

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json'));

router.get('/heroes/bio/:id/:ok?', (req, res) => {
    let idHeroe = req.params.id - 1;
    let okUrl = req.params.ok;
    let printHeroe = heroes[idHeroe];

    if (idHeroe > heroes.length && (okUrl == 'ok' || okUrl != 'ok')) {
        let textoRespuesta = `No encontramos un héroe para mostrarte su biografía`;
        res.send(textoRespuesta);
    } else {
        if (okUrl != 'ok') {
            let textoRespuesta = `Mi nombre es ${printHeroe.nombre}. Lamento que no desees saber más de mí :(`;
            res.send(textoRespuesta);
        } else {
            if ((idHeroe < heroes.length) && (okUrl == 'ok')) {
                let = textoRespuesta = `${printHeroe.resenia}`;
                res.send(textoRespuesta);
            }
        }
    }
    /*switch (idHeroe, okUrl) {
        case idHeroe < heroes.length:
            let respuesta1 = `${printHeroe.resenia}`
            res.send(respuesta1);
        break;
        case okUrl != 'ok':
            let respuesta2 = `Mi nombre es ${printHeroe.nombre}. Lamento que no desees saber más de mí :(`;
            res.send(respuesta2);
        break;

        default:
            let respuesta3 = `${printHeroe.resenia}`;
            res.send(respuesta3);
            console.log(heroes.length);
            console.log(idHeroe);
            console.log(okUrl);
            
    };*/
});

module.exports = router;