const racaController = {
  create: (req, res) => {
    // lógica para criar raca
    res.send('raca criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar raca
    res.send('Lista de raca');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar raca com o id
    res.send(`raca com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar raca com o id
    res.send(`raca com ID ${id} deletado`);
  }
};

module.exports = racaController;