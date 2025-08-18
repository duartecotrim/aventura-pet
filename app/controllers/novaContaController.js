module.exports = {
    novaConta: function(req, res){
        res.render("nova-conta/index",{fileName:"boas-vindas"});
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
    preferenciasUser: function(req, res)
    {
        //trazer as caracteristicas cadastrado e manda para o usuario escolher
        res.render("nova-conta/index", {fileName:"preferencia-user"});
    },
    adicionarFoto: function(req, res){

        res.render("nova-conta/index", {fileName:"adicionar-fotos"});
    },
    salvarFotos: function(req, res){
        res. render('aventura-pet', {fileName:"main"});
    }


    
}