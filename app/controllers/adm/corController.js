const corController = {
  create: (req, res) => {
    // lógica para criar cor
    res.send('cor criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar cor
    res.send('Lista de cor');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar cor com o id
    res.send(`cor com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar cor com o id
    res.send(`cor com ID ${id} deletado`);
  }
};

module.exports = corController;