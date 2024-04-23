const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

const activoController = require('./controladores/activoController');
const responsableController = require('./controladores/responsableController');
const ubicacionController = require('./controladores/ubicacionController');

app.use(bodyParser.json());

const myMiddleware = (req, res, next) => {
  console.log('Middleware function executed');
  next();
};

app.use(myMiddleware);

app.get('/activos', activoController.obtenerActivos);
app.post('/activos', activoController.agregarActivo);

app.get('/responsables', responsableController.obtenerResponsables);
app.post('/responsables', responsableController.agregarResponsable);

app.get('/ubicaciones', ubicacionController.obtenerUbicaciones);
app.post('/ubicaciones', ubicacionController.agregarUbicacion);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});