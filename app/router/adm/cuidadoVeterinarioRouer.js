const express = require('express');
const cuidadoVeterinarioController = require('../../controllers/adm/cuidadoVeterinarioController');

const cuidadoVeterinarioRouter = express.Router();

cuidadoVeterinarioRouter.post('/adm/cuidadoVeterinario', (req, res) => {
  cuidadoVeterinarioController.create(req, res);
});

cuidadoVeterinarioRouter.get('/adm/cuidadoVeterinario', (req, res) => {
  cuidadoVeterinarioController.read(req, res);
});

cuidadoVeterinarioRouter.post('/adm/cuidadoVeterinario/editar/salvar', (req, res) => {
  cuidadoVeterinarioController.edit(req, res);
});

cuidadoVeterinarioRouter.get('/adm/cuidadoVeterinario/delete/:id', (req, res) => {
  cuidadoVeterinarioController.delete(req, res);
});

module.exports = cuidadoVeterinarioRouter;