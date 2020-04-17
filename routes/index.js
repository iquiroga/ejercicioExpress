const moduleHeroes = require('../routes/heroes');
const moduleMain = require('../routes/main');

let ruteo = {
    heroes: moduleHeroes,
    main: moduleMain
}

module.exports = ruteo;
