const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Predio = sequelize.define('Predio', {
    id_predio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'id_cliente'
        }
    },
    niveles: {
        type: DataTypes.NUMERIC(9, 0)
    },
    nivel_socioeco: {
        type: DataTypes.STRING(50)
    },
    categoria: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'predio',
    timestamps: false
});

module.exports = Predio;