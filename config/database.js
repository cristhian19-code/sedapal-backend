const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sedapal', 'postgres', 'cristhian', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;