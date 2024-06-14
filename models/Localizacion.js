const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Localizacion = sequelize.define('Localizacion', {
  latitud: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitud: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'localizaciones',
  timestamps: false,
});

module.exports = Localizacion;
