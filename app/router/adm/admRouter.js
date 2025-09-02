const express = require('express');
const admRouter = express.Router();
const admController = require('../../controllers/adm/admController');
const loginAdmValidator = require('../../validator/loginAdmValidator');
const { validationResult } = require('express-validator');

admRouter.get('/adm', function(req, res){
    admController.index(req, res)
});

admRouter.post('/adm/login',
    loginAdmValidator,
    function(req, res, next){
        const errorResult = validationResult(req);
        if(!errorResult.isEmpty()){
            let errorValidator = errorResult.array();
            return admController.index(req, res, errorValidator);
        }
        next();

        admController.dash(req, res);
})

module.exports = admRouter;
