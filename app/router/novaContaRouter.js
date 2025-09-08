const express = require('express');
const novaContaController = require('../controllers/novaContaController');
const aventuraPetController = require('../controllers/aventuraPetController');
const novaContaRouter = express.Router();
const { checkSchema, validationResult } = require('express-validator');

const myValidationResult = validationResult.withDefaults({
    formatter: (error) => {
        return {
            campo: error.path,
            msg: error.msg
        }
    }
});
novaContaRouter.get('/nova-conta', function (req, res) {
    novaContaController.novaConta(req, res);
});

novaContaRouter.get('/nova-conta/avisos', function (req, res) {
    novaContaController.avisos(req, res);
});

novaContaRouter.get('/nova-conta/nome', function (req, res) {
    novaContaController.nome(req, res);
});

novaContaRouter.post('/nova-conta/contato',
    checkSchema({
        nome: {
            in: ['body'],
            escape: true,
            trim: true,
            errorMessage: "nome invalido tente novamente",
            notEmpty: true,
            isLength: {
                options: {
                    min: 4,
                    max: 100
                }
            }
        }
    }),
    function (req, res) {
        //console.log(req.body)
        const errorResult = validationResult(req);
        if (!errorResult.isEmpty()) {
            let errorValidator = errorResult.array();
            if (!req.session.strErrorMsg) {
                req.session.strErrorMsg = "";
            }
            req.session.strErrorMsg = errorValidator[0].msg;
            return res.redirect('/nova-conta');
        }

        if (!req.session.newAccount) {
            req.session.newAccount = [];
        }
        req.session.newAccount.push({ name: req.body.nome });
        novaContaController.contato(req, res);
    }
);

novaContaRouter.post('/nova-conta/oque-fazer',
    checkSchema({
        telefone: {
            in: ['body'],
            errorMessage: "telefone invalido",
            trim: true,
            escape: true,
            notEmpty: true,
            isNumeric: true,
            isLength: {
                options: {
                    min: 11,
                    max: 20
                }
            }
        },
        email: {
            in: ['body'],
            errorMessage: "email invalido",
            trim: true,
            escape: true,
            notEmpty: true,
            isEmail: true,
            isLength: {
                options: {
                    max: 100
                }
            }
        },
        cep: {
            in: ['body'],
            errorMessage: "cep invalido",
            trim: true,
            escape: true,
            notEmpty: true,
            isNumeric: true,
            isLength: {
                options: {
                    min: 8,
                    max: 8
                }
            }
        }
    }),
    function (req, res) {
        const errorResult = myValidationResult(req);
        if (!errorResult.isEmpty()) {
            if (!req.session.strErrorMsg) {
                req.session.strErrorMsg = "";
            }
            req.session.strErrorMsg = "campos invalido tente novamente";
            return res.redirect('/nova-conta');
        }

        req.session.newAccount.push({
            contato: {
                telefone: req.body.telefone,
                email: req.body.email,
                cep: req.body.cep
            }
        });
        novaContaController.oqueFazer(req, res);
    });

novaContaRouter.post('/nova-conta/fazer',
    checkSchema({
        opcao: {
            in: ['body'],
            trim: true,
            escape: true,
            isIn: {
                options: [[0, 1]],
                errorMessage: "opcao invalida",
                bail:true
            }
        }
    }),
    function (req, res) {
         const errorResult = myValidationResult(req);
         if (!errorResult.isEmpty()) {
            if (!req.session.strErrorMsg) {
                req.session.strErrorMsg = "";
            }
            req.session.strErrorMsg = "opção invalida tente novamente";
            return res.redirect('/nova-conta');
        }

        req.session.newAccount.push({optionUser: req.body.opcao});

        novaContaController.preferenciasUser(req, res);
        //salvar dados na session
        //VERIFICAR SE O USUARIO QUER ADOTAR OU DOAR
        //SE QUER ADOTAR é direcionado direto para a pagina principal
        //nao pode estar vazio

        /*if (typeof req.body.adotar != 'undefined') {
            novaContaController.preferenciasUser(req, res)
        }
    
        if (typeof req.body.doar != 'undefined') {
            novaContaController.doar(req, res);
        }*/

        //se doar continua o fluxo de cadastro

    });

novaContaRouter.post('/nova-conta/buscar-por-preferencia', function (req, res) {
    //salva as preferencia do usuario e direciona para a pagina principal
    aventuraPetController.index(req, res)
});

novaContaRouter.post('/nova-conta/caracteristica-pet', function (req, res) {
    //salvar
    //direcionar para o controler de adiciar fotos
    novaContaController.adicionarFoto(req, res);
});

novaContaRouter.post('/nova-conta/salvar-fotos', function (req, res) {
    novaContaController.salvarFotos(req, res);
})

module.exports = novaContaRouter;