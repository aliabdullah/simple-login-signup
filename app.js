var mongoose = require('mongoose');
var fs = require('fs');
var readlineSync = require('readline-sync');
mongoose.connect('mongodb://localhost/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	fs.readdirSync(__dirname + '/models').forEach(function(filename) {
		if(~filename.indexOf('.js')) {
			require(__dirname + '/models/' + filename);
		}
	});
	var choice = '0';
	while(choice !== '4') {
		console.log("1- New Here! Sign up.\n" +
					"2- Already Have an account, Login.\n" +
					"3- Show Usernames\n" + 
					"4- Exit\n");

		var choice = readlineSync.question("Choice: ");
		if(choice === '1') {
			
		} else if(choice === '2') {

		} else if(choice === '3') {

		} else if(choice === '4') {

		} else {
				console.log("\nerror, wrong choice\n");
		}
	};
	/*
	var promptUserSchema = {
		properties: {
			name: {
				description: 'Your name',
				type: 'string',
				required: true
			},
			username: {
				description: 'Username',	
				required: true
			},
			email: String,
			name: String,
			password: String,
			dateOfBirth: String
		}
	};
	*/
});
