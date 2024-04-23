const Activo = require('../modelos/activoModel');

exports.getActivo = (req, res) => {
    Activo.find()
        .then(activo => {
            res.status(200).json(activo);
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al obtener los activos",
                error: error
            });
        });
};

exports.postActivo = (req, res) => {
    const nuevoActivo = new Activo({
        id: req.body.id,
        numeroSerie: req.body.numeroSerie,
        numeroInventario: req.body.numeroInventario,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion,
        responsable: req.body.responsable,
        imagen: req.body.imagen
    });

    nuevoActivo.save()
        .then(activo => {
            res.status(201).json({
                message: "Activo creado exitosamente",
                activo: activo
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error al crear el activo",
                error: error
            });
        });
};

