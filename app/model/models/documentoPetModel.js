const connect = require('../connect');
const { DataTypes } = require('sequelize');
const documentoPetModel = connect.define(
    'documento_pet',{
        id_documento_pet:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_pet:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        descricao_documento_pet:{
            type:DataTypes.STRING(50),
            allowNull: false
        },
        documento_pet:{
            type:DataTypes.STRING(50),
            allowNull: false
        }
    }
);

const petModel = require('./petModel');
documentoPetModel.belongsTo(petModel,{foreignKey: id_pet, targetKey:id_pet});

module.exports = documentoPetModel;