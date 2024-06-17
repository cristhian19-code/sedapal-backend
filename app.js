const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

// Rutas
app.use('/campania-estado', require('./routes/configuraciones/campania-estado.routes.js'))
app.use('/cargos', require('./routes/configuraciones/cargos.routes.js'))
app.use('/conexion-estado', require('./routes/configuraciones/conexion-estado.routes.js'))
app.use('/conexion-tipo', require('./routes/configuraciones/conexion-tipo.routes.js'))
app.use('/direccion-tipo-via', require('./routes/configuraciones/direccion-tipo-via.routes.js'))
app.use('/direccion-urbanizacion', require('./routes/configuraciones/direccion-urbanizacion.routes.js'))
app.use('/empleados', require('./routes/configuraciones/empleados.routes.js'))
app.use('/estado-civil', require('./routes/configuraciones/estado-civil.routes.js'))
app.use('/generos', require('./routes/configuraciones/generos.routes.js'))
app.use('/inspectores', require('./routes/configuraciones/inspectores.routes.js'))
app.use('/login', require('./routes/configuraciones/login.routes.js'))
app.use('/nivel-socioeconomico', require('./routes/configuraciones/nivel-socioeconomico.routes.js'))
app.use('/predio-categoria', require('./routes/configuraciones/predio-categoria.routes.js'))
app.use('/revision-estado', require('./routes/configuraciones/revision-estado.routes.js'))
app.use('/tipo-modificaciones', require('./routes/configuraciones/tipo-modificaciones.routes.js'))
app.use('/usuarios', require('./routes/configuraciones/usuarios.routes.js'))

// Sincronización de base de datos y arranque del servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
  });
});
