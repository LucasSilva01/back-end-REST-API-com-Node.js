const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		minlenght: 3,
	},
	dateEvent:{
		type: Date,
		require: true,
	},

	local:{
		rua: {
			type: String,
			require: true,
			minlenght:3,
		},
		bairro:{
			type: String,
			require: true,
			minlenght: 3,
		},
		num:{
			type: String,
			default: "1",
			require: false,
		},
		cidade:{
			type: String,
			require:true,
			minlenght: 3,
		},
		estado:{
			type: String,
            require: true,
            minlenght: 2,
            maxlenght: 2,
		},
		complemento:{
			type: String,
			require: false,
			minlenght: 5,
			maxlenght: 100,
		},

	},
	
	atracao:{
		type:String,
		require:true,
		minlenght: 2,
	},

	tipoEvent:{
		type: String,
		require: true,
	},

	descricao:{
		type: String,
		minlenght: 5,
		maxlenght: 200,
		require: true,
	},
	active: {
        type: Boolean,
        default: true,
        required: true,
    },

	registro: {
	    type: Date,
	    default: Date.now,
	},

	verifica:{
		type:String,
	},

});

mongoose.model('Event', EventSchema);