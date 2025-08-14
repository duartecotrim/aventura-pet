const connect = require('../connect');
const { DataTypes } = require('sequelize');
const especieModel = connect.define(
    'especie',
    {
        id_especie: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_especie: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = especieModel;
