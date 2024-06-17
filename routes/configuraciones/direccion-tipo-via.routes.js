const router = require('express').Router();
const DireccionTipoVia = require('../../models/DireccionTipoVia');

router.get('/', async (req, res) => {
    const direccionTipoVias = await DireccionTipoVia.findAll();
    res.json(direccionTipoVias);
})

router.post('/', async (req, res) => {
    const findDireccionTipoVia = await DireccionTipoVia.findOne({ where: { tipo_via: req.body.tipo_via } });

    if (findDireccionTipoVia) {
        return res.status(400).json({ error: 'El tipo de vía ya está registrado' });
    }

    await DireccionTipoVia.create(req.body);

    res.json({ status: 'Tipo de vía registrado' });
})

router.put('/:id', async (req, res) => {
    const direccionTipoVia = await DireccionTipoVia.findByPk(req.params.id);
    if (!direccionTipoVia) {
        return res.status(404).json({ error: 'El tipo de vía no existe' });
    }

    await DireccionTipoVia.update(req.body, {
        where: { id_tipo_via: req.params.id }
    });

    res.json({ status: 'Tipo de vía actualizado' });
})

router.delete('/:id', async (req, res) => {
    await DireccionTipoVia.destroy({
        where: { tipo_via: req.params.id }
    });
    res.json({ status: 'Tipo de vía eliminado' });
})

module.exports = router;