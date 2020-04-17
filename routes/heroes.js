let express = require('express');
let fs = require('fs');
let router = express.Router();

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json'));

heroesForEach = 


router.get('/heroes',(req, res) =>{
    res.send(heroes.forEach(heroe =>{
        retornar += `${heroe.id}`;        
    }));
    return retornar;
    console.log(retornar);
    
});

console.log();


module.exports = router;