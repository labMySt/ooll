var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        link: '/home',
        label: 'Home'
    }, {
        link: '/features',
        label: 'Features'
    }, {
        link: '/templates',
        label: 'Templates'
    }, {
        link: '/support',
        label: 'Support'
    }, {
        link: '/sign_up',
        label: 'Sign up'
    }]);
});

module.exports = router;