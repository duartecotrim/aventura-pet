const especieController = {
  create: (req, res) => {
    // lógica para criar especie
    res.send('especie criado com sucesso');
  },

  read: (req, res) => {
    // lógica para listar especie
    res.send('Lista de especie');
  },

  edit: (req, res) => {
    const { id } = req.params;
    // lógica para editar especie com o id
    res.send(`especie com ID ${id} editado`);
  },

  delete: (req, res) => {
    const { id } = req.params;
    // lógica para deletar especie com o id
    res.send(`especie com ID ${id} deletado`);
  }
};

module.exports = especieController;