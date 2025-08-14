const express = require('express');
const adaptabilidadeController = require('../../controllers/adm/adaptabilidadeController');

const adaptabilidadeRouter = express.Router();

adaptabilidadeRouter.post('/adaptabilidade', (req, res) => {
  adaptabilidadeController.create(req, res);
});

adaptabilidadeRouter.get('/adaptabilidade', (req, res) => {
  adaptabilidadeController.read(req, res);
});

adaptabilidadeRouter.post('/adaptabilidade/editar/salvar', (req, res) => {
  adaptabilidadeController.edit(req, res);
});

adaptabilidadeRouter.get('/adaptabilidade/delete/:id', (req, res) => {
  adaptabilidadeController.delete(req, res);
});

module.exports = adaptabilidadeRouter;