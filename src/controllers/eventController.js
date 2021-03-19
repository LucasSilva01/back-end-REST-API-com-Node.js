const mongoose = require('mongoose');
const Event = mongoose.model('Event');

module.exports = {
	async add (req, res){
		const events =  await Event.create(req.body);
		return res.json(events);
	},

	async listAll (req, res){
		const events = await Event.find(req.params);
		return res.json(events);
	},

	async searchId (req, res){
		const events = await Event.findById(req.params.id);
		return res.json(events);
	},

	async update (req, res){
		const events = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true});
		return res.json(events);

	},

	async delete (req, res){
		const events = await Event.findByIdAndRemove(req.params.id);
		return res.send();
	},

};