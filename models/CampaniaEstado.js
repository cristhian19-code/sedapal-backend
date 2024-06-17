const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const CampaniaEstado = sequelize.define('CampaniaEstado', {
    id_campania_estado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(10)
    }
},{
    tableName: 'campania_estado',
    timestamps: false
});

module.exports = CampaniaEstado;