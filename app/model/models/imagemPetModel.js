const connect = require('../connect');
const { DataTypes } = require('sequelize');

const imagemPetModel = connect.define('imagem_pet', {
  id_imagem_pet: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_pet: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imagem: {
    type: DataTypes.BLOB('long'),
    allowNull: false
  }
}, {
  tableName: 'imagem_pet',
  freezeTableName: true,
  timestamps: false
});

const petModel = require('./petModel');
imagemPetModel.belongsTo(petModel, {foreignKey:id_pet});

module.exports = imagemPetModel;