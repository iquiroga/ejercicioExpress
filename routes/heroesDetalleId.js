const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController')

router.get('/heroes/detalle/:id', heroesController.detalleId)

module.exports = router;