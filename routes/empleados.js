const express = require('express');
const { Empleado } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const empleado = await Empleado.create(req.body);
    res.status(201).json(empleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Empleado.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    const updatedEmpleado = await Empleado.findByPk(req.params.id);
    res.json(updatedEmpleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Empleado.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
