const router = require('express').Router();
const CampaniaCatastral = require('../../models/CampaniaCatastral');

router.get('/', async (req, res) => {
    const campaniasCatastrales = await CampaniaCatastral.findAll();
    const newList = campaniasCatastrales.map(campaniaCatastral => ({
        ...campaniaCatastral.dataValues,
        fecha_inicio: campaniaCatastral.fecha_inicio.toISOString().split('T')[0],
        fecha_fin: campaniaCatastral.fecha_fin.toISOString().split('T')[0],
    }));
    res.json(newList);
})

router.post('/', async (req, res) => {
    const data = await CampaniaCatastral.create(req.body);
    console.log(data.id_campania);
    res.json({ status: 'Campaña catastral registrada', id: data.id_campania });
})

router.put('/aceptar/:id', async (req, res) => {
    const campaniaCatastral = await CampaniaCatastral.findByPk(req.params.id);

    if (!campaniaCatastral) {
        return res.status(404).json({ error: 'La campaña catastral no existe' });
    }

    await CampaniaCatastral.update({ estado: 'Aceptar' }, {
        where: { id_campania: req.params.id }
    });

    res.json({ status: 'Campaña catastral Aceptada' });
})

router.put('/rechazar/:id', async (req, res) => {
    const campaniaCatastral = await CampaniaCatastral.findByPk(req.params.id);

    if (!campaniaCatastral) {
        return res.status(404).json({ error: 'La campaña catastral no existe' });
    }

    await CampaniaCatastral.update({ estado: 'Rechazado' }, {
        where: { id_campania: req.params.id }
    });

    res.json({ status: 'Campaña catastral Rechazada' });
})

router.put('/:id', async (req, res) => {
    const campaniaCatastral = await CampaniaCatastral.findByPk(req.params.id);

    if (!campaniaCatastral) {
        return res.status(404).json({ error: 'La campaña catastral no existe' });
    }

    await CampaniaCatastral.update(req.body, {
        where: { id_campania: req.params.id }
    });

    res.json({ status: 'Campaña catastral actualizada' });
})

router.delete('/:id', async (req, res) => {
    await CampaniaCatastral.destroy({
        where: { id_campania: req.params.id }
    });
    res.json({ status: 'Campaña catastral eliminada' });
})

module.exports = router;