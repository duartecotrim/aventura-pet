const express = require('express');
const corController = require('../../controllers/adm/corController');

const corRouter = express.Router();

corRouter.post('/cor', (req, res) => {
  corController.create(req, res);
});

corRouter.get('/cor', (req, res) => {
  corController.read(req, res);
});

corRouter.post('/cor/editar/salvar', (req, res) => {
  corController.edit(req, res);
});

corRouter.get('/cor/delete/:id', (req, res) => {
  corController.delete(req, res);
});

module.exports = corRouter;