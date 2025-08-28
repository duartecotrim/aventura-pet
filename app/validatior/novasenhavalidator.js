const {checkSchema} = require('express-validator');
const novasenhavalidator = checkSchema({
    password:{
        erroMessage: 'Senha Invalida',
        notEmpty: true,
        escape: true,
        trim: true,
        isLength:{
            options:{
                min:4
            }
        }
    },
    password1:{
    erroMessage: 'Senha Invalida novamente',
    notEmpty: true,
    escape: true,
    trim: true,
    isLength:{
        options:{
            min:4
        }
    }
}
})

module.exports = novasenhavalidator;