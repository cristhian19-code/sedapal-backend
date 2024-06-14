const express = require('express');
const { Direccion } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const direcciones = await Direccion.findAll();
    res.json(direcciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const direccion = await Direccion.findByPk(req.params.id);
    if (!direccion) {
      return res.status(404).json({ error: 'Direccion no encontrada' });
    }
    res.json(direccion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const direccion = await Direccion.create(req.body);
    res.status(201).json(direccion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Direccion.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Direccion no encontrada' });
    }
    const updatedDireccion = await Direccion.findByPk(req.params.id);
    res.json(updatedDireccion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Direccion.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Direccion no encontrada' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
