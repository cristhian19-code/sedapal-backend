const express = require('express');
const { Inspector } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const inspectores = await Inspector.findAll();
    res.json(inspectores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const inspector = await Inspector.findByPk(req.params.id);
    if (!inspector) {
      return res.status(404).json({ error: 'Inspector no encontrado' });
    }
    res.json(inspector);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const inspector = await Inspector.create(req.body);
    res.status(201).json(inspector);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Inspector.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Inspector no encontrado' });
    }
    const updatedInspector = await Inspector.findByPk(req.params.id);
    res.json(updatedInspector);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Inspector.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Inspector no encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
