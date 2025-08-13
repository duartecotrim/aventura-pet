const connect = require('../../model/connect');
const {DataTypes} = require('sequelize');

const usuarioModel = connect.define(
    'usuario',
    {
        id_usuario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_usuario:{
            type: DataTypes.CHAR
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = usuarioModel;