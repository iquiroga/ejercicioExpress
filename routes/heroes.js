const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController');

router.get('/heroes', heroesController.heroes);

module.exports = router;