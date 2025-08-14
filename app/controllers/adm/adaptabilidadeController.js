const adaptabilidadeController = {
  create: (req, res) => {
    // lógica para criar adaptabilidade
    res.send('adaptabilidade criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar adaptabilidade
    res.send('Lista de adaptabilidade');
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