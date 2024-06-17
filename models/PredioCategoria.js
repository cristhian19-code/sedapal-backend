const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const PredioCategoria = sequelize.define('PredioCategoria', {
    categoria: {
        type: DataTypes.STRING(2)
    },
    nombre_categoria: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'predio_categoria',
    timestamps: false
});

module.exports = PredioCategoria;