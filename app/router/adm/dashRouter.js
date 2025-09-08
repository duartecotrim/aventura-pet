const express = require('express');
const dashRouter = express.Router();
const dashController = require('../../controllers/adm/dashController');

dashRouter.get('/adm/dash', function(req, res){
    dashController.index(req, res);
});

module.exports = dashRouter;
