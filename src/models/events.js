const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		minlenght: 3,
		default: "Teste"
	},
	dateEvent:{
		type: Date,
		require: true,
		default: Date.now
	},

	local:{
		rua: {
			type: String,
			require: true,
			minlenght:3,
			default: "Teste"
		},
		bairro:{
			type: String,
			require: true,
			minlenght: 3,
			default: "Teste"
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
			default: "Teste"
		},
		estado:{
			type: String,
            require: true,
            minlenght: 2,
            maxlenght: 2,
            default: "Te"
		},
		complemento:{
			type: String,
			require: false,
			minlenght: 5,
			maxlenght: 100,
			default: "Teste"
		},

	},
	
	atracao:{
		type:String,
		require:true,
		minlenght: 2,
		default: "Teste"
	},

	tipoEvent:{
		type: String,
		require: true,
		default: "Teste"
	},

	descricao:{
		type: String,
		minlenght: 5,
		maxlenght: 200,
		require: true,
		default: "Teswte"
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

	latitude:{
		type: Number,
		require: true,
		default: 11111
	},


	longitude:{
		type: Number,
		require: true,
		default: 22222,
	},

});

mongoose.model('Event', EventSchema);