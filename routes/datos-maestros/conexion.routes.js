const router = require('express').Router();
const Conexion = require('../../models/Conexion');

router.get('/', async (req, res) => {
    const conexiones = await Conexion.findAll();
    res.json(conexiones);
})

router.get('/:id', async (req, res) => {
    const conexion = await Conexion.findByPk(req.params.id);
    res.json(conexion);
})

router.post('/', async (req, res) => {
    const conexion = await Conexion.create(req.body);
    res.json(conexion);
})

router.delete('/:id', async (req, res) => {
    await Conexion.destroy({
        where: { id_conexion: req.params.id }
    });
    res.json({ success: 'Se ha borrado' });
})

module.exports = router;
