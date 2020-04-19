let express = require('express');
let router = express.Router();
let fs = require('fs');

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json'));


router.get('/heroes/detalle/:id',(req, res) =>{
    let idHeroe = req.params.id -1;
    const textoRespuesta = `Hola, mi nombre es ${heroes[idHeroe].nombre} y soy ${heroes[idHeroe].profesion}`
	res.send(textoRespuesta);
});

module.exports = router;