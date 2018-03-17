var express = require("express");
var router = express.Router();
var ctrlUsers = require("../controllers/users");

router.post('/users', ctrlUsers.usersCreate);
router.get('/users/:id', ctrlUsers.usersReadOne);
router.put('/users/:id', ctrlUsers.usersUpdateOne);
router.delete('/users/:id', ctrlUsers.usersDeleteOne);

module.exports = router;
