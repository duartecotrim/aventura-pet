const express = require('express');
const petVisualizadoController = require('../../controllers/public/petVisualizadoController');

const petVisualizadoRouter = express.Router();

petVisualizadoRouter.post('/petVisualizado', (req, res) => {
  petVisualizadoController.create(req, res);
});

petVisualizadoRouter.get('/petVisualizado', (req, res) => {
  petVisualizadoController.read(req, res);
});

petVisualizadoRouter.post('/petVisualizado/editar/salvar', (req, res) => {
  petVisualizadoController.edit(req, res);
});

petVisualizadoRouter.get('/petVisualizado/delete/:id', (req, res) => {
  petVisualizadoController.delete(req, res);
});

module.exports = petVisualizadoRouter;