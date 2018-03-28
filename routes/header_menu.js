var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        class: 'nav-item col-lg-3',
        link: '/templates',
        label: 'Шаблони'
    }, {
        class: 'nav-item col-lg-3',
        link: '/contacts',
        label: 'Контакти'
    }, {
        class: 'nav-item col-lg-3',
        link: '/help',
        label: 'Допомога'
    }]);
});

module.exports = router;
