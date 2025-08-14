const express = require('express');
const racaController = require('../../controllers/adm/racaController');

const racaRouter = express.Router();

racaRouter.post('/raca', (req, res) => {
  racaController.create(req, res);
});

racaRouter.get('/raca', (req, res) => {
  racaController.read(req, res);
});

racaRouter.post('/raca/editar/salvar', (req, res) => {
  racaController.edit(req, res);
});

racaRouter.get('/raca/delete/:id', (req, res) => {
  racaController.delete(req, res);
});

module.exports = racaRouter;