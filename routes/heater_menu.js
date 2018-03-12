var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        class: 'nav-item active',
        link: '/home',
        label: 'Home'
    }, {
        class: 'nav-item',
        link: '/features',
        label: 'Features'
    }, {
        class: 'nav-item',
        link: '/templates',
        label: 'Templates'
    }, {
        class: 'nav-item',
        link: '/support',
        label: 'Support'
    }, {
        class: 'nav-item',
        link: '/sign_up',
        label: 'Sign up'
    }]);
});

module.exports = router;