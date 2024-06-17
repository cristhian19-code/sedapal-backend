const router = require('express').Router();
const Cargo = require('../../models/Cargo');

router.get('/', async (req, res) => {
    const cargos = await Cargo.findAll();
    res.json(cargos);
})

router.post('/', async (req, res) => {
    const findCargo = await Cargo.findOne({ where: { nombre: req.body.nombre } });

    if (findCargo) {
        return res.status(400).json({ error: 'El cargo ya está registrado' });
    }

    await Cargo.create(req.body);

    res.json({status: 'Cargo registrado'});
})

router.put('/:id', async (req, res) => {
    const cargo = await Cargo.findByPk(req.params.id);
    if (!cargo) {
        return res.status(404).json({ error: 'El cargo no existe' });
    }

    await Cargo.update(req.body, {
        where: { id_cargo: req.params.id }
    });

    res.json({status: 'Cargo actualizado'});
})

router.delete('/:id', async (req, res) => {
    await Cargo.destroy({
        where: { id_cargo: req.params.id }
    });
    res.json({status: 'Cargo eliminado'});
})

module.exports = router;