const router = require('express').Router();
const ConexionTipo = require('../../models/ConexionTipo');

router.get('/', async (req, res) => {
    const conexionTipos = await ConexionTipo.findAll();
    res.json(conexionTipos);
})

router.post('/', async (req, res) => {
    const findConexionTipo = await ConexionTipo.findOne({ where: { tipo: req.body.tipo } })

    if (findConexionTipo) {
        return res.status(400).json({ error: 'El tipo de conexión ya está registrado' });
    }

    await ConexionTipo.create(req.body);

    res.json({ status: 'Tipo de conexión registrado' });
})

router.put('/:id', async (req, res) => {
    const conexionTipo = await ConexionTipo.findByPk(req.params.id);
    if (!conexionTipo) {
        return res.status(404).json({ error: 'El tipo de conexión no existe' });
    }

    await ConexionTipo.update(req.body, {
        where: { id_tipo_conexion: req.params.id }
    });

    res.json({ status: 'Tipo de conexión actualizado' });
})

router.delete('/:id', async (req, res) => {
    await ConexionTipo.destroy({
        where: { tipo: req.params.id }
    });
    res.json({ status: 'Tipo de conexión eliminado' });
})

module.exports = router;