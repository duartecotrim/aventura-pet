const express = require('express');
const documentoPetController = require('../../controllers/public/documentoPetController');

const documentoPetRouter = express.Router();

documentoPetRouter.post('/documentoPet', (req, res) => {
  documentoPetController.create(req, res);
});

documentoPetRouter.get('/documentoPet', (req, res) => {
  documentoPetController.read(req, res);
});

documentoPetRouter.post('/documentoPet/editar/salvar', (req, res) => {
  documentoPetController.edit(req, res);
});

documentoPetRouter.get('/documentoPet/delete/:id', (req, res) => {
  documentoPetController.delete(req, res);
});

module.exports = documentoPetRouter;