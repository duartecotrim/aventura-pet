const adaptabilidadeModel = require('../../model/models/adaptalidadeModel');

const adaptabilidadeController = {
  index: async (req, res) => {
    const adaptabilidades = await adaptabilidadeModel.findAll();
    const dataAdaptabilidades = JSON.stringify(adaptabilidades, null);
    var msgError = null;
    var msgSucess = null
    //verifica se a variavel de mesagem de erro existe na sessao
    if (req.session.strErrorMsg) {
      //verifica se a variavel tem tamanho de conteudo valido
      if (req.session.strErrorMsg.length != 0) {
        msgError = {
          "class": "error",
          "contentMsg": req.session.strErrorMsg
        }
      }
    }

    if (req.session.strSucessMgs) {
      if (req.session.strSucessMgs.length != 0) {
        msgSucess = {
          "class": "sucess",
          "contentMsg": req.session.strSucessMgs
        }

      }
    }
    // lógica para listar adaptabilidade

    res.render('adm/adaptabilidade/index', {
      fileName: "main",
      data: JSON.parse(dataAdaptabilidades),
      msg: { "msgError": msgError, "msgSucess": msgSucess }
    });

    req.session.strErrorMsg = "";
    req.session.strSucessMgs = "";
  },
  new: (req, res,) => {

    res.render('adm/adaptabilidade/index', { fileName: "new" });
  },
  newSave: async (req, res) => {
    try {
      await adaptabilidadeModel.create({
        descricao_adaptalidade: req.body.descAdapt
      });

      req.session.strSucessMgs = "registro incluido com sucesso!";


    } catch (error) {
      req.session.strErrorMsg = "nao foi possivel inserir, tente novamente!";
      var logError = JSON.parse(JSON.stringify(error, null));
      //salvar log de erro em banco de dados no futuro
      //console.log(JSON.parse(JSON.stringify(error, null)))
    }

    res.redirect("/adm/adaptabilidade");

  },
  edit: async (req, res) => {
    const id = req.params.idAdapt;
    try {
      const adaptabilidade = await adaptabilidadeModel.findAll(
        { where: { id_adaptalidade: id } }
      );
      if (adaptabilidade.length == 0) {
        req.session.strErrorMsg = "nao foi possivel localizar o registro";
        return res.redirect("/adm/adaptabilidade");
      }
      const data = JSON.stringify(adaptabilidade, null);

      return res.render('adm/adaptabilidade/index', { fileName: "edit", "data": JSON.parse(data) });
    } catch (error) {
      req.session.strErrorMsg = "nao foi possivel localizar o registro";

    }

    res.redirect("/adm/adaptabilidade");


  },
  editSalve: async (req, res) => {
    const id = req.body.idAdapt;
    const descAdapt = req.body.descAdapt;
    try {
      await adaptabilidadeModel.update(
        { descricao_adaptalidade: descAdapt },
        { where: { id_adaptalidade: id } }
      );
      req.session.strSucessMgs = "registro atualizado com sucesso!";
    } catch (error) {
      req.session.strErrorMsg = "erro ao atualizar, tente novamente"
      console.log(req.session.strErrorMsg);
    }


    res.redirect('/adm/adaptabilidade');
  },
  delete: async (req, res) => {
    const id = req.params.idAdapt;
    
    try {
      const adaptabilidade = await adaptabilidadeModel.destroy({
        where:{
           id_adaptalidade: id
        }
      });
      req.session.strSucessMgs = "registro deletado com sucesso!";
    } catch (error) {
      req.session.strErrorMsg = "nao foi possivel deletar no momento";
    }

    res.redirect('/adm/adaptabilidade');
    
  }
};

module.exports = adaptabilidadeController;