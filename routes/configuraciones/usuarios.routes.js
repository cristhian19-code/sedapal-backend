const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Usuario = require('../../models/Usuario');

router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll();
    const arrayUsuarios = usuarios.map((usuario)=> ({
        username: usuario.username,
        id_usuario: usuario.id_usuario,
    }))
    res.json(arrayUsuarios);
})

router.post('/', async (req, res) => {
    const findUser = await Usuario.findOne({ where: { username: req.body.username } });

    if (findUser) {
        return res.status(400).json({ error: 'El nombre de usuario ya está en uso' });
    }

    const newPassword = await bcrypt.hash(req.body.contrasenia, 10);
    req.body.contrasenia = newPassword;

    await Usuario.create(req.body);

    res.json({status: 'Usuario registrado'});
});

router.get('/:id', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    res.json(usuario);
})

router.put('/', async (req, res) => {
    const usuario = await Usuario.findByPk(req.body.id_usuario);
    if (!usuario) {
        return res.status(404).json({ error: 'El usuario no existe' });
    }

    await Usuario.update(req.body, { where: { id_usuario: req.body.id_usuario } });
    res.json({ success: 'Se ha actualizado el usuario' });
})

router.delete('/:id', async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
        return res.status(404).json({ error: 'El usuario no existe' });
    }
    await Usuario.destroy({ where: { id_usuario: req.params.id } });
    res.json({ success: 'Se ha eliminado el usuario' });
})

module.exports = router;