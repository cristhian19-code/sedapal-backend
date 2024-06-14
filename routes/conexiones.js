const express = require('express');
const { Conexion } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const conexiones = await Conexion.findAll();
    res.json(conexiones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const conexion = await Conexion.findByPk(req.params.id);
    if (!conexion) {
      return res.status(404).json({ error: 'Conexion no encontrada' });
    }
    res.json(conexion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const conexion = await Conexion.create(req.body);
    res.status(201).json(conexion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Conexion.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Conexion no encontrada' });
    }
    const updatedConexion = await Conexion.findByPk(req.params.id);
    res.json(updatedConexion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Conexion.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Conexion no encontrada' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
