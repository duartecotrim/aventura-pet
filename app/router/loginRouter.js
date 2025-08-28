const express = require('express');
const loginRouter = express.Router();
const loginController = require('../controllers/loginController');
const novaContaController = require('../controllers/novaContaController');
const loginValidator = require('../validator/loginValidator');
const aventuraPet = require('../controllers/aventuraPetController');
const {validationResult} = require('express-validator');
const aventuraPetController = require('../controllers/aventuraPetController');

loginRouter.get('/login', (req, res) => {
  loginController.index(req, res);
});

loginRouter.post('/login/entrar',
  loginValidator,
  function (req, res, next){
    const errorResult = validationResult(req);
    
    if(!errorResult.isEmpty()){
      let errorValidator = errorResult.array();
      return loginController.index(req, res, errorValidator);
    }
    next();

  aventuraPetController.index(req, res);
});

loginRouter.get('/login/nova-conta', (req, res)=>{
    novaContaController.novaConta(req,res);
});
loginRouter.get('/login/voltar',(req, res)=>{
  //resetar dados de sessao
  loginController.index(req, res);
});

loginRouter.get('/login/recuperar-conta', function(req, res){
  loginController.recuperarConta(req, res);
});

loginRouter.post('/login/recuperar', function(req, res){
  loginController.recuperar(req, res);
});

loginRouter.post('/login/nova-senha', function(req,res){
    loginController.novaSenha(req,res);
})


module.exports = loginRouter;