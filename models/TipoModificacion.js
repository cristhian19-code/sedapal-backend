const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const TipoModificacion = sequelize.define('TipoModificacion', {
    id_tipo_modificacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_modificacion: {
        type: DataTypes.STRING(10)
    }
},{
    tableName: 'tipo_modificacion',
    timestamps: false
});

module.exports = TipoModificacion;