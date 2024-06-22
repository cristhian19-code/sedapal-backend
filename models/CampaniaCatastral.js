const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleado = require('./Empleado');

const CampaniaCatastral = sequelize.define('CampaniaCatastral', {
    id_campania: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100)
    },
    inspectores_campania: {
        type: DataTypes.NUMERIC(4, 0)
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_fin: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.STRING(10)
    },
    id_empleado: {
        type: DataTypes.INTEGER,
        references: {
            model: Empleado,
            key: 'id_empleado'
        }
    }
}, {
    tableName: 'campania_catastral',
    timestamps: false
});

module.exports = CampaniaCatastral;