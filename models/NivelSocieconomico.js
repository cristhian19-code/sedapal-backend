const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const NivelSocioeconomico = sequelize.define('NivelSocioeconomico', {
    nivel_socioeco: {
        type: DataTypes.STRING(2)
    },
    nombre_socioeco: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: 'nivel_socioeconomico',
    timestamps: false
});

module.exports = NivelSocioeconomico;