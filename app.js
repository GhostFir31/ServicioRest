const express = require('express');
const app = express();


const activoController = require('./controladores/activoController');


app.use('/activo', activoController);



app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));