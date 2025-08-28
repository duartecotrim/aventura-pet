const express = require('express');
const admUsuarioRouter = express.Router();
const admUsuatioController = require('../../controllers/adm/admUsuarioController');

admUsuarioRouter.get('/adm/usuario', function(req, res)
{
    admUsuatioController.index(req, res);
})
