const router = require('express').Router();
const CampaniaCatastral = require('../../models/CampaniaCatastral');

router.get('/', async (req, res) => {
    const campaniasCatastrales = await CampaniaCatastral.findAll();
    res.json(campaniasCatastrales);
})

router.post('/', async (req, res) => {
    const data = await CampaniaCatastral.create(req.body);
    console.log(data.id_campania);
    res.json({ status: 'Campaña catastral registrada', id: data.id_campania });
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