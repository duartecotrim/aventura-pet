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
    },
    recuperarConta: function(req, res)
    {
        res.render("login/index", {fileName:"recuperar-conta"});
    },
    recuperar: function(req, res)
    {
        //funcao que verifica se o email esta cadastrado
        //envia um email para o usuario com uma chave para poder inserir nova senha
        //redirecionamento provisorio
        res.render("login/index", {fileName:"nova-senha"});
    },
    novaSenha: function(req,res)
    {
        //funcao que inclui nova senha e reativa o usuario
        //rediereciona para tela de login novamente
        res.redirect('/login');

    }

}