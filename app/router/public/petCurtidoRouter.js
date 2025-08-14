const express = require('express');
const petCurtidoController = require('../../controllers/public/petCurtidoController');

const petCurtidoRouter = express.Router();

petCurtidoRouter.post('/petCurtido', (req, res) => {
  petCurtidoController.create(req, res);
});

petCurtidoRouter.get('/petCurtido', (req, res) => {
  petCurtidoController.read(req, res);
});

petCurtidoRouter.post('/petCurtido/editar/salvar', (req, res) => {
  petCurtidoController.edit(req, res);
});

petCurtidoRouter.get('/petCurtido/delete/:id', (req, res) => {
  petCurtidoController.delete(req, res);
});

module.exports = petCurtidoRouter;