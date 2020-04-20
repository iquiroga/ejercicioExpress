const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController');

router.get('/heroes/bio/:id/:ok?', heroesController.detalleBio);

module.exports = router;