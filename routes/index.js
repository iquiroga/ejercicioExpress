const moduleHeroes = require('./heroes');
const moduleMain = require('./main');
const moduleHeroesDetalleId = require('./heroesDetalleId');
const moduleHeroesDetalleConBio = require('./heroesDetalleConBio');
const moduleCredits = require('./credits');
let ruteo = {
    main: moduleMain,
    heroes: moduleHeroes,
    heroesDetalleId : moduleHeroesDetalleId,
    heroesDetalleConBio: moduleHeroesDetalleConBio,
    credits: moduleCredits
}

module.exports = ruteo;