const router = require('express').Router();
const Genero = require('../../models/Genero');

router.get('/', async (req, res) => {
    const generos = await Genero.findAll();
    res.json(generos);
})

router.get('/:id', async (req, res) => {
    const genero = await Genero.findByPk(req.params.id);
    res.json(genero);
})

router.post('/', async (req, res) => {
    const genero = await Genero.create(req.body);
    res.json(genero);
})

router.delete('/:id', async (req, res) => {
    await Genero.destroy({
        where: { id_genero: req.params.id }
    });
    res.json({ success: 'Se ha borrado el género' });
})

module.exports = router;