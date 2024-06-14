const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Inspector = sequelize.define('Inspector', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'inspectores',
  timestamps: false,
});

module.exports = Inspector;
