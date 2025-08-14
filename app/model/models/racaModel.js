const connect = require('../connect');
const { DataTypes } = require('sequelize');
const racaModel = connect.define(
    'raca', {
    id_raca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_especie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome_raca: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
}
);

const especieModel = require('./especieModel');
racaModel.belongsTo(especieModel,{foreignKey:id_especie, targetKey: id_especie});

module.exports = racaModel;