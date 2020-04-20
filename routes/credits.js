const express = require('express');
const router = express.Router();
const creditsController = require('../controllers/creditsController');

router.get('/creditos', creditsController.credits);

module.exports = router;