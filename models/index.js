const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Empleado = require('./Empleado');
const Cargo = require('./Cargo');
const Genero = require('./Genero');
const CampaniaEstado = require('./CampaniaEstado');
const ConexionEstado = require('./ConexionEstado');
const ConexionTipo = require('./ConexionTipo');
const DireccionTipoVia = require('./DireccionTipoVia');
const DireccionUrbanizacion = require('./DireccionUrbanizacion');
const EstadoCivil = require('./EstadoCivil');
const Inspector = require('./Inspector');
const NivelSocieconomico = require('./NivelSocieconomico');
const PredioCategoria = require('./PredioCategoria');
const RevisionEstado = require('./RevisionEstado');
const TipoModificacion = require('./TipoModificacion');
const Cliente = require('./Cliente');
const CampaniaCatastral = require('./CampaniaCatastral');
const Actividades = require('./Actividades');

Empleado.belongsTo(Usuario, { foreignKey: 'id_usuario' });
CampaniaCatastral.belongsTo(Empleado, { foreignKey: 'id_empleado' });
Actividades.belongsTo(CampaniaCatastral, { foreignKey: 'id_campania' });

module.exports = {
  sequelize,
  Usuario,
  Empleado,
  Cargo,
  Genero,
  CampaniaEstado,
  ConexionEstado,
  ConexionTipo,
  DireccionTipoVia,
  DireccionUrbanizacion,
  EstadoCivil,
  Inspector,
  NivelSocieconomico,
  PredioCategoria,
  RevisionEstado,
  TipoModificacion,
  Cliente,
  CampaniaCatastral
};