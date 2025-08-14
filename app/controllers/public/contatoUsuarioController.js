const contatoUsuarioController = {
  create: (req, res) => {
    // lógica para criar contatoUsuario
    res.send('contatoUsuario criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar contatoUsuario
    res.send('Lista de contatoUsuario');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar contatoUsuario com o id
    res.send(`contatoUsuario com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar contatoUsuario com o id
    res.send(`contatoUsuario com ID ${id} deletado`);
  }
};

module.exports = contatoUsuarioController;