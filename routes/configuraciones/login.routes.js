const Usuario = require("../../models/Usuario");
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = 'SAJHDAS_3124ASFDSA';

router.post('/', async (req, res) => {
    const user = await  Usuario.findOne({ where: { username: req.body.username } });
    if (!user) {
        return res.status(400).json({ error: 'Usuario no registrado' });
    }


    const validPassword = bcrypt.compare(req.body.contrasenia, user.contrasenia);
    if (!validPassword) {
        return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({
        id: user.id_usuario,
        username: user.username
    }, SECRET_KEY);

    res.json({token,});
})

router.get('/verify', async (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'No se ha enviado el token' });
    }

    await jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        res.json(user);
    })
})

module.exports = router;