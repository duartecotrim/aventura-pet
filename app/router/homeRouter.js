const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/homeController');

homeRouter.get('/', function(req, res){
    homeController.index(req,res);
});
homeRouter.get('/home/sobre', function(req, res){
    homeController.sobre(req,res);
});
homeRouter.get('/home/loja', function(req, res){
     homeController.loja(req,res);
});
homeRouter.get('/home/pets', function(req, res){
     homeController.pets(req,res);
})

module.exports = homeRouter;