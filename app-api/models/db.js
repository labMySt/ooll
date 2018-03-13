var mongoose = require("mongoose");
var URIooll = "mongodb://localhost:27017/ooll";
mongoose.connect(URIooll);

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
