var mongoose = require('mongoose');
var Users = mongoose.model('User');


var sendJSONResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.usersCreate = function(req, res) {
	Users.create({
		  name: req.body.name,
		  email: req.body.email,
		  password: req.body.password
	  },
      function(err, location) {
		    if(err) {
			    sendJSONResponse(res, 400, err);
		    } else {
			    sendJSONResponse(res, 201, {
        "nessage": "no user"
      });
		}
	});
};

module.exports.usersReadOne = function(req, res) {
	if(req.params && req.params.id) {
		Users
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
		Users
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
