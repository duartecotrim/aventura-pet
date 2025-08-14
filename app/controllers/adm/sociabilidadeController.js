const sociabilidadeController = {
  create: (req, res) => {
    // lógica para criar sociabilidade
    res.send('sociabilidade criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar sociabilidade
    res.send('Lista de sociabilidade');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar sociabilidade com o id
    res.send(`sociabilidade com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar sociabilidade com o id
    res.send(`sociabilidade com ID ${id} deletado`);
  }
};

module.exports = sociabilidadeController;