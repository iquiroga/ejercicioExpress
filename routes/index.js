const moduleHeroes = require('./heroes');
const moduleMain = require('./main');
const moduleHeroesDetalleId = require('./heroesDetalleId');
const moduleHeroesDetalleConBio = require('./heroesDetalleConBio');

let ruteo = {
    main: moduleMain,
    heroes: moduleHeroes,
    heroesDetalleId : moduleHeroesDetalleId,
    heroesDetalleConBio: moduleHeroesDetalleConBio
}

module.exports = ruteo;