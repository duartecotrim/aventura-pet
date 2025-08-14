const express = require('express');
const porteController = require('../../controllers/adm/porteController');

const porteRouter = express.Router();

porteRouter.post('/porte', (req, res) => {
  porteController.create(req, res);
});

porteRouter.get('/porte', (req, res) => {
  porteController.read(req, res);
});

porteRouter.post('/porte/editar/salvar', (req, res) => {
  porteController.edit(req, res);
});

porteRouter.get('/porte/delete/:id', (req, res) => {
  porteController.delete(req, res);
});

module.exports = porteRouter;