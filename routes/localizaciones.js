const express = require('express');
const { Localizacion } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const localizaciones = await Localizacion.findAll();
    res.json(localizaciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const localizacion = await Localizacion.findByPk(req.params.id);
    if (!localizacion) {
      return res.status(404).json({ error: 'Localizacion no encontrada' });
    }
    res.json(localizacion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const localizacion = await Localizacion.create(req.body);
    res.status(201).json(localizacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Localizacion.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Localizacion no encontrada' });
    }
    const updatedLocalizacion = await Localizacion.findByPk(req.params.id);
    res.json(updatedLocalizacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Localizacion.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Localizacion no encontrada' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
