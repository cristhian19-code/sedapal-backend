const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const ConexionTipo = sequelize.define('ConexionTipo', {
    tipo: {
        type: DataTypes.STRING(20)
    },
    nombre_tipo: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'conexion_tipo',
    timestamps: false
});

module.exports = ConexionTipo;