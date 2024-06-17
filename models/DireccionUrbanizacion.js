const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const DireccionUrbanizacion = sequelize.define('DireccionUrbanizacion', {
    urbanizacion: {
        type: DataTypes.INTEGER,
    },
    nombre_urbanizacion: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'direccion_urbanizacion',
    timestamps: false
});

module.exports = DireccionUrbanizacion;