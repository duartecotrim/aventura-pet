const express = require('express');
const usuarioController = require('../../controllers/public/usuarioController');

const usuarioRouter = express.Router();

usuarioRouter.post('/usuario', (req, res) => {
  usuarioController.create(req, res);
});

usuarioRouter.get('/usuario', (req, res) => {
  usuarioController.read(req, res);
});

usuarioRouter.post('/usuario/editar/salvar', (req, res) => {
  usuarioController.edit(req, res);
});

usuarioRouter.get('/usuario/delete/:id', (req, res) => {
  usuarioController.delete(req, res);
});

module.exports = usuarioRouter;