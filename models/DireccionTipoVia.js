const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const DireccionTipoVia = sequelize.define('DireccionTipoVia', {
    tipo_via: {
        type: DataTypes.STRING(10)
    },
    nombre_tipo_via: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'direccion_tipo_via',
    timestamps: false
});

module.exports = DireccionTipoVia;