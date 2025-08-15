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
    fazerOque: function(req, res){
        
        res.render("nova-conta/index", {fileName:"fazerOque"});
    },
     fazer: function(req, res){
        //direcionar o usuario dependendo da escolha
        //doar continua o cadasto
        //adotar e direcionado para o index da aplicacao
        res.render("nova-conta/index", {fileName:"fazerOque"});
    }
}