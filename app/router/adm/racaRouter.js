const express = require('express');
const racaController = require('../../controllers/adm/racaController');

const racaRouter = express.Router();

racaRouter.post('/adm/raca', (req, res) => {
  racaController.create(req, res);
});

racaRouter.get('/adm/raca', (req, res) => {
  racaController.read(req, res);
});

racaRouter.post('/adm/raca/editar/salvar', (req, res) => {
  racaController.edit(req, res);
});

racaRouter.get('/adm/raca/delete/:id', (req, res) => {
  racaController.delete(req, res);
});

module.exports = racaRouter;