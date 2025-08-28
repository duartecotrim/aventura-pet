const usuarioModel = require('../../model/models/usuarioModel');

module.exports = {
    index: async function(req, res)
    {
        const usuarios = usuarioModel.findAll();
        res.render('adm/usuarios/index', {fileName: "main", usuarios: JSON.stringify(usuarios, null)});
    }
}