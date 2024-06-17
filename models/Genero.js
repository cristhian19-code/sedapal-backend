const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Genero = sequelize.define('Genero', {
    id_genero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(10)
    }
},{
    tableName: 'genero',
    timestamps: false
});

module.exports = Genero;