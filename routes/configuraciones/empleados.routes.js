const router = require('express').Router();
const Empleado = require('../../models/Empleado');

router.get('/', async (req, res) => {
    const empleados = await Empleado.findAll();
    res.json(empleados);
})

router.post('/', async (req, res) => {
    const findEmpleado = await Empleado.findOne({ where: { dni: req.body.dni } });

    if (findEmpleado) {
        return res.status(400).json({ error: 'El empleado ya está registrado' });
    }

    await Empleado.create(req.body);

    res.json({status: 'Empleado registrado'});
})

router.put('/:id', async (req, res) => {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
        return res.status(404).json({ error: 'El empleado no existe' });
    }

    await Empleado.update(req.body, {
        where: { id_empleado: req.params.id }
    });

    res.json({status: 'Empleado actualizado'});
})

router.delete('/:id', async (req, res) => {
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({status: 'Empleado eliminado'});
})

module.exports = router;