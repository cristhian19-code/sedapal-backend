const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');
const CampaniaCatastral = require('./CampaniaCatastral');
const Usuario = require('./Usuario');


const Actividades = sequelize.define('Actividades', {
    id_actividad: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(255)
    },
    fecha: {
        type: DataTypes.DATE
    },
    id_campania: {
        type: DataTypes.INTEGER,
        references: {
            model: CampaniaCatastral,
            key: 'id_campania'
        }
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    urbanizacion: {
        type: DataTypes.STRING(100),
    }
},{
    tableName: 'actividades',
    timestamps: false
});

module.exports = Actividades;