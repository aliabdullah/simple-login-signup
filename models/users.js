var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	username: String,
	email: String,
	name: String,
	password: String,
	dateOfBirth: String
});

mongoose.model('users', usersSchema);