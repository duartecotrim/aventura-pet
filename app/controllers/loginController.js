module.exports = {
    index: function(req, res){
        res.render("login/index",{fileName:"main"});
    },
    novaConta: function(req, res){
        res.render("login/index",{fileName:"boas-vindas"});
    },
    avisos: function(req, res){
        res.render("login/index", {fileName:"avisos"});
    },
     nome: function(req, res){
        res.render("login/index", {fileName:"nome"});
    }
}