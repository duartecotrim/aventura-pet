const connect = require('../connect');
const { DataTypes } = require('sequelize');

const caractersticaPetModel = connect.define(
    'preferencia_usuario',
    {
        id_preferencia_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_sociabilidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_adaptalidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_temperamento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cor_olhos_id_cor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cor_pelagem_id_cor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_porte: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_raca: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_especie: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
    freezeTableName: true,
    timestamps: false
}
);


const sociabilidadeModel = require('./sociabilidadeModel');
const adaptalidadeModel = require('./adaptalidadeModel');
const temperamentoModel = require('./temperamentoModel');
const corModel = require('./corModel');
const porteModel = require('./porteModel');
const racaModel = require('./racaModel');
const especieModel = require('./especieModel');



caractersticaPetModel.belongsTo(sociabilidadeModel,{foreignKey:id_sociabilidade});
caractersticaPetModel.belongsTo(adaptalidadeModel,{foreignKey:id_adaptalidade});
caractersticaPetModel.belongsTo(temperamentoModel,{foreignKey:id_temperamento});
caractersticaPetModel.belongsTo(corModel,{foreignKey:cor_olhos_id_cor});
caractersticaPetModel.belongsTo(corModel,{foreignKey:cor_pelagem_id_cor});
caractersticaPetModel.belongsTo(porteModel,{foreignKey:id_porte});
caractersticaPetModel.belongsTo(racaModel,{foreignKey:id_raca});
caractersticaPetModel.belongsTo(especieModel,{foreignKey:id_especie});

module.exports = caractersticaPetModel