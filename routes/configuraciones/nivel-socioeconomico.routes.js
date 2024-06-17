const router = require('express').Router();
const NivelSocieconomico = require('../../models/NivelSocieconomico');

router.get('/', async (req, res) => {
    const NivelSocieconomicos = await NivelSocieconomico.findAll();
    res.json(NivelSocieconomicos);
})

router.post('/', async (req, res) => {
    const findNivelSocieconomico = await NivelSocieconomico.findOne({ where: { nivel_socioeco: req.body.nivel_socioeco } });

    if (findNivelSocieconomico) {
        return res.status(400).json({ error: 'El nivel socioeconómico ya está registrado' });
    }

    await NivelSocieconomico.create(req.body);

    res.json({ status: 'Nivel socioeconómico registrado' });
})

router.delete('/:id', async (req, res) => {
    await NivelSocieconomico.destroy({
        where: { nivel_socioeco: req.params.id }
    });
    res.json({ status: 'Nivel socioeconómico eliminado' });
})

module.exports = router;