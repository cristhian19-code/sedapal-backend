const express = require('express');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());

// Rutas
app.use('/usuarios', require('./routes/usuarios'));
app.use('/empleados', require('./routes/empleados'));
app.use('/clientes', require('./routes/clientes'));
app.use('/predios', require('./routes/predios'));
app.use('/conexiones', require('./routes/conexiones'));
app.use('/direcciones', require('./routes/direcciones'));
app.use('/campaniasCatastrales', require('./routes/campaniasCatastrales'));
app.use('/inspectores', require('./routes/inspectores'));
app.use('/localizaciones', require('./routes/localizaciones'));

// Sincronización de base de datos y arranque del servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
  });
});
