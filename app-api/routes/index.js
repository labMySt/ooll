var express = require("express");
var router = express.Router();
var ctrlUsers = require("../controllers/users");

router.post('/users', ctrlUsers.usersCreate);
router.get('/users/:id', ctrlUsers.usersReadOne);
router.put('/users/:id', ctrlUsers.usersUpdateOne);
router.delete('/users/:id', ctrlUsers.usersDeleteOne);
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = router;
