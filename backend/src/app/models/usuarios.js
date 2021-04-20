/*Criar modelo de usuários*/
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
        minlenght: 3,
        maxlenght: 100,
    }, 
    email: {
        type: String,
        unique:true,
        require: true,
        minlenght: 3,
        maxlenght: 100,
    }, 
    password:{
        type: String,
        require: true,
        minlenght: 8,
        maxlenght: 100,
        select: false,
    },
    cpf: {
        type: Number,
        require: true,
        min: 11,
        unique: true
    },
    active:{
        type: Boolean,
        default: true,
        required: true
    },
    registro: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('User', UserSchema);

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

module.exports = User;
