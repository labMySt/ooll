var mongoose = require('mongoose');
var User = mongoose.model("Users");
var jwt = require('jsonwebtoken');
var GetToken = require("../auth/generateToken");
var verifyToken = require("../auth/verifyToken");

var sendJSONResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.usersCreate = function(req, res) {
	const newUser = {
		  name: req.body.name,
		  email: req.body.email,
		  password: req.body.password
	  };
	User.create(newUser, function(err, user) {
		    if(err) {
			    sendJSONResponse(res, 400, err);
		    } else {
				 const token = GetToken(newUser);
			    sendJSONResponse(res, 201, {token: token});
		}
	});

}

module.exports.usersReadOne = function(req, res) {
	// jwt.verify(req.token,'SICRET_KEY', function(err, done){
  //   if(err){
  //     res.status(500).send();
  //   }
  //   else {

	if(req.params && req.params.id) {
		User
		.findById(req.params.id)
		.exec(function(err, location) {
			if(!location) {
				sendJSONResponse(res, 404, {
					"message": "location not found"
				});
				return;
			} else if(err) {
				sendJSONResponse(res, 404, err);
				return;
			}

			sendJSONResponse(res, 200, location);
		});
	} else {
		sendJSONResponse(res, 404, {
			"message": "No id"
		});
	}
// }
// });
}

module.exports.usersUpdateOne = function(req, res) {
	if(!req.params.id) {
		sendJSONResponse(res, 404, {
			"message": "no user"
		});
		return;
	}
	User.findByIdAndUpdate(req.params.id, { $set: {
    name: req.body.name,
    email : req.body.email,
    password: req.body.password
  }}, {new: true},function(err, user){
    if(err) {
      sendJSONResponse(res, 404, err);
    } else {
      sendJSONResponse(res, 200, user);
    }
  });
}

module.exports.usersDeleteOne = function(req, res) {
	var id = req.params.id;
	if(id) {
		User
			.findByIdAndRemove(id)
			.exec(function(err, location) {
				if(err) {
					sendJSONResponse(res, 404, err);
					return;
				}
				sendJSONResponse(res, 204, null);
			})
	} else {
		sendJSONResponse(res, 404, {
			"message": "No user"
		});
	}
};
