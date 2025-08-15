const express = require('express');

const novaContaController = require('../controllers/novaContaController');
const novaContaRouter = express.Router();



novaContaRouter.get('/nova-conta', (req, res)=>{
    novaContaController.novaConta(req,res);
});

novaContaRouter.get('/nova-conta/avisos', (req, res)=>{
    novaContaController.avisos(req,res);
});

novaContaRouter.get('/nova-conta/nome', (req, res)=>{
    //salvar dados na session
    novaContaController.nome(req,res);
});

novaContaRouter.post('/nova-conta/contato',(req, res)=>{
    //salvar dados na session
    novaContaController.contato(req,res);
});

novaContaRouter.post('/nova-conta/fazer-oque',(req, res)=>{
    //salvar dados na session
    novaContaController.fazerOque(req,res);
});

novaContaRouter.post('/nova-conta/fazer',(req, res)=>{
    //salvar dados na session
    novaContaController.fazer(req,res);
});

module.exports = novaContaRouter;