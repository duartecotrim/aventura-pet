const express = require('express');
const temperamentoController = require('../../controllers/adm/temperamentoController');

const temperamentoRouter = express.Router();

temperamentoRouter.post('/temperamento', (req, res) => {
  temperamentoController.create(req, res);
});

temperamentoRouter.get('/temperamento', (req, res) => {
  temperamentoController.read(req, res);
});

temperamentoRouter.post('/temperamento/editar/salvar', (req, res) => {
  temperamentoController.edit(req, res);
});

temperamentoRouter.get('/temperamento/delete/:id', (req, res) => {
  temperamentoController.delete(req, res);
});

module.exports = temperamentoRouter;