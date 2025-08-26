const express = require('express');
const loginRouter = express.Router();
const loginController = require('../controllers/loginController');
const novaContaController = require('../controllers/novaContaController');
const loginValidator = require('../validatior/loginValidator');
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
})


module.exports = loginRouter;