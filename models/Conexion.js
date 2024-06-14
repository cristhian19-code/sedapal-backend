const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Conexion = sequelize.define('Conexion', {
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'conexiones',
  timestamps: false,
});

module.exports = Conexion;
