const express = require('express');
const caracteristicaPetController = require('../../controllers/public/caracteristicaPetController');

const caracteristicaPetRouter = express.Router();

caracteristicaPetRouter.post('/caracteristicaPet', (req, res) => {
  caracteristicaPetController.create(req, res);
});

caracteristicaPetRouter.get('/caracteristicaPet', (req, res) => {
  caracteristicaPetController.read(req, res);
});

caracteristicaPetRouter.post('/caracteristicaPet/editar/salvar', (req, res) => {
  caracteristicaPetController.edit(req, res);
});

caracteristicaPetRouter.get('/caracteristicaPet/delete/:id', (req, res) => {
  caracteristicaPetController.delete(req, res);
});

module.exports = caracteristicaPetRouter;