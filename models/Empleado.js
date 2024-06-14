const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleado = sequelize.define('Empleado', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'empleados',
  timestamps: false,
});

module.exports = Empleado;
