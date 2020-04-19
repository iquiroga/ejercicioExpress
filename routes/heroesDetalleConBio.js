const express = require('express');
const router = express.Router();
const fs = require('fs');

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json'));

router.get('/heroes/bio/:id/:ok?', (req, res) =>{
    let idHeroe = req.params.id-1;
    
    switch (idHeroe) {
        case idHeroe > heroes.length :
            let textoRespuesta = `No encontramos un héroe para mostrarte su biografía`;
            res.send(textoRespuesta);
            break;
        
        default:
            break;
    }

    /*if(idHeroe > heroes.length){
        let textoRespuesta = `No encontramos un héroe para mostrarte su biografía`;
        res.send(textoRespuesta);
    };*/
    
});

module.exports = router;