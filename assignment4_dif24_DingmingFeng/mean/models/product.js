// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    title: String,
	price: Number,
	instock: Boolean,
	photo: String,
});

// Return model
module.exports = restful.model('Products', productSchema);