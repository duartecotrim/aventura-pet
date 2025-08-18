const express = require('express');

const novaContaController = require('../controllers/novaContaController');
const aventuraPetController = require('../controllers/aventuraPetController');
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

novaContaRouter.post('/nova-conta/oque-fazer',(req, res)=>{
    //salvar dados na session
    novaContaController.oqueFazer(req,res);
});

novaContaRouter.post('/nova-conta/fazer',(req, res)=>{
    //salvar dados na session
    //VERIFICAR SE O USUARIO QUER ADOTAR OU DOAR
    //SE QUER ADOTAR é direcionado direto para a pagina principal
    //nao pode estar vazio
    
    if(typeof req.body.adotar != 'undefined')
    {
        novaContaController.preferenciasUser(req, res)
    }

    if(typeof req.body.doar != 'undefined')
    {
        novaContaController.doar(req,res);
    }

//se doar continua o fluxo de cadastro
    
});

novaContaRouter.post('/nova-conta/buscar-por-preferencia', function(req, res){
    //salva as preferencia do usuario e direciona para a pagina principal
    aventuraPetController.index(req, res)
});

novaContaRouter.post('/nova-conta/caracteristica-pet', function(req, res){
    //salvar
    //direcionar para o controler de adiciar fotos
    novaContaController.adicionarFoto(req, res);
});

novaContaRouter.post('/nova-conta/salvar-fotos', function(req, res){
    novaContaController.salvarFotos(req, res);
})

module.exports = novaContaRouter;