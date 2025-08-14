const express = require('express');
const especieController = require('../../controllers/adm/especieController');

const especieRouter = express.Router();

especieRouter.post('/especie', (req, res) => {
  especieController.create(req, res);
});

especieRouter.get('/especie', (req, res) => {
  especieController.read(req, res);
});

especieRouter.post('/especie/editar/salvar', (req, res) => {
  especieController.edit(req, res);
});

especieRouter.get('/especie/delete/:id', (req, res) => {
  especieController.delete(req, res);
});

module.exports = especieRouter;