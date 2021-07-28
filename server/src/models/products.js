const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
	id: {
		type: Number,
		index: true,
		unique: true,
        required: true
	},
	name: {
		type: String,
		required: true
	},
	category: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	sold: {
		type: Number,
		required: true,
		min: 0
	}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;