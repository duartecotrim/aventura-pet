const express = require('express');
const adaptabilidadeController = require('../../controllers/adm/adaptabilidadeController');

const adaptabilidadeRouter = express.Router();

adaptabilidadeRouter.get('/adm/adaptabilidade/new', (req, res) => {
  adaptabilidadeController.create(req, res);
});

adaptabilidadeRouter.get('/adm/adaptabilidade/salvar', (req, res)=>
  adaptabilidadeController.salvar
)

adaptabilidadeRouter.get('/adm/adaptabilidade', (req, res) => {
  adaptabilidadeController.read(req, res);
});

adaptabilidadeRouter.post('/adm/adaptabilidade/editar/salvar', (req, res) => {
  adaptabilidadeController.edit(req, res);
});

adaptabilidadeRouter.get('/adm/adaptabilidade/delete/:id', (req, res) => {
  adaptabilidadeController.delete(req, res);
});

module.exports = adaptabilidadeRouter;