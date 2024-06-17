const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Inspector = sequelize.define('Inspector', {
    id_inspectores: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cantidad: {
        type: DataTypes.INTEGER,
    }
},{
    tableName: 'inspector',
    timestamps: false
});

module.exports = Inspector;