const petCurtidoController = {
  create: (req, res) => {
    // lógica para criar petCurtido
    res.send('petCurtido criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar petCurtido
    res.send('Lista de petCurtido');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar petCurtido com o id
    res.send(`petCurtido com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar petCurtido com o id
    res.send(`petCurtido com ID ${id} deletado`);
  }
};

module.exports = petCurtidoController;