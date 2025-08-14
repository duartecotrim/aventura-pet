const connect = require('../connect');
const { DataTypes } = require('sequelize');


const Porte = connect.define('porte', {
    id_porte: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_porte: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Porte;