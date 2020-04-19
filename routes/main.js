let express = require('express');
let router = express.Router();

// Ruta Raíz / ➝ Home
router.get('/',(req, res) =>{
    const textoRespuesta = `Ni Superman, Iron Man o La Mujer Maravilla son tan importantes
cómo las y los Heroes de carne y hueso que encontrarás en este sitio.
Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.
Recuerda: ¡nunca pares de creer en ti!.`
	res.send(textoRespuesta);
});

module.exports = router;