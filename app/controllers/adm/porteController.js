const porteController = {
  create: (req, res) => {
    // lógica para criar porte
    res.send('porte criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar porte
    res.send('Lista de porte');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar porte com o id
    res.send(`porte com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar porte com o id
    res.send(`porte com ID ${id} deletado`);
  }
};

module.exports = porteController;