const router = require('express').Router();

const Inspector = require('../../models/Inspector');

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

router.delete('/:id', async (req, res) => {
    await Inspector.destroy({
        where: { id_inspectores: req.params.id }
    });
    res.json({ status: 'Inspector eliminado' });
})

module.exports = router;