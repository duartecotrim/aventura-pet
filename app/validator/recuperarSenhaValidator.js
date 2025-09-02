const {checkSchema} = require('express-validator');
const recuperarsenhavalidator = checkSchema({
    emailUsuario:{
        erroMessage: 'Nome de usuario invalido',
        notEmpty: true,
        escape: true,
        trim: true,
        isEmail: true,
        isLength:{
            options:{
                max:50,
                min:4
            }
        }

    }
})

module.exports = recuperarSenhaValidator;