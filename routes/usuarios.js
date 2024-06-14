const express = require('express');
const { Usuario } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { codigo: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const updatedUsuario = await Usuario.findByPk(req.params.id);
    res.json(updatedUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Usuario.destroy({
      where: { codigo: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
