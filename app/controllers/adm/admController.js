module.exports = {
    index: function(req, res, msg = null){
       
        res.render('adm/adm/index', {fileName:"main", msg: msg});
    },
    dash: function(req, res)
    {
        res.render('adm/adm/index', {fileName:"dash"});
    }
}