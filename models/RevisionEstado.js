const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const RevisionEstado = sequelize.define('RevisionEstado', {
    estado: {
        type: DataTypes.STRING(10),
    },
    nombre: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'revision_estado',
    timestamps: false
});

module.exports = RevisionEstado;