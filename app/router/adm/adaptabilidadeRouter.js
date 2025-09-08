const express = require('express');
const adaptabilidadeController = require('../../controllers/adm/adaptabilidadeController');
const { checkSchema, validationResult } = require('express-validator');
const adaptabilidadeRouter = express.Router();

adaptabilidadeRouter.get('/adm/adaptabilidade', (req, res) => {
  //verificar se o usuario tem permição para acessar a rota
  adaptabilidadeController.index(req, res);
});

adaptabilidadeRouter.get('/adm/adaptabilidade/new', (req, res) => {
  //verificar se o usuario tem permição para acessar a rota
  adaptabilidadeController.new(req, res);
});

adaptabilidadeRouter.post('/adm/adaptabilidade/new-salve',
  checkSchema({
    descAdapt: {
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
     //verificar se o usuario tem permição para acessar a rota
    const errorResult = validationResult(req);
    if (!errorResult.isEmpty()) {
      let errorValidator = errorResult.array();
      if(!req.session.strErrorMsg){
        req.session.strErrorMsg = "";
      }
      req.session.strErrorMsg = errorValidator[0].msg;      
      return res.redirect('/adm/adaptabilidade');
    }
    console.log(req.body);
    adaptabilidadeController.newSave(req, res);
  });

adaptabilidadeRouter.get('/adm/adaptabilidade/edit/:idAdapt',
  checkSchema({
    idAdapt: {
      in: ['params'],
      escape: true,
      notEmpty: true,
      trim: true,
      isNumeric: {
        errorMessage: "o valor tem que ser numerio"
      },
      toInt: true
    }
  }),
  (req, res) => {
    const errorResult = validationResult(req);
    if (!errorResult.isEmpty()) {
      let errorValidator = errorResult.array();
      console.log(errorValidator);
      return adaptabilidadeController.index(req, res, errorValidator);
    }

    adaptabilidadeController.edit(req, res);
  });

adaptabilidadeRouter.post('/adm/adaptabilidade/edit-salve', 
  checkSchema({
    idAdapt: {
      in: ['body'],
      escape: true,
      notEmpty: true,
      trim: true,
      isNumeric: {
        errorMessage: "o valor tem que ser numerio"
      },
      toInt: true
    },
    descAdapt: {
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
 function(req, res){
    const errorResult = validationResult(req);
    if(!errorResult.isEmpty()){
      let errorValidator = errorResult.array();
      return adaptabilidadeController.index(req, res, errorValidator);
    }

    adaptabilidadeController.editSalve(req, res);
  }
)

adaptabilidadeRouter.get('/adm/adaptabilidade/delete/:idAdapt', 
  checkSchema({
    idAdapt: {
      in: ['params'],
      escape: true,
      notEmpty: true,
      trim: true,
      isNumeric: {
        errorMessage: "o valor tem que ser numerio"
      },
      toInt: true
    }
  }),
  
  (req, res) => {
  adaptabilidadeController.delete(req, res);
});

module.exports = adaptabilidadeRouter;