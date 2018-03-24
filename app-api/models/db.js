var mongoose = require("mongoose");

var URIooll = "mongodb://localhost:27017/ooll";
mongoose.connect(URIooll);

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + URIooll);
});

mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});

process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});

process.on('SIGTERM', function() {
	gracefulShutdown('app shutdown', function() {
		process.exit(0);
	});
});

var gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};
// var Schema = mongoose.Schema;
//
// var userSchema = new Schema({
//   name: String,
//   email: String,
//   password: String
// })
//
// mongoose.connect(URIooll);
//
// var User = mongoose.model("User", userSchema);
// var user = new User({
//   name: "John",
//   email: "a@gmail.com",
//   password: "1234"
// });
//
// User.find({}, function(err, doc){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log(doc);
// });
require('./user');
