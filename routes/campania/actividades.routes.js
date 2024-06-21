const router = require('express').Router();
const Actividades = require('../../models/Actividades');

router.get('/', async (req, res) => {
    const actividades = await Actividades.findByPk(req.body.id_campania);
    res.json(actividades);
})

router.post('/', async (req, res) => {
    const findActividad = await Actividades.findByPk(req.body.id_actividad);

    if (findActividad) {
        return res.status(400).json({ error: 'La actividad ya está registrada' });
    }

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