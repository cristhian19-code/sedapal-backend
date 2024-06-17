const sequelize = require('../config/database');
const {DataTypes} = require('sequelize');
const Usuario = require('./Usuario');

const Empleado = sequelize.define('Empleado', {
    id_empleado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dni: {
        type: DataTypes.NUMERIC(8, 0),
        unique: true
    },
    nombre_pri: {
        type: DataTypes.STRING(50)
    },
    nombre_seg: {
        type: DataTypes.STRING(50)
    },
    apellido_pat: {
        type: DataTypes.STRING(50)
    },
    apellido_mat: {
        type: DataTypes.STRING(50)
    },
    cargo: {
        type: DataTypes.STRING(100),
    },
    correo: {
        type: DataTypes.STRING(100)
    },
    fecha_contrato: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    genero: {
        type: DataTypes.STRING(10)
    },
    telefono: {
        type: DataTypes.NUMERIC(9, 0)
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    }
},{
    tableName: 'empleado',
    timestamps: false
});

module.exports = Empleado;