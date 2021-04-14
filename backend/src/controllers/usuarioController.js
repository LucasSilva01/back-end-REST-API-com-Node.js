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
    },

    async index(req, res){
        const usuarios = await Usuario.find(req.params);
        return res.json(usuarios);
    },

    async details(req, res){
        const usuarios = await Usuario.findById(req.params.id).then(()=>{
            console.log("Deu certo")
        }).catch((err)=>{
            console.log("O erro foi: "+err)
        })
        return res.json(usuarios);
    },

    async update(req, res){
        const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(()=>{
            console.log("Deu certo")
        }).catch((err)=>{
            console.log("O erro foi: "+err)
        })
        return res.json(usuarios);
    },

    async delete(req, res){
        await Usuario.findByIdAndRemove(req.params.id).then(()=>{
            console.log("deletado");
        }).catch((err)=>{
            console.log("O erro foi: "+err)
        })
        return res.send();
    }

}