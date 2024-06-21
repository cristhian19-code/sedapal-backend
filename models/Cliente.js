const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dni: {
        type: DataTypes.NUMERIC(8, 0),
        unique: true
    },
    nombre_pri: {
        type: DataTypes.STRING(20)
    },
    nombre_seg: {
        type: DataTypes.STRING(20)
    },
    apellido_pat: {
        type: DataTypes.STRING(60)
    },
    apellido_mat: {
        type: DataTypes.STRING(60)
    },
    genero: {
        type: DataTypes.STRING(20)
    },
    estado_civil: {
        type: DataTypes.STRING(20)
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    correo: {
        type: DataTypes.STRING(100)
    },
    telefono: {
        type: DataTypes.NUMERIC(9, 0)
    }
},{
    tableName: 'cliente',
    timestamps: false
});

module.exports = Cliente;