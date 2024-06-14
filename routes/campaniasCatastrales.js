const express = require('express');
const { CampaniaCatastral } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const campaniasCatastrales = await CampaniaCatastral.findAll();
    res.json(campaniasCatastrales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const campaniaCatastral = await CampaniaCatastral.findByPk(req.params.id);
    if (!campaniaCatastral) {
      return res.status(404).json({ error: 'Campania Catastral no encontrada' });
    }
    res.json(campaniaCatastral);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const campaniaCatastral = await CampaniaCatastral.create(req.body);
    res.status(201).json(campaniaCatastral);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await CampaniaCatastral.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Campania Catastral no encontrada' });
    }
    const updatedCampaniaCatastral = await CampaniaCatastral.findByPk(req.params.id);
    res.json(updatedCampaniaCatastral);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await CampaniaCatastral.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Campania Catastral no encontrada' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
