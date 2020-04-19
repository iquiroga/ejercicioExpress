let express = require('express');
let fs = require('fs');
let router = express.Router();

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json'));

router.get('/heroes',(req, res) =>{
    res.send(heroes);
});

module.exports = router;