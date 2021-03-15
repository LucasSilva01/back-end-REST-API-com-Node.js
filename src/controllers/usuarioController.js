const mongoose = require('mongoose');
const Usuario = mongoose.model('User');

module.exports = {
    async insert (req, res){
        const usuarios = await Usuario.create(req.body).then(()=>{
            console.log("Deu certo")
            
        }).catch((err)=>{
            console.log("O erro foi: "+err)
        })
        return res.json(usuarios);
    }
}