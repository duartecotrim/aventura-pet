const connect = require('../connect');
const { DataTypes } = require('sequelize');

const usuarioModel = connect.define(
    'usuario',
    {
        id_usuario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_usuario:{
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = usuarioModel;