const router = require('express').Router();
const TipoModificacion = require('../../models/TipoModificacion');

router.get('/', async (req, res) => {
    const tipoModificaciones = await TipoModificacion.findAll();
    res.json(tipoModificaciones);
})

router.post('/', async (req, res) => {
    await TipoModificacion.create(req.body);

    res.json({ status: 'Tipo de modificación registrado' });
})

router.delete('/:id', async (req, res) => {
    await TipoModificacion.destroy({
        where: { id_tipo_modificacion: req.params.id }
    });
    res.json({ status: 'Tipo de modificación eliminado' });
})


module.exports = router;