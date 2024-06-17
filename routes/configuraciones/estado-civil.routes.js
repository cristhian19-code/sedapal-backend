const router = require('express').Router();
const EstadoCivil = require('../../models/EstadoCivil');

router.get('/', async (req, res) => {
    const estadoCivil = await EstadoCivil.findAll();
    res.json(estadoCivil);
})

router.post('/', async (req, res) => {
    const findEstadoCivil = await EstadoCivil.findByPk(req.body.id_estado_civil);

    if (findEstadoCivil) {
        return res.status(400).json({ error: 'El estado civil ya está registrado' });
    }

    await EstadoCivil.create(req.body);

    res.json({ status: 'Estado civil registrado' });
})

router.put('/:id', async (req, res) => {
    const estadoCivil = await EstadoCivil.findByPk(req.params.id);
    if (!estadoCivil) {
        return res.status(404).json({ error: 'El estado civil no existe' });
    }

    await EstadoCivil.update(req.body, {
        where: { id_estado_civil: req.params.id }
    });

    res.json({ status: 'Estado civil actualizado' });
})

router.delete('/:id', async (req, res) => {
    await EstadoCivil.destroy({
        where: { id_estado_civil: req.params.id }
    });
    res.json({ status: 'Estado civil eliminado' });
})

module.exports = router;