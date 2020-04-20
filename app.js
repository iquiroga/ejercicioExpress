// Require de Express
const express = require('express');
const ruteo = require('./routes/');

// Ejecución de Express
const app = express();
const port = 3030;

// Levantando el Servidor en el puerto 3030
app.listen(port, () => console.log(`Server running in ${port} port`));

app.get('/', ruteo.main);
app.get('/heroes', ruteo.heroes);
app.get('/heroes/detalle/:id', ruteo.heroesDetalleId);
app.get('/heroes/bio/:id/:ok?', ruteo.heroesDetalleConBio);
app.get('/creditos', ruteo.credits);