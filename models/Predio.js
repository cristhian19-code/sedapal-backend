const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Predio = sequelize.define('Predio', {
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'predios',
  timestamps: false,
});

module.exports = Predio;
