const connect = require('../../model/connect');
const {DataTypes} = require('sequelize');

const contatoUsuarioModel = connect.define(
    'contato_usuario',
    {
        id_contato_usuario:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        id_usuario:{
            type:DataTypes.INTEGER
        },
        telefone:{
            type:DataTypes.CHAR
        },
        endereco:{
            type:DataTypes.CHAR
        },
        email:{
            type:DataTypes.CHAR
        }
    },
    {
        timestamps:false,
        freezeTableName:true
    }
);

module.exports = contatoUsuarioModel;