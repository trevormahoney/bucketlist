var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	email: {
		type: String,
		unique: true, //makes it so this cant let people use the same email
		lowercase: true
	},
	password: String
});
var model = mongoose.model('user', userSchema);

module.exports = model;