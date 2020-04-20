const express = require('express');
const router = express.Router();

router.get('/creditos', (req, res) =>{
    let creditos = `Colaboradores: Ignacio Quiroga y Facundo Daniel Magra`;
    res.send(creditos);
});

module.exports = router;