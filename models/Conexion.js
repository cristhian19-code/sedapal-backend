const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Predio = require("./Predio");

const Conexion = sequelize.define('Conexion', {
    id_conexion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_predio: {
        type: DataTypes.INTEGER,
        references: {
            model: Predio,
            key: 'id_predio'
        }
    },
    tipo: {
        type: DataTypes.STRING(50)
    },
    estado: {
        type: DataTypes.STRING(50)
    },
    num_medidor: {
        type: DataTypes.NUMERIC(8, 0)
    }
}, {
    tableName: 'conexion',
    indexes: [{ unique: true, fields: ['id_conexion', 'id_predio'] }]
});

module.exports = Conexion;