const connect = require('../../model/connect');
const {DataTypes} = require('sequelize');

const passwordHashModel = connect.define(
    'password_hash',
    {
        id_password_hash:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        id_usuario:{
            type: DataTypes.INTEGER
        },
        password_hash:{
            type: DataTypes.CHAR
        },
        ativo:{
            type: DataTypes.INTEGER
        },
        data_criacao:{
            type: DataTypes.DATE
        },
        data_inaticacao:{
            type: DataTypes.DATE
        }
    },
        {
          timestamps:false,
        freezeTableName:true
    }
);

module.exports = passwordHashModel;