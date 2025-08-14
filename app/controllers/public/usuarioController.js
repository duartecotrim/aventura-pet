const usuarioController = {
  create: (req, res) => {
    // lógica para criar usuario
    res.send('usuario criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar usuario
    res.send('Lista de usuario');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar usuario com o id
    res.send(`usuario com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar usuario com o id
    res.send(`usuario com ID ${id} deletado`);
  }
};

module.exports = usuarioController;