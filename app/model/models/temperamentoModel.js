const connect = require('../connect');
const { DataTypes } = require('sequelize');
const temperamentoModel = connect.define('temperamento', {
    id_temperamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao_temperamento: {
        type: DataTypes.STRING(50),
       allowNull: false
    }
}, {
    
    freezeTableName: true,
    timestamps: false
});

module.exports = temperamentoModel