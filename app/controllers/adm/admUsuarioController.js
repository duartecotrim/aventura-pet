const usuarioModel = require('../../model/models/usuarioModel');

module.exports = {
    index: async function(req, res)
    {
        const usuarios = await usuarioModel.findAll();
        res.render('adm/usuarios/index', {fileName: "main", usuarios: JSON.stringify(usuarios, null)});
    },
    new: async function(req, res)
    {
        res.render('adm/usuarios/index', {fileName: "new"});
    }
}