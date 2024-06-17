const router = require('express').Router();
const CampaniaEstado = require('../../models/CampaniaEstado');

router.get('/', async (req, res) => {
    const campaniasEstados = await CampaniaEstado.findAll();
    res.json(campaniasEstados);
})

router.post('/', async (req, res) => {
    const findCampaniaEstado = await CampaniaEstado.findByPk(req.body.id_campania_estado);

    if (findCampaniaEstado) {
        return res.status(400).json({ error: 'La campaña estado ya está registrado' });
    }

    await CampaniaEstado.create(req.body);

    res.json({ status: 'Campaña estado registrado' });
})

router.put('/:id', async (req, res) => {
    const campaniaEstado = await CampaniaEstado.findByPk(req.params.id);
    
    if (!campaniaEstado) {
        return res.status(404).json({ error: 'La campaña estado no existe' });
    }

    await CampaniaEstado.update(req.body, {
        where: { id_campania_estado: req.params.id }
    });

    res.json({ status: 'Campaña estado actualizado' });
})

router.delete('/:id', async (req, res) => {
    await CampaniaEstado.destroy({
        where: { id_campania_estado: req.params.id }
    });
    res.json({ status: 'Campaña estado eliminado' });
})

module.exports = router;