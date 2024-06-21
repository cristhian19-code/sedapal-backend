const router = require('express').Router();
const Cliente = require('../../models/Cliente');

router.get('/', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
})

router.get('/:id', async (req, res) => {
    const cliente = await Cliente.findByPk(req.params.id);
    res.json(cliente);
})

router.post('/', async (req, res) => {
    const findCliente = await Cliente.findOne({
        where: { dni: req.body.dni }
    });

    if (findCliente) {
        return res.status(400).json({
            error: 'El cliente ya existe'
        });
    }

    const cliente = await Cliente.create(req.body);
    res.json(cliente);
})

router.delete('/:id', async (req, res) => {
    await Cliente.destroy({
        where: { id_cliente: req.params.id }
    });
    res.json({ success: 'Se ha borrado' });
})

module.exports = router;