const connect = require('../connect');
const { DataTypes } = require('sequelize');

const petVisualizadoModel = connect.define('pet_visualizado', {
  id_pet_visualizado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_pet: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  
  freezeTableName: true,
  timestamps: false
});

const usuarioModel = require('./usuarioModel');
const petModel = require('./petModel');

petVisualizadoModel.belongsTo(usuarioModel,{foreignKey:id_usuario});
petVisualizadoModel.belongsTo(petModel,{foreignKey: id_pet});

module.exports = petVisualizadoModel;