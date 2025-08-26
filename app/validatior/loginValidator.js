const {checkSchema} = require('express-validator');
const loginValidator = checkSchema({
    useremail:{
        errorMessage: 'Nome de usuario invalido',
        notEmpty: true,
        escape: true,
        trim: true,
        isEmail:true,
        isLength:{
            options:{
                max:50,
                min:4
            }
        }
    },
    password:{
        errorMessage: 'senha Invalida',
        notEmpty: true,
        escape: true,
        trim: true,
        isLength:{
            options:{
                min:4
            }
        }
    }
});

module.exports = loginValidator;