const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Localizacion = sequelize.define('Localizacion', {
    id_localizacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    urbanizacion: {
        type: DataTypes.STRING(10)
    }
},{
    tableName: 'localizacion',
    timestamps: false
});

module.exports = Localizacion;