const router = require('express').Router();

const Inspector = require('../../models/Inspector');
const CampaniaCatastral = require('../../models/CampaniaCatastral');

router.get('/', async (req, res) => {
    const inspectores = await Inspector.findAll();
    res.json(inspectores);
})

router.post('/', async (req, res) => {
    const findInspector = await Inspector.findByPk(req.body.id_inspectores);

    if (findInspector) {
        return res.status(400).json({ error: 'El inspector ya está registrado' });
    }

    await Inspector.create(req.body);

    res.json({ status: 'Inspector registrado' });
})

router.post('/validate', async (req, res) => {
    const numero = Number(req.body.numero);
    const inspectores = await Inspector.findAll();
    const inspector = inspectores[0];

    if (!inspector) return res.status(400).json({ status: 'No hay inspectores' });

    const campanias = await CampaniaCatastral.findAll();

    const num_inspectores_campanias =

        campanias.reduce((acc, campania) => acc + Number(campania.inspectores_campania), 0);

    if (inspector.cantidad - num_inspectores_campanias < numero) return res.status(400).json({ status: 'No hay suficientes inspectores' });

    res.json({ status: 'Inspectores disponibles' });
})

router.delete('/:id', async (req, res) => {
    await Inspector.destroy({
        where: { id_inspectores: req.params.id }
    });
    res.json({ status: 'Inspector eliminado' });
})

module.exports = router;