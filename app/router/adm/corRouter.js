const express = require('express');
const corController = require('../../controllers/adm/corController');
const { checkSchema, validationResult } = require('express-validator');
const corRouter = express.Router();

corRouter.get('/adm/cor', function (req, res) {
  corController.index(req, res);
});

corRouter.get('/adm/cor/new', function (req, res) {
  corController.new(req, res);
});

corRouter.post('/adm/cor/new-salve',
  checkSchema({
    nomeCor: {
      in: ['body'],
      errorMessage: 'descrição invalida',
      notEmpty: true,
      escape: true,
      trim: true,
      isLength: {
        options: {
          min: 4,
          max: 50
        }
      }
    }
  }),
  function (req, res) {
    
    corController.newSalve(req, res);
});

corRouter.get('/adm/cor/edit/:idCor', function (req, res) {
  corController.edit(req, res);
});

corRouter.post('/adm/cor/edit-salve', function (req, res) {
  corController.editSalve(req, res);
});


corRouter.get('/adm/cor/delete/:idCor', function (req, res) {
  corController.delete(req, res);
});

module.exports = corRouter;