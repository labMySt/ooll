const jwt = require('jsonwebtoken');


function verifyToken(req, done, next) {
  jwt.verify(req.token,'SICRET_KEY', function(err, done){
    if(err){
      res.status(500).send();
    }
    else {
      next();
    }
  });
}

module.exports = verifyToken;
