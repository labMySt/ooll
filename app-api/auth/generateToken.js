const jwt = require('jsonwebtoken');

function generateToken(user) {
  var token = jwt.sign(user,'SICRET_KEY',{
    expiresIn: 4000
    });
    return token;
}

module.exports = generateToken;
