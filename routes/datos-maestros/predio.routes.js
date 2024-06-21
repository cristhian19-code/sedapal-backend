const router = require('express').Router();
const Predio = require('../../models/Predio');

router.get('/', async (req, res) => {
    const predios = await Predio.findAll();
    res.json(predios);
});

router.get('/:id', async (req, res) => {
    const predio = await Predio.findByPk(req.params.id);
    res.json(predio);
});

router.post('/', async (req, res) => {
    const predio = await Predio.create(req.body);
    res.json(predio);
});

router.delete('/:id', async (req, res) => {
    await Predio.destroy({
        where: { id_predio: req.params.id }
    });
    res.json({ success: 'Se ha borrado' });
})


module.exports = router;