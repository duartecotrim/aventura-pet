//const adaptabilidadeModel = require('../../model/models/adaptalidadeModel');

const adaptabilidadeController = {

  create: (req, res, errorValidator = null) => {
    var msg = [];
    if (errorValidator != null) {
      errorValidator.forEach(error => {
        msg.push({ "messagem": error.msg });
      });
    }
    res.render('adm/adaptabilidade/index', { fileName: "new", msgErrors: msg });
  },
  save: async (req, res) => {
  },

  read: async (req, res) => {
    //const adaptabilidades = await adaptabilidadeModel.findAll();
    //const dataAdaptabilidades = JSON.stringify(adaptabilidades, null);
    // lógica para listar adaptabilidade
    res.render('adm/adaptabilidade/index', { fileName: "main"/*, data: dataAdaptabilidades*/ });
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar adaptabilidade com o id
    res.send(`adaptabilidade com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar adaptabilidade com o id
    res.send(`adaptabilidade com ID ${id} deletado`);
  }
};

module.exports = adaptabilidadeController;