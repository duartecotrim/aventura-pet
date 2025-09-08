const { checkSchema } = require('express-validator');
const adaptabilidadeValidator = checkSchema({
    descricaoAdaptabilidade: {
      errorMessage: 'descrição invalida',
        notEmpty: true,
        escape: true,
        isLength: {
            options: {
                min: 4,
                max: 50
            }
        }
    },
    idAdapt:{
        in:['params'],
        isNumeric:{
            errorMessage: "o valor tem que ser numerio"
        },
        toInt: true
    }
});

module.exports = adaptabilidadeValidator;