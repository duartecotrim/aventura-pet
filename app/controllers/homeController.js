module.exports = {
    index:  function(req, res){
        res.render('home/index', {fileName: "main"});
    },
    sobre: function(req, res){
        res.render('home/index', {fileName:'sobre'});
    },
    loja: function(req, res){
        res.render('home/index', {fileName:'marketplace'});
    },
    pets: function(req, res){
        res.render('home/index', {fileName:'pets'});
    }
};

