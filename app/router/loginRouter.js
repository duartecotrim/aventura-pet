const express = require('express');
const loginController = require('../controllers/loginController');
const novaContaController = require('../controllers/novaContaController');
const loginRouter = express.Router();

loginRouter.get('/login', (req, res) => {
  loginController.index(req, res);
});

loginRouter.post('/login/entrar', (req, res) => {
  loginController.entrar(req, res);
});

loginRouter.get('/login/nova-conta', (req, res)=>{
    novaContaController.novaConta(req,res);
});
loginRouter.get('/login/voltar',(req, res)=>{
  //resetar dados de sessao
  loginController.index(req, res);
})


module.exports = loginRouter;