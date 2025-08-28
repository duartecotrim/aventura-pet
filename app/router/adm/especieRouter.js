const express = require('express');
const especieController = require('../../controllers/adm/especieController');

const especieRouter = express.Router();

especieRouter.post('/adm/especie', (req, res) => {
  especieController.create(req, res);
});

especieRouter.get('/adm/especie', (req, res) => {
  especieController.read(req, res);
});

especieRouter.post('/adm/especie/editar/salvar', (req, res) => {
  especieController.edit(req, res);
});

especieRouter.get('/adm/especie/delete/:id', (req, res) => {
  especieController.delete(req, res);
});

module.exports = especieRouter;