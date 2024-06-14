const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CampaniaCatastral = sequelize.define('CampaniaCatastral', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'campanias_catastrales',
  timestamps: false,
});

module.exports = CampaniaCatastral;
