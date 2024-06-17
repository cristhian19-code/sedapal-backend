const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const ConexionEstado = sequelize.define('ConexionEstado', {
    estado: {
        type: DataTypes.STRING(10)
    },
    nombre_estado: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'conexion_estado',
    timestamps: false
});

module.exports = ConexionEstado;