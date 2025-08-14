const express = require('express');
const petController = require('../../controllers/public/petController');

const petRouter = express.Router();

petRouter.post('/pet', (req, res) => {
  petController.create(req, res);
});

petRouter.get('/pet', (req, res) => {
  petController.read(req, res);
});

petRouter.post('/pet/editar/salvar', (req, res) => {
  petController.edit(req, res);
});

petRouter.get('/pet/delete/:id', (req, res) => {
  petController.delete(req, res);
});

module.exports = petRouter;