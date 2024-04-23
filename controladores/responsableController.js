const Responsable = require('../modelos/responsableModel');

exports.getResponsable = (req, res) => {
    Responsable.findById(req.params.id, (err, responsable) => {
        if (err) {
            res.status(500).json({ error: 'Error al buscar el responsable' });
        } else {
            res.status(200).json(responsable);
        }
    });
};

exports.postResponsable = (req, res) => {
    const nuevoResponsable = new Responsable({
        idResponsable: req.body.idResponsable,
        numeroEmpleado: req.body.numeroEmpleado,
        nombre: req.body.nombre,
        activosCustodia: req.body.activosCustodia,
        imagenResponsable: req.body.imagenResponsable
    });

    nuevoResponsable.save((err, responsable) => {
        if (err) {
            res.status(500).json({ error: 'Error al crear el responsable' });
        } else {
            res.status(201).json(responsable);
        }
    });
};

