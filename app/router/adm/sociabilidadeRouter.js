const express = require('express');
const sociabilidadeController = require('../../controllers/adm/sociabilidadeController');

const sociabilidadeRouter = express.Router();

sociabilidadeRouter.post('/adm/sociabilidade', (req, res) => {
  sociabilidadeController.create(req, res);
});

sociabilidadeRouter.get('/adm/sociabilidade', (req, res) => {
  sociabilidadeController.read(req, res);
});

sociabilidadeRouter.post('/adm/sociabilidade/editar/salvar', (req, res) => {
  sociabilidadeController.edit(req, res);
});

sociabilidadeRouter.get('/adm/sociabilidade/delete/:id', (req, res) => {
  sociabilidadeController.delete(req, res);
});

module.exports = sociabilidadeRouter;