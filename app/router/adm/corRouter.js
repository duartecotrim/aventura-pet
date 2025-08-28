const express = require('express');
const corController = require('../../controllers/adm/corController');

const corRouter = express.Router();

corRouter.post('/adm/cor', (req, res) => {
  corController.create(req, res);
});

corRouter.get('/adm/cor', (req, res) => {
  corController.read(req, res);
});

corRouter.post('/adm/cor/editar/salvar', (req, res) => {
  corController.edit(req, res);
});

corRouter.get('/adm/cor/delete/:id', (req, res) => {
  corController.delete(req, res);
});

module.exports = corRouter;