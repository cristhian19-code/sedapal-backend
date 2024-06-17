const router = require('express').Router();
const DireccionUrbanizacion = require('../../models/DireccionUrbanizacion');

router.get('/', async (req, res) => {
    const direccionUrbanizaciones = await DireccionUrbanizacion.findAll();
    res.json(direccionUrbanizaciones);
})

router.post('/', async (req, res) => {
    const findDireccionUrbanizacion = await DireccionUrbanizacion.findOne({ where: { urbanizacion: req.body.urbanizacion } });

    if (findDireccionUrbanizacion) {
        return res.status(400).json({ error: 'La dirección de urbanización ya está registrada' });
    }

    await DireccionUrbanizacion.create(req.body);

    res.json({ status: 'Dirección de urbanización registrada' });
})

router.delete('/:id', async (req, res) => {
    await DireccionUrbanizacion.destroy({
        where: { urbanizacion: req.params.id }
    });
    res.json({ status: 'Dirección de urbanización eliminada' });
})

module.exports = router;