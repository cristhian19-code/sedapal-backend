const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Empleado = require('./Empleado');
const Cliente = require('./Cliente');
const Predio = require('./Predio');
const Conexion = require('./Conexion');
const Direccion = require('./Direccion');
const CampaniaCatastral = require('./CampaniaCatastral');
const Inspector = require('./Inspector');
const Localizacion = require('./Localizacion');

// Definir relaciones
Usuario.hasMany(Predio, { foreignKey: 'usuarioId' });
Predio.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Empleado.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(Empleado, { foreignKey: 'usuarioId' });

Cliente.hasMany(Predio, { foreignKey: 'clienteId' });
Predio.belongsTo(Cliente, { foreignKey: 'clienteId' });

Predio.hasOne(Direccion, { foreignKey: 'predioId' });
Direccion.belongsTo(Predio, { foreignKey: 'predioId' });

Predio.hasOne(Conexion, { foreignKey: 'predioId' });
Conexion.belongsTo(Predio, { foreignKey: 'predioId' });

CampaniaCatastral.hasMany(Inspector, { foreignKey: 'campaniaId' });
Inspector.belongsTo(CampaniaCatastral, { foreignKey: 'campaniaId' });

Inspector.hasOne(Localizacion, { foreignKey: 'inspectorId' });
Localizacion.belongsTo(Inspector, { foreignKey: 'inspectorId' });

module.exports = {
  sequelize,
  Usuario,
  Empleado,
  Cliente,
  Predio,
  Conexion,
  Direccion,
  CampaniaCatastral,
  Inspector,
  Localizacion,
};