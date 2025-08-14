const cuidadoVeterinarioController = {
  create: (req, res) => {
    // lógica para criar cuidadoVeterinario
    res.send('cuidadoVeterinario criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar cuidadoVeterinario
    res.send('Lista de cuidadoVeterinario');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar cuidadoVeterinario com o id
    res.send(`cuidadoVeterinario com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar cuidadoVeterinario com o id
    res.send(`cuidadoVeterinario com ID ${id} deletado`);
  }
};

module.exports = cuidadoVeterinarioController;