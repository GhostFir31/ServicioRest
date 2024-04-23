const Activo = require('../modelos/activoModel');

exports.getActivo = (req, res) => {
    try {
        const activos = Activo.find();
        res.status(200).json(activos);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los activos",
            error: error
        });
    }
};

exports.postActivo = (req, res) => {
    const nuevoActivo = {
        id: req.body.id,
        numeroSerie: req.body.numeroSerie,
        numeroInventario: req.body.numeroInventario,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion,
        responsable: req.body.responsable,
        imagen: req.body.imagen
    };

    try {
        Activo.activos.push(nuevoActivo);
        res.status(201).json({
            message: "Activo creado exitosamente",
            activo: nuevoActivo
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el activo",
            error: error
        });
    }
};