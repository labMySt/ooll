var express = require("express");
var router = express.Router();
var ctrlUsers = require("../controllers/users");
var ensureToken = require("../auth/ensureToken");
var verifyToken = require("../auth/verifyToken");

router.post('/users', ctrlUsers.usersCreate);
router.get('/users/:id', ensureToken, verifyToken, ctrlUsers.usersReadOne);
router.put('/users/:id', ctrlUsers.usersUpdateOne);
router.delete('/users/:id', ctrlUsers.usersDeleteOne);

module.exports = router;
