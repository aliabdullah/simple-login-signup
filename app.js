var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
	fs.readdirSync(__dirname + '/models').forEach(function(filename) {
		if(~filename.indexOf('.js')) {
			require(__dirname + '/models/' + filename);
		}
	});

	
});