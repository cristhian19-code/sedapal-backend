const router = require('express').Router();
const Actividades = require('../../models/Actividades');

router.post('/listar', async (req, res) => {
    const actividades = await Actividades.findAll({
        where: { id_campania: req.body.id_campania }
    });

    const actividadesArray = actividades.map(actividad => ({
        ...actividad.dataValues,
        fecha: actividad.dataValues.fecha.toISOString().split('T')[0]
    }));
    res.json(actividadesArray);
})

router.post('/', async (req, res) => {
    await Actividades.create(req.body);

    res.json({ status: 'Actividad registrada' });
})

router.delete('/:id', async (req, res) => {
    await Actividades.destroy({
        where: { id_actividad: req.params.id }
    });
    res.json({ status: 'Actividad eliminada' });
})

module.exports = router;