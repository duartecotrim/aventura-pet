const connect = require('../connect');
const { DataTypes } = require('sequelize');

const corModel = connect.define('cor', {
    id_cor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_cor: {
        type: DataTypes.STRING(50),
        allowNull: false

    }
}, {

    freezeTableName: true,
    timestamps: false
});

module.exports = corModel;