/*Criar modelo de usuários*/

const mongoose = require('mongoose')

const PromotorSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
        minlenght: 3,
        maxlenght: 100,
    }, 
    cpf: {
        type: Number,
        require: true,
        min: 11,
        unique: true
    },

    active: {
        type: Boolean,
        default: true,
        required: true
    },

    endereco: {
        cidade: {
            type: String,
            require: true,
            minlenght: 3
        },

        estado:{
            type: String,
            require: true,
            minlenght: 2,
            maxlenght: 2,
        },
    },
    registro: {
        type: Date,
        default: Date.now
    }

});

mongoose.model('Promotor', PromotorSchema);