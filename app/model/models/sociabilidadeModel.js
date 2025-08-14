const connect = require('../connect');
const { DataTypes } = require('sequelize');

const sociabilidadeModel = connect.define('sociabilidade', {
    id_sociabilidade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao_sociabilidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    
    freezeTableName: true,
    timestamps: false
});

module.exports = sociabilidadeModel