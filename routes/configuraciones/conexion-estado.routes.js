const router = require('express').Router();
const ConexionEstado = require('../../models/ConexionEstado');

router.get('/', async (req, res) => {
    const conexionEstados = await ConexionEstado.findAll();
    res.json(conexionEstados);
})

router.post('/', async (req, res) => {
    const findConexionEstado = await ConexionEstado.findOne({ where: { estado: req.body.estado } });

    if (findConexionEstado) {
        return res.status(400).json({ error: 'El estado de conexión ya está registrado' });
    }

    await ConexionEstado.create(req.body);

    res.json({ status: 'Estado de conexión registrado' });
})

router.delete('/:id', async (req, res) => {
    await ConexionEstado.destroy({
        where: { estado: req.params.estado }
    });
    res.json({ status: 'Estado de conexión eliminado' });
})

module.exports = router;