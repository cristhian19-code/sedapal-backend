const express = require('express');
const { Predio } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const predios = await Predio.findAll();
    res.json(predios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const predio = await Predio.findByPk(req.params.id);
    if (!predio) {
      return res.status(404).json({ error: 'Predio no encontrado' });
    }
    res.json(predio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const predio = await Predio.create(req.body);
    res.status(201).json(predio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Predio.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Predio no encontrado' });
    }
    const updatedPredio = await Predio.findByPk(req.params.id);
    res.json(updatedPredio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Predio.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Predio no encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
