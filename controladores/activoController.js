
const activoModel = require('/home/omarleal/MyCodeProjects/JavaScript/ServicioRest/modelos/activoModel');

const obtenerActivos = (req, res) => {
    const activos = activoModel.obtenerTodos();
    res.json(activos);
};

const agregarActivo = (req, res) => {
    const nuevoActivo = req.body;
    activoModel.agregar(nuevoActivo);
    res.status(201).send('Activo agregado correctamente');
};

module.exports = {
    obtenerActivos,
    agregarActivo
};

