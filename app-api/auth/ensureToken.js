const jwt = require('jsonwebtoken');

function ensureToken(req, res, next){
  const BearerHeader = req.headers["authorization"];
  if(typeof BearerHeader !== "underfined"){
    const bearer = BearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }
  else{
    res.sendStatus(403);
  }
}

module.exports = ensureToken;
