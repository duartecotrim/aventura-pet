module.exports = {
    index: function(req, res, errorValidator = null){
        let msg = [];
        if(errorValidator != null)
        {
            errorValidator.forEach(error =>{
                msg.push({"menssagem":error.msg});
            })
        }
       
        res.render("login/index",{fileName:"main", msgErrors: msg});
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