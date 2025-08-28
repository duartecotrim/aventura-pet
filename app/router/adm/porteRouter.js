const express = require('express');
const porteController = require('../../controllers/adm/porteController');

const porteRouter = express.Router();

porteRouter.post('/adm/porte', (req, res) => {
  porteController.create(req, res);
});

porteRouter.get('/adm/porte', (req, res) => {
  porteController.read(req, res);
});

porteRouter.post('/adm/porte/editar/salvar', (req, res) => {
  porteController.edit(req, res);
});

porteRouter.get('/adm/porte/delete/:id', (req, res) => {
  porteController.delete(req, res);
});

module.exports = porteRouter;