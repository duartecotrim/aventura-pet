const documentoPetController = {
  create: (req, res) => {
    // lógica para criar documentoPet
    res.send('documentoPet criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar documentoPet
    res.send('Lista de documentoPet');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar documentoPet com o id
    res.send(`documentoPet com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar documentoPet com o id
    res.send(`documentoPet com ID ${id} deletado`);
  }
};

module.exports = documentoPetController;