const connect = require('../connect');
const { DataTypes } = require('sequelize');

const cuidadoVeterinarioModel = connect.define('cuidado_veterinario', {
  id_cuidado_veterinario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao_cuidado_veterinario: {
    type: DataTypes.STRING(50),
    allowNull: false
    
  }
}, {  
  freezeTableName: true,
  timestamps: false
});

module.exports = cuidadoVeterinarioModel;