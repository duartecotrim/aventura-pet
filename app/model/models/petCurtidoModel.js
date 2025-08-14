const connect = require('../connect');
const {DataTypes} = require('sequelize');

const petCurtidoModel = connect.define(
    'pet_curtido',
    {
        id_pet_curtido:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        id_usuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_pet:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        freezeTableName: true,
        timestamps: false
    }
);

const usuarioModel = require('./usuarioModel');
const petModel = require('./petModel');

petCurtidoModel.belongsTo(usuarioModel, {foreignKey: id_usuario, targetKey: id_usuario});
petCurtidoModel.belongsTo(petModel, {foreignKey:id_pet, targetKey: id_pet});

module.exports = petCurtidoModel;