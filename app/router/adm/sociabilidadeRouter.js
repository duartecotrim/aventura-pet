const express = require('express');
const sociabilidadeController = require('../../controllers/adm/sociabilidadeController');

const sociabilidadeRouter = express.Router();

sociabilidadeRouter.post('/sociabilidade', (req, res) => {
  sociabilidadeController.create(req, res);
});

sociabilidadeRouter.get('/sociabilidade', (req, res) => {
  sociabilidadeController.read(req, res);
});

sociabilidadeRouter.post('/sociabilidade/editar/salvar', (req, res) => {
  sociabilidadeController.edit(req, res);
});

sociabilidadeRouter.get('/sociabilidade/delete/:id', (req, res) => {
  sociabilidadeController.delete(req, res);
});

module.exports = sociabilidadeRouter;