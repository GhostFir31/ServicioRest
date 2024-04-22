const express = require('express');
const app = express();

// Importa tus controladores
const activoController = require('./controladores/activoController');
const ubicacionController = require('./controladores/ubicacionController');
const responsableController = require('./controladores/responsableController');

// Define tus rutas
app.use('/activo', activoController);
app.use('/ubicacion', ubicacionController);
app.use('/responsable', responsableController);

// Inicia tu servidor
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));