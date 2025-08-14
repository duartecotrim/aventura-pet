const imagemPetController = {
  create: (req, res) => {
    // lógica para criar imagemPet
    res.send('imagemPet criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar imagemPet
    res.send('Lista de imagemPet');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar imagemPet com o id
    res.send(`imagemPet com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar imagemPet com o id
    res.send(`imagemPet com ID ${id} deletado`);
  }
};

module.exports = imagemPetController;