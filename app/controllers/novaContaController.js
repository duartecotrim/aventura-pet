const especieModel = require('../model/models/especieModel');
const racasModel = require('../model/models/racaModel');
const corModel = require('../model/models/corModel');

module.exports = {
    novaConta: function(req, res){
        
        res.render("nova-conta/index",{fileName:"boas-vindas"});
        req.session.strErrorMsg = "";
    },
    avisos: function(req, res){
        res.render("nova-conta/index", {fileName:"avisos"});
    },
    nome: function(req, res){
        res.render("nova-conta/index", {fileName:"nome"});
    },
    contato: function(req, res){
     
        res.render("nova-conta/index", {fileName:"contato"});
    },
    especie: function(req, res){
        //mandar dados de especie padrao cadastrado no sistema
        res.render("nova-conta/index", {fileName:"especie"});
    },
    oqueFazer: function(req, res){
        
        res.render("nova-conta/index", {fileName:"oque-fazer"});
    },
     doar: function(req, res){
        //direcionar o usuario dependendo da escolha
        //doar continua o cadasto
        //adotar e direcionado para o index da aplicacao
        res.render("nova-conta/index", {fileName:"caracteristica-pet"});
    },
    preferenciasUser: async function(req, res)
    {        
        let newAccount = req.session.newAccount;        
        newAccount.forEach(item =>{
            nameUser = item.name;
            contact = item.contato;
            optionUser = Number(item.optionUser);
        });

        
        switch (optionUser) {
            case 0:
                const cores = await corModel.findAll();
                const especies = await especieModel.findAll();                
                res.render("nova-conta/index", {
                    fileName: "preferencia-user", 
                    "especies": JSON.parse(JSON.stringify(especies, null)),
                    "cores": JSON.parse(JSON.stringify(cores, null))
                });
                break;
        
            case 1:
                
                break;
        
        }
        
        //trazer as caracteristicas cadastrado e manda para o usuario escolher
        //res.render("nova-conta/index", {fileName:"preferencia-user"});
    },
    adicionarFoto: function(req, res){

        res.render("nova-conta/index", {fileName:"adicionar-fotos"});
    },
    salvarFotos: function(req, res){
        res. render('aventura-pet', {fileName:"main"});
    },

    buscarRacas: async function(req, res){
        const racas = await racasModel.findAll({where:{id_especie: req.params.idEspecie}});
        
        res.send({racas: JSON.parse(JSON.stringify(racas, null))}).end();
    }


    
}