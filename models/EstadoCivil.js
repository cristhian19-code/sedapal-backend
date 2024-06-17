const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const EstadoCivil = sequelize.define('EstadoCivil', {
    id_estado_civil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(10)
    }
},{
    tableName: 'estado_civil',
    timestamps: false
});

module.exports = EstadoCivil;