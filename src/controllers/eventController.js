const mongoose = require('mongoose');
const Event = mongoose.model('Event');

module.exports = {
	async add (req, res){
		const events =  await Event.create(req.body);
		return res.json(events);
	}

		
}