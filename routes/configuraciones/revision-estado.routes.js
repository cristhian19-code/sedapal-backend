const router = require('express').Router();
const RevisionEstado = require('../../models/RevisionEstado');

router.get('/', async (req, res) => {
    const revisionEstados = await RevisionEstado.findAll();
    res.json(revisionEstados);
})

router.post('/', async (req, res) => {
    const findRevisionEstado = await RevisionEstado.findOne({ where: { estado: req.body.estado } });

    if (findRevisionEstado) {
        return res.status(400).json({ error: 'El estado de revisión ya está registrado' });
    }

    await RevisionEstado.create(req.body);

    res.json({ status: 'Estado de revisión registrado' });
})

router.delete('/:id', async (req, res) => {
    await RevisionEstado.destroy({
        where: { estado: req.params.id }
    });
    res.json({ status: 'Estado de revisión eliminado' });
})

module.exports = router;