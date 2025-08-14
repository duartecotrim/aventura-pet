const caracteristicaPetController = {
  create: (req, res) => {
    // lógica para criar caracteristicaPet
    res.send('caracteristicaPet criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar caracteristicaPet
    res.send('Lista de caracteristicaPet');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar caracteristicaPet com o id
    res.send(`caracteristicaPet com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar caracteristicaPet com o id
    res.send(`caracteristicaPet com ID ${id} deletado`);
  }
};

module.exports = caracteristicaPetController;