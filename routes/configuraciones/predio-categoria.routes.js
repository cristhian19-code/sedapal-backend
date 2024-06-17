const router = require('express').Router();
const PredioCategoria = require('../../models/PredioCategoria');

router.get('/', async (req, res) => {
    const predioCategorias = await PredioCategoria.findAll();
    res.json(predioCategorias);
})

router.post('/', async (req, res) => {
    const findPredioCategoria = await PredioCategoria.findOne({ where: { categoria: req.body.categoria } });

    if (findPredioCategoria) {
        return res.status(400).json({ error: 'El predio categoría ya está registrado' });
    }

    await PredioCategoria.create(req.body);

    res.json({ status: 'Predio categoría registrado' });
})

router.delete('/:id', async (req, res) => {
    await PredioCategoria.destroy({
        where: { categoria: req.params.id }
    });
    res.json({ status: 'Predio categoría eliminado' });
})

module.exports = router;