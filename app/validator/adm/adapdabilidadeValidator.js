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
    }
});

module.exports = adaptabilidadeValidator;