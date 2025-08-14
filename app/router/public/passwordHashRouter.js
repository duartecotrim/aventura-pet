const express = require('express');
const passwordHashController = require('../../controllers/public/passwordHashController');

const passwordHashRouter = express.Router();

passwordHashRouter.post('/passwordHash', (req, res) => {
  passwordHashController.create(req, res);
});

passwordHashRouter.get('/passwordHash', (req, res) => {
  passwordHashController.read(req, res);
});

passwordHashRouter.post('/passwordHash/editar/salvar', (req, res) => {
  passwordHashController.edit(req, res);
});

passwordHashRouter.get('/passwordHash/delete/:id', (req, res) => {
  passwordHashController.delete(req, res);
});

module.exports = passwordHashRouter;