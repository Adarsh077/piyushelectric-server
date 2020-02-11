const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WorkSchema = require("./Schemas/Work");
const AddressSchema = require("./Schemas/Address");

const ClientsSchema = new Schema({
	date: {
		type: String,
		required: true
	},

	name: {
		type: String,
		required: true
	},

	address: {
		type: AddressSchema,
		required: true
	},

	mobile: {
		type: Number,
		required: true
	},

	work: {
		type: [WorkSchema],
		default: []
	}
})

module.exports = mongoose.model('clients', ClientsSchema);