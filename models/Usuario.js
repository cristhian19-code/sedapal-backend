const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  contrasenia: {
    type: DataTypes.STRING(50)
  }
},{
  tableName: 'usuario',
  timestamps: false,
});

module.exports = Usuario;