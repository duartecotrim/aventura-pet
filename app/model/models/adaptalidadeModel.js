const connect = require('../connect');
const { DataTypes } = require('sequelize');

const adaptalidadeModel = connect.define('adaptalidade', {
    id_adaptalidade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao_adaptalidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = adaptalidadeModel