const express = require('express');
const imagemPetController = require('../../controllers/public/imagemPetController');

const imagemPetRouter = express.Router();

imagemPetRouter.post('/imagemPet', (req, res) => {
  imagemPetController.create(req, res);
});

imagemPetRouter.get('/imagemPet', (req, res) => {
  imagemPetController.read(req, res);
});

imagemPetRouter.post('/imagemPet/editar/salvar', (req, res) => {
  imagemPetController.edit(req, res);
});

imagemPetRouter.get('/imagemPet/delete/:id', (req, res) => {
  imagemPetController.delete(req, res);
});

module.exports = imagemPetRouter;