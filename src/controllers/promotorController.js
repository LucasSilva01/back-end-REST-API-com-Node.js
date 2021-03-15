const mongoose = require('mongoose');
const Promotor = mongoose.model('Promotor');

module.exports = {
    async insert (req, res){
        const promotores = await Promotor.create(req.body);
        return res.json(usuarios);
    }
}