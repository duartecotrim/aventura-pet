const express = require('express');
const contatoUsuarioController = require('../../controllers/public/contatoUsuarioController');

const contatoUsuarioRouter = express.Router();

contatoUsuarioRouter.post('/contatoUsuario', (req, res) => {
  contatoUsuarioController.create(req, res);
});

contatoUsuarioRouter.get('/contatoUsuario', (req, res) => {
  contatoUsuarioController.read(req, res);
});

contatoUsuarioRouter.post('/contatoUsuario/editar/salvar', (req, res) => {
  contatoUsuarioController.edit(req, res);
});

contatoUsuarioRouter.get('/contatoUsuario/delete/:id', (req, res) => {
  contatoUsuarioController.delete(req, res);
});

module.exports = contatoUsuarioRouter;