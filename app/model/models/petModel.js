const connect = require('../connect');
const { DataTypes } = require('sequelize');

const petModel = connect.define(
  'pet', {
  id_pet: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nome_pet: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  adotado: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  
  freezeTableName: true,
  timestamps: false
}
)

const usuarioModel = require('./usuarioModel');
//tras o pet e seu usuario
petModel.belongsTo(usuarioModel,{foreignKey:id_usuario});


module.exports = petModel;