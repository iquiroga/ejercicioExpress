let credits = {
    credits: (req, res) =>{
        let creditos = `Colaboradores: Ignacio Quiroga y Facundo Daniel Magra`;
        res.send(creditos);
    }
}

module.exports = credits;