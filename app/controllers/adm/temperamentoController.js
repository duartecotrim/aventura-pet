const temperamentoController = {
  create: (req, res) => {
    // lógica para criar temperamento
    res.send('temperamento criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar temperamento
    res.send('Lista de temperamento');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar temperamento com o id
    res.send(`temperamento com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar temperamento com o id
    res.send(`temperamento com ID ${id} deletado`);
  }
};

module.exports = temperamentoController;