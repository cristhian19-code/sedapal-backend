const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Cargo = sequelize.define('Cargo', {
    id_cargo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'cargo',
    timestamps: false
});

module.exports = Cargo;