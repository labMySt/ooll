var mongoose = require('mongoose');
var User = require('../models/user');

var sendJSONResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.usersCreate = function(req, res) {

	if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
		sendJSONResponse(res, 400, err)
  }

  if (req.body.email &&
    req.body.password &&
    req.body.passwordConf) {

    var userData = {
      email: req.body.email,
      password: req.body.password
    }

    User.create(userData, function (error, user) {
      if (error) {
				res.err = error;
        sendJSONResponse(res, 404, {masage: "can`t create new user`"});
      } else {
        req.session.userId = user._id;
        sendJSONResponse(res, 200, user);
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
				console.log(error);
					sendJSONResponse(res, 401, error);
      } else {
         req.session.userId = user._id;
         sendJSONResponse(res, 200, user);
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    sendJSONResponse(res, 404, arr);
  }
}


module.exports.usersReadOne = function(req, res) {
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
}

module.exports.usersUpdateOne = function(req, res) {
	if(!req.params.id) {
		sendJSONResponse(res, 404, {
			"message": "no user"
		});
		return;
	}
	User.findByIdAndUpdate(req.params.id, { $set: {
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
module.exports.usersLogOut = function (req, res, next) {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        sendJSONResponse(res, 404, err);
      } else {
				return res.redirect('/');

      }
    });
  }
};

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
