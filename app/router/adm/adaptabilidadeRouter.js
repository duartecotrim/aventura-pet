const express = require('express');
const adaptabilidadeController = require('../../controllers/adm/adaptabilidadeController');
const adaptabilidadeValidator = require('../../validator/adm/adapdabilidadeValidator');
const { validationResult } = require('express-validator');
const adaptabilidadeRouter = express.Router();


adaptabilidadeRouter.get('/adm/adaptabilidade/new', (req, res) => {
  adaptabilidadeController.create(req, res);
});

adaptabilidadeRouter.get('/adm/adaptabilidade/salvar', (req, res)=>
  adaptabilidadeController.salvar(req, res)
)

adaptabilidadeRouter.get('/adm/adaptabilidade/novo', (req, res) => {
  adaptabilidadeController.create(req, res);
});

adaptabilidadeRouter.get('/adm/adaptabilidade/novo-salvar',
  adaptabilidadeValidator,
  function (req, res, next){
    const errorResult = validationResult(req);
    if (!errorResult.isEmpty()) {
      let errorValidator = errorResult.array();
      return adaptabilidadeController.create(req, res, errorValidator);
    };

    adaptabilidadeController.save(req, res);
});



adaptabilidadeRouter.get('/adm/adaptabilidade', (req, res) => {
  adaptabilidadeController.read(req, res);
});

adaptabilidadeRouter.post('/adm/adaptabilidade/editar/salvar', (req, res) => {
  adaptabilidadeController.edit(req, res);
});

adaptabilidadeRouter.get('/adm/adaptabilidade/delete/:id', (req, res) => {
  adaptabilidadeController.delete(req, res);
});

module.exports = adaptabilidadeRouter;