const connect = require('../../model/connect');
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
            type: DataTypes.CHAR
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = especieModel;
