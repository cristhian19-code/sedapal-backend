const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'clientes',
  timestamps: false,
});

module.exports = Cliente;
