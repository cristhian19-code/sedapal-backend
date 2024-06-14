const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Direccion = sequelize.define('Direccion', {
  calle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'direcciones',
  timestamps: false,
});

module.exports = Direccion;
