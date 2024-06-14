const express = require('express');
const { Cliente } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Cliente.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    const updatedCliente = await Cliente.findByPk(req.params.id);
    res.json(updatedCliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Cliente.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
